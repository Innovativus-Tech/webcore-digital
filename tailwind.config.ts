import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EEF4FF",
          100: "#D9E6FF",
          500: "#0B5FFF",
          600: "#0A53E0",
          700: "#0843B8",
          900: "#0A2540",
        },
        accent: {
          500: "#10B981",
          600: "#059669",
        },
        ink: {
          900: "#0F172A",
          700: "#334155",
          500: "#475569",
          300: "#94A3B8",
          200: "#CBD5E1",
          100: "#E2E8F0",
          50: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "16px",
        btn: "10px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,.04), 0 8px 24px rgba(11,37,64,.06)",
        cardHover: "0 2px 4px rgba(15,23,42,.05), 0 16px 40px rgba(11,37,64,.10)",
        fab: "0 12px 24px rgba(11,95,255,.35)",
      },
      maxWidth: {
        container: "1200px",
      },
      letterSpacing: {
        tightish: "-0.02em",
        widemono: "0.08em",
      },
      keyframes: {
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        slideUp: "slideUp 180ms ease-out",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
