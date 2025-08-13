<!--
  Features Section Component
  
  Displays features in a grid layout with icons, titles, and descriptions.
  Supports various layouts and animation effects.
-->

<script>
  import { createEventDispatcher } from 'svelte';
  
  // Props
  export let title = null; // Section title
  export let subtitle = null; // Section subtitle
  export let description = null; // Section description
  export let features = []; // Features array
  export let layout = 'grid'; // 'grid' | 'list' | 'cards'
  export let columns = 'auto'; // 'auto' | '2' | '3' | '4'
  export let background = 'white'; // 'white' | 'gray' | 'none'
  export let animate = true; // Enable animations
  export let className = '';
  
  // Event dispatcher
  const dispatch = createEventDispatcher();
  
  // Computed classes
  $: sectionClasses = {
    white: 'py-24 sm:py-32 bg-white',
    gray: 'py-24 sm:py-32 bg-gray-50',
    none: 'py-24 sm:py-32'
  };
  
  $: gridClasses = {
    auto: 'grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16',
    '2': 'grid grid-cols-1 md:grid-cols-2 gap-8',
    '3': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
    '4': 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'
  };
  
  $: listClasses = 'space-y-12';
  $: cardClasses = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
  
  $: containerClasses = layout === 'grid' ? gridClasses[columns] : 
                        layout === 'list' ? listClasses : 
                        cardClasses;
  
  $: finalSectionClasses = [
    sectionClasses[background],
    className
  ].filter(Boolean).join(' ');
  
  // Animation delay function
  function getAnimationDelay(index) {
    return animate ? `animation-delay: ${index * 100}ms` : '';
  }
  
  // Event handlers
  function handleFeatureClick(feature, event) {
    dispatch('featureClick', { feature, event });
  }
</script>

<section class={finalSectionClasses}>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    
    <!-- Section Header -->
    {#if title || subtitle || description || $$slots.header}
      <div class="mx-auto max-w-2xl lg:text-center mb-16 sm:mb-20">
        
        {#if subtitle}
          <h2 class="text-base font-semibold leading-7 text-shugur-600 font-spartan">
            {subtitle}
          </h2>
        {/if}
        
        {#if title}
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
        {/if}
        
        {#if description}
          <p class="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>
        {/if}
        
        {#if $$slots.header}
          <slot name="header" />
        {/if}
      </div>
    {/if}
    
    <!-- Features Container -->
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      
      {#if layout === 'grid'}
        <!-- Grid Layout -->
        <dl class={containerClasses}>
          {#each features as feature, index}
            <div 
              class="relative pl-16 {animate ? 'animate-slide-up' : ''}"
              style={getAnimationDelay(index)}
              role={feature.clickable ? 'button' : undefined}
              tabindex={feature.clickable ? 0 : undefined}
              on:click={feature.clickable ? (e) => handleFeatureClick(feature, e) : undefined}
              on:keydown={feature.clickable ? (e) => e.key === 'Enter' && handleFeatureClick(feature, e) : undefined}
            >
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-shugur-500 shadow-sm">
                  {#if feature.icon}
                    <svelte:component this={feature.icon} class="h-6 w-6 text-white" />
                  {:else if feature.iconSrc}
                    <img src={feature.iconSrc} alt="" class="h-6 w-6" />
                  {:else}
                    <div class="h-6 w-6 bg-white rounded opacity-20"></div>
                  {/if}
                </div>
                {feature.name || feature.title}
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">
                {feature.description}
              </dd>
            </div>
          {/each}
        </dl>
        
      {:else if layout === 'list'}
        <!-- List Layout -->
        <div class={containerClasses}>
          {#each features as feature, index}
            <div 
              class="flex gap-6 {animate ? 'animate-slide-up' : ''}"
              style={getAnimationDelay(index)}
            >
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-shugur-500 shadow-sm flex-shrink-0">
                {#if feature.icon}
                  <svelte:component this={feature.icon} class="h-6 w-6 text-white" />
                {:else if feature.iconSrc}
                  <img src={feature.iconSrc} alt="" class="h-6 w-6" />
                {:else}
                  <div class="h-6 w-6 bg-white rounded opacity-20"></div>
                {/if}
              </div>
              <div>
                <h3 class="text-lg font-semibold leading-7 text-gray-900">
                  {feature.name || feature.title}
                </h3>
                <p class="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </p>
                {#if feature.link}
                  <a 
                    href={feature.link.href} 
                    class="mt-3 inline-flex items-center text-sm font-medium text-shugur-600 hover:text-shugur-500"
                  >
                    {feature.link.label}
                    <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                {/if}
              </div>
            </div>
          {/each}
        </div>
        
      {:else}
        <!-- Card Layout -->
        <div class={containerClasses}>
          {#each features as feature, index}
            <div 
              class="relative bg-white p-8 rounded-xl shadow-soft border border-gray-200 {animate ? 'animate-slide-up' : ''}"
              style={getAnimationDelay(index)}
            >
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-shugur-500 shadow-sm mb-6">
                {#if feature.icon}
                  <svelte:component this={feature.icon} class="h-6 w-6 text-white" />
                {:else if feature.iconSrc}
                  <img src={feature.iconSrc} alt="" class="h-6 w-6" />
                {:else}
                  <div class="h-6 w-6 bg-white rounded opacity-20"></div>
                {/if}
              </div>
              
              <h3 class="text-lg font-semibold leading-7 text-gray-900 mb-3">
                {feature.name || feature.title}
              </h3>
              
              <p class="text-base leading-7 text-gray-600 mb-4">
                {feature.description}
              </p>
              
              {#if feature.link}
                <a 
                  href={feature.link.href} 
                  class="inline-flex items-center text-sm font-medium text-shugur-600 hover:text-shugur-500"
                >
                  {feature.link.label}
                  <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              {/if}
            </div>
          {/each}
        </div>
      {/if}
    </div>
    
    <!-- Custom footer slot -->
    {#if $$slots.footer}
      <div class="mt-16 sm:mt-20 lg:mt-24 text-center">
        <slot name="footer" />
      </div>
    {/if}
  </div>
</section>

<!--
  Usage Examples:
  
  Basic features grid:
  <Features
    subtitle="Deploy Faster"
    title="Everything you need for production"
    description="Comprehensive tools and features for building reliable applications."
    features={[
      {
        name: 'Fast Setup',
        description: 'Get started in minutes with our automated installation.',
        icon: Clock
      },
      {
        name: 'Enterprise Ready',
        description: 'Built for scale with enterprise-grade security.',
        icon: Shield
      }
    ]}
  />
  
  Card layout:
  <Features
    layout="cards"
    columns="3"
    background="gray"
    features={[
      {
        title: 'Feature One',
        description: 'Detailed description of the feature and its benefits.',
        icon: CheckCircle,
        link: { href: '/features/one', label: 'Learn more' }
      }
    ]}
  />
  
  List layout:
  <Features
    layout="list"
    title="Key Capabilities"
    features={featuresArray}
    on:featureClick={handleFeatureClick}
  />
-->
