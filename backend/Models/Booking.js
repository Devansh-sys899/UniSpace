const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    resource: {
        type: String,
        ref: 'Resource'
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Available','InProgress', 'Paid', 'Failed', 'Cancelled'],
        default: 'Available'
    },
    stripePaymentIntentId: {
        type: String,
        sparse: true,
        unique: true
    },
    stripeClientSecret: {
        type: String,
        sparse: true,
        unique: true
    },
}, { timestamps: true })

module.exports = new mongoose.model('Booking', bookingSchema);