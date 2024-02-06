/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "15xl": "150px",
        "14xl": "140px",
        "13xl": "130px",
        "12xl": "120px",
        "10xl": "100px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      width: {
        43: "43%",
      },
    },
  },
  plugins: [],
};
