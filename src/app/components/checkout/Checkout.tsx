"use client";

import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe, StripePaymentElementOptions } from "@stripe/stripe-js";
import { Loader } from "../ui/Loader";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

const PaymentForm = ({ amount, clientSecret }: {clientSecret: string, amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

     const handleCheckout = async () => {
       setIsLoading(true);
       const res = await fetch("/api/checkout", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ amount: 5000, currency: "usd" }), // $50.00
       });

       const { sessionId } = await res.json();
       const stripe = await stripePromise;
       await stripe?.redirectToCheckout({ sessionId });
       setIsLoading(false);
     };

    // if (!stripe || !elements) {
    //   // Stripe.js hasn't yet loaded.
    //   // Make sure to disable form submission until Stripe.js has loaded.
    //   return;
    // }

    // setIsLoading(true);

    // const { error } = await stripe.confirmPayment({
    //   elements,
    //   clientSecret,
    //   confirmParams: {
    //     // Make sure to change this to your payment completion page
    //     return_url: "http://localhost:3000/success",
    //   },
    // });

    // // This point will only be reached if there is an immediate error when
    // // confirming the payment. Otherwise, your customer will be redirected to
    // // your `return_url`. For some payment methods like iDEAL, your customer will
    // // be redirected to an intermediate site first to authorize the payment, then
    // // redirected to the `return_url`.
    // if (error.type === "card_error" || error.type === "validation_error") {
    //   setMessage(error.message);
    // } else {
    //   setMessage("An unexpected error occurred.");
    // }

    // setIsLoading(false);
  };

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: "accordion",
  };

  if (!stripe || !elements) return <Loader />
  
  return (
    <form
      id="payment-form"
      className="flex flex-col justify-center w-full rounded-md bg-white p-4"
      onSubmit={handleSubmit}
    >
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className="flex justify-center items-center mx-auto md:mx-0 md:ml-auto w-full max-w-40 rounded-md h-12 bg-black "
      >
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
      
    </form>
  );
}

export default function CheckoutForm({ clientSecret }: any) {
const appearance = {
  theme: "stripe",
} as const;
  return (
    <Elements stripe={stripePromise} options={{ appearance, clientSecret }}>
      <PaymentForm amount={400} clientSecret={clientSecret} />
    </Elements>
  );
}
