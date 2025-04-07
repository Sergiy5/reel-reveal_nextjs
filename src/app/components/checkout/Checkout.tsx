"use client";

import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe, StripePaymentElementOptions } from "@stripe/stripe-js";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const PaymentForm:React.FC<{ amount: number }> = ({ amount })=> {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/success",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: "accordion",
  };

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="flex flex-col p-5 gap-5 max-w-[600px] w-full bg-white rounded-lg"
    >
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className="flex items-center justify-center ml-auto h-11 w-full md:w-40 p-4 text-white rounded-lg bg-black"
      >
        <span id="button-text">
          {isLoading
            ? "Processing..."
            : `Pay now €${(amount / 100).toFixed(2)}`}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <h3 id="payment-message" className="text-red-500" >{message}</h3>}
    </form>
  );
}

export default function CheckoutForm({ clientSecret, amount }: any) {
  const appearance = {
    theme: "stripe",
  } as const;
  return (
    <Elements stripe={stripePromise} options={{ appearance, clientSecret }}>
      <PaymentForm amount={amount} />
    </Elements>
  );
}