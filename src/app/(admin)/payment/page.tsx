import CheckoutForm from "@/app/components/checkout/Checkout";
import { stripe } from "@/utils/stripe";

export default async function IndexPage() {
  const calculateOrderAmount = (items: any) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 500;
  };

  // Create PaymentIntent as soon as the page loads
  const { client_secret: clientSecret, amount } = await stripe.paymentIntents.create({
    amount: calculateOrderAmount([{ id: "xl-tshirt" }]),
    currency: "eur",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  // console.log("RESPINSE===============>>>>>>>>>>>>>>>>>>>>>>", response);
  return (
    <div id="checkout" className="page-wrapper">
      <CheckoutForm clientSecret={clientSecret} amount={amount} />
    </div>
  );
}
