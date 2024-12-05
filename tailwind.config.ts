import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'header-border': "var(--header-border)",
        'nav-links': "var(--nav-links)",
        'button-bg': "var(--button-bg)",

        'presentation-title': "var(--presentation-title)",
      },
      fontFamily: {
        manrope: "var(--font-manrope)",
        degular: "var(--font-degular)"
      }
    },
  },
  plugins: [],
} satisfies Config;
