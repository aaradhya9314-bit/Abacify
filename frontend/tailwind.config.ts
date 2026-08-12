import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        midnight: "#050816",
        ink: "#0B1020",
        neon: {
          purple: "#A855F7",
          blue: "#2F80ED",
          cyan: "#22D3EE",
        },
        program: {
          abacus: "#E8B14C",
          chess: "#AEB8C9",
          robotics: "#22D3EE",
          mathsScience: "#A855F7",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 211, 238, 0.18)",
        purpleGlow: "0 0 52px rgba(168, 85, 247, 0.22)",
        goldGlow: "0 0 44px rgba(232, 177, 76, 0.2)",
        silverGlow: "0 0 44px rgba(174, 184, 201, 0.16)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 20% 20%, rgba(168,85,247,.18), transparent 28%), radial-gradient(circle at 78% 8%, rgba(34,211,238,.16), transparent 25%), linear-gradient(180deg, #050816 0%, #0B1020 48%, #050816 100%)",
        "mesh-line":
          "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)",
        "grid-abacus":
          "radial-gradient(circle at 15% 15%, rgba(232,177,76,.16), transparent 30%), linear-gradient(180deg, #050816 0%, #0B1020 55%, #050816 100%)",
        "grid-chess":
          "radial-gradient(circle at 85% 15%, rgba(174,184,201,.14), transparent 32%), linear-gradient(180deg, #050816 0%, #0B1020 55%, #050816 100%)",
        "grid-robotics":
          "radial-gradient(circle at 20% 10%, rgba(34,211,238,.18), transparent 30%), linear-gradient(180deg, #050816 0%, #0B1020 55%, #050816 100%)",
        "grid-maths":
          "radial-gradient(circle at 80% 12%, rgba(168,85,247,.18), transparent 30%), linear-gradient(180deg, #050816 0%, #0B1020 55%, #050816 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseLine: {
          "0%": { opacity: ".25", transform: "scaleX(.2)" },
          "50%": { opacity: "1", transform: "scaleX(1)" },
          "100%": { opacity: ".25", transform: "scaleX(.2)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseLine: "pulseLine 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
