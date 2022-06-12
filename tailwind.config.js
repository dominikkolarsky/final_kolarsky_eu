module.exports = {
  content: ['./*.html',
    "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'body': '',
        'mobile-menu': '#141414',
        'theme': '#1d4ed8',
        'secondary': '#999999',

        'apps': '#ffffff1c'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
  },

  plugins: [
    require('flowbite/plugin')
  ],
}
