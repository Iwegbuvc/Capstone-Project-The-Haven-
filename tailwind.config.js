/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'signup-pattern': "url('/src/Assets/images/background.png')",
      },
    },
  },
  plugins: [],
}

