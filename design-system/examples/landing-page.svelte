<!--
  Complete Landing Page Example
  
  Demonstrates a full landing page layout using the Shugur Design System.
  Includes hero, features, testimonials, pricing, and footer sections.
-->

<script>
  import { 
    Navigation, 
    Hero, 
    Features, 
    Card, 
    Button, 
    Footer 
  } from '../components';
  
  import { 
    ArrowRight, 
    Clock, 
    Shield, 
    Cpu, 
    CheckCircle,
    Star,
    Users,
    Zap
  } from 'lucide-svelte';
  
  // Navigation configuration
  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '/about' },
    { label: 'Documentation', href: '/docs', external: true }
  ];
  
  const navActions = [
    { label: 'Sign In', href: '/signin', className: 'nav-link' },
    { 
      label: 'Get Started', 
      href: '/signup', 
      className: 'btn btn-primary' 
    }
  ];
  
  // Hero configuration
  const heroActions = [
    { 
      label: 'Start Free Trial', 
      href: '/signup', 
      className: 'btn btn-primary btn-lg',
      icon: ArrowRight
    },
    { 
      label: 'View Demo', 
      href: '/demo', 
      className: 'btn btn-secondary btn-lg'
    }
  ];
  
  // Features data
  const features = [
    {
      name: 'Lightning Fast',
      description: 'Deploy your application in minutes with our optimized infrastructure and automated setup process.',
      icon: Zap
    },
    {
      name: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption, SOC 2 compliance, and advanced threat protection.',
      icon: Shield
    },
    {
      name: 'High Performance',
      description: 'Built on cutting-edge technology stack that scales automatically based on your traffic demands.',
      icon: Cpu
    },
    {
      name: 'Global CDN',
      description: 'Worldwide content delivery network ensures fast loading times for users anywhere in the world.',
      icon: Clock
    },
    {
      name: '99.9% Uptime',
      description: 'Reliable infrastructure with automatic failover and redundancy across multiple data centers.',
      icon: CheckCircle
    },
    {
      name: '24/7 Support',
      description: 'Expert support team available around the clock to help you succeed with quick response times.',
      icon: Users
    }
  ];
  
  // Testimonials data
  const testimonials = [
    {
      content: "This platform transformed our development workflow. We're shipping features 3x faster than before.",
      author: "Sarah Chen",
      role: "CTO at TechFlow",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1d1?w=64&h=64&fit=crop&crop=face"
    },
    {
      content: "The best investment we've made. ROI was positive within the first month of implementation.",
      author: "Michael Rodriguez",
      role: "Founder at StartupX",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    },
    {
      content: "Incredible performance and reliability. Our users love the improved experience.",
      author: "Emily Johnson",
      role: "Product Manager at ScaleUp",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    }
  ];
  
  // Pricing data
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: 'per month',
      description: 'Perfect for small projects and teams getting started.',
      features: [
        '5 team members',
        '10GB storage',
        'Basic analytics',
        'Email support',
        'SSL certificates'
      ],
      buttonText: 'Start Free Trial',
      buttonVariant: 'secondary',
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: 'per month',
      description: 'Ideal for growing businesses and larger teams.',
      features: [
        '25 team members',
        '100GB storage',
        'Advanced analytics',
        'Priority support',
        'Custom domains',
        'API access',
        'Advanced security'
      ],
      buttonText: 'Start Free Trial',
      buttonVariant: 'primary',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations with custom requirements.',
      features: [
        'Unlimited team members',
        'Unlimited storage',
        'Custom analytics',
        '24/7 phone support',
        'Custom integrations',
        'Dedicated manager',
        'SLA guarantee'
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'secondary',
      popular: false
    }
  ];
  
  // Company data for footer
  const company = {
    name: 'Your Company',
    tagline: 'Build something amazing with our platform.',
    copyright: '© 2024 Your Company. All rights reserved.'
  };
  
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Documentation', href: '/docs' },
        { label: 'API Reference', href: '/api' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Tutorials', href: '/tutorials' },
        { label: 'Community', href: '/community' },
        { label: 'Status', href: '/status' }
      ]
    }
  ];
  
  const socialLinks = [
    { 
      label: 'GitHub', 
      href: 'https://github.com/company',
      svg: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>'
    },
    { 
      label: 'Twitter', 
      href: 'https://twitter.com/company',
      svg: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>'
    }
  ];
  
  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' }
  ];
</script>

<svelte:head>
  <title>Your Company - Build Something Amazing</title>
  <meta name="description" content="Transform your development workflow with our powerful platform. Start building amazing applications today." />
</svelte:head>

<!-- Navigation -->
<Navigation 
  logo={{ 
    src: '/logo.svg', 
    alt: 'Your Company Logo',
    width: 170,
    height: 40
  }}
  links={navLinks}
  actions={navActions}
/>

<!-- Hero Section -->
<Hero
  variant="centered"
  size="xl"
  background="gradient"
  eyebrow="Welcome to the Future"
  title="Build Something Amazing"
  subtitle="Transform your development workflow with our powerful platform. Deploy faster, scale effortlessly, and focus on what matters most - building great products."
  actions={heroActions}
/>

<!-- Features Section -->
<Features
  id="features"
  subtitle="Why Choose Us"
  title="Everything you need to succeed"
  description="Our platform provides all the tools and services you need to build, deploy, and scale your applications with confidence."
  {features}
  layout="grid"
  columns="3"
  background="gray"
/>

<!-- Testimonials Section -->
<section class="py-24 sm:py-32 bg-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-xl text-center">
      <h2 class="text-lg font-semibold leading-8 tracking-tight text-shugur-600">Testimonials</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Loved by developers worldwide
      </p>
    </div>
    
    <div class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {#each testimonials as testimonial, index}
          <Card className="animate-slide-up" style="animation-delay: {index * 150}ms">
            <div class="flex gap-1 mb-4">
              {#each Array(5) as _, i}
                <Star class="h-5 w-5 text-yellow-400 fill-current" />
              {/each}
            </div>
            
            <blockquote class="text-gray-600 mb-6">
              "{testimonial.content}"
            </blockquote>
            
            <div class="flex items-center gap-3">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.author}
                class="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <div class="font-semibold text-gray-900">{testimonial.author}</div>
                <div class="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          </Card>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Pricing Section -->
<section id="pricing" class="py-24 sm:py-32 bg-gray-50">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-4xl text-center">
      <h2 class="text-base font-semibold leading-7 text-shugur-600">Pricing</h2>
      <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Choose the perfect plan for your needs
      </p>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Start with our free trial and upgrade as you grow. All plans include our core features and 24/7 support.
      </p>
    </div>
    
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 mt-16">
      {#each pricingPlans as plan, index}
        <Card 
          className="relative {plan.popular ? 'ring-2 ring-shugur-500' : ''} animate-slide-up" 
          style="animation-delay: {index * 200}ms"
        >
          {#if plan.popular}
            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span class="bg-shugur-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                Most Popular
              </span>
            </div>
          {/if}
          
          <div class="text-center">
            <h3 class="text-lg font-semibold leading-8 text-gray-900">{plan.name}</h3>
            <p class="mt-4 text-sm leading-6 text-gray-600">{plan.description}</p>
            <p class="mt-6 flex items-baseline justify-center gap-x-1">
              <span class="text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
              <span class="text-sm font-semibold leading-6 text-gray-600">/{plan.period}</span>
            </p>
          </div>
          
          <ul class="mt-8 space-y-3 text-sm leading-6 text-gray-600">
            {#each plan.features as feature}
              <li class="flex gap-x-3">
                <CheckCircle class="h-6 w-5 flex-none text-shugur-600" />
                {feature}
              </li>
            {/each}
          </ul>
          
          <div class="mt-8">
            <Button 
              variant={plan.buttonVariant} 
              fullWidth
              size="lg"
            >
              {plan.buttonText}
            </Button>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-24 sm:py-32 bg-shugur-600">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Ready to get started?
      </h2>
      <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-shugur-100">
        Join thousands of developers who are already building amazing applications with our platform.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <Button variant="secondary" size="lg">
          Start Free Trial
        </Button>
        <Button variant="ghost" size="lg" className="text-white hover:text-shugur-100">
          Contact Sales
        </Button>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<Footer 
  logo={{ 
    src: '/logo-light.svg', 
    alt: 'Your Company Logo',
    width: 170,
    height: 40
  }}
  {company}
  sections={footerSections}
  social={socialLinks}
  legal={legalLinks}
/>

<style>
  /* Additional custom styles can go here */
</style>
