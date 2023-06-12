import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, {useContext, useEffect, useState } from 'react';
import useAxiosProtected from '../../../hooks/useAxiosProtected';
import { AuthContext } from '../../../Provider/AuthProvider';

const Checkoutform = ({ price }) => {
    const stripe = useStripe()
    const elements = useElements()
    const {user} = useContext(AuthContext)
    const [axiosProtect] = useAxiosProtected()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("")

    useEffect(() => {
        console.log(price)
        axiosProtect.post('/create-payment-intent', { price })
            .then(res => {
                // console.log(res.data.clientSecret)
                console.log(res)
                setClientSecret(res.clientSecret)
            })
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setCardError(error.message)

        }
        else {
            console.log('payment method', paymentMethod)
            setCardError('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        email: user?.dispayName || 'anonymous',
                    },
                },
            },
        );
        if(confirmError){
            console.log(confirmError)
        }
        console.log(paymentIntent)
    }
    return (
        <>
            <form className='w-2/3 m-16' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='text-center mt-8'>
                    <button className='btn btn-success w-fit' type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                </div>
            </form>
            {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
        </>
    );
};

export default Checkoutform;