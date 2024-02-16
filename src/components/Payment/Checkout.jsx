'use client'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import PrivateRoute from "../Private/PrivateRoute";


const stripe_Publisher_Key = process.env.STRIPE_PUBLISHER_KEY;
const stripePromise = loadStripe('pk_test_51OFVcNBo072mkvMyzE3Yy64aL8XKErxqpk4SAHsdZn4HVnlRqnWfUG9lO2kmUw9jKnlRZYH5WffSOUmOvbmaOsaa007md3Alqs');

const Checkout = ({planPrice}) => {

    const [clientSecret, setClientSecret] = useState('')

    const router = useRouter();
    const { data: session, status } = useSession();
    // console.log(session)
  
    useEffect(() => {
        axios.post('https://fit-track-server.vercel.app/create-payment-intent', { price: planPrice })
            .then(res => {
                // console.log(res.data)
                setClientSecret(res.data.clientSecret)
            })
    }, []);


    const appearance = {
        theme: 'stripe'
    }
    // console.log(clientSecret)
    return (
        <PrivateRoute>
        <div className="my-24">
            {
                clientSecret &&
                <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
                    <CheckoutForm cSecret={clientSecret} planPrice={planPrice} />
                </Elements>
            }

        </div>
        </PrivateRoute>
    );
};

export default Checkout;