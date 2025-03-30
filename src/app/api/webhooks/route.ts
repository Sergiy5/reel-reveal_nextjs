
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
// import { stripe } from "@/utils/stripe";
import type Stripe from "stripe";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY!);


export const POST = async (req: NextRequest) => {
    console.log("+========================================================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
try {
    const amount = 5;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        automatic_method_methods: {enable: true},
    })

    return NextResponse.json({clientSecret: paymentIntent.client_secret})
} catch (error) {
    console.log("ERROR IN WEBHOOK STRIPE", error)
}


    //   let event: Stripe.Event;

//   try {
//     const signature = (await headers()).get("stripe-signature") || "";
//     const requestBody = await req.text();

//     event = stripe.webhooks.constructEvent(
//       requestBody,
//       signature,
//       process.env.STRIPE_SECRET_KEY!
//     );
//   } catch (err: unknown) {
//       console.error("Webhook error+++++++++++++++++++++++++++++++++++++++:", err);
//     const errorMessage = err instanceof Error ? err.message : "Unknown error";
//     return NextResponse.json(
//       { message: `Webhook Error: ${errorMessage}` },
//       { status: 400 }
//     );
//   }

//   const permittedEvents: Stripe.Event.Type[] = ["payment_intent.succeeded"];

//   if (permittedEvents.includes(event.type)) {
//     try {
//       switch (event.type) {
//         case "payment_intent.succeeded":
//           const data = event.data.object as Stripe.PaymentIntent;
//           console.log(`Payment status: ${data.status}`);
//           break;
//         default:
//           throw new Error(`Unhandled event: ${event.type}`);
//       }
//     } catch (error: unknown) {
//       console.error("Webhook handler failed=================================>>>>>>>>>>>>>>>>>>>>>>:", error);
//       return NextResponse.json(
//         { message: "Webhook handler failed" },
//         { status: 500 }
//       );
//     }
//   }

//   // Return a response to acknowledge receipt of the event.
//   return NextResponse.json({ message: "Received" }, { status: 200 });
}

// import { NextResponse } from "next/server";
// import { headers } from "next/headers";

// import { stripe } from "@/utils/stripe";

// export async function POST(req: Request) {
//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(
//       await req.text(),
//       (await headers()).get("stripe-signature"),
//       process.env.STRIPE_WEBHOOK_SECRET
//     );
//   } catch (err: Error | any) {
//     const errorMessage = err?.message;
//     // On error, log and return the error message.
//     if (err) console.log(err);
//     console.log(`Error message: ${errorMessage}`);
//     return NextResponse.json(
//       { message: `Webhook Error: ${errorMessage}` },
//       { status: 400 }
//     );
//   }

//   const permittedEvents = ["payment_intent.succeeded"];

//   if (permittedEvents.includes(event.type)) {
//     let data;

//     try {
//       switch (event.type) {
//         case "payment_intent.succeeded":
//           data = event.data.object;
//           console.log(`Payment status: ${data.status}`);
//           break;
//         default:
//           throw new Error(`Unhandled event: ${event.type}`);
//       }
//     } catch (error) {
//       console.log(error);
//       return NextResponse.json(
//         { message: "Webhook handler failed" },
//         { status: 500 }
//       );
//     }
//   }
//   // Return a response to acknowledge receipt of the event.
//   return NextResponse.json({ message: "Received" }, { status: 200 });
// }
