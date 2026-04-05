import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				kalam: ['Kalam', 'cursive'],
				hand: ['Patrick Hand', 'cursive'],
			},
			colors: {
				paper: '#fdfbf7',
				pencil: '#2d2d2d',
				'paper-muted': '#e5e0d8',
				'marker-red': '#ff4d4d',
				'pen-blue': '#2d5da1',
				'postit': '#fff9c4',
				border: '#2d2d2d',
				input: '#fdfbf7',
				ring: '#2d5da1',
				background: '#fdfbf7',
				foreground: '#2d2d2d',
				primary: {
					DEFAULT: '#ff4d4d',
					foreground: '#ffffff',
				},
				secondary: {
					DEFAULT: '#2d5da1',
					foreground: '#ffffff',
				},
				destructive: {
					DEFAULT: '#ff4d4d',
					foreground: '#ffffff',
				},
				muted: {
					DEFAULT: '#e5e0d8',
					foreground: '#6b6560',
				},
				accent: {
					DEFAULT: '#fff9c4',
					foreground: '#2d2d2d',
				},
				popover: {
					DEFAULT: '#ffffff',
					foreground: '#2d2d2d',
				},
				card: {
					DEFAULT: '#ffffff',
					foreground: '#2d2d2d',
				},
			},
			borderRadius: {
				lg: '0.75rem',
				md: '0.5rem',
				sm: '0.25rem',
				wobbly: '255px 15px 225px 15px / 15px 225px 15px 255px',
				'wobbly-md': '15px 225px 15px 255px / 255px 15px 225px 15px',
				'wobbly-sm': '225px 15px 255px 15px / 15px 255px 15px 225px',
			},
			boxShadow: {
				'hard': '4px 4px 0px 0px #2d2d2d',
				'hard-lg': '8px 8px 0px 0px #2d2d2d',
				'hard-sm': '2px 2px 0px 0px #2d2d2d',
				'hard-hover': '6px 6px 0px 0px #2d2d2d',
				'card': '3px 3px 0px 0px rgba(45, 45, 45, 0.1)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'bounce-gentle': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'jiggle': {
					'0%, 100%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(1deg)' },
					'75%': { transform: 'rotate(-1deg)' }
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(-2deg)' },
					'50%': { transform: 'rotate(2deg)' }
				},
				'fade-in-up': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'bounce-gentle': 'bounce-gentle 3s ease-in-out infinite',
				'jiggle': 'jiggle 0.3s ease-in-out',
				'wiggle': 'wiggle 3s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
