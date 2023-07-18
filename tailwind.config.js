/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.html"],
  theme: {
    screens: {
      md: "768px",
      lg: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
