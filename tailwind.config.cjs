/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(-10deg);" },
          "100%": { transform: "rotate(35deg)" },
        },
      },
      animation: {
        wave: "wiggle 1s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};