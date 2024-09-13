import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#F9F8F8",
        black: "#000",
        blue: "#03254E",
        green: "#2C5440",
        pink: "#F5B8E1"
      },
    },
  },
  plugins: [],
};
export default config;
