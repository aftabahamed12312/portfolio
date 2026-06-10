module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 80px rgba(56, 189, 248, 0.18)',
        soft: '0 30px 90px rgba(15, 23, 42, 0.35)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.18), transparent 32%), radial-gradient(circle at 20% 10%, rgba(168, 85, 247, 0.16), transparent 20%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.14), transparent 18%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.6' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSlow: 'pulseSlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
