/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'signup-pattern': "url('./assets/images/BACKGROUND.png')",
        
      }
    },
  },
  plugins: [],
}

