/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coquette: {
          primary: '#FFB6C1',    // Light pink
          secondary: '#E6E6FA',  // Lavender
          accent: '#F6B7C6',    // Soft rose
          background: '#FFF1F3', // Creamy pink
          card: '#F8D4E4',      // Blush pink
          lavender: '#E9D6F7',  // Soft lavender
          gold: '#F9E7B6',      // Soft gold
          text: '#3D2C3C',      // Charcoal
          rose: '#C26D8C',      // Deep rose
          'text-light': '#6B7280', // Medium gray for secondary text
          'card-bg': '#FFFFFF',   // Pure white for cards
          'card-border': '#F5E6E8', // Soft pink border
          // Category-specific colors
          'regret': '#FFE4E1',     // Misty rose
          'cant-have': '#E6E6FA',  // Lavender
          'scarred': '#F0F8FF',    // Alice blue
          'understands': '#F5F5DC', // Beige
          'need': '#FFF0F5',       // Lavender blush
          'lost': '#F8F4FF',       // Soft lavender with hint of purple
          pink: '#ffb0d9',
          lightpink: '#f9c9e2',
          cream: '#f9f8f2',
          blue: '#7aa7db',
          'coquette-blue': '#7aa7db',
        },
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Lato', 'system-ui', 'sans-serif'],
        'handwriting': ['Abril Fatface', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'card-hover': 'cardHover 0.2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        cardHover: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
} 