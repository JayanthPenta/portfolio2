export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
   theme: {
    extend: {
      keyframes: {
        zoomInOut: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" }, // subtle zoom
        },
      },
      animation: {
        zoom: "zoomInOut 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

