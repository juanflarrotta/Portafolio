import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        background: "#2a2a2a",
        gold: '#e59d40',
      },
      spacing: {
        'c72': '4.5rem', // 72px
      },

    }
  },
  plugins: [],
} satisfies Config;
