/**\\\ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./index.html"
  ],
  theme: {
    extend: {
      height: {
        '120': '32rem',
         '110' : '30rem',
         '100' : '28rem'
      },
    },
  },
  plugins: [],
}

