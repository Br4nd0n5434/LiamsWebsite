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
    "./src/components/HeroTwo.jsx",
    "./src/components/NavbarTwo.jsx",
    "./src/components/CTA.jsx",
    "./src/components/SocialPosts.jsx",
    "./src/components/Card.jsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo-gradient': 'linear-gradient(to right, #0F8DBF, #36BBD9)',
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/aspect-ratio'),
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
