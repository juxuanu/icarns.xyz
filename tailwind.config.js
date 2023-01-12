/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: { slab: ["var(--font-zilla-slab)"] },
    extend: {
      colors: {},
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
