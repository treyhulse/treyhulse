import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'rgb(24 24 27)',
          foreground: 'rgb(250 250 250)'
        },
        secondary: {
          DEFAULT: 'rgb(244 244 245)',
          foreground: 'rgb(24 24 27)'
        },
        muted: {
          DEFAULT: 'rgb(228 228 231)',
          foreground: 'rgb(113 113 122)'
        },
        accent: {
          DEFAULT: 'rgb(244 244 245)',
          foreground: 'rgb(24 24 27)'
        },
        destructive: {
          DEFAULT: 'rgb(239 68 68)',
          foreground: 'rgb(250 250 250)'
        },
        border: 'rgb(228 228 231)',
        input: 'rgb(228 228 231)',
        ring: 'rgb(161 161 170)',
        chart: {
          '1': 'rgb(24 24 27)',
          '2': 'rgb(63 63 70)',
          '3': 'rgb(113 113 122)',
          '4': 'rgb(161 161 170)',
          '5': 'rgb(212 212 216)'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;