/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				inter: "'Inter Variable', sans-serif ",
				comfortaa: "'Comfortaa Variable', system-ui "
			},
			colors: {
				darkest: '#29292c',
				darker: '#27272a',
				dark: '#737373',
				light: '#f5921d',
				lighter: '#FFFBF5'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
