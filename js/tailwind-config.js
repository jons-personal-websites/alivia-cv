tailwind.config = {
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: "#FAF7F2", dark: "#F0EBE3" },
        terracotta: { DEFAULT: "#B85C38", light: "#D4845F", pale: "#F5E6DD" },
        gold: { DEFAULT: "#C9A96E", light: "#E8D5A8" },
        charcoal: { DEFAULT: "#1A1A1A", light: "#4A4A4A" },
        muted: "#7A7A7A",
        "border-custom": "#E8E2D9",
        paradise: { DEFAULT: "#B85C38", bg: "#FDF5EF" },
        alliance: { DEFAULT: "#9E6B7B", bg: "#FBF0F3" },
        sph: { DEFAULT: "#2C3E50", bg: "#F2F4F6" },
        fjbenjamin: { DEFAULT: "#6D5D7E", bg: "#F5F1F8" },
        jobsquare: { DEFAULT: "#4A7C69", bg: "#EFF7F3" },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ['"Plus Jakarta Sans"', "-apple-system", "sans-serif"],
      },
      animation: {
        morph: "morph 20s ease-in-out infinite",
        "spin-slow": "spin 30s linear infinite",
        "pulse-line": "pulseLine 2s ease-in-out infinite",
        "dot-bounce": "dotBounce 1.4s infinite",
      },
      keyframes: {
        morph: {
          "0%, 100%": { borderRadius: "47% 53% 61% 39% / 45% 51% 49% 55%" },
          "25%": { borderRadius: "55% 45% 38% 62% / 52% 48% 52% 48%" },
          "50%": { borderRadius: "42% 58% 55% 45% / 58% 42% 58% 42%" },
          "75%": { borderRadius: "60% 40% 47% 53% / 40% 55% 45% 60%" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "1", transform: "scaleY(1)" },
          "50%": { opacity: "0.3", transform: "scaleY(0.6)" },
        },
        dotBounce: {
          "0%, 80%, 100%": { transform: "scale(0.6)", opacity: "0.4" },
          "40%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
};
