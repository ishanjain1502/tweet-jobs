module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "twitter": "#1D9bF0"
      },
      backgroundColor: {
        "black-transparent": "rgba(0,0,0,0.4)"
      }
    },
  },
  plugins: [],
}