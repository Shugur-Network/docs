# Design System Usage Guide

This guide provides practical examples and patterns for using the Shugur Design System effectively.

## 🚀 Quick Start

### 1. Installation

```bash
# Install required dependencies
npm install tailwindcss @tailwindcss/typography lucide-svelte

# Copy design system files to your project
cp -r design-system/ src/
```

### 2. Configure Tailwind

Replace your `tailwind.config.js` with the design system configuration:

```javascript
import designSystemConfig from './src/design-system/tokens/tailwind.config.js';
export default designSystemConfig;
```

### 3. Import Base Styles

In your main CSS file:

```css
@import './design-system/tokens/base.css';
```

### 4. Use Components

```svelte
<script>
  import { Button, Card, Navigation } from './design-system/components';
  import { ArrowRight, CheckCircle } from 'lucide-svelte';
</script>

<Navigation />
<Button variant="primary" icon={ArrowRight}>Get Started</Button>
```

## 🎨 Common Patterns

### Landing Page Layout

```svelte
<script>
  import { Navigation, Hero, Features, Footer } from './design-system/components';
  import { Clock, Shield, Cpu } from 'lucide-svelte';
  
  const features = [
    {
      name: 'Fast Setup',
      description: 'Get started in minutes with automated installation.',
      icon: Clock
    },
    {
      name: 'Secure',
      description: 'Enterprise-grade security built in.',
      icon: Shield
    },
    {
      name: 'Powerful',
      description: 'High-performance architecture.',
      icon: Cpu
    }
  ];
  
  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '/about' }
  ];
</script>

<Navigation 
  logo={{ src: '/logo.svg', alt: 'Company Logo' }}
  links={navLinks}
/>

<Hero
  eyebrow="Welcome to"
  title="Your Amazing Product"
  subtitle="Build something incredible with our powerful tools."
  actions={[
    { label: 'Get Started', href: '/signup', className: 'btn btn-primary' },
    { label: 'Learn More', href: '/about', className: 'btn btn-secondary' }
  ]}
/>

<Features
  title="Why Choose Us"
  subtitle="Key Benefits"
  description="Everything you need to succeed."
  {features}
/>

<Footer 
  company={{ name: 'Your Company', tagline: 'Building the future.' }}
/>
```

### Dashboard Layout

```svelte
<script>
  import { Card, Button } from './design-system/components';
  import { BarChart, Users, DollarSign } from 'lucide-svelte';
</script>

<div class="min-h-screen bg-gray-50">
  <div class="container-app py-8">
    <div class="grid-responsive-3">
      
      <Card>
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-600">Total Revenue</p>
            <p class="text-3xl font-bold text-gray-900">$45,231</p>
          </div>
          <DollarSign class="h-8 w-8 text-green-500" />
        </div>
      </Card>
      
      <Card>
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-600">Active Users</p>
            <p class="text-3xl font-bold text-gray-900">2,345</p>
          </div>
          <Users class="h-8 w-8 text-blue-500" />
        </div>
      </Card>
      
      <Card>
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-600">Conversion Rate</p>
            <p class="text-3xl font-bold text-gray-900">3.24%</p>
          </div>
          <BarChart class="h-8 w-8 text-purple-500" />
        </div>
      </Card>
      
    </div>
  </div>
</div>
```

### Form Layout

```svelte
<script>
  import { Card, Button } from './design-system/components';
  
  let formData = {
    name: '',
    email: '',
    message: ''
  };
  
  function handleSubmit() {
    // Handle form submission
  }
</script>

<div class="min-h-screen bg-gray-50 py-12">
  <div class="container-narrow">
    
    <Card className="max-w-md mx-auto">
      <svelte:fragment slot="header">
        <h2 class="text-xl font-semibold text-gray-900">Contact Us</h2>
      </svelte:fragment>
      
      <form on:submit|preventDefault={handleSubmit} class="space-y-6">
        <div>
          <label for="name" class="form-label">Name</label>
          <input 
            type="text" 
            id="name" 
            bind:value={formData.name}
            class="form-input" 
            required 
          />
        </div>
        
        <div>
          <label for="email" class="form-label">Email</label>
          <input 
            type="email" 
            id="email" 
            bind:value={formData.email}
            class="form-input" 
            required 
          />
        </div>
        
        <div>
          <label for="message" class="form-label">Message</label>
          <textarea 
            id="message" 
            bind:value={formData.message}
            class="form-input" 
            rows="4"
            required
          ></textarea>
        </div>
        
        <Button type="submit" fullWidth>
          Send Message
        </Button>
      </form>
    </Card>
    
  </div>
</div>
```

## 🎯 Design Tokens Usage

### Colors

```svelte
<!-- Primary brand colors -->
<div class="bg-shugur-500 text-white">Primary</div>
<div class="bg-shugur-600 text-white">Primary Dark</div>

<!-- Semantic colors -->
<div class="bg-success-500 text-white">Success</div>
<div class="bg-warning-500 text-white">Warning</div>
<div class="bg-error-500 text-white">Error</div>

<!-- Text colors -->
<p class="text-gray-900">Primary text</p>
<p class="text-gray-600">Secondary text</p>
<p class="text-shugur-600">Brand text</p>
```

