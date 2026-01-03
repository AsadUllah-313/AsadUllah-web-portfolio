// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(0, 0%, 100%)", // light mode background
        foreground: "hsl(222, 47%, 11%)", // text color
        border: "hsl(214, 32%, 91%)", // border color
        ring: "hsl(215, 20%, 65%)", // outline/ring color
      },
    },
  },
  plugins: [],
};
