/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["bg-bgBtn", "text-white", "hover:bg-bgBlue"],
  theme: {
    extend: {
      colors: {
        bgBlue: "#0B0E54",
        yellow: "#EAAA08",
        "white-color": "#F3F6FF",
        gray: {
          400: "#475467 ",
          500: "#667085",
          700: "#0B0E54",
          900: "#101928",
        },
        bgBtn: "#0c0f5c",
      },
    },
  },
  plugins: [],
};
