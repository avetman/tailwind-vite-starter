/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
    theme: {
      extend: {
        rotate: {
          '270': '270deg',
        },
        screens: {
          sm: '32em',
          md: '48em',
          tb: { min: '48em', max: '64em' },
          lg: '64em',
          xl: '80em',
          'sm-max': { max: '48em' },
          'sm-only': { min: '32em', max: '48em' },
          'md-only': { min: '48em', max: '64em' },
          'lg-only': { min: '64em', max: '80em' },
          'xl-only': { min: '80em', max: '96em' }
        },
        fontFamily: {
          heading: 'Fredoka, serif',
          body: 'Lato, sans-serif;'
        },
        colors: {
          accent: 'hsla(var(--color-accent) / <alpha-value>)',
          surface: 'hsla(var(--color-surface) / <alpha-value>)',
          primary: 'hsla(var(--color-primary) / <alpha-value>)',
          contrast: 'hsla(var(--color-contrast) / <alpha-value>)',
          secondary: 'hsla(var(--color-secondary) / <alpha-value>)'
        },
        transitionTimingFunction: {
          wiggle: 'cubic-bezier(0.22, 1, 0.36, 1)'
        }
      }
    }
  }
  