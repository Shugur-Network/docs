/**
 * Design Tokens - Spacing
 * 
 * Consistent spacing scale for margins, padding, and positioning
 */

export const spacing = {
  // Base spacing scale (rem values)
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  7: '1.75rem',   // 28px
  8: '2rem',      // 32px
  9: '2.25rem',   // 36px
  10: '2.5rem',   // 40px
  11: '2.75rem',  // 44px
  12: '3rem',     // 48px
  14: '3.5rem',   // 56px
  16: '4rem',     // 64px
  18: '4.5rem',   // 72px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  28: '7rem',     // 112px
  32: '8rem',     // 128px
  36: '9rem',     // 144px
  40: '10rem',    // 160px
  44: '11rem',    // 176px
  48: '12rem',    // 192px
  52: '13rem',    // 208px
  56: '14rem',    // 224px
  60: '15rem',    // 240px
  64: '16rem',    // 256px
  72: '18rem',    // 288px
  80: '20rem',    // 320px
  88: '22rem',    // 352px
  96: '24rem',    // 384px
  128: '32rem'    // 512px
};

/**
 * Semantic Spacing
 * Predefined spacing for common use cases
 */
export const semanticSpacing = {
  // Component spacing
  component: {
    xs: spacing[1],      // 4px - minimal spacing
    sm: spacing[2],      // 8px - small spacing
    md: spacing[4],      // 16px - medium spacing
    lg: spacing[6],      // 24px - large spacing
    xl: spacing[8],      // 32px - extra large spacing
    '2xl': spacing[12],  // 48px - 2x extra large
    '3xl': spacing[16],  // 64px - 3x extra large
    '4xl': spacing[20]   // 80px - 4x extra large
  },

  // Layout spacing
  layout: {
    xs: spacing[4],      // 16px - minimal layout spacing
    sm: spacing[6],      // 24px - small sections
    md: spacing[12],     // 48px - medium sections
    lg: spacing[16],     // 64px - large sections
    xl: spacing[24],     // 96px - extra large sections
    '2xl': spacing[32],  // 128px - 2x extra large
    '3xl': spacing[40],  // 160px - 3x extra large
    section: spacing[24] // 96px - default section spacing
  },

  // Container spacing
  container: {
    xs: spacing[4],      // 16px - mobile container padding
    sm: spacing[6],      // 24px - small container padding
    md: spacing[8],      // 32px - medium container padding
    lg: spacing[12],     // 48px - large container padding
    xl: spacing[16]      // 64px - extra large container padding
  },

  // Text spacing
  text: {
    xs: spacing[1],      // 4px - tight text spacing
    sm: spacing[2],      // 8px - small text spacing
    md: spacing[3],      // 12px - medium text spacing
    lg: spacing[4],      // 16px - large text spacing
    xl: spacing[6]       // 24px - extra large text spacing
  },

  // Touch targets (accessibility)
  touch: {
    min: spacing[12],    // 48px - minimum touch target size
    comfortable: spacing[14] // 56px - comfortable touch target
  }
};

/**
 * Responsive Spacing
 * Spacing that adapts to screen size
 */
export const responsiveSpacing = {
  // Page margins
  pageMargin: {
    mobile: spacing[4],    // 16px on mobile
    tablet: spacing[6],    // 24px on tablet
    desktop: spacing[8]    // 32px on desktop
  },

  // Section padding
  sectionPadding: {
    mobile: {
      y: spacing[16],      // 64px vertical on mobile
      x: spacing[4]        // 16px horizontal on mobile
    },
    tablet: {
      y: spacing[20],      // 80px vertical on tablet
      x: spacing[6]        // 24px horizontal on tablet
    },
    desktop: {
      y: spacing[24],      // 96px vertical on desktop
      x: spacing[8]        // 32px horizontal on desktop
    }
  },

  // Card spacing
  cardSpacing: {
    mobile: spacing[4],    // 16px on mobile
    desktop: spacing[6]    // 24px on desktop
  },

  // Grid gaps
  gridGap: {
    mobile: spacing[4],    // 16px on mobile
    tablet: spacing[6],    // 24px on tablet
    desktop: spacing[8]    // 32px on desktop
  }
};

/**
 * Z-Index Scale
 * Consistent layering system
 */
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
};

/**
 * Border Radius Scale
 */
export const borderRadius = {
  none: '0',
  sm: '0.125rem',    // 2px
  base: '0.25rem',   // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  '4xl': '2rem',     // 32px
  full: '9999px'     // Fully rounded
};

/**
 * Box Shadow Scale
 */
export const boxShadow = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  
  // Custom shadows
  soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
  medium: '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 25px -5px rgba(0, 0, 0, 0.04)',
  strong: '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.04)'
};
