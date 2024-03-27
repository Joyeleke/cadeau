/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Roboto Mono", "monospace"],
      },
      colors: {
        primary_grey: "#f6f6f6",
      },
      screens: {
        md: "900px",
        lg: "1300px",
      },
    },
  },
  plugins: [],
});
