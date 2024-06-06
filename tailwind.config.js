/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/main.jsx",
    "./src/App.jsx",
    "./src/components/Message.jsx",
    "./src/components/Navbar.jsx",
    "./src/components/Hero.jsx",
    "./src/components/ThemeController.jsx",
    "./src/components/Footer.jsx",
    "./src/components/HeaderCard.jsx",
    "./src/components/Gallery.jsx",
    "./src/components/Contact.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: {
      light: {
        // Customize light theme here
        '.wave-bg': {
          background: 'url("/src/assets/wave-light.svg")',
        },
      },
      dark: {
        // Customize dark theme here
        '.wave-bg': {
          background: 'url("/src/assets/wave-dark.svg")',
        },
        '.hero-colour': {
          background: '#020709'
        }
      },
    },
  },
}
