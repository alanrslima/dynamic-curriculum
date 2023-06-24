module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{html,js,jsx,tsx, ts}",
    "./styles/**/*.{js,jsx,tsx, ts}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "var(--color-primary)",
      },
    },
  },
  plugins: [],
};
