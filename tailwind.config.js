/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rishi: {
          white: "#FFFFFF",
          black: "#5A5A5A",
          orange: "#F18650",
          green: "#74B589",
          gray: "#EFEFEF",
        },
      },
    },
  },
  plugins: [],
};
