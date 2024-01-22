/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/*/.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#EB3E48',
      'magenta':'#208C81',
    }
    },
  },
  plugins: [[require('flowbite/plugin')]],
}

