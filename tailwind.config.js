/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },
      colors: {
        brand: {
          light: "#d2cbff",
          dark: "#242f78",
        },
      },
      boxShadow: {
        normal: "0.5rem 0.5rem 0 rgb(0, 0, 0)",
        hover: "0.75rem 0.75rem 0 rgb(0, 0, 0)",
      },
    },
  },
  plugins: [],
};
