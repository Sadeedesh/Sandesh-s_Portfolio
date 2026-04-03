/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0f14',
        'surface': '#0a0f14',
        'surface-container-lowest': '#0b1015',
        'surface-container-low': '#0e1419',
        'surface-container': '#12171d',
        'surface-container-high': '#1a2027',
        'surface-container-highest': '#252d36',
        'surface-variant': '#43484e',
        'primary': '#69daff',
        'primary-container': '#00cffc',
        'primary-dim': '#17c0fd',
        'on-primary': '#004a5d',
        'secondary': '#17c0fd',
        'outline-variant': '#43484e',
        'on-surface': '#e1e3e6',
        'on-surface-variant': '#c1c6cd',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'headline-lg': ['2rem', { lineHeight: '1.3' }],
        'headline-md': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'label-lg': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
        'label-md': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
      },
      borderRadius: {
        'md': '0.375rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      backdropBlur: {
        'glass': '20px',
      },
    },
  },
  plugins: [],
};
