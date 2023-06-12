import React from 'react';
import Checkoutform from './Checkoutform';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../hooks/useCart';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    const { cartclasses } = useCart()
    const total = cartclasses.reduce((sum, item) => item.price + sum, 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h1 className='text-center'>Payment</h1>
            <Elements stripe={stripePromise}>
                <Checkoutform price={price}></Checkoutform>
            </Elements>

        </div>
    );
};

export default Payment;