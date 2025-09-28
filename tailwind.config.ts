import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: "var(--green)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"], // فونت انگلیسی
        geist: ["var(--font-geist-sans)", "sans-serif"], // فونت متن
        mono: ["var(--font-geist-mono)", "monospace"], // فونت کد
      },
    },
  },
  plugins: [],
} satisfies Config;
