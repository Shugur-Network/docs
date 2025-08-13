<!--
  Hero Section Component
  
  A prominent header section for landing pages and feature introductions.
  Supports various layouts, animations, and content types.
-->

<script>
  import { createEventDispatcher } from 'svelte';
  
  // Props
  export let variant = 'default'; // 'default' | 'centered' | 'split' | 'minimal'
  export let size = 'lg'; // 'sm' | 'md' | 'lg' | 'xl'
  export let background = 'white'; // 'white' | 'gray' | 'gradient' | 'image'
  export let backgroundImage = null; // Background image URL
  export let animate = true; // Enable entrance animations
  export let className = '';
  
  // Content props
  export let eyebrow = null; // Small text above title
  export let title = null; // Main heading
  export let subtitle = null; // Supporting text
  export let actions = []; // Call-to-action buttons
  
  // Event dispatcher
  const dispatch = createEventDispatcher();
  
  // Computed classes
  $: baseClasses = 'relative isolate';
  
  $: backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-shugur-50 to-primary-50',
    image: 'bg-cover bg-center bg-no-repeat'
  };
  
  $: sizeClasses = {
    sm: 'px-6 py-16 lg:py-20',
    md: 'px-6 py-20 lg:py-24',
    lg: 'px-6 py-24 lg:py-32',
    xl: 'px-6 py-32 lg:py-40'
  };
  
  $: variantClasses = {
    default: 'text-left',
    centered: 'text-center',
    split: 'text-left lg:text-left',
    minimal: 'text-center'
  };
  
  $: finalClasses = [
    baseClasses,
    backgroundClasses[background],
    sizeClasses[size],
    className
  ].filter(Boolean).join(' ');
  
  $: containerClasses = variant === 'split' 
    ? 'mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-center'
    : 'mx-auto max-w-4xl';
  
  $: contentClasses = [
    variantClasses[variant],
    variant === 'split' ? 'lg:col-span-1' : ''
  ].filter(Boolean).join(' ');
  
  // Animation delays
  $: titleDelay = animate ? 'style="animation-delay: 200ms"' : '';
  $: subtitleDelay = animate ? 'style="animation-delay: 400ms"' : '';
  $: actionsDelay = animate ? 'style="animation-delay: 600ms"' : '';
  
  // Event handlers
  function handleActionClick(action, event) {
    dispatch('actionClick', { action, event });
  }
</script>

<section 
  class={finalClasses}
  style={backgroundImage ? `background-image: url(${backgroundImage})` : ''}
