"use client";

import Link from "next/link";
import CookieConsent from "react-cookie-consent";

export const ConsentCockie: React.FC = () => {
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="I accept"
        cookieName="user-consent"
        style={{ background: "#272C42", color: "#fff" }}
        enableDeclineButton
        declineButtonText="I decline"
        declineButtonStyle={{
          color: "#fff",
          fontSize: "16px",
          border: "1px solid #fff",
          background: "none",
          opacity: "0.5",
          borderRadius: "5px",
          padding: "8px 24px",
        }}
        onDecline={() => {
          alert("nay!");
        }}
        buttonStyle={{
          color: "#fff",
          fontSize: "16px",
          background: "rgb(32, 201, 188, 0.5)",
          borderRadius: "5px",
          padding: "8px 24px",
        }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        <Link
          href="/privacy-policy"
          target="_blank"
          className="text-accentColor hover:text-clickedColor"
        >
          Learn more
        </Link>
      </CookieConsent>
    </>
  );
};
// bgSelectItemHover;
// scrolBarTrackColor;