/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // enable dark mode
  theme: {
    extend: {
      colors: {
        verydarkblue: "hsl(207, 26%, 17%)",
        darkblue: "hsl(209, 23%, 22%)",
      },
    },
  },
  plugins: [],
};
