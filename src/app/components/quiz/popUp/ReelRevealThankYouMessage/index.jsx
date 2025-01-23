import EmailSubscriptionPrompt from "../EmailSubscriptionPrompt";

function ReelRevealThankYouMessage() {
  return (
    <div className="bg-[#12132c] box-border flex justify-start items-center flex-col gap-12 w-[800px] p-[54px] rounded-[18px]">
      <p className="[font-family:Urbanist,sans-serif] text-3xl font-bold text-center leading-8 text-[white] self-stretch grow-0 shrink-0 basis-auto m-0 p-0">Thanks for Trying Reel Reveal!</p>
      <p className="[font-family:Urbanist,sans-serif] text-lg font-light text-left leading-[27px] text-[rgba(255,255,255,0.80)] self-stretch grow-0 shrink-0 basis-auto m-0 p-0">
        You&apos;ve used all your free quiz attempts during our demo mode for 1 day. <br />
        We&apos;re excited to bring you more features soon! Join our waiting list to stay updated on the launch of our paid plans and unlock unlimited quizzes.
      </p>
      <EmailSubscriptionPrompt />
    </div>
  );
}

export default ReelRevealThankYouMessage;
