/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    {
      pattern: /^grid-cols-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    {
      pattern: /^gap-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    {
      pattern: /^text-/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        permanent: ['Permanent Maker', 'cursive'],
        foldit: ['Foldit', 'cursive'],
      },
      colors: {
        primary: '#201f27',
        secondary: '#2e3038',
        link: '#f72585',
      },
    },
  },
  plugins: [],
}
