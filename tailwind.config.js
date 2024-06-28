/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bgLightColor: "#20263D",
        bgColor: "#12132C",
        accentColor: "#20E8DA",
        clickedColor: "#20C9BC",
        textColor: "#FFFFFF",
        inputColor: "#20243b",
        disabledColor: "rgb(255,255,255, 0.4)",
        disabledBgColor: "rgb(0,0,0, 0.3)",
        enableBgColor: "rgb(0,0,0, 0.6)",
        hoverBgColor: "rgb(12, 52, 58, 0.8)",
        accentClicked: "rgb(32, 201, 188, 0.5)",
      },
      blur: {
        header: "119.5px",
        hero: "97px",
        footer: "97px",
      },
      mixBlendMode: {
        normal: "normal",
      },
      boxShadow: {
        0: "0px 0px 0px rgba(0, 0, 0, 0)",
        hoverShadow: "1px 2px 24px 0 rgba(32, 232, 218, 0.3)",
      },
      backgroundImage: {
        borderIcon: "url('/icons/border.svg')",
        cardGradient: `linear-gradient(
      180deg,
      rgba(15, 12, 32, 1) 0%,
      rgba(8, 7, 18, 0.46) 24.88%,
      rgba(7, 6, 14, 0.3) 33.67%,
      rgba(4, 3, 8, 0.07) 41.12%,
      rgba(0, 9, 0, 0) 51.67%,
      rgba(3, 3, 6, 0.02) 60.19%,
      rgba(6, 5, 12, 0.3) 68.67%,
      rgba(8, 7, 18, 0.46) 78.32%,
      rgba(15, 12, 32, 1) 100%
    )`,
        quizBtnGradient: `radial-gradient(
     ellipse closest-side at center,
     rgb(32, 43, 61),
     rgb(18, 19, 44) 160%
   )`,
      },
    },
  },
  plugins: [],
};
