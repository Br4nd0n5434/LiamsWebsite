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
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          ".hero-header": {
            "color": "black"
          },
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          ".hero-header": {
            "color": "white"
          },
        },
      },
    ],
  },
}

