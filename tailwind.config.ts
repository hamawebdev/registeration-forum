
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        oxanium: ['Oxanium', 'cursive'],
        agency: ['Agency FB', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
        mono: ['monospace'],
        digital: ['Press Start 2P', 'cursive']
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        // Flutter theme colors
        'void-black': '#000013',
        'neon-blue': '#00f3ff',
        'shadow-purple': '#6a00ff',
        'blood-red': '#ff003c',
        'dungeon-gray': '#2a2a3c',
        'light-text': '#e0e0ff',
        // Solo Leveling theme colors
        'sl-dark': '#1A1F2C',
        'sl-darker': '#141824',
        'sl-darkest': '#0B0E14',
        'sl-purple': '#9b87f5',
        'sl-purple-dark': '#7E69AB',
        'sl-blue': '#1EAEDB',
        'sl-blue-glow': '#0EA5E9',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(158, 138, 245, 0.5), 0 0 10px rgba(158, 138, 245, 0.3)'
          },
          '50%': {
            boxShadow: '0 0 10px rgba(158, 138, 245, 0.8), 0 0 20px rgba(158, 138, 245, 0.5)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'glow-pulse': 'glow-pulse 2s infinite'
      },
      boxShadow: {
        'sl-glow': '0 0 10px rgba(158, 138, 245, 0.5), 0 0 20px rgba(158, 138, 245, 0.3)',
        'sl-blue-glow': '0 0 10px rgba(14, 165, 233, 0.5), 0 0 20px rgba(14, 165, 233, 0.3)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
