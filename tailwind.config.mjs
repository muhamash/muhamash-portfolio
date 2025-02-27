/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        arsenal: [ "var(--arsenal-sc)", "sans-serif" ],
        nunito: ["var(--nunito)", "sans-serif"],
        edu: [ "var(--edu-font)", "sans-serif" ],
        outfit: ["var(--outfit)", "sans-serif"],
        code: ["var(--code-font)", "monospace"],
      },
    },
  },
  plugins: [],
};
