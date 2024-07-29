/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			accent: '#FC8019',
			pop: '#09AA29',
			highlight: '#FFF2E8',
			typeDark: '#171826',
			typeFaded: '#9F9F9E',
			seperators: '#F5F5F5',
			accentHover: '#e67300',
		},
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: ['prettier-plugin-tailwindcss'],
};
