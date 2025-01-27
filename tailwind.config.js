/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#8967B3",
        "custom-slate": "#FCFCFC",
        "custom-tag": "#DFDFDF",
        "custom-blue": "#0C47EC",
        "custom-placeholder": "#444444",
        "custom-white": "#F7F7F7",
        unknown: "#B4B4B4",
        "placehoder-text": "#818181",
        "around-white": "#EFEFEF",
      },
      fontFamily: {
        lora: ["Lora", "sans-serif"],
        kantumruy: ["Kantumruy Pro", "sans-serif"],
        recolta: ["Recolta", "Lora"],
      },
    },
  },
  plugins: [],
};
