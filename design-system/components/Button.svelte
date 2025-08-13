ve<!-- 
  Button Component
  
  A flexible button component with multiple variants, sizes, and states.
  Fully accessible with keyboard navigation and screen reader support.
-->

<script>
  import { createEventDispatcher } from 'svelte';
  
  // Props
  export let variant = 'primary'; // 'primary' | 'secondary' | 'ghost' | 'danger'
  export let size = 'md'; // 'sm' | 'md' | 'lg'
  export let type = 'button'; // 'button' | 'submit' | 'reset'
  export let href = null; // If provided, renders as link
  export let target = null; // Link target
  export let rel = null; // Link rel attribute
  export let disabled = false;
  export let loading = false;
  export let fullWidth = false;
  export let icon = null; // Lucide icon component
  export let iconPosition = 'left'; // 'left' | 'right'
  export let ariaLabel = null;
  export let className = '';
  
  // Event dispatcher
  const dispatch = createEventDispatcher();
  
  // Computed classes
  $: baseClasses = 'inline-flex items-center justify-center font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  $: variantClasses = {
    primary: 'bg-shugur-500 text-white hover:bg-shugur-600 focus-visible:outline-shugur-600 shadow-sm',
    secondary: 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-300 shadow-sm focus-visible:outline-gray-500',
    ghost: 'text-gray-900 hover:text-shugur-600 hover:bg-gray-50 focus-visible:outline-shugur-600',
    danger: 'bg-error-500 text-white hover:bg-error-600 focus-visible:outline-error-600 shadow-sm'
  };
  
  $: sizeClasses = {
    sm: 'px-2.5 py-1.5 text-sm rounded-md gap-1.5',
    md: 'px-3.5 py-2.5 text-sm rounded-md gap-2',
    lg: 'px-4 py-3 text-base rounded-lg gap-2'
  };
  
  $: finalClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    className
  ].filter(Boolean).join(' ');
  
  // Event handlers
  function handleClick(event) {
    if (disabled || loading) {
      event.preventDefault();
      return;
    }
    dispatch('click', event);
  }
  
  function handleKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
    dispatch('keydown', event);
  }
</script>

{#if href && !disabled}
  <a
    {href}
    {target}
    {rel}
    class={finalClasses}
    aria-label={ariaLabel}
    on:click={handleClick}
    on:keydown={handleKeydown}
    role="button"
    tabindex="0"
  >
    {#if loading}
      <svg class="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Loading...
    {:else}
      {#if icon && iconPosition === 'left'}
        <svelte:component this={icon} class="w-4 h-4" />
      {/if}
      
      <slot />
      
      {#if icon && iconPosition === 'right'}
        <svelte:component this={icon} class="w-4 h-4" />
      {/if}
    {/if}
  </a>
{:else}
  <button
    {type}
    class={finalClasses}
    {disabled}
    aria-label={ariaLabel}
    on:click={handleClick}
    on:keydown={handleKeydown}
  >
    {#if loading}
      <svg class="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Loading...
    {:else}
      {#if icon && iconPosition === 'left'}
        <svelte:component this={icon} class="w-4 h-4" />
      {/if}
      
      <slot />
      
      {#if icon && iconPosition === 'right'}
        <svelte:component this={icon} class="w-4 h-4" />
      {/if}
    {/if}
  </button>
{/if}

<!--
  Usage Examples:
  
  Basic button:
  <Button>Click me</Button>
  
  Primary button with icon:
  <Button variant="primary" icon={ArrowRight}>Get Started</Button>
  
  Button as link:
  <Button href="/about" variant="secondary">Learn More</Button>
  
  Loading state:
  <Button loading={isLoading} on:click={handleSubmit}>Submit</Button>
  
  Custom styling:
  <Button className="custom-class" variant="ghost" size="lg">Custom Button</Button>
-->
