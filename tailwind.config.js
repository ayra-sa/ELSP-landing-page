/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem"
      },
      colors: {
        primary: "#FF7116",
      },
      backgroundImage: {
        "hero": "url('/src/assets/images/hero.png')",
        "ekosistem": "url('/src/assets/images/sertifikasi-bg.png')",
        "footer": "url('/src/assets/images/footer-bg.png')",
        "footer-mobile": "url('/src/assets/images/footer-bg-mobile.png')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"]
      }
    },
  },
  plugins: [],
}

