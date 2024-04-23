/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        retroRed: "#DF3C5F",
        retroBlue: "#6F9BD1",
        lightBlue: "#8CAFDA",
        cobaltBlue: "#224193",
        borderBlue: "#597CA7",
      },
      screens: {
        xxs: "390px",   // extra extra small screen
        xs: "480px", // Custom extra small screen size
        sm: "640px", // Small screen size
        md: "768px", // Medium screen size
        lg: "1024px", // Large screen size
        xl: "1280px", // Extra large screen size
        xxl: "1563px", // Extra extra large screen size
      },
      fontFamily: {
        custom: ["Magic Retro", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
