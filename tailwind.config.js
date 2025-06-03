/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './out/**/*.html' // required for static export preview
  ],
  theme: {
    extend: {
      colors: {
        'vegas-gold': '#FFD700',
        'vegas-purple': '#6B46C1',
        'vegas-red': '#DC2626',
      }
    },
  },
  plugins: [],
}
