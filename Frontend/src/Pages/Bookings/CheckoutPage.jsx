import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../Services/api';

const CheckoutPage = ({ bookingId }) => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handlePayment = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        setLoading(true);

        const { paymentIntent, error:stripeError } = await stripe.confirmPayment({
            elements,
            redirect: 'if_required'
    });
    
    
    if (stripeError) {
        setError(stripeError.message);
        setLoading(false);
    }

    await api.post('/api/v1/booking/verify-payment', { bookingId, paymentIntent: paymentIntent.id });
    navigate(`/payment-success`);
};

return (
    <form onSubmit={handlePayment}>
        <PaymentElement />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button disabled={!stripe || loading}>
            {loading ? 'Processing…' : 'Pay now'}
        </button>
    </form>
);
};

export default CheckoutPage;