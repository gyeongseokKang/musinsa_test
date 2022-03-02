module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#0078FF",
        oldgray6: "#aaaaaa",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
