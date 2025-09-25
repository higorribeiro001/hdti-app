/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--md-sys-color-primary)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
