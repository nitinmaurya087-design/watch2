module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#07080d',
        surface: '#11131a',
        muted: '#8b91a8',
        accent: '#7c86ff',
        accentSoft: '#5f6cff'
      },
      boxShadow: {
        soft: '0 20px 80px rgba(7, 8, 13, 0.35)',
        glow: '0 0 60px rgba(124, 134, 255, 0.14)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
