// tailwind.config.js
// Customize your design tokens here. Colors map to CSS variables in index.css.

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Toggled by adding/removing 'dark' class on <html>
  theme: {
    extend: {
      // Map Tailwind color utilities to CSS custom properties
      colors: {
        bg: "var(--bg)",
        "bg-subtle": "var(--bg-subtle)",
        fg: "var(--fg)",
        "fg-muted": "var(--fg-muted)",
        accent: "var(--accent)",
        "accent-fg": "var(--accent-fg)",
        border: "var(--border)",
        card: "var(--card)",
        "card-hover": "var(--card-hover)",
      },
      // Font families — loaded via Google Fonts in index.html
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      // Custom keyframes used across the site
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
