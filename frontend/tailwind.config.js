/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-img": "url('/src/assets/images/cow.png')",
      },
    },
  },
  plugins: [],
};
