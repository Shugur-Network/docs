<!--
  Navigation Component
  
  Responsive navigation header with mobile menu support.
  Includes accessibility features like keyboard navigation and ARIA labels.
-->

<script>
  import { createEventDispatcher } from 'svelte';
  import { Menu, X } from 'lucide-svelte';
  
  // Props
  export let logo = null; // Logo configuration { src, alt, href, width, height }
  export let links = []; // Navigation links array
  export let actions = []; // Action buttons/links
  export let variant = 'default'; // 'default' | 'transparent' | 'bordered'
  export let sticky = true; // Make navigation sticky
  export let className = '';
  
  // State
  let mobileMenuOpen = false;
  
  // Event dispatcher
  const dispatch = createEventDispatcher();
  
  // Computed classes
  $: baseClasses = 'bg-white transition-all duration-200';
  
  $: variantClasses = {
    default: 'shadow-sm border-b border-gray-100',
    transparent: 'bg-transparent',
    bordered: 'border-b-2 border-gray-200'
  };
  
  $: stickyClasses = sticky ? 'sticky top-0 z-50' : '';
  
  $: finalClasses = [
    baseClasses,
    variantClasses[variant],
    stickyClasses,
    className
  ].filter(Boolean).join(' ');
  
  // Functions
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    dispatch('menuToggle', { open: mobileMenuOpen });
  }
  
  function closeMobileMenu() {
    mobileMenuOpen = false;
    dispatch('menuClose');
  }
  
  function handleKeydown(event) {
    if (event.key === 'Escape') {
      closeMobileMenu();
    }
  }
  
  function handleLinkClick(link, event) {
    dispatch('linkClick', { link, event });
    if (!link.external) {
      closeMobileMenu();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<header class={finalClasses} aria-label="Global navigation">
  <div class="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
    
    <!-- Logo Section -->
    <div class="flex lg:flex-1">
      {#if logo}
        <a 
          href={logo.href || '/'} 
          class="logo flex items-center gap-2" 
          aria-label={logo.alt || 'Homepage'}
        >
          <img 
            src={logo.src} 
            alt={logo.alt || 'Logo'} 
            width={logo.width || 'auto'}
            height={logo.height || 'auto'}
            class="h-8 w-auto object-contain"
          />
        </a>
      {:else}
        <slot name="logo" />
      {/if}
    </div>
    
    <!-- Mobile Menu Button -->
    <div class="flex lg:hidden">
      <button
        type="button"
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-shugur-600 transition-colors duration-200 touch-target"
        on:click={toggleMobileMenu}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-menu"
        aria-label="Toggle mobile menu"
      >
        <Menu class="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
    
    <!-- Desktop Navigation -->
    <nav class="hidden lg:flex lg:gap-x-8" aria-label="Main navigation">
      {#each links as link}
        <a
          href={link.href}
          class="nav-link"
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noopener noreferrer' : undefined}
          on:click={(e) => handleLinkClick(link, e)}
        >
          {link.label}
        </a>
      {/each}
    </nav>
    
    <!-- Desktop Actions -->
    <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
      {#each actions as action}
        {#if action.type === 'button'}
          <button
            type="button"
            class={action.className || 'btn btn-primary'}
            on:click={() => dispatch('actionClick', action)}
          >
            {action.label}
          </button>
        {:else}
          <a
            href={action.href}
            class={action.className || 'nav-link'}
            target={action.external ? '_blank' : undefined}
            rel={action.external ? 'noopener noreferrer' : undefined}
            on:click={(e) => handleLinkClick(action, e)}
          >
            {action.label}
            {#if action.external}
              <span aria-hidden="true">&rarr;</span>
            {/if}
          </a>
        {/if}
      {/each}
      
      <!-- Custom actions slot -->
      <slot name="actions" />
    </div>
  </div>
  
  <!-- Mobile Menu -->
  {#if mobileMenuOpen}
    <div class="lg:hidden fixed inset-0 z-50" id="mobile-menu">
      <!-- Background overlay -->
      <div 
        class="fixed inset-0 bg-black bg-opacity-25 transition-opacity"
        on:click={closeMobileMenu}
        on:keydown={handleKeydown}
        role="button"
        tabindex="-1"
        aria-label="Close mobile menu overlay"
      ></div>
      
      <!-- Mobile menu panel -->
      <nav 
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-xl"
        role="dialog" 
        aria-modal="true"
        aria-labelledby="mobile-menu-heading"
      >
        <div class="flex items-center justify-between">
          {#if logo}
            <a 
              href={logo.href || '/'} 
              class="logo flex items-center gap-2" 
              aria-label={logo.alt || 'Homepage'} 
              on:click={closeMobileMenu}
            >
              <img 
                src={logo.src} 
                alt={logo.alt || 'Logo'} 
                width={logo.mobileWidth || logo.width || 'auto'}
                height={logo.mobileHeight || logo.height || 'auto'}
                class="h-6 w-auto object-contain"
              />
            </a>
          {/if}
          
          <button 
            type="button" 
            class="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-shugur-600 transition-colors duration-200 touch-target" 
            on:click={closeMobileMenu}
            aria-label="Close mobile menu"
          >
            <X class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <h2 id="mobile-menu-heading" class="sr-only">Mobile Navigation Menu</h2>
            
            <!-- Mobile Links -->
            <div class="space-y-2 py-6">
              {#each links as link}
                <a
                  href={link.href}
                  class="nav-link-mobile"
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  on:click={(e) => handleLinkClick(link, e)}
                >
                  {link.label}
                </a>
              {/each}
            </div>
            
            <!-- Mobile Actions -->
            <div class="py-6 space-y-2">
              {#each actions as action}
                {#if action.type === 'button'}
                  <button
                    type="button"
                    class="w-full {action.className || 'btn btn-primary'}"
                    on:click={() => {
                      dispatch('actionClick', action);
                      closeMobileMenu();
                    }}
                  >
                    {action.label}
                  </button>
                {:else}
                  <a
                    href={action.href}
                    class="nav-link-mobile"
                    target={action.external ? '_blank' : undefined}
                    rel={action.external ? 'noopener noreferrer' : undefined}
                    on:click={(e) => handleLinkClick(action, e)}
                  >
                    {action.label}
                  </a>
                {/if}
              {/each}
            </div>
          </div>
        </div>
      </nav>
    </div>
  {/if}
</header>

<!--
  Usage Example:
  
  <Navigation
    logo={{
      src: '/logo.svg',
      alt: 'Company Logo',
      href: '/',
      width: 170,
      height: 40
    }}
    links={[
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'About', href: '/about' },
      { label: 'Docs', href: 'https://docs.example.com', external: true }
    ]}
    actions={[
      { 
        label: 'Sign up', 
        type: 'button',
        className: 'btn btn-primary'
      },
      { 
        label: 'GitHub', 
        href: 'https://github.com/example',
        external: true
      }
    ]}
    on:linkClick={handleLinkClick}
    on:actionClick={handleActionClick}
    on:menuToggle={handleMenuToggle}
  />
-->
