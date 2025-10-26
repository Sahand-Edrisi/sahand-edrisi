/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: "var(--green)",
      },
      screens: {
        xs: "320px",
        xm: "375px",
        sm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], 
        geist: ["Geist", "sans-serif"],           
        mono: ["Geist Mono", "monospace"],       
      },
    },
  },
  plugins: [],
}

