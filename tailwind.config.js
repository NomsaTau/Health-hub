/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#14B8A6',
          light: '#5EEAD4',
          dark: '#0F766E',
        },
        dark: '#1F2937',

        // Aliases for legacy component references — mapped to cool tones
        // so all pages keep working while the site feels clean and clinical.
        // Refine or remove once every component is migrated.
        peach: '#F8FAFC',
        pink: '#FFFFFF',
        border: '#E5E7EB',

        // New palette tokens (use these going forward)
        background: '#F8FAFC',
        surface: '#FFFFFF',
        muted: '#64748B',
      },

      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },

      boxShadow: {
        soft: '0 4px 20px -2px rgba(31, 41, 55, 0.08)',
        card: '0 8px 30px -4px rgba(31, 41, 55, 0.10)',
      },

      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },

      animation: {
        marquee: 'marquee 35s linear infinite',
      },

      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};