/**
 * Design Tokens - Typography
 * 
 * Font families, sizes, weights, and line heights
 */

export const typography = {
  // Font Families
  fontFamily: {
    display: ['League Spartan', 'sans-serif'], // For headings and display text
    body: ['Inter', 'system-ui', 'sans-serif'], // For body text and UI
    mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace']
  },

  // Font Sizes
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],      // 12px
    sm: ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
    base: ['1rem', { lineHeight: '1.5rem' }],     // 16px
    lg: ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
    xl: ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
    '2xl': ['1.5rem', { lineHeight: '2rem' }],    // 24px
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
    '5xl': ['3rem', { lineHeight: '1' }],           // 48px
    '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px
    '7xl': ['4.5rem', { lineHeight: '1' }],         // 72px
    '8xl': ['6rem', { lineHeight: '1' }],           // 96px
    '9xl': ['8rem', { lineHeight: '1' }]            // 128px
  },

  // Font Weights
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900'
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },

  // Text Styles
  textStyles: {
    h1: {
      fontSize: '3.75rem',
      lineHeight: '1',
      fontWeight: '700',
      fontFamily: 'League Spartan',
      letterSpacing: '-0.025em'
    },
    h2: {
      fontSize: '3rem',
      lineHeight: '1',
      fontWeight: '700',
      fontFamily: 'League Spartan'
    },
    h3: {
      fontSize: '2.25rem',
      lineHeight: '2.5rem',
      fontWeight: '600',
      fontFamily: 'League Spartan'
    },
    h4: {
      fontSize: '1.875rem',
      lineHeight: '2.25rem',
      fontWeight: '600',
      fontFamily: 'Inter'
    },
    h5: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontWeight: '600',
      fontFamily: 'Inter'
    },
    h6: {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
      fontWeight: '600',
      fontFamily: 'Inter'
    },
    body: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: '400',
      fontFamily: 'Inter'
    },
    'body-lg': {
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      fontWeight: '400',
      fontFamily: 'Inter'
    },
    'body-sm': {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: '400',
      fontFamily: 'Inter'
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: '1rem',
      fontWeight: '400',
      fontFamily: 'Inter'
    },
    button: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: '600',
      fontFamily: 'Inter'
    }
  }
};

/**
 * Google Fonts CSS Import
 * Add this to your HTML head or CSS file
 */
export const googleFontsCSS = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&family=Inter:wght@100..900&display=swap" rel="stylesheet">
`;

/**
 * Font Loading Optimization
 */
export const fontLoadingCSS = `
<link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&family=Inter:wght@100..900&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
<noscript><link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&family=Inter:wght@100..900&display=swap" rel="stylesheet"></noscript>
`;
