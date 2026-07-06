/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        fest: {
          bg: '#F8F5EF',
          elevated: '#FFFFFF',
          surface: '#FFFFFF',
          cyan: '#B8590A',
          'cyan-light': '#FF9D2E',
          amber: '#B8590A',
          maroon: '#B3261E',
          text: '#231F1C',
          muted: '#7A756D',
          border: '#E4E0D5',
          success: '#1F693E',
          danger: '#B3261E'
        }
      },
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'monospace']
      },
      boxShadow: {
        'card': '0 4px 24px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 4px 24px rgba(15, 23, 42, 0.08)',
        'nav': '0 4px 24px rgba(15, 23, 42, 0.06)',
        'btn': '0 4px 14px rgba(14, 124, 134, 0.18)'
      }
    }
  }
}
