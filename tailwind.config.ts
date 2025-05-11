
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				tech: {
					100: '#E4F0FF',
					200: '#ADC8FF',
					300: '#7B9EFF',
					400: '#4D77FF',
					500: '#2952E3',
					600: '#1E3CAD',
					700: '#162A7A',
					800: '#0F1D54',
					900: '#0A1232',
				},
				neon: {
					purple: '#B026FF',
					blue: '#4D9FFF',
					pink: '#FF2ECD',
					green: '#00FF7F',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
        'text-reveal': {
          '0%': { 
            transform: 'translateY(100%)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'blob': {
          '0%': {
            transform: 'scale(1)'
          },
          '33%': {
            transform: 'scale(1.05) rotate(5deg)'
          },
          '66%': {
            transform: 'scale(0.95) rotate(-5deg)'
          },
          '100%': {
            transform: 'scale(1)'
          },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'grid-line': {
          '0%': { backgroundPosition: '0px 0px' },
          '100%': { backgroundPosition: '40px 40px' },
        },
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'text-reveal': 'text-reveal 1s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'grid-line': 'grid-line 2s linear infinite',
        'cursor-blink': 'cursor-blink 1s step-end infinite',
			},
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, rgba(77, 159, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(77, 159, 255, 0.1) 1px, transparent 1px)',
      },
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
