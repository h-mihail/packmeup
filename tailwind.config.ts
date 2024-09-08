import type { Config } from "tailwindcss";
import colors from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1E2A2A",
        primary: "#228B22",
        secondary: "#FF7F50",
      },
    },
  },
  plugins: [],
};
export default config;
