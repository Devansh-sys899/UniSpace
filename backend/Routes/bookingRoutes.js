const express = require('express');
const { createPaymentIntent, verifyPayment, getMyBookings, getBookingByResource, getAllBookings } = require('../Controllers/bookingControllers');
const { handleAuth } = require('../Middleware/authMiddleware');

const router = express.Router();

router.post('/create-intent', handleAuth, createPaymentIntent);
router.post('/verify-payment', handleAuth, verifyPayment);
router.get('/my', handleAuth, getMyBookings);
router.get('/', handleAuth, getAllBookings);
router.get('/:id', handleAuth, getBookingByResource);

module.exports = router;
