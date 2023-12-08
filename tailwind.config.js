/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gloock"],
      },
      backgroundImage: {
        first: "url(/src/images/first.jpg)",
        second: "url(/src/images/sec.jpg)",
        third: "url(/src/images/thrd.jpg)",
        forth: "url(/src/images/forth.avif)",
      },
    },
  },
  plugins: [],
};
