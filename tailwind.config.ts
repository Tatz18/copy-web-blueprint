import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-card': 'var(--gradient-card)',
        'gradient-primary': 'var(--gradient-primary)',
      },
      boxShadow: {
        'luxury': 'var(--shadow-luxury)',
        'card': 'var(--shadow-card)',
        'glow': 'var(--shadow-glow)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-in-from-back": {
          "0%": {
            opacity: "0",
            transform: "translateX(40px) scale(0.85)",
            zIndex: "-1"
          },
          "40%": {
            opacity: "0.4",
            transform: "translateX(25px) scale(0.9)"
          },
          "70%": {
            opacity: "0.7",
            transform: "translateX(10px) scale(0.95)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0) scale(1)",
            zIndex: "1"
          }
        },
        "text-reveal": {
          "0%, 100%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "20%, 80%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "word-slide-up": {
          "0%, 100%": {
            opacity: "0",
            transform: "translateY(30px) rotateX(90deg)"
          },
          "20%, 80%": {
            opacity: "1",
            transform: "translateY(0) rotateX(0deg)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-in-from-back": "slide-in-from-back 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "text-reveal": "text-reveal 0.8s ease-out infinite",
        "word-slide-up": "word-slide-up 0.6s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
