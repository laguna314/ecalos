/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff5ec",
          100: "#ffe6cc",
          200: "#ffd0a3",
          300: "#ffb56d",
          400: "#ff9233",
          500: "#ff7c0a", /* primary orange (tube amp glow) */
          600: "#e06b06",
          700: "#b85707",
          800: "#8f460b",
          900: "#6f390c"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(255,124,10,0.25)"
      }
    }
  },
  plugins: []
};
