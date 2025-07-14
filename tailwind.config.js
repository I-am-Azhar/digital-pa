export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'oklch(var(--color-primary))',
        secondary: 'oklch(var(--color-secondary))',
        muted: 'oklch(var(--color-muted))',
        accent: 'oklch(var(--color-accent))',
        soft: 'oklch(var(--color-soft))',
        light: 'oklch(var(--color-light))',
      },
    },
  },
  plugins: [],
}
