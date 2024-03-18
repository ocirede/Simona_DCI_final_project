/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "#A0523D", // Here add custom colors
      },
      screens: {
        xs: "480px", // Custom extra small screen size
        sm: "640px", // Small screen size
        md: "768px", // Medium screen size
        lg: "1024px", // Large screen size
        xl: "1280px", // Extra large screen size
        xxl: "1563px", // Extra extra large screen size
      },
    },
  },
  plugins: [],
};
