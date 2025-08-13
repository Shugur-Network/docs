<!--
  Card Component
  
  A flexible container component for grouping related content.
  Supports headers, footers, and various styling options.
-->

<script>
  import { createEventDispatcher } from 'svelte';
  
  // Props
  export let variant = 'default'; // 'default' | 'elevated' | 'bordered' | 'glass'
  export let padding = 'md'; // 'none' | 'sm' | 'md' | 'lg' | 'xl'
  export let rounded = 'lg'; // 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  export let hover = false; // Enable hover effects
  export let clickable = false; // Make entire card clickable
  export let className = '';
  
  // Event dispatcher
  const dispatch = createEventDispatcher();
  
  // Computed classes
  $: baseClasses = 'bg-white transition-all duration-200';
  
  $: variantClasses = {
    default: 'border border-gray-200 shadow-soft',
    elevated: 'shadow-medium',
    bordered: 'border-2 border-gray-200',
    glass: 'backdrop-blur-sm bg-white/90 border border-white/20 shadow-soft'
  };
  
  $: paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };
  
  $: roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl'
  };
  
  $: hoverClasses = hover ? 'hover:shadow-strong hover:-translate-y-1' : '';
  $: clickableClasses = clickable ? 'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-shugur-500 focus-visible:ring-offset-2' : '';
  
  $: finalClasses = [
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    roundedClasses[rounded],
    hoverClasses,
    clickableClasses,
    className
  ].filter(Boolean).join(' ');
  
  // Event handlers
  function handleClick(event) {
    if (clickable) {
      dispatch('click', event);
    }
  }
  
  function handleKeydown(event) {
    if (clickable && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      dispatch('click', event);
    }
  }
</script>

<div
  class={finalClasses}
  role={clickable ? 'button' : undefined}
  tabindex={clickable ? 0 : undefined}
  on:click={handleClick}
  on:keydown={handleKeydown}
>
  <!-- Card Header Slot -->
  {#if $$slots.header}
    <div class="card-header -m-6 mb-6 px-6 py-4 border-b border-gray-200">
      <slot name="header" />
    </div>
  {/if}
  
  <!-- Card Body (Main Content) -->
  <div class="card-body">
    <slot />
  </div>
  
  <!-- Card Footer Slot -->
  {#if $$slots.footer}
    <div class="card-footer -m-6 mt-6 px-6 py-4 border-t border-gray-200">
      <slot name="footer" />
    </div>
  {/if}
</div>

<!--
  Usage Examples:
  
  Basic card:
  <Card>
    <p>Card content goes here</p>
  </Card>
  
  Card with header and footer:
  <Card>
    <svelte:fragment slot="header">
      <h3 class="text-lg font-semibold">Card Title</h3>
    </svelte:fragment>
    
    <p>Main card content</p>
    
    <svelte:fragment slot="footer">
      <Button variant="primary">Action</Button>
    </svelte:fragment>
  </Card>
  
  Elevated card with hover effect:
  <Card variant="elevated" hover>
    <p>This card has elevation and hover effects</p>
  </Card>
  
  Clickable card:
  <Card clickable on:click={handleCardClick}>
    <p>Click anywhere on this card</p>
  </Card>
  
  Glass morphism card:
  <Card variant="glass" rounded="2xl">
    <p>Modern glass effect card</p>
  </Card>
-->
