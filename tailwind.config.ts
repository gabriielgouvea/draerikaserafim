import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C96B',
          dark: '#A8860A',
          muted: '#D4AF7A',
          50: '#FBF5E6',
          100: '#F5E8C7',
        },
        beige: {
          DEFAULT: '#DDD0BC',
          dark: '#CDBFA8',
          darker: '#B3A08A',
        },
        cream: '#EAE0CF',
        'dark-primary': '#1C1C1E',
        'dark-secondary': '#3A3A3C',
        'dark-muted': '#4A4A50',
        'warm-dark': '#1A1714',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'pulse-gold': 'pulseGold 2.5s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201, 168, 76, 0.4)' },
          '50%': { boxShadow: '0 0 0 16px rgba(201, 168, 76, 0)' },
        },
      },
      boxShadow: {
        'gold-sm': '0 2px 15px rgba(201, 168, 76, 0.15)',
        'gold-md': '0 4px 30px rgba(201, 168, 76, 0.25)',
        'gold-lg': '0 8px 50px rgba(201, 168, 76, 0.35)',
        premium: '0 20px 60px rgba(0, 0, 0, 0.07), 0 4px 15px rgba(0, 0, 0, 0.04)',
        'premium-lg':
          '0 30px 80px rgba(0, 0, 0, 0.10), 0 8px 25px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'gradient-gold':
          'linear-gradient(135deg, #A8860A 0%, #C9A84C 40%, #E8C96B 70%, #C9A84C 100%)',
        'gradient-dark':
          'linear-gradient(160deg, #1A1714 0%, #1C1C1E 50%, #1E1B16 100%)',
        'gradient-beige':
          'linear-gradient(180deg, #EAE0CF 0%, #DDD0BC 100%)',
      },
    },
  },
  plugins: [],
}

export default config
