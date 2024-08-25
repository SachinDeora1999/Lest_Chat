/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // content: ["./index.html", "./src/**/*.{js , ts,jsx,tsx}"],
  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],
};

// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// }