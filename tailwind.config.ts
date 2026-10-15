import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#effaf4",
          100: "#d9f3e4",
          500: "#209565",
          600: "#167a51",
          700: "#126142",
          900: "#103d2e"
        },
        sky: { 50: "#eff8ff", 500: "#3297e8", 600: "#1679c5" }
      },
      boxShadow: { soft: "0 8px 30px rgba(18, 61, 46, 0.06)" }
    },
  },
  plugins: [],
};
export default config;
