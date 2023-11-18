/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-opensans)"],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1020px",
        xl: "1440px",
      },
      colors: {
        navbarBgColor: "hsl(216.77,89.86%,72.94%)",
        navbar2Color: "hsl(200,81.82%,93.53%)",
        buttonBlue: "hsl(214.7,78.72%,46.08%)",
        textColor: "hsl(0,0%,25.88%)",
        PageBgColor: "hsl(214.08,81.75%,50.59%)",
      },
      // backgroundImage: () => ({
      //   dots: "url('/bg-dots.svg')",
      // }),
    },
  },
  plugins: [],
};
