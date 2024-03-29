/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'signup-pattern': "url('/src/Assets/images/BACKGROUND.png')",
      },
    },
  },
  plugins: [],
}

