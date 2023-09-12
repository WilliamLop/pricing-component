/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				"LinearGradient1": "hsl(237, 92%, 79%)",
				"LinearGradient2": "hsl(238, 63%, 64%)",
				"VeryLightGrayish": "hsl(240, 78%, 98%)",
				"LightGrayish": "hsl(234, 14%, 74%)",
				"GrayishBlue": "hsl(233, 13%, 49%)",
				"DarkGrayishBlue": "hsl(232, 13%, 33%)"
			},
			fontfamily:{ 
				'monserrat': ['"Montserrat"', 'sans-serif']
			}
		},
	},
	plugins: [],
}
