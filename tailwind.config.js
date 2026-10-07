/** 
 * Tailwind CSS Configuration Node
 * 
 * Defines custom design tokens, typography specifications, and animation keyframes.
 * @type {import('tailwindcss').Config} 
 */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // Purge Paths: Dictates the directories Tailwind scans to tree-shake unused CSS classes
  content: [
    "./content/**/*.md",
    "./layouts/**/*.html"
  ],
  theme: {
    // Extend Directive: Appends custom values to the default Tailwind theme without overwriting the base configuration
    extend: {
      
      // Border Radius: Establishes a localized semantic naming convention for curved elements
      borderRadius: {
        'pill': '9999px',
        'card': '32px',
        'container': '24px'
      },
      
      // Typography: Declares the primary web font while dynamically importing default OS fallbacks for stability
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      
      // Palette: Defines custom hexadecimal color variables specific to the brand identity
      colors: {
        'bg-warm-white': '#fff8eb',
        'box-violet': '#f4ebff',
        'box-dark-grey': '#2d3139',
        'button-violet': '#f4ebff',
      },
      
      // Spacing: Introduces extended rem-based sizing for larger layout structures
      spacing: {
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
      },
      
      // Font Metrics: Customizes font-size alongside specific line-height and tight letter-spacing for headers
      fontSize: {
        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'body-large': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
      },
      
      // Elevation: Defines custom drop-shadow variants for structural layering
      boxShadow: {
        'soft-float': '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
        'nav-elevation': '0 4px 20px -2px rgba(0, 0, 0, 0.03)',
      },
      
      // Animation Keyframes: Specifies the CSS transition matrices for initial load sequencing
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      
      // Animation Execution: Binds the keyframes to a specific cubic-bezier timing function for fluid motion
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
