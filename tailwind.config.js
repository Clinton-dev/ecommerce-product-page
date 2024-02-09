/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-800": "hsl(26, 100%, 55%)",
        "primary-100": "hsl(25, 100%, 94%)",
        "neutral-800": "hsl(220, 13%, 13%)",
        "neutral-700": "hsl(219, 9%, 45%)",
        "neutral-600": "hsl(220, 14%, 75%)",
        "neutral-500": "hsl(223, 64%, 98%)",
        "neutral-400": "hsl(0, 0%, 0%)",
        "neutral-100": "hsl(0, 0%, 100%)",
      },
    },
    fontFamily: {
      sans: ["Kumbh Sans", "sans-serif"],
    },
    fontSize: {
      base: ["16px", "1.5"],
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
