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
        oldgray3: "#F1F1F1",
        gray1: "#F9F9F9",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
