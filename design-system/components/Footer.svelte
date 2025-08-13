<!--
  Footer Component
  
  Comprehensive footer with links, social media, and company information.
  Responsive design with mobile-optimized touch targets.
-->

<script>
  // Props
  export let logo = null; // Logo configuration
  export let company = null; // Company information
  export let sections = []; // Footer sections with links
  export let social = []; // Social media links
  export let legal = []; // Legal links (privacy, terms, etc.)
  export let newsletter = null; // Newsletter signup configuration
  export let className = '';
  
  // Current year for copyright
  const currentYear = new Date().getFullYear();
  
  // Default company info if not provided
  $: companyInfo = company || {
    name: 'Your Company',
    tagline: 'Building amazing things.',
    copyright: `© ${currentYear} Your Company. All rights reserved.`
  };
</script>

<footer class="bg-gray-900 text-white {className}">
  <div class="max-w-7xl mx-auto px-6 py-12">
    
    <!-- Main Footer Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      
      <!-- Company/Logo Section -->
      <div class="lg:col-span-2">
        {#if logo}
          <a href={logo.href || '/'} class="logo mb-4 inline-block">
            <img 
              src={logo.src} 
              alt={logo.alt || 'Company Logo'} 
              width={logo.width || 170}
              height={logo.height || 40}
              class="h-8 w-auto object-contain"
            />
          </a>
        {:else if $$slots.logo}
          <div class="mb-4">
            <slot name="logo" />
          </div>
        {:else}
          <div class="mb-4">
            <h3 class="text-xl font-bold text-white">{companyInfo.name}</h3>
          </div>
        {/if}
        
        {#if companyInfo.tagline}
          <p class="text-gray-400 text-sm mb-6 max-w-md">
            {companyInfo.tagline}
          </p>
        {/if}
        
        <!-- Social Media Links -->
        {#if social.length > 0}
          <div class="flex gap-4">
            {#each social as link}
              <a 
                href={link.href} 
                class="text-gray-400 hover:text-shugur-500 transition-colors p-2 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-md hover:bg-gray-800" 
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {#if link.icon}
                  <svelte:component this={link.icon} class="w-5 h-5" />
                {:else if link.svg}
                  {@html link.svg}
                {:else}
                  <span class="text-xs">{link.label}</span>
                {/if}
              </a>
            {/each}
          </div>
        {/if}
      </div>
      
      <!-- Footer Sections (Links) -->
      {#each sections as section}
        <div>
          <h3 class="font-semibold mb-4 text-white">{section.title}</h3>
          <ul class="space-y-3 text-sm text-gray-400">
            {#each section.links as link}
              <li>
                <a 
                  href={link.href} 
                  class="hover:text-shugur-500 transition-colors py-1 block min-h-[40px] flex items-center"
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
      
      <!-- Newsletter Signup -->
      {#if newsletter}
        <div class="lg:col-span-1">
          <h3 class="font-semibold mb-4 text-white">{newsletter.title || 'Stay Updated'}</h3>
          <p class="text-gray-400 text-sm mb-4">
            {newsletter.description || 'Get the latest news and updates.'}
          </p>
          
          <form class="space-y-3" on:submit={newsletter.onSubmit}>
            <div>
              <label for="email" class="sr-only">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="block w-full rounded-md border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 focus:border-shugur-500 focus:ring-shugur-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            <button
              type="submit"
              class="w-full btn btn-primary min-h-[44px]"
            >
              {newsletter.buttonText || 'Subscribe'}
            </button>
          </form>
        </div>
      {/if}
      
      <!-- Custom footer slot -->
      {#if $$slots.custom}
        <div class="lg:col-span-1">
          <slot name="custom" />
        </div>
      {/if}
    </div>
    
    <!-- Footer Bottom -->
    <div class="border-t border-gray-800 mt-8 pt-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        
        <!-- Copyright -->
        <div class="text-sm text-gray-400 text-center md:text-left">
          {companyInfo.copyright}
        </div>
        
        <!-- Legal Links -->
        {#if legal.length > 0}
          <div class="flex gap-6 text-sm text-gray-400">
            {#each legal as link}
              <a 
                href={link.href} 
                class="hover:text-shugur-500 transition-colors py-2 px-2 min-h-[44px] flex items-center"
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
</footer>

<!--
  Usage Example:
  
  <Footer
    logo={{
      src: '/logo-light.svg',
      alt: 'Company Logo',
      href: '/',
      width: 170,
      height: 40
    }}
    company={{
      name: 'Shugur',
      tagline: 'Build open, resilient tech for everyone.',
      copyright: '© 2024 Shugur. Simple where it matters, open where it counts.'
    }}
    sections={[
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '#features' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Documentation', href: '/docs', external: true }
        ]
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Blog', href: '/blog' },
          { label: 'Careers', href: '/careers' }
        ]
      },
      {
        title: 'Support',
        links: [
          { label: 'Help Center', href: '/help' },
          { label: 'Contact', href: '/contact' },
          { label: 'Status', href: '/status', external: true }
        ]
      }
    ]}
    social={[
      { 
        label: 'GitHub', 
        href: 'https://github.com/company',
        icon: GitHub
      },
      { 
        label: 'Twitter', 
        href: 'https://twitter.com/company',
        icon: Twitter
      }
    ]}
    legal={[
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Cookies', href: '/cookies' }
    ]}
    newsletter={{
      title: 'Stay in the loop',
      description: 'Get notified about new features and updates.',
      buttonText: 'Subscribe',
      onSubmit: handleNewsletterSubmit
    }}
  />
-->
