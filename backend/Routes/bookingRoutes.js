const express = require('express');
const { createPaymentIntent, verifyPayment, getBookings, getBookingByResource } = require('../Controllers/bookingControllers');
const { handleAuth } = require('../Middleware/authMiddleware');

const router = express.Router();

router.post('/create-intent', handleAuth, createPaymentIntent);
router.post('/verify-payment', handleAuth, verifyPayment);
router.get('/', handleAuth, getBookings);
router.get('/:id', handleAuth, getBookingByResource);

module.exports = router;
