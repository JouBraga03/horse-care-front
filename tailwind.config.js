/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      flexGrow: {
        2: '2'
      },
      minWidth: {
        480: '480px'
      }
    }
  },
  plugins: []
}
