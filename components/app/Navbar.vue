<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import NightmodeSwitch from "~/components/app/NightmodeSwitch.vue";


const items = ref<NavigationMenuItem[]>([
  {
    label: 'Home',
    icon: 'i-lucide-home',
    to: '/',
  },
  {
    label: 'Tools',
    icon: 'i-lucide-book-open',
    children: [
      {
        label: 'Create New Deck',
        description: 'Fully styled and customizable components for Nuxt.',
        icon: 'i-lucide-house',
        to: '/deckbuilder',
      },
      {
        label: 'Power Calculator',
        description: 'Learn how to install and configure Nuxt UI in your application.',
        icon: 'i-lucide-cloud-download',
        to: '/powerCalculator',
      },
      {
        label: 'Roast',
        icon: 'i-lucide-smile',
        description: 'You have nothing to do. Have the AI take a look at your deck and humble you.'
      },
    ]
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    badge: '3.8k',
    to: 'https://github.com',
    target: '_blank'
  },
  {label: 'Login',
  icon: 'ic:round-login',
  to: '/login',},
  {
    label: 'Settings',
    icon: 'ic:baseline-settings',
    slot: 'settings' as const,
  },
  {
    label: 'Help',
    icon: 'i-lucide-circle-help',
    disabled: true
  }
])
</script>

<template>
  <nav class="relative flex items-center justify-center px-6 py-3  ">
    <!-- Center: Navigation Menu -->
    <UNavigationMenu
        color="neutral"
        arrow
        content-orientation="vertical"
        :items="items"
        class="absolute left-1/2 -translate-x-1/2"
    >
      <!-- Slot for the 'Settings' item -->
      <template #settings-content="{ item }">
        <div class="p-4 space-y-2">
          <p class="text-sm font-medium text-muted">Theme</p>
          <NightmodeSwitch color="neutral" />
        </div>
      </template>
    </UNavigationMenu>
  </nav>
</template>


