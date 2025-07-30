module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        degen: '#00ff99',
        darkBg: '#0a0a0a',
        card: '#111111',
        cardHover: '#1a1a1a',
        softBorder: '#2c2c2c',
      },
      boxShadow: {
        soft: '0 4px 15px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
};
