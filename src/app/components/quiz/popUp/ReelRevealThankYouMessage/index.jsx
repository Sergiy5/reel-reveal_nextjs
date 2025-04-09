import EmailSubscriptionPrompt from "../EmailSubscriptionPrompt";

function ReelRevealThankYouMessage() {
  return (
    <div className="bg-bgColor box-border flex justify-start items-center flex-col gap-12 w-full max-w-[800px] p-14 rounded-2xl">
      <p className="text-3xl font-bold text-center leading-8 text-white">
        Thanks for Trying Reel Reveal!
      </p>
      <p className="text-lg font-light text-left leading-7 text-disabledColor">
        You&apos;ve used all your free quiz attempts during our demo mode for 1
        day. <br />
        We&apos;re excited to bring you more features soon! Join our waiting
        list to stay updated on the launch of our paid plans and unlock
        unlimited quizzes.
      </p>
      <EmailSubscriptionPrompt />
    </div>
  );
}

export default ReelRevealThankYouMessage;
