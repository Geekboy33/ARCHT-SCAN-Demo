/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional ARCHT Color System
        archetyp: {
          50: '#f0f9ff',
          100: '#e0f2fe', 
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#06b6d4', // Primary accent
          600: '#0891b2', // Secondary accent
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
          primary: '#06b6d4',
          secondary: '#0891b2',
          accent: '#22d3ee'
        },
        
        // Professional Grayscale System
        surface: {
          primary: '#000000',
          secondary: '#0a0a0a', 
          tertiary: '#141414',
          elevated: '#1a1a1a',
          overlay: 'rgba(0, 0, 0, 0.95)'
        },
        
        border: {
          primary: 'rgba(255, 255, 255, 0.08)',
          secondary: 'rgba(255, 255, 255, 0.12)',
          accent: 'rgba(6, 182, 212, 0.3)',
          hover: 'rgba(255, 255, 255, 0.16)'
        },
        
        text: {
          primary: '#ffffff',
          secondary: '#e5e5e5', 
          tertiary: '#a3a3a3',
          quaternary: '#737373',
          accent: '#06b6d4'
        },
        
        // Status Colors - Muted for Professional Look
        success: {
          50: '#ecfdf5',
          400: '#34d399',
          500: '#10b981',
          600: '#059669'
        },
        warning: {
          50: '#fffbeb',
          400: '#fbbf24',
          500: '#f59e0b', 
          600: '#d97706'
        },
        error: {
          50: '#fef2f2',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626'
        },
        info: {
          50: '#eff6ff',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb'
        }
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif']
      },
      
      fontSize: {
        // Professional Typography Scale
        'xs': ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.3', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0em' }],
        '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.025em' }],
        '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
        '8xl': ['6rem', { lineHeight: '0.95', letterSpacing: '-0.025em' }],
        '9xl': ['8rem', { lineHeight: '0.9', letterSpacing: '-0.025em' }]
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem', 
        '128': '32rem',
        '144': '36rem',
        '160': '40rem'
      },
      
      borderRadius: {
        'xs': '0.125rem',
        'sm': '0.25rem',
        'md': '0.375rem', 
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem'
      },
      
      boxShadow: {
        'professional': '0 4px 6px -1px rgba(0, 0, 0, 0.6), 0 2px 4px -1px rgba(0, 0, 0, 0.4)',
        'elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.7), 0 4px 6px -2px rgba(0, 0, 0, 0.5)',
        'floating': '0 20px 25px -5px rgba(0, 0, 0, 0.8), 0 10px 10px -5px rgba(0, 0, 0, 0.6)',
        'glow': '0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-lg': '0 0 40px rgba(6, 182, 212, 0.4)',
        'inner-professional': 'inset 0 1px 0 rgba(255, 255, 255, 0.05)'
      },
      
      animation: {
        // Professional Animation System
        'fade-in-professional': 'fadeInProfessional 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'slide-up-professional': 'slideUpProfessional 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'scale-in-professional': 'scaleInProfessional 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'glow-professional': 'glowProfessional 3s ease-in-out infinite alternate',
        'float-professional': 'floatProfessional 6s ease-in-out infinite',
        'pulse-professional': 'pulseProfessional 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer-professional': 'shimmerProfessional 2s linear infinite'
      },
      
      keyframes: {
        fadeInProfessional: {
          '0%': { opacity: '0', transform: 'translateY(40px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
        },
        slideUpProfessional: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleInProfessional: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        glowProfessional: {
          '0%': { 
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)',
            transform: 'scale(1)'
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(6, 182, 212, 0.4)',
            transform: 'scale(1.02)'
          }
        },
        floatProfessional: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        pulseProfessional: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        },
        shimmerProfessional: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px'
      }
    },
  },
  plugins: [],
}