<!--
  Dashboard Layout Example
  
  Demonstrates a complete dashboard layout using the Shugur Design System.
  Includes sidebar navigation, header, metrics cards, charts, and data tables.
-->

<script>
  import { Button, Card } from '../components';
  import { 
    BarChart3,
    TrendingUp,
    TrendingDown,
    Users,
    DollarSign,
    Activity,
    Calendar,
    Settings,
    LogOut,
    Search,
    Bell,
    ChevronDown,
    Menu,
    X,
    Home,
    LineChart,
    PieChart,
    FileText,
    ShoppingCart,
    UserPlus,
    Filter,
    Download,
    MoreVertical,
    ChevronRight,
    ChevronLeft
  } from 'lucide-svelte';
  
  // Sidebar state
  let sidebarOpen = false;
  
  // Sample data
  const metrics = [
    {
      title: 'Total Revenue',
      value: '$45,231',
      change: '+20.1%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Active Users',
      value: '2,350',
      change: '+15.3%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '-2.5%',
      trend: 'down',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: 'Avg. Session',
      value: '4m 32s',
      change: '+8.2%',
      trend: 'up',
      icon: Activity,
      color: 'text-orange-600'
    }
  ];
  
  const recentOrders = [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      product: 'Premium Plan',
      amount: '$299',
      status: 'completed',
      date: '2024-01-15'
    },
    {
      id: 'ORD-002',
      customer: 'Sarah Wilson',
      product: 'Basic Plan',
      amount: '$99',
      status: 'pending',
      date: '2024-01-15'
    },
    {
      id: 'ORD-003',
      customer: 'Mike Johnson',
      product: 'Enterprise Plan',
      amount: '$599',
      status: 'completed',
      date: '2024-01-14'
    },
    {
      id: 'ORD-004',
      customer: 'Emily Brown',
      product: 'Premium Plan',
      amount: '$299',
      status: 'failed',
      date: '2024-01-14'
    },
    {
      id: 'ORD-005',
      customer: 'David Lee',
      product: 'Basic Plan',
      amount: '$99',
      status: 'completed',
      date: '2024-01-13'
    }
  ];
  
  const recentActivities = [
    {
      user: 'John Doe',
      action: 'completed payment',
      time: '2 minutes ago',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
    },
    {
      user: 'Sarah Wilson',
      action: 'signed up for premium',
      time: '1 hour ago',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1d1?w=32&h=32&fit=crop&crop=face'
    },
    {
      user: 'Mike Johnson',
      action: 'upgraded to enterprise',
      time: '3 hours ago',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face'
    },
    {
      user: 'Emily Brown',
      action: 'downloaded report',
      time: '5 hours ago',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face'
    }
  ];
  
  const sidebarItems = [
    { label: 'Dashboard', href: '/dashboard', icon: Home, active: true },
    { label: 'Analytics', href: '/analytics', icon: BarChart3, active: false },
    { label: 'Reports', href: '/reports', icon: FileText, active: false },
    { label: 'Orders', href: '/orders', icon: ShoppingCart, active: false },
    { label: 'Customers', href: '/customers', icon: Users, active: false },
    { label: 'Settings', href: '/settings', icon: Settings, active: false }
  ];
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
</script>

<svelte:head>
  <title>Dashboard - Design System Example</title>
</svelte:head>

<div class="min-h-screen bg-gray-50">
  <!-- Sidebar -->
  <div class="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform {sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0">
    <div class="flex h-full flex-col">
      <!-- Logo -->
      <div class="flex h-16 items-center justify-between px-6 border-b border-gray-200">
        <div class="flex items-center gap-3">
          <div class="h-8 w-8 rounded-lg bg-shugur-600 flex items-center justify-center">
            <BarChart3 class="h-5 w-5 text-white" />
          </div>
          <span class="text-lg font-semibold text-gray-900">Dashboard</span>
        </div>
        <button
          on:click={() => sidebarOpen = false}
          class="lg:hidden p-1 rounded-md text-gray-400 hover:text-gray-600"
        >
          <X class="h-5 w-5" />
        </button>
      </div>
      
      <!-- Navigation -->
      <nav class="flex-1 px-4 py-6 space-y-2">
        {#each sidebarItems as item}
          <a
            href={item.href}
            class="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors {item.active 
              ? 'bg-shugur-50 text-shugur-700 border-r-2 border-shugur-600' 
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }"
          >
            <svelte:component this={item.icon} class="h-5 w-5" />
            {item.label}
          </a>
        {/each}
      </nav>
      
      <!-- User Profile -->
      <div class="border-t border-gray-200 p-4">
        <div class="flex items-center gap-3">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
            alt="User avatar"
            class="h-10 w-10 rounded-full object-cover"
          />
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">John Doe</p>
            <p class="text-xs text-gray-500 truncate">john@example.com</p>
          </div>
          <button class="p-1 rounded-md text-gray-400 hover:text-gray-600">
            <LogOut class="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Main Content -->
  <div class="lg:pl-64">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4">
          <button
            on:click={() => sidebarOpen = true}
            class="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
          >
            <Menu class="h-5 w-5" />
          </button>
          
          <div>
            <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p class="text-sm text-gray-500">Welcome back, John!</p>
          </div>
        </div>
        
        <div class="flex items-center gap-4">
          <!-- Search -->
          <div class="relative hidden sm:block">
            <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              class="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-shugur-500 focus:border-transparent"
            />
          </div>
          
          <!-- Notifications -->
          <button class="relative p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100">
            <Bell class="h-5 w-5" />
            <span class="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
          </button>
          
          <!-- Profile Dropdown -->
          <div class="relative">
            <button class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                alt="User avatar"
                class="h-8 w-8 rounded-full object-cover"
              />
              <ChevronDown class="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </header>
    
    <!-- Page Content -->
    <main class="p-6">
      <!-- Metrics Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {#each metrics as metric, index}
          <Card className="animate-slide-up" style="animation-delay: {index * 100}ms">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-gray-600">{metric.title}</p>
                <p class="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                <div class="flex items-center mt-2">
                  {#if metric.trend === 'up'}
                    <TrendingUp class="h-4 w-4 text-green-500 mr-1" />
                  {:else}
                    <TrendingDown class="h-4 w-4 text-red-500 mr-1" />
                  {/if}
                  <span class="text-sm font-medium {metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}">
                    {metric.change}
                  </span>
                  <span class="text-sm text-gray-500 ml-1">vs last month</span>
                </div>
              </div>
              <div class="p-3 rounded-lg bg-gray-50">
                <svelte:component this={metric.icon} class="h-6 w-6 {metric.color}" />
              </div>
            </div>
          </Card>
        {/each}
      </div>
      
      <!-- Charts Row -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- Revenue Chart -->
        <Card className="lg:col-span-2">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Revenue Overview</h3>
              <p class="text-sm text-gray-500">Monthly revenue for the past 6 months</p>
            </div>
            <div class="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Calendar class="h-4 w-4 mr-2" />
                Last 6 months
              </Button>
              <Button variant="ghost" size="sm">
                <Download class="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <!-- Placeholder Chart -->
          <div class="h-64 bg-gradient-to-r from-shugur-50 to-blue-50 rounded-lg flex items-center justify-center">
            <div class="text-center">
              <BarChart3 class="h-12 w-12 text-shugur-400 mx-auto mb-2" />
              <p class="text-sm text-gray-500">Chart visualization would go here</p>
            </div>
          </div>
        </Card>
        
        <!-- Top Products -->
        <Card>
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-semibold text-gray-900">Top Products</h3>
            <Button variant="ghost" size="sm">
              <MoreVertical class="h-4 w-4" />
            </Button>
          </div>
          
          <div class="space-y-4">
            {#each ['Premium Plan', 'Basic Plan', 'Enterprise Plan'] as product, index}
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="h-8 w-8 rounded-lg bg-shugur-100 flex items-center justify-center">
                    <span class="text-xs font-semibold text-shugur-700">{index + 1}</span>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-900">{product}</p>
                    <p class="text-xs text-gray-500">{120 - index * 20} sales</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-sm font-semibold text-gray-900">${(500 - index * 100).toLocaleString()}</p>
                  <p class="text-xs text-green-600">+{20 - index * 3}%</p>
                </div>
              </div>
            {/each}
          </div>
        </Card>
      </div>
      
      <!-- Tables Row -->
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <!-- Recent Orders -->
        <Card className="xl:col-span-2">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Recent Orders</h3>
              <p class="text-sm text-gray-500">Latest customer orders and their status</p>
            </div>
            <div class="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Filter class="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="ghost" size="sm">
                <Download class="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
          
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-gray-200">
                  <th class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Order ID</th>
                  <th class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Customer</th>
                  <th class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Product</th>
                  <th class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Amount</th>
                  <th class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Status</th>
                  <th class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Date</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                {#each recentOrders as order}
                  <tr class="hover:bg-gray-50">
                    <td class="py-3 text-sm font-medium text-gray-900">{order.id}</td>
                    <td class="py-3 text-sm text-gray-600">{order.customer}</td>
                    <td class="py-3 text-sm text-gray-600">{order.product}</td>
                    <td class="py-3 text-sm font-semibold text-gray-900">{order.amount}</td>
                    <td class="py-3">
                      <span class="inline-flex px-2 py-1 text-xs font-medium rounded-full {getStatusColor(order.status)}">
                        {order.status}
                      </span>
                    </td>
                    <td class="py-3 text-sm text-gray-500">{order.date}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
          
          <div class="mt-6 flex items-center justify-between">
            <p class="text-sm text-gray-500">Showing 5 of 247 orders</p>
            <div class="flex items-center gap-2">
              <Button variant="ghost" size="sm" disabled>
                <ChevronLeft class="h-4 w-4" />
                Previous
              </Button>
              <Button variant="ghost" size="sm">
                Next
                <ChevronRight class="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
        
        <!-- Recent Activity -->
        <Card>
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <Button variant="ghost" size="sm">
              View all
            </Button>
          </div>
          
          <div class="space-y-4">
            {#each recentActivities as activity}
              <div class="flex items-start gap-3">
                <img 
                  src={activity.avatar}
                  alt={activity.user}
                  class="h-8 w-8 rounded-full object-cover"
                />
                <div class="flex-1 min-w-0">
                  <p class="text-sm text-gray-900">
                    <span class="font-medium">{activity.user}</span>
                    {activity.action}
                  </p>
                  <p class="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            {/each}
          </div>
          
          <div class="mt-6 pt-4 border-t border-gray-200">
            <Button variant="ghost" size="sm" fullWidth>
              <UserPlus class="h-4 w-4 mr-2" />
              View all activity
            </Button>
          </div>
        </Card>
      </div>
    </main>
  </div>
</div>

<!-- Overlay for mobile sidebar -->
{#if sidebarOpen}
  <div 
    class="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden"
    on:click={() => sidebarOpen = false}
  ></div>
{/if}

<style>
  /* Additional dashboard-specific styles */
  .animate-slide-up {
    animation: slideUp 0.6s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
  }
  
  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
