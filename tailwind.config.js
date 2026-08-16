/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./index.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
        pretendard: ["Pretendard", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#1856FF",
          50: "#EFF4FF",
          100: "#DBE6FE",
          200: "#BFD3FE",
          300: "#93B5FD",
          400: "#608EFC",
          500: "#1856FF",
          600: "#1042D9",
          700: "#0D33B0",
          800: "#0F2B8E",
          900: "#122773",
        },
        secondary: {
          DEFAULT: "#3A344E",
          50: "#F6F5F8",
          100: "#ECEAF0",
          200: "#DCD8E3",
          300: "#C3BDD0",
          400: "#7F7696",
          500: "#3A344E",
          600: "#2E293E",
          700: "#242031",
          800: "#1B1825",
          900: "#13111A",
        },
        success: {
          DEFAULT: "#07CA6B",
          50: "#E6FAF0",
          500: "#07CA6B",
          600: "#05A858",
        },
        warning: {
          DEFAULT: "#E89558",
          50: "#FDF5EE",
          500: "#E89558",
          600: "#CE7636",
        },
        danger: {
          DEFAULT: "#EA2143",
          50: "#FDF0F2",
          500: "#EA2143",
          600: "#C91534",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          glass: "rgba(255, 255, 255, 0.85)",
          glassDark: "rgba(255, 255, 255, 0.95)",
          border: "rgba(255, 255, 255, 0.6)",
          borderLuminous: "rgba(24, 86, 255, 0.15)",
        },
        text: {
          DEFAULT: "#141414",
          muted: "#667085",
          subtle: "#98A2B3",
        },
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(24, 86, 255, 0.08), 0 2px 8px 0 rgba(0, 0, 0, 0.04)",
        glassHover: "0 12px 40px 0 rgba(24, 86, 255, 0.15), 0 4px 12px 0 rgba(0, 0, 0, 0.06)",
        card: "0 4px 20px -2px rgba(16, 24, 40, 0.06), 0 2px 6px -2px rgba(16, 24, 40, 0.04)",
        modal: "0 20px 50px -10px rgba(16, 24, 40, 0.18), 0 10px 20px -5px rgba(16, 24, 40, 0.08)",
      },
    },
  },
  plugins: [],
};
