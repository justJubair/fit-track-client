import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import './payment.css';
import { useSession } from 'next-auth/react';
const CheckoutForm = ({ cSecret, planPrice }) => {

    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [transactionId, setTrnsactionId] = useState('')
    const [plan, setPlan] = useState(null);
    //user session
    const { data: session } = useSession();
  


    useEffect(() => {
        // Set plan name based on planPrice
        if (planPrice == 16) {
            setPlan('Silver');
        } else if (planPrice == 33) {
            setPlan('Gold');
        } else if (planPrice == 50) {
            setPlan('Diamond');
        } else {
            setPlan('Unknown');
        }
    }, [planPrice]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return
        }
        setIsLoading(true);

        stripe.confirmPayment({
            elements,
            redirect: 'if_required',
            confirmParams: { return_url: window.location.href },
        })
            .then(res => {
                setIsLoading(false);
                if (res.error) {
                    console.error(res.error);
                    setMessage(res.error.message);
                } else {
                    setMessage(res.paymentIntent.status);
                   
                    if (res.paymentIntent.status === 'succeeded') {
                        Notify.success('Payment complete!')
                        setTrnsactionId(res.paymentIntent.id);

                        const paymentInfo = {
                            name: session.user.name,
                            email: session.user.email,
                            transactionId: res.paymentIntent.id,
                            plan: plan
                        }

                        
                    }
                }
            });
    }


    const paymentElementOptions = {
        layout: "tabs"
    }

    return (
        <form id="payment-form" onSubmit={handleSubmit}>

            <PaymentElement id="payment-element" options={paymentElementOptions} />
            <button disabled={isLoading || !stripe || !elements} id="submit">
                <span id="button-text">
                    {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
        </form>
    );
};

export default CheckoutForm;