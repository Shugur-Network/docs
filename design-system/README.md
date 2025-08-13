# Shugur Design System

A comprehensive design system extracted from the Shugur Relay website, providing reusable components, styling patterns, and design tokens for building consistent user interfaces.

## 🎨 Design Philosophy

**"Simple where it matters, open where it counts."**

- **Quality First**: Every element is crafted with care and consideration
- **Accessible by Default**: WCAG 2.1 AA compliant components
- **Performance Optimized**: Lightweight, fast-loading components
- **Mobile-First**: Responsive design patterns throughout

## 📁 Structure

```
design-system/
├── tokens/           # Design tokens (colors, typography, spacing)
├── components/       # Reusable UI components  
├── patterns/         # Layout and interaction patterns
├── assets/          # Icons, logos, and images
├── docs/            # Component documentation
└── examples/        # Implementation examples
```

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install tailwindcss @tailwindcss/typography lucide-svelte
   ```

2. **Configure Tailwind**
   Copy the configuration from `tokens/tailwind.config.js`

3. **Import Base Styles**
   ```css
   @import './design-system/tokens/base.css';
   ```

4. **Use Components**
   ```svelte
   import { Button, Card, Navigation } from './design-system/components';
   ```

## 🎯 Core Features

- **Complete Color Palette**: Primary (Shugur green) and secondary color systems
- **Typography Scale**: Modern font stack with Inter and League Spartan
- **Responsive Components**: Mobile-first design patterns
- **Accessibility**: ARIA labels, focus management, keyboard navigation
- **Animation System**: Smooth transitions and micro-interactions
- **Icon Library**: Consistent iconography with Lucide

## 📖 Documentation

Detailed component documentation and usage examples are available in the `/docs` folder.

---

Built with ❤️ by Shugur
