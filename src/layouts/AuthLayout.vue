<template>
  <div>
    <Header />
    <div class="pt-16">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/AppNavbar.vue'
</script>
