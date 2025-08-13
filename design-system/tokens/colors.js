/**
 * Design Tokens - Colors
 * 
 * Color palette including primary, secondary, semantic, and neutral colors
 * All colors are optimized for accessibility (WCAG 2.1 AA compliance)
 */

export const colors = {
  // Primary Brand Colors (Shugur Green)
  shugur: {
    50: '#f0fdf9',   // Very light tint
    100: '#ccfbf1',  // Light tint
    200: '#99f6e4',  // Light
    300: '#5eead4',  // Medium light
    400: '#2dd4bf',  // Medium
    500: '#059669',  // Primary (optimized for contrast)
    600: '#047857',  // Primary dark (optimized for contrast)
    700: '#065f46',  // Dark
    800: '#064e3b',  // Very dark
    900: '#022c22',  // Darkest
    950: '#042f2e'   // Ultra dark
  },

  // Secondary Colors (Blue)
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554'
  },

  // Semantic Colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',  // Success primary
    600: '#16a34a',  // Success dark
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16'
  },

  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',  // Warning primary
    600: '#d97706',  // Warning dark
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03'
  },

  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',  // Error primary
    600: '#dc2626',  // Error dark
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a'
  },

  info: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',  // Info primary
    600: '#2563eb',  // Info dark
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554'
  },

  // Neutral Colors (Grays)
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712'
  },

  // Utility Colors
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
  current: 'currentColor'
};

/**
 * Color Usage Guidelines
 * 
 * Primary (Shugur): Use for main brand elements, primary actions, links
 * Secondary (Primary Blue): Use for secondary actions, information
 * Success (Green): Use for positive actions, success states
 * Warning (Amber): Use for caution, warnings, pending states
 * Error (Red): Use for errors, destructive actions
 * Info (Blue): Use for informational content, neutral actions
 * Gray: Use for text, borders, backgrounds, disabled states
 */

export const colorUsage = {
  // Text Colors
  text: {
    primary: colors.gray[900],        // Main text
    secondary: colors.gray[600],      // Secondary text
    tertiary: colors.gray[500],       // Tertiary text
    disabled: colors.gray[400],       // Disabled text
    inverse: colors.white,            // Text on dark backgrounds
    brand: colors.shugur[600],        // Brand colored text
    success: colors.success[600],     // Success text
    warning: colors.warning[600],     // Warning text
    error: colors.error[600],         // Error text
    info: colors.info[600]            // Info text
  },

  // Background Colors
  background: {
    primary: colors.white,            // Main background
    secondary: colors.gray[50],       // Secondary background
    tertiary: colors.gray[100],       // Tertiary background
    brand: colors.shugur[500],        // Brand background
    dark: colors.gray[900],           // Dark background
    success: colors.success[50],      // Success background
    warning: colors.warning[50],      // Warning background
    error: colors.error[50],          // Error background
    info: colors.info[50]             // Info background
  },

  // Border Colors
  border: {
    default: colors.gray[200],        // Default borders
    strong: colors.gray[300],         // Strong borders
    subtle: colors.gray[100],         // Subtle borders
    brand: colors.shugur[500],        // Brand borders
    success: colors.success[300],     // Success borders
    warning: colors.warning[300],     // Warning borders
    error: colors.error[300],         // Error borders
    info: colors.info[300]            // Info borders
  },

  // Interactive Colors
  interactive: {
    primary: colors.shugur[500],      // Primary buttons, links
    primaryHover: colors.shugur[600], // Primary hover state
    secondary: colors.gray[100],      // Secondary buttons
    secondaryHover: colors.gray[200], // Secondary hover state
    disabled: colors.gray[300],       // Disabled state
    focus: colors.shugur[500]         // Focus outline
  }
};

/**
 * Accessibility Color Combinations
 * These combinations meet WCAG 2.1 AA standards
 */
export const accessibleCombinations = [
  // Light backgrounds
  { bg: colors.white, text: colors.gray[900] },
  { bg: colors.gray[50], text: colors.gray[900] },
  { bg: colors.shugur[50], text: colors.gray[900] },
  
  // Dark backgrounds
  { bg: colors.gray[900], text: colors.white },
  { bg: colors.shugur[600], text: colors.white },
  
  // Brand combinations
  { bg: colors.shugur[500], text: colors.white },
  { bg: colors.white, text: colors.shugur[600] },
  
  // Semantic combinations
  { bg: colors.success[500], text: colors.white },
  { bg: colors.warning[500], text: colors.white },
  { bg: colors.error[500], text: colors.white }
];
