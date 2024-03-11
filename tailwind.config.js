/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blackPrimary: "#161513",
        blackSecondary: "#1C1C22",
        whitePrimary: "#F0F2F5",
        whiteSecondary: "#ffffff",
        imageBackground: "#FF5E69",
        text: "#222222",
      },
    },
  },
  plugins: [],
};
