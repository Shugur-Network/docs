/**
 * Design Tokens - Animations
 * 
 * Consistent animation timing, easing, and keyframes
 */

export const animations = {
  // Animation Duration
  duration: {
    fastest: '100ms',
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
    slowest: '1000ms'
  },

  // Animation Timing Functions
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    
    // Custom easing curves
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  },

  // Keyframe Animations
  keyframes: {
    fadeIn: {
      name: 'fadeIn',
      definition: `
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `
    },
    
    fadeOut: {
      name: 'fadeOut',
      definition: `
        @keyframes fadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
      `
    },
    
    slideUp: {
      name: 'slideUp',
      definition: `
        @keyframes slideUp {
          0% { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `
    },
    
    slideDown: {
      name: 'slideDown',
      definition: `
        @keyframes slideDown {
          0% { transform: translateY(-10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `
    },
    
    slideLeft: {
      name: 'slideLeft',
      definition: `
        @keyframes slideLeft {
          0% { transform: translateX(10px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
      `
    },
    
    slideRight: {
      name: 'slideRight',
      definition: `
        @keyframes slideRight {
          0% { transform: translateX(-10px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
      `
    },
    
    scaleIn: {
      name: 'scaleIn',
      definition: `
        @keyframes scaleIn {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `
    },
    
    scaleOut: {
      name: 'scaleOut',
      definition: `
        @keyframes scaleOut {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0; }
        }
      `
    },
    
    bounceSubtle: {
      name: 'bounceSubtle',
      definition: `
        @keyframes bounceSubtle {
          0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
          40%, 43% { transform: translate3d(0,-5px,0); }
          70% { transform: translate3d(0,-2px,0); }
          90% { transform: translate3d(0,-1px,0); }
        }
      `
    },
    
    pulse: {
      name: 'pulse',
      definition: `
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `
    },
    
    spin: {
      name: 'spin',
      definition: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `
    },
    
    ping: {
      name: 'ping',
      definition: `
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `
    }
  },

  // Predefined Animation Classes
  classes: {
    // Entrance animations
    fadeIn: {
      animation: 'fadeIn 0.5s ease-in-out',
      className: 'animate-fade-in'
    },
    
    slideUp: {
      animation: 'slideUp 0.3s ease-out',
      className: 'animate-slide-up'
    },
    
    slideDown: {
      animation: 'slideDown 0.3s ease-out',
      className: 'animate-slide-down'
    },
    
    slideLeft: {
      animation: 'slideLeft 0.3s ease-out',
      className: 'animate-slide-left'
    },
    
    slideRight: {
      animation: 'slideRight 0.3s ease-out',
      className: 'animate-slide-right'
    },
    
    scaleIn: {
      animation: 'scaleIn 0.2s ease-out',
      className: 'animate-scale-in'
    },
    
    bounceSubtle: {
      animation: 'bounceSubtle 0.6s ease-out',
      className: 'animate-bounce-subtle'
    },
    
    // Utility animations
    pulse: {
      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      className: 'animate-pulse'
    },
    
    spin: {
      animation: 'spin 1s linear infinite',
      className: 'animate-spin'
    },
    
    ping: {
      animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      className: 'animate-ping'
    }
  },

  // Animation Delays
  delays: {
    0: '0ms',
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms'
  },

  // Transition Properties
  transitions: {
    // Default transitions
    default: 'all 200ms ease-in-out',
    colors: 'color 200ms ease-in-out, background-color 200ms ease-in-out, border-color 200ms ease-in-out',
    opacity: 'opacity 200ms ease-in-out',
    shadow: 'box-shadow 200ms ease-in-out',
    transform: 'transform 200ms ease-in-out',
    
    // Fast transitions
    fast: 'all 150ms ease-in-out',
    colorsFast: 'color 150ms ease-in-out, background-color 150ms ease-in-out, border-color 150ms ease-in-out',
    
    // Slow transitions
    slow: 'all 300ms ease-in-out',
    colorsSlow: 'color 300ms ease-in-out, background-color 300ms ease-in-out, border-color 300ms ease-in-out'
  }
};

/**
 * Animation Usage Guidelines
 */
export const animationGuidelines = {
  // Entrance animations - use when content appears
  entrance: [
    'fadeIn',      // General content appearing
    'slideUp',     // Content sliding from bottom
    'slideDown',   // Content sliding from top
    'scaleIn'      // Modals, popovers, tooltips
  ],
  
  // Exit animations - use when content disappears
  exit: [
    'fadeOut',     // General content disappearing
    'scaleOut'     // Modals, popovers, tooltips
  ],
  
  // Attention animations - use to draw attention
  attention: [
    'bounceSubtle', // Draw attention to elements
    'pulse',        // Loading states, notifications
    'ping'          // Real-time updates, notifications
  ],
  
  // Utility animations - ongoing states
  utility: [
    'spin'          // Loading spinners
  ],
  
  // Performance tips
  performanceTips: [
    'Use transform and opacity for best performance',
    'Avoid animating layout properties (width, height, margin, padding)',
    'Use will-change: transform for complex animations',
    'Keep animations under 500ms for UI interactions',
    'Use animation delays sparingly to avoid feeling sluggish'
  ]
};

/**
 * CSS Custom Properties for Animations
 * Use these for consistent animation timing across your application
 */
export const cssVariables = `
:root {
  /* Animation Durations */
  --duration-fastest: 100ms;
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  --duration-slower: 500ms;
  --duration-slowest: 1000ms;
  
  /* Animation Easing */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-elastic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  /* Common Transitions */
  --transition-default: all var(--duration-normal) var(--ease-in-out);
  --transition-colors: color var(--duration-normal) var(--ease-in-out), 
                       background-color var(--duration-normal) var(--ease-in-out), 
                       border-color var(--duration-normal) var(--ease-in-out);
  --transition-fast: all var(--duration-fast) var(--ease-in-out);
  --transition-slow: all var(--duration-slow) var(--ease-in-out);
}
`;
