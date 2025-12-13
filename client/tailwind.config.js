/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        "home-heading-large": ["48px", { lineHeight: "56px" }],
        "home-heading-small": ["28px", { lineHeight: "34px" }],
        "course-details-heading-large": ["36px", { lineHeight: "44px" }],
        "course-details-heading-small": ["26px", { lineHeight: "36px" }],
        "default": ["15px", { lineHeight: "21px" }]
      }
    }
  },
  plugins: []
}