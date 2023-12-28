import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      /* Primary */
      veryDarkMagenta: "#502050",
      softPink: "#ee68a4",

      /* Neutral */
      white: "#ffffff",
      darkGrayishMagenta: "#937b92",
      lightGrayishMagenta: "#f7f2f7",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      bold: "700",
    },
  },
  plugins: [],
};

export default config;
