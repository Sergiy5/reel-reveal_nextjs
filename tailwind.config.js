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
    },
  },
  plugins: [],
};
