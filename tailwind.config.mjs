import defaultTheme from 'tailwindcss/defaultTheme'
const plugin = require('tailwindcss/plugin')


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/preline/preline.js',
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Mohr Alt', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				highlight: {
					DEFAULT: "hsl(var(--highlight))",
					foreground: "hsl(var(--highlight-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [
		require('preline/plugin'),
		require('tailwindcss-animate'),
		require('@tailwindcss/typography'),
		plugin(function({ addUtilities }) {
			const newUtilities = {
				'.section': { '@apply mb-16 md:mb-36': {} }, 
				'.section-top': { '@apply mt-16 md:mt-36': {} }, 
				'.section-sm': { '@apply mb-10 md:mb-20': {} }, 
				'.section-sm-top': { '@apply mt-10 md:mt-16': {} }, 
				'.mb': { '@apply mb-10': {} }, 
				'.gap': { '@apply gap-10 md:gap-20': {} }, 
				'.gap-sm': { '@apply gap-8': {} }, 
				'.container': { '@apply mx-auto': {} } 
			}

			addUtilities(newUtilities, ['responsive'])
		})
	],
}
