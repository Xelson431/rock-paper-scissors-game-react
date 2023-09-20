import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  }, daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [daisyui],
}