>
  <!-- Background overlay for image backgrounds -->
  {#if background === 'image'}
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
  {/if}
  
  <div class={containerClasses}>
    <div class={contentClasses}>
      
      <!-- Eyebrow Text -->
      {#if eyebrow}
        <div 
          class="text-base font-semibold leading-7 text-shugur-600 font-spartan {animate ? 'animate-fade-in' : ''}"
          style={animate ? 'animation-delay: 0ms' : ''}
        >
          {eyebrow}
        </div>
      {:else if $$slots.eyebrow}
        <div 
          class="{animate ? 'animate-fade-in' : ''}"
          style={animate ? 'animation-delay: 0ms' : ''}
        >
          <slot name="eyebrow" />
        </div>
      {/if}
      
      <!-- Main Title -->
      {#if title}
        <h1 
          class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-spartan {animate ? 'animate-fade-in' : ''} {eyebrow ? 'mt-2' : ''}"
          style={titleDelay}
        >
          {title}
        </h1>
      {:else if $$slots.title}
        <div 
          class="{animate ? 'animate-fade-in' : ''} {eyebrow ? 'mt-2' : ''}"
          style={titleDelay}
        >
          <slot name="title" />
        </div>
      {/if}
      
      <!-- Subtitle -->
      {#if subtitle}
        <p 
          class="mt-6 text-lg leading-8 text-gray-600 {animate ? 'animate-fade-in animate-slide-up' : ''}"
          style={subtitleDelay}
        >
          {subtitle}
        </p>
      {:else if $$slots.subtitle}
        <div 
          class="mt-6 {animate ? 'animate-fade-in animate-slide-up' : ''}"
          style={subtitleDelay}
        >
          <slot name="subtitle" />
        </div>
      {/if}
      
      <!-- Call-to-Action Buttons -->
      {#if actions.length > 0}
        <div 
          class="mt-10 flex items-center gap-x-6 {variant === 'centered' || variant === 'minimal' ? 'justify-center' : ''} {animate ? 'animate-fade-in animate-slide-up' : ''}"
          style={actionsDelay}
        >
          {#each actions as action, index}
            {#if action.type === 'button'}
              <button
                type="button"
                class={action.className || 'btn btn-primary'}
                on:click={(e) => handleActionClick(action, e)}
              >
                {action.label}
              </button>
            {:else}
              <a
                href={action.href}
                class={action.className || 'btn btn-primary'}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noopener noreferrer' : undefined}
                aria-label={action.ariaLabel}
                on:click={(e) => handleActionClick(action, e)}
              >
                {action.label}
                {#if action.icon}
                  <svelte:component this={action.icon} class="ml-2 h-4 w-4" />
                {/if}
              </a>
            {/if}
          {/each}
        </div>
      {:else if $$slots.actions}
        <div 
          class="mt-10 {variant === 'centered' || variant === 'minimal' ? 'flex justify-center' : ''} {animate ? 'animate-fade-in animate-slide-up' : ''}"
          style={actionsDelay}
        >
          <slot name="actions" />
        </div>
      {/if}
      
      <!-- Custom content slot -->
      {#if $$slots.default}
        <div class="mt-8">
          <slot />
        </div>
      {/if}
    </div>
    
    <!-- Split layout - Image/Content area -->
    {#if variant === 'split'}
      <div class="lg:col-span-1 mt-12 lg:mt-0">
        {#if $$slots.media}
          <slot name="media" />
        {:else}
          <!-- Default placeholder for split layout -->
          <div class="aspect-square rounded-2xl bg-gray-100 flex items-center justify-center">
            <div class="text-gray-400 text-center">
              <div class="text-4xl mb-2">🎯</div>
              <p>Media content</p>
            </div>
          </div>
        {/if}
      </div>
    {/if}
  </div>
</section>

<!--
  Usage Examples:
  
  Basic hero:
  <Hero
    eyebrow="Welcome to"
    title="Your Amazing Product"
    subtitle="Build something incredible with our powerful tools and features."
    actions={[
      { label: 'Get Started', href: '/signup', className: 'btn btn-primary' },
      { label: 'Learn More', href: '/about', className: 'btn btn-secondary' }
    ]}
  />
  
  Centered hero with custom content:
  <Hero variant="centered" size="xl" background="gradient">
    <svelte:fragment slot="eyebrow">
      <span class="text-shugur-600 font-semibold">New Release</span>
    </svelte:fragment>
    
    <svelte:fragment slot="title">
      <h1 class="text-6xl font-bold text-gray-900">
        Revolutionary
        <span class="text-shugur-500">Platform</span>
      </h1>
    </svelte:fragment>
    
    <svelte:fragment slot="subtitle">
      <p class="text-xl text-gray-600">
        Transform your workflow with cutting-edge technology.
      </p>
    </svelte:fragment>
    
    <svelte:fragment slot="actions">
      <Button variant="primary" size="lg">Start Free Trial</Button>
      <Button variant="ghost" size="lg">Watch Demo</Button>
    </svelte:fragment>
  </Hero>
  
  Split layout hero:
  <Hero variant="split" background="gray">
    <svelte:fragment slot="title">
      <h1 class="text-5xl font-bold">Build the Future</h1>
    </svelte:fragment>
    
    <svelte:fragment slot="media">
      <img src="/hero-image.jpg" alt="Product screenshot" class="rounded-2xl shadow-xl" />
    </svelte:fragment>
  </Hero>
-->
