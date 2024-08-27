/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        'global': "url('/aivee_bg.svg')",
        'mobile': "url('/aivee_bg_mobile.svg')",
       })
    },
  },
  plugins: [],
}

