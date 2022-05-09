module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#996dff",
          500: "#8257e2",
        },
      },

      borderRadius: {
        md: "4px",
      },

      fontFamily: {
        "poppins": ["Poppins", "sans-serif"]
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
}