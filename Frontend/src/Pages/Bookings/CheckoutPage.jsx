import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../Services/api';
import { toast } from 'react-toastify';

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

        const { paymentIntent, error: stripeError } = await stripe.confirmPayment({
            elements,
            redirect: 'if_required'
        });


        if (stripeError) {
            setError(stripeError.message);
            setLoading(false);
        }

        await api.post('/api/v1/booking/verify-payment', { bookingId, paymentIntent: paymentIntent.id });
        navigate(`/user-dashboard`);
        toast.success('Booking created successfully');
    };

    return (
        <div className="w-full min-h-screen bg-gray-100/50 flex flex-col items-center gap-4 px-32 py-10">
            <h1 className="text-3xl font-medium font-surface_dark">Checkout Page</h1>
            <p className="text-base font-normal font-surface_dark">Please enter your card details to proceed with booking</p>
            <form onSubmit={handlePayment} className='w-full'>
                <PaymentElement />

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <button className='mx-auto w-[50%] mt-4 justify-center py-2 flex items-center rounded-xl bg-gray-900 text-white' disabled={!stripe || loading}>
                    {loading ? 'Processing…' : 'Pay now'}
                </button>
            </form>
        </div>
    );
};

export default CheckoutPage;