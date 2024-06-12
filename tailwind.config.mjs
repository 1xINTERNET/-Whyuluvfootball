/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'blue': '#232222',
        'blue-darker': '#1C00A8',
        'green': '#54F400',
        'green-darker': '#4FC90E',
        'white': '#FFFFFF',
        'light-lilac': '#ECE9FF',
        'fucsia': '#EF5DA8',
      },
      fontFamily: {
        sans: ['Stolzl', ...defaultTheme.fontFamily.sans],
      },
    },
	},
	plugins: [],
}
