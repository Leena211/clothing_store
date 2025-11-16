/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pinterest': {
          'blush': '#F9E6E7',
          'lavender': '#F3E8FF',
          'aqua': '#E5F4F8',
          'cream': '#FFF6E9',
          'grey': '#EDEDED',
          'text': '#222222',
        },
        'primary': {
          'blush': '#F9E6E7',
          'lavender': '#F3E8FF',
          'aqua': '#E5F4F8',
          'cream': '#FFF6E9',
          'grey': '#EDEDED',
          'text': '#222222',
        }
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'pinterest': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'premium': '0 12px 48px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'pinterest-gradient': 'linear-gradient(135deg, #F9E6E7 0%, #F3E8FF 25%, #E5F4F8 50%, #FFF6E9 75%, #EDEDED 100%)',
        'blush-gradient': 'linear-gradient(135deg, #F9E6E7 0%, #F3E8FF 100%)',
        'aqua-gradient': 'linear-gradient(135deg, #E5F4F8 0%, #FFF6E9 100%)',
        'lavender-gradient': 'linear-gradient(135deg, #F3E8FF 0%, #F9E6E7 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
