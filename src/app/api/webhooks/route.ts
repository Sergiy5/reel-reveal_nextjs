import { NextRequest, NextResponse } from "next/server";
// import { headers } from "next/headers";
// import { stripe } from "@/utils/stripe";

export async function POST(req: NextRequest) {

//   const sig = (await headers()).get("stripe-signature");

//   if (!sig) {
//     return NextResponse.json(
//       { message: "Missing Stripe Signature" },
//       { status: 400 }
//     );
//   }

  let event;
  try {
    // event = stripe.webhooks.constructEvent(
    //   await req.text(),
    //   sig,
    //   process.env.STRIPE_WEBHOOK_SECRET as string
    // );
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ message: "Webhook Error" }, { status: 400 });
  }

//   if (event.type === "payment_intent.succeeded") {
//     const paymentIntent = event.data.object;
//     console.log(`Payment successful! ID: ${paymentIntent.id}`);
//   }

  return NextResponse.json({ message: "Webhook received" }, { status: 200 });
}
