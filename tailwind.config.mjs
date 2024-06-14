/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: "#2B00FF",
        "blue-darker": "#1C00A8",
        green: "#54F400",
        "green-darker": "#4FC90E",
        white: "#FFFFFF",
        "light-lilac": "#ECE9FF",
        fucsia: "#EF5DA8",
        "dark-gray": "#2E3545",
      },
      fontFamily: {
        // sans: ["Stolzl", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
