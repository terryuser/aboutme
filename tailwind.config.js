/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scale: {
        105: "1.05",
        110: "1.1",
        115: "1.15",
      },
      zIndex: {
        1: "1",
      },
      padding: {
        10: "10",
      },
    },
  },
  plugins: [],
};
