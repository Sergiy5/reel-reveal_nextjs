import { redirect } from "next/navigation";
import { stripe } from "@/utils/stripe";
import { SuccessPayment } from "@/app/components/successPayment/SuccessPayment";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const paymentIntentId = (await searchParams).payment_intent;

  if (!paymentIntentId) redirect("/");

  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
  if (!paymentIntent) redirect("/");

  const paymentIntentData = {
    id: paymentIntent.id,
    amount: paymentIntent.amount,
    currency: paymentIntent.currency,
    status: paymentIntent.status,
    // add only other needed fields
  };

  return (
    <div className="page-wrapper">
      <SuccessPayment
        paymentIntentId={paymentIntentId}
        paymentIntent={paymentIntentData}
      />
    </div>
  );
}
