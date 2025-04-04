// import CheckoutForm from "@/app/components/checkout/Checkout";
// import { stripe } from "@/utils/stripe";

// export default async function IndexPage() {
//   const calculateOrderAmount = (items: any) => {
//     // Replace this constant with a calculation of the order's amount
//     // Calculate the order total on the server to prevent
//     // people from directly manipulating the amount on the client
//     return 50;
//   };

//   // Create PaymentIntent as soon as the page loads
//   // { client_secret: clientSecret }
//   const response = await stripe.paymentIntents.create({
//     amount: calculateOrderAmount([{ id: "xl-tshirt" }]),
//     currency: "eur",
  
//   });
//   const clientSecret = response.client_secret;
//   // console.log("RESPINSE===============>>>>>>>>>>>>>>>>>>>>>>", response);
//   return (
//     <div id="checkout" className="page-wrapper">
//       <CheckoutForm clientSecret={clientSecret} amount={50} />
//     </div>
//   );
// }
