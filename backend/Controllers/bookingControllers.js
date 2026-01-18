const Booking = require('../Models/Booking');
const Stripe = require('stripe');
const dotenv = require('dotenv');
const Resource = require('../Models/Resource');

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const calculatePriceAndDuration = (start, end, rate) => {
    const ratePerHr = rate || 500;
    const durationMs = (new Date(end).getTime() - new Date(start).getTime());
    const totalHours = durationMs / (1000 * 60 * 60);
    const price = totalHours * ratePerHr;
    const finalPrice = price * 100;
    return {
        totalHours,
        finalPrice
    };
}


const checkAvailabiltity = async (resource, start, end) => {
    console.log('--- Availability Check Parameters ---');
    console.log(`Resource ID received: ${resource}`);
    console.log(`Requested Slot START: ${start} (Type: ${typeof start})`);
    console.log(`Requested Slot END:   ${end} (Type: ${typeof end})`);
    const overlappedBookings = await Booking.find({
        resource: resource,
        status: { $in: ['Paid', 'InProgress']},
            startTime: { $lt: end },
            endTime: { $gt: start }
    })
    console.log('Mongoose Query:', JSON.stringify(overlappedBookings));
    const conflictCount = overlappedBookings.length;

    return conflictCount === 0;
}

const createPaymentIntent = async (req,res) => {
    try {
        const { resource, startTime, endTime } = req.body;
        const userId = req.user.id;
        const resourceDetails = await Resource.findById(resource);
        console.log('resourceDetails:', resourceDetails);
        if(!resourceDetails) {
            return res.status(404).json({
                success: false,
                message: 'Resource not found'
            })
        }
        const isAvailable = await checkAvailabiltity(resource, startTime, endTime);
        if(!isAvailable) {
            return res.status(409).json({
                status: false,
                message: 'The resource is not available'
            })
        }

        const { finalPrice } = calculatePriceAndDuration(startTime, endTime, resourceDetails.hourlyRate);
        const finalAmount = finalPrice / 100;

        const newBooking = new Booking({
            userId,
            resource,
            startTime,
            endTime,
            amount: finalAmount,
            status: 'InProgress'
        });
    
        const paymentIntent = await stripe.paymentIntents.create({
            amount: finalPrice,
            currency: 'inr',
            automatic_payment_methods: { enabled : true },
            metadata: {
                bookingId: toString(newBooking._id),
                userId: userId
            }
        });
    
        newBooking.stripePaymentIntentId = paymentIntent.id;
        newBooking.stripeClientSecret = paymentIntent.client_secret;
        await newBooking.save();
    
        return res.status(201).json({
            success: true,
            message: 'Stripe payment intent has been created successfully',
            paymentIntent: paymentIntent.id,
            bookingId: newBooking._id,
            clientSecret: newBooking.stripeClientSecret
        });

        } catch (error) {
            console.log('Error during stripe payment intent creation: ', error);
            return res.status(500).json({
                success: false,
                message: error.message
            });
    }
}

const verifyPayment = async (req,res) => {
    try {

        const { bookingId, paymentIntent } = req.body;
        
        if(!bookingId || !paymentIntent) { 
            return res.status(400).json({
                success: false,
                message: 'Please provide all credentials'
            })
        }
        
        const booking = await Booking.findById(bookingId);
        
        if(!booking || booking.stripePaymentIntentId !== paymentIntent) {
            return res.status(400).json({
                success: false,
                message: 'Missing or invalid booking or payment intent'
            })
        }
        
        const intent = await stripe.paymentIntents.retrieve(paymentIntent);
        
        if(intent.status === 'succeeded') {
            booking.status = 'Paid';
            await booking.save();
            return res.status(200).json({
                success: true,
                message: 'Booking created successfully'
            });
        } else {
            return res.status(400).json({
                success: false,
                message: `Payment is not successful, current status is ${booking.status}`
            });
        }
    } catch (error) {
        console.log('Error during verification of payment intent: ', error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const getBookingByResource = async (req,res) => {
    try {
        const { id } = req.params;
        const userId = req.user._id;
    
        const bookings = await Booking.find({ resource: id, user: userId });
        if(!bookings) {
            return res.status(404).json({
                success: false,
                message: 'Bookings not round'
            })    
        }
    
        return res.status(200).json({
                success: true,
                bookings: bookings
        });
    } catch (error) {
        console.log('Get bookings error:', error);
        return res.status(500).json({
                success: false,
                message: 'Unable to fetch bookings'
        });
    }
}

const getMyBookings = async (req,res) => {
    try {
        const userId = req.user._id;
        
        const bookings = await Booking.find({ user: userId });
        if(!bookings) {
            return res.status(404).json({
                success: false,
                message: 'Bookings not found'
            })
        }
    
        return res.status(200).json({
            success: false,
            bookings: bookings
        })
    } catch (error) {
        console.log('Get bookings error:', error);
        return res.status(500).json({
                success: false,
                message: 'Unable to fetch bookings'
        });
    }
}

const getAllBookings = async (req,res) => {
    try {
        const bookings = await Booking.find({});
        if(!bookings) {
            return res.status(404).json({
                success: false,
                message: 'Bookings not found'
            })
        }
    
        return res.status(200).json({
            success: false,
            bookings: bookings
        })
    } catch (error) {
        console.log('Get all bookings error:', error);
        return res.status(500).json({
                success: false,
                message: 'Unable to fetch bookings'
        });
    }
}


module.exports = { createPaymentIntent, verifyPayment, getBookingByResource, getMyBookings, getAllBookings }; 