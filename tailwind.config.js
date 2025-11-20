/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gold-100": "var(--gold-100)",
        goldprimary: "var(--goldprimary)",
        gray: "var(--gray)",
        "gray-2": "var(--gray-2)",
        "gray-fill": "var(--gray-fill)",
        positive: "var(--positive)",
        primary: "var(--primary)",
        stroke: "var(--stroke)",
        white: "var(--white)",
      },
      fontFamily: {
        "caption-large": "var(--caption-large-font-family)",
        "caption-medium": "var(--caption-medium-font-family)",
        "caption-small": "var(--caption-small-font-family)",
        "heading-small": "var(--heading-small-font-family)",
        "label-medium": "var(--label-medium-font-family)",
        "label-small": "var(--label-small-font-family)",
        "label-x-small": "var(--label-x-small-font-family)",
        "paragraph-medium": "var(--paragraph-medium-font-family)",
        "paragraph-small": "var(--paragraph-small-font-family)",
      },
      boxShadow: {
        shadow: "var(--shadow)",
        "shadow-1": "var(--shadow-1)",
      },
    },
  },
  plugins: [],
};
