export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0f1117',
        card: '#1a1f2e',
        cyan: { DEFAULT: '#00d4ff', dim: '#0099bb' },
        purple: { DEFAULT: '#7c3aed' },
      },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
    },
  },
  plugins: [],
}
