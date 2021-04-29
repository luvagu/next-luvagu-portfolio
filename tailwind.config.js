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
			transitionDelay: {
				0: '0ms',
				// 2000: '2000ms',
			},
			rotate: {
				'225': '225deg',
			},
			height: {
				18: '70px'
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
