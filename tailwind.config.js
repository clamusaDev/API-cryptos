/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:(theme)=>({
        image01: "url('https://www.analyticsinsight.net/wp-content/uploads/2022/04/The-Most-Popular-Cryptocurrency-to-buy-this-Year.jpg')",
      })
    },
  },
  plugins: [],
}
