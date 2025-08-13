<!--
  Form Components Example
  
  Demonstrates various form components and patterns using the Shugur Design System.
  Includes inputs, selects, checkboxes, radio buttons, and form validation.
-->

<script>
  import { Button, Card } from '../components';
  import { 
    Mail, 
    Lock, 
    User, 
    Phone, 
    Calendar,
    MapPin,
    Building,
    CreditCard,
    Eye,
    EyeOff,
    AlertCircle,
    CheckCircle
  } from 'lucide-svelte';
  
  // Form state
  let formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    address: '',
    city: '',
    country: '',
    company: '',
    jobTitle: '',
    newsletter: false,
    terms: false,
    notifications: 'email'
  };
  
  let showPassword = false;
  let showConfirmPassword = false;
  let errors = {};
  let isSubmitting = false;
  let submitSuccess = false;
  
  // Validation rules
  const validateField = (field, value) => {
    switch (field) {
      case 'firstName':
        return value.length < 2 ? 'First name must be at least 2 characters' : '';
      case 'lastName':
        return value.length < 2 ? 'Last name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'phone':
        const phoneRegex = /^\+?[\d\s-()]+$/;
        return !phoneRegex.test(value) ? 'Please enter a valid phone number' : '';
      case 'password':
        return value.length < 8 ? 'Password must be at least 8 characters' : '';
      case 'confirmPassword':
        return value !== formData.password ? 'Passwords do not match' : '';
      case 'terms':
        return !value ? 'You must accept the terms and conditions' : '';
      default:
        return '';
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    errors = newErrors;
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    isSubmitting = true;
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    isSubmitting = false;
    submitSuccess = true;
    
    // Reset form after success
    setTimeout(() => {
      submitSuccess = false;
      formData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        birthDate: '',
        address: '',
        city: '',
        country: '',
        company: '',
        jobTitle: '',
        newsletter: false,
        terms: false,
        notifications: 'email'
      };
    }, 3000);
  };
  
  const handleInputChange = (field, value) => {
    formData[field] = value;
    // Clear error when user starts typing
    if (errors[field]) {
      errors = { ...errors, [field]: '' };
    }
  };
  
  // Countries for select dropdown
  const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Germany',
    'France',
    'Australia',
    'Japan',
    'Brazil',
    'India',
    'China'
  ];
</script>

<svelte:head>
  <title>Form Components - Design System Example</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 py-12">
  <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold text-gray-900 sm:text-4xl">Form Components</h1>
      <p class="mt-4 text-lg text-gray-600">
        Comprehensive form examples using the Shugur Design System
      </p>
    </div>
    
    {#if submitSuccess}
      <!-- Success Message -->
      <div class="mb-8">
        <Card className="border-green-200 bg-green-50">
          <div class="flex items-center gap-3">
            <CheckCircle class="h-6 w-6 text-green-600" />
            <div>
              <h3 class="text-lg font-semibold text-green-900">Success!</h3>
              <p class="text-green-700">Your form has been submitted successfully.</p>
            </div>
          </div>
        </Card>
      </div>
    {/if}
    
    <form on:submit={handleSubmit} class="space-y-8">
      <!-- Personal Information -->
      <Card>
        <div class="space-y-6">
          <div>
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
          </div>
          
          <!-- Name Fields -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="form-field">
              <label for="firstName" class="form-label">
                <User class="h-4 w-4" />
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                bind:value={formData.firstName}
                on:input={(e) => handleInputChange('firstName', e.target.value)}
                class="form-input {errors.firstName ? 'form-input-error' : ''}"
                placeholder="Enter your first name"
                required
              />
              {#if errors.firstName}
                <div class="form-error">
                  <AlertCircle class="h-4 w-4" />
                  {errors.firstName}
                </div>
              {/if}
            </div>
            
            <div class="form-field">
              <label for="lastName" class="form-label">
                <User class="h-4 w-4" />
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                bind:value={formData.lastName}
                on:input={(e) => handleInputChange('lastName', e.target.value)}
                class="form-input {errors.lastName ? 'form-input-error' : ''}"
                placeholder="Enter your last name"
                required
              />
              {#if errors.lastName}
                <div class="form-error">
                  <AlertCircle class="h-4 w-4" />
                  {errors.lastName}
                </div>
              {/if}
            </div>
          </div>
          
          <!-- Contact Fields -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="form-field">
              <label for="email" class="form-label">
                <Mail class="h-4 w-4" />
                Email Address
              </label>
              <input
                id="email"
                type="email"
                bind:value={formData.email}
                on:input={(e) => handleInputChange('email', e.target.value)}
                class="form-input {errors.email ? 'form-input-error' : ''}"
                placeholder="Enter your email"
                required
              />
              {#if errors.email}
                <div class="form-error">
                  <AlertCircle class="h-4 w-4" />
                  {errors.email}
                </div>
              {/if}
            </div>
            
            <div class="form-field">
              <label for="phone" class="form-label">
                <Phone class="h-4 w-4" />
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                bind:value={formData.phone}
                on:input={(e) => handleInputChange('phone', e.target.value)}
                class="form-input {errors.phone ? 'form-input-error' : ''}"
                placeholder="+1 (555) 123-4567"
              />
              {#if errors.phone}
                <div class="form-error">
                  <AlertCircle class="h-4 w-4" />
                  {errors.phone}
                </div>
              {/if}
            </div>
          </div>
          
          <!-- Birth Date -->
          <div class="form-field">
            <label for="birthDate" class="form-label">
              <Calendar class="h-4 w-4" />
              Date of Birth
            </label>
            <input
              id="birthDate"
              type="date"
              bind:value={formData.birthDate}
              class="form-input"
            />
          </div>
        </div>
      </Card>
      
      <!-- Security -->
      <Card>
        <div class="space-y-6">
          <div>
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Security</h2>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="form-field">
              <label for="password" class="form-label">
                <Lock class="h-4 w-4" />
                Password
              </label>
              <div class="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  bind:value={formData.password}
                  on:input={(e) => handleInputChange('password', e.target.value)}
                  class="form-input pr-10 {errors.password ? 'form-input-error' : ''}"
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  on:click={() => showPassword = !showPassword}
                  class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                >
                  {#if showPassword}
                    <EyeOff class="h-4 w-4" />
                  {:else}
                    <Eye class="h-4 w-4" />
                  {/if}
                </button>
              </div>
              {#if errors.password}
                <div class="form-error">
                  <AlertCircle class="h-4 w-4" />
                  {errors.password}
                </div>
              {/if}
            </div>
            
            <div class="form-field">
              <label for="confirmPassword" class="form-label">
                <Lock class="h-4 w-4" />
                Confirm Password
              </label>
              <div class="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  bind:value={formData.confirmPassword}
                  on:input={(e) => handleInputChange('confirmPassword', e.target.value)}
                  class="form-input pr-10 {errors.confirmPassword ? 'form-input-error' : ''}"
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  on:click={() => showConfirmPassword = !showConfirmPassword}
                  class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                >
                  {#if showConfirmPassword}
                    <EyeOff class="h-4 w-4" />
                  {:else}
                    <Eye class="h-4 w-4" />
                  {/if}
                </button>
              </div>
              {#if errors.confirmPassword}
                <div class="form-error">
                  <AlertCircle class="h-4 w-4" />
                  {errors.confirmPassword}
                </div>
              {/if}
            </div>
          </div>
        </div>
      </Card>
      
      <!-- Address Information -->
      <Card>
        <div class="space-y-6">
          <div>
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Address Information</h2>
          </div>
          
          <div class="form-field">
            <label for="address" class="form-label">
              <MapPin class="h-4 w-4" />
              Street Address
            </label>
            <input
              id="address"
              type="text"
              bind:value={formData.address}
              class="form-input"
              placeholder="123 Main Street"
            />
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="form-field">
              <label for="city" class="form-label">
                <Building class="h-4 w-4" />
                City
              </label>
              <input
                id="city"
                type="text"
                bind:value={formData.city}
                class="form-input"
                placeholder="New York"
              />
            </div>
            
            <div class="form-field">
              <label for="country" class="form-label">
                <MapPin class="h-4 w-4" />
                Country
              </label>
              <select
                id="country"
                bind:value={formData.country}
                class="form-select"
              >
                <option value="">Select a country</option>
                {#each countries as country}
                  <option value={country}>{country}</option>
                {/each}
              </select>
            </div>
          </div>
        </div>
      </Card>
      
      <!-- Professional Information -->
      <Card>
        <div class="space-y-6">
          <div>
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Professional Information</h2>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="form-field">
              <label for="company" class="form-label">
                <Building class="h-4 w-4" />
                Company
              </label>
              <input
                id="company"
                type="text"
                bind:value={formData.company}
                class="form-input"
                placeholder="Your Company"
              />
            </div>
            
            <div class="form-field">
              <label for="jobTitle" class="form-label">
                <CreditCard class="h-4 w-4" />
                Job Title
              </label>
              <input
                id="jobTitle"
                type="text"
                bind:value={formData.jobTitle}
                class="form-input"
                placeholder="Software Engineer"
              />
            </div>
          </div>
        </div>
      </Card>
      
      <!-- Preferences -->
      <Card>
        <div class="space-y-6">
          <div>
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Preferences</h2>
          </div>
          
          <!-- Radio Buttons -->
          <div class="form-field">
            <fieldset>
              <legend class="form-label mb-3">Notification Preferences</legend>
              <div class="space-y-3">
                <label class="form-radio">
                  <input
                    type="radio"
                    bind:group={formData.notifications}
                    value="email"
                    class="form-radio-input"
                  />
                  <span class="form-radio-label">Email notifications only</span>
                </label>
                
                <label class="form-radio">
                  <input
                    type="radio"
                    bind:group={formData.notifications}
                    value="sms"
                    class="form-radio-input"
                  />
                  <span class="form-radio-label">SMS notifications only</span>
                </label>
                
                <label class="form-radio">
                  <input
                    type="radio"
                    bind:group={formData.notifications}
                    value="both"
                    class="form-radio-input"
                  />
                  <span class="form-radio-label">Both email and SMS</span>
                </label>
                
                <label class="form-radio">
                  <input
                    type="radio"
                    bind:group={formData.notifications}
                    value="none"
                    class="form-radio-input"
                  />
                  <span class="form-radio-label">No notifications</span>
                </label>
              </div>
            </fieldset>
          </div>
          
          <!-- Checkboxes -->
          <div class="space-y-4">
            <label class="form-checkbox">
              <input
                type="checkbox"
                bind:checked={formData.newsletter}
                class="form-checkbox-input"
              />
              <span class="form-checkbox-label">
                Subscribe to our newsletter for updates and special offers
              </span>
            </label>
            
            <label class="form-checkbox">
              <input
                type="checkbox"
                bind:checked={formData.terms}
                on:change={(e) => handleInputChange('terms', e.target.checked)}
                class="form-checkbox-input {errors.terms ? 'form-checkbox-error' : ''}"
                required
              />
              <span class="form-checkbox-label">
                I agree to the <a href="/terms" class="text-shugur-600 hover:text-shugur-700">Terms of Service</a> and <a href="/privacy" class="text-shugur-600 hover:text-shugur-700">Privacy Policy</a>
              </span>
            </label>
            
            {#if errors.terms}
              <div class="form-error ml-6">
                <AlertCircle class="h-4 w-4" />
                {errors.terms}
              </div>
            {/if}
          </div>
        </div>
      </Card>
      
      <!-- Submit Button -->
      <div class="flex justify-end">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="min-w-[200px]"
        >
          {#if isSubmitting}
            <div class="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
            Creating Account...
          {:else}
            Create Account
          {/if}
        </Button>
      </div>
    </form>
  </div>
</div>

<style>
  /* Form Component Styles */
  .form-field {
    @apply space-y-2;
  }
  
  .form-label {
    @apply flex items-center gap-2 text-sm font-medium text-gray-700;
  }
  
  .form-input {
    @apply w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm transition-colors focus:border-shugur-500 focus:outline-none focus:ring-1 focus:ring-shugur-500;
  }
  
  .form-input-error {
    @apply border-red-300 focus:border-red-500 focus:ring-red-500;
  }
  
  .form-select {
    @apply w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm transition-colors focus:border-shugur-500 focus:outline-none focus:ring-1 focus:ring-shugur-500;
  }
  
  .form-error {
    @apply flex items-center gap-2 text-sm text-red-600;
  }
  
  .form-radio {
    @apply flex items-center gap-3 cursor-pointer;
  }
  
  .form-radio-input {
    @apply h-4 w-4 border-gray-300 text-shugur-600 focus:ring-shugur-500;
  }
  
  .form-radio-label {
    @apply text-sm text-gray-700;
  }
  
  .form-checkbox {
    @apply flex items-start gap-3 cursor-pointer;
  }
  
  .form-checkbox-input {
    @apply mt-0.5 h-4 w-4 rounded border-gray-300 text-shugur-600 focus:ring-shugur-500;
  }
  
  .form-checkbox-error {
    @apply border-red-300 focus:ring-red-500;
  }
  
  .form-checkbox-label {
    @apply text-sm text-gray-700;
  }
</style>
