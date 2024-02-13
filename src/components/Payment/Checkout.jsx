import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHER_KEY);

const Checkout = () => {

    const options = {
        clientSecret:{}
    }

    return (
        <Elements stripe={stripePromise} options={options}>
         <CheckoutForm/>
        </Elements>
    );
};

export default Checkout;