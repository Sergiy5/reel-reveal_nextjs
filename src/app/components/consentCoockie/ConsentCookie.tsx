"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCookies } from "react-cookie";

export const ConsentCoockie: React.FC = () => {
  const [cookies, setCookie] = useCookies(["user-consent"]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!cookies["user-consent"]) {
      setIsVisible(true);
    }
  }, [cookies]);

  const handleAccept = () => {
    console.log("first")
    setCookie("user-consent", "true", {
      path: "/",
      expires: new Date(Date.now() + 150 * 24 * 60 * 60 * 1000),
    });
    setIsVisible(false);
  };

  const handleDecline = () => {
    setCookie("user-consent", "false", {
      path: "/",
      expires: new Date(Date.now() + 150 * 24 * 60 * 60 * 1000),
    });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 w-full bg-bgSelectItemHover text-textColor py-4 px-6 flex flex-col md:flex-row justify-between items-center z-50">
      <div className="mb-4 md:mb-0">
        This website uses cookies to enhance the user experience.{" "}
        <Link href="/privacy-policy" target="_blank" className="link">
          Learn more
        </Link>
      </div>
      <div className="flex gap-4">
        <button
          className="bg-accentClicked px-4 py-2 rounded-md hover:shadow-hoverShadow  transition"
          onClick={handleAccept}
        >
          I accept
        </button>
        <button
          type="button"
          className="border border-disabledColor px-4 py-2 rounded-md transition"
          onClick={handleDecline}
        >
          I decline
        </button>
      </div>
    </div>
  );
};

// "use client";

// import Link from "next/link";
// import CookieConsent from "react-cookie-consent";

// export const ConsentCockie: React.FC = () => {

//   return (
//     <>
//       <CookieConsent
//         location="bottom"
//         buttonText="I accept"
//         cookieName="user-consent"
//         style={{ background: "#272C42", color: "#fff" }}
//         enableDeclineButton
//         declineButtonText="I decline"
//         declineButtonStyle={{
//           color: "#fff",
//           fontSize: "16px",
//           border: "1px solid #fff",
//           background: "none",
//           opacity: "0.5",
//           borderRadius: "5px",
//           padding: "8px 24px",
//         }}
//         onDecline={() => {
//           alert("nay!");
//         }}
//         buttonStyle={{
//           color: "#fff",
//           fontSize: "16px",
//           background: "rgb(32, 201, 188, 0.5)",
//           borderRadius: "5px",
//           padding: "8px 24px",
//         }}
//         expires={150}
//       >
//         This website uses cookies to enhance the user experience.{" "}
//         <Link
//           href="/privacy-policy"
//           target="_blank"
//           className="text-accentColor hover:text-clickedColor"
//         >
//           Learn more
//         </Link>
//       </CookieConsent>
//     </>
//   );
// };
