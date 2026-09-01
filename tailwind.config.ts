import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#10243E",
        steel: "#1D4E89",
        steelLight: "#4A7FC1",
        ink: "#0A0A0B",
        bone: "#FAFAF8",
        signal: "#F4B400",
        signalDark: "#C98F00",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