### Typography

```svelte
<!-- Headings with display font -->
<h1 class="text-4xl font-bold font-spartan text-gray-900">
  Main Heading
</h1>

<!-- Body text with system font -->
<p class="text-lg text-gray-600">
  Body text using Inter font family.
</p>

<!-- Responsive text sizes -->
<h2 class="text-responsive-2xl font-bold text-gray-900">
  Responsive Heading
</h2>
```

### Spacing and Layout

```svelte
<!-- Section spacing -->
<section class="section">
  <div class="container-app">
    <div class="section-header">
      <h2 class="section-title">Section Title</h2>
      <p class="section-description">Section description</p>
    </div>
  </div>
</section>

<!-- Grid layouts -->
<div class="grid-responsive-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Custom spacing -->
<div class="space-y-6">
  <div>Spaced item 1</div>
  <div>Spaced item 2</div>
</div>
```

### Animations

```svelte
<!-- Entrance animations -->
<div class="animate-fade-in">Fades in</div>
<div class="animate-slide-up">Slides up</div>

<!-- With delays -->
<div class="animate-slide-up animate-delay-200">Delayed slide</div>

<!-- Custom animation timing -->
<div 
  class="animate-fade-in" 
  style="animation-duration: 800ms; animation-delay: 300ms;"
>
  Custom timing
</div>
```

## 🎨 Customization

### Extending Colors

```javascript
// In your tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        // Add your custom colors
        brand: {
          500: '#your-color',
          600: '#your-dark-color'
        }
      }
    }
  }
}
```

### Custom Components

```svelte
<!-- Create custom components using design system patterns -->
<script>
  import { Card } from './design-system/components';
</script>

<Card className="custom-card">
  <div class="feature-icon bg-brand-500">
    <slot name="icon" />
  </div>
  <h3 class="feature-title">
    <slot name="title" />
  </h3>
  <p class="feature-description">
    <slot />
  </p>
</Card>

<style>
  :global(.custom-card) {
    @apply hover:shadow-strong transition-shadow duration-300;
  }
</style>
```

## 📱 Responsive Design

### Mobile-First Approach

```svelte
<!-- Stack on mobile, grid on desktop -->
<div class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8">
  <div>Content 1</div>
  <div>Content 2</div>
</div>

<!-- Responsive text sizes -->
<h1 class="text-2xl md:text-4xl lg:text-6xl">
  Responsive Heading
</h1>

<!-- Responsive padding -->
<section class="py-12 md:py-16 lg:py-24">
  <div class="px-4 md:px-6 lg:px-8">
    Content
  </div>
</section>
```

### Touch Targets

```svelte
<!-- Ensure minimum 48px touch targets -->
<button class="touch-target btn btn-primary">
  Mobile-friendly button
</button>

<!-- Navigation links with proper spacing -->
<a href="/link" class="nav-link touch-target">
  Navigation Link
</a>
```

## ♿ Accessibility Best Practices

### ARIA Labels

```svelte
<Button ariaLabel="Close dialog">
  <X class="h-4 w-4" />
</Button>

<Navigation 
  links={navLinks}
  aria-label="Main navigation"
/>
```

### Focus Management

```svelte
<!-- Use focus-ring utility for consistent focus styles -->
<button class="focus-ring btn btn-primary">
  Accessible Button
</button>

<!-- Screen reader only content -->
<span class="sr-only">Screen reader text</span>
```

### Semantic HTML

```svelte
<!-- Use proper heading hierarchy -->
<h1>Page Title</h1>
<section>
  <h2>Section Title</h2>
  <h3>Subsection Title</h3>
</section>

<!-- Use landmark regions -->
<main>
  <article>
    <header>...</header>
    <section>...</section>
    <footer>...</footer>
  </article>
</main>
```

## 🚀 Performance Optimization

### Lazy Loading Components

```svelte
<script>
  import { onMount } from 'svelte';
  
  let HeavyComponent;
  
  onMount(async () => {
    const module = await import('./HeavyComponent.svelte');
    HeavyComponent = module.default;
  });
</script>

{#if HeavyComponent}
  <svelte:component this={HeavyComponent} />
{/if}
```

### Optimized Animations

```css
/* Use transform and opacity for best performance */
.animate-slide-up {
  animation: slideUp 0.3s ease-out;
  will-change: transform, opacity;
}

/* Avoid animating layout properties */
.avoid-this {
  /* Don't animate: width, height, margin, padding */
  transition: width 0.3s ease; /* ❌ */
}

.do-this {
  /* Animate: transform, opacity, filter */
  transition: transform 0.3s ease, opacity 0.3s ease; /* ✅ */
}
```

This design system provides a solid foundation for building consistent, accessible, and performant user interfaces. Customize and extend it according to your project's specific needs!
