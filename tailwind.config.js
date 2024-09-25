// const withMT = require("@material-tailwind/html/utils/withMT");

// export default withMT({
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'primaryDark': '#1D232A',
//         'secondaryDark': '#242A31',
//       }
//     },
//   },
//   plugins: [],
// )};

const withMT = require("@material-tailwind/html/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDark: "#1D232A",
        secondaryDark: "#242A31",
      },
    },
  },
  plugins: [],
});