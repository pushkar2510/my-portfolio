import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "'JetBrains Mono'", "monospace"],
      },
      colors: {
        // Custom dark theme colors
        dark: {
          bg: "#0f172a", // slate-900
          surface: "#1e293b", // slate-800
          card: "#334155", // slate-700
          border: "#475569", // slate-600
          text: "#f8fafc", // slate-50
          muted: "#cbd5e1", // slate-300
        },
      },
    },
  },
  plugins: [],
};

export default config;
