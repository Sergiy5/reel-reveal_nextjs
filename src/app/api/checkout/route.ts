import { NextResponse } from "next/server";
import { stripe } from "@/utils/stripe";

export async function POST(req: Request) {
  try {
//     const { amount, currency } = await req.json();

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency,
//             product_data: {
//               name: "Test Product",
//             },
//             unit_amount: amount, // Amount in cents (e.g., 5000 = $50.00)
//           },
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
//       cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
//     });

//     return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
