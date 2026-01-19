import { useLocation, Navigate } from 'react-router-dom'
import CheckoutPage from './CheckoutPage'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const CheckoutWrapper = () => {
    const { state } = useLocation();
    if(!state?.clientSecret || !state?.bookingId) {
        return <Navigate to='/resources/' />
    }

    const { clientSecret, bookingId } = state;
    console.log("Checkout Wrapper:", { clientSecret, bookingId });
    if(!clientSecret) return <p>Intializing payment...</p>

    return (
        <Elements stripe={stripePromise} options={{ clientSecret, appearance: { theme: 'stripe' } }}>
            <CheckoutPage bookingId={bookingId} />
        </Elements>
    )    
}

export default CheckoutWrapper;