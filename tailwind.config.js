import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow Semi Condensed"],
      },
    },
  },
};
