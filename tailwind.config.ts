import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'surface-alt': 'var(--color-surface-alt)',
        foreground: 'var(--color-foreground)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        hover: 'var(--color-hover)',
      },
    },
  },
  plugins: [],
}

export default config
