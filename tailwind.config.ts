import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#111827",
        accent: "#FBBF24",
        highlight: "#EA580C",
        "canvas-night": "#000000",
        "canvas-soft": "#0a0a0a",
        "canvas-dark": "#111827",
        "hairline-dark": "#3a3a3f",
        "hairline-light": "#e0e0e8",
        "text-primary": "#ffffff",
        "text-muted": "#f0f0fa",
        "ink-mute": "#5a5a5f",
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Arial Narrow', 'Arial', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'Arial Narrow', 'Arial', 'sans-serif'],
        heading: ['"Poppins"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      fontSize: {
        'display-xxl': ['5rem', { lineHeight: '0.95', letterSpacing: '0.02em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.0', letterSpacing: '0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.15', letterSpacing: '0.015em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.2', letterSpacing: '0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'marquee': 'marquee 30s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'counter-spin': 'counter-spin 6s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(251,191,36,0.3), 0 0 10px rgba(251,191,36,0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(251,191,36,0.5), 0 0 40px rgba(251,191,36,0.2)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'counter-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        pulseGold: {
          '0%, 100%': { borderColor: 'rgba(251,191,36,0.3)' },
          '50%': { borderColor: 'rgba(251,191,36,0.8)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.85) 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(17,24,39,0.8) 0%, rgba(0,0,0,0.9) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
export default config;
