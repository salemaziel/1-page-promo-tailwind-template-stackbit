// tailwind.config.js
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			'ubuntu': ['Ubuntu'],
			serif: ["Merriweather", "serif"],
			sans: ["Montserrat", "sans-serif"],
		  },
		extend: {
			animation: {
				"fade-in-fwd": "fade-in-fwd 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s   both"
			},
			keyframes: {
				"fade-in-fwd": {
					"0%": {
						transform: "translateZ(-80px)",
						opacity: "0"
					},
					to: {
						transform: "translateZ(0)",
						opacity: "1"
					}
				}
			},
			  colors: {
				primary: {
				  lighter: 'hsl(207, 73%, 52%)',
				  default: 'hsl(207, 73%, 57%)',
				  darker: 'hsl(207, 73%, 44%)'
				}
			  }
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
