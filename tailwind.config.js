module.exports = {
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			// colors: {
			// 	'navi-blue': '#020c1b',
			// },
			// textColor: ['active'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
