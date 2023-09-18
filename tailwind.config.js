/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#00056A',
        'primary': '#757AE9',
        'positive': '#6CCB4B',
        'negative': '#CB4B4B',
        'warning': '#FBC61E',
        'label': '#7A7D9C',
        'btn': '#6E58F1',
        'side-nav': '#282B42',
        'pink': '#BF51C1',
        'sea': '#51C1C1',
        'icon-g': ['linear-gradient(0deg, #E5E7F9, #E5E7F9)',
        'linear-gradient(0deg, #FAFAFF, #FAFAFF)']
      },
      boxShadow: {
        'nav': '0px 2px 4px 0px rgba(141, 143, 169, 0.1)',
        'login-card': '0px 2px 4px 0px rgba(141, 143, 169, 0.25)'
      }
    },
    fontFamily: {
      'dm-sans': ['DM Sans']
    }
  },
  plugins: [],
}
