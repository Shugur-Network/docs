# Button Component

A flexible, accessible button component with multiple variants, sizes, and states.

## Features

- ✅ Multiple variants (primary, secondary, ghost, danger)
- ✅ Three sizes (sm, md, lg)
- ✅ Icon support with positioning
- ✅ Loading states
- ✅ Link rendering when href provided
- ✅ Full accessibility (ARIA, keyboard navigation)
- ✅ Disabled states
- ✅ Event handling

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | Button visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type attribute |
| `href` | `string \| null` | `null` | If provided, renders as link |
| `target` | `string \| null` | `null` | Link target attribute |
| `rel` | `string \| null` | `null` | Link rel attribute |
| `disabled` | `boolean` | `false` | Disable button |
| `loading` | `boolean` | `false` | Show loading state |
| `fullWidth` | `boolean` | `false` | Make button full width |
| `icon` | `Component \| null` | `null` | Lucide icon component |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Icon position |
| `ariaLabel` | `string \| null` | `null` | ARIA label |
| `className` | `string` | `''` | Additional CSS classes |

## Events

- `click` - Fired when button is clicked
- `keydown` - Fired on keyboard interaction

## Usage Examples

### Basic Button

```svelte
<Button>Click me</Button>
```

### Primary Button with Icon

```svelte
<script>
  import { ArrowRight } from 'lucide-svelte';
  import { Button } from './design-system/components';
</script>

<Button variant="primary" icon={ArrowRight}>
  Get Started
</Button>
```

### Button as Link

```svelte
<Button href="/about" variant="secondary">
  Learn More
</Button>
```

### Loading State

```svelte
<script>
  let isSubmitting = false;
  
  async function handleSubmit() {
    isSubmitting = true;
    // ... submit logic
    isSubmitting = false;
  }
</script>

<Button 
  loading={isSubmitting} 
  on:click={handleSubmit}
>
  Submit
</Button>
```

### Danger Button

```svelte
<Button variant="danger" on:click={handleDelete}>
  Delete Account
</Button>
```

### Small Ghost Button

```svelte
<Button variant="ghost" size="sm">
  Cancel
</Button>
```

### Full Width Button

```svelte
<Button variant="primary" fullWidth>
  Sign Up Now
</Button>
```

### Custom Styling

```svelte
<Button 
  className="shadow-lg hover:shadow-xl"
  variant="primary"
>
  Custom Button
</Button>
```

## Styling

The Button component uses Tailwind CSS classes and follows the design system color tokens:

- **Primary**: Uses `shugur-500` (brand green)
- **Secondary**: Uses gray with white background
- **Ghost**: Transparent with hover effects
- **Danger**: Uses `error-500` (red)

## Accessibility

- Proper ARIA labels and roles
- Keyboard navigation support (Enter and Space)
- Focus management with visible focus indicators
- Screen reader compatible
- Proper semantic HTML (button vs link)
- Minimum 44px touch targets on mobile

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers
