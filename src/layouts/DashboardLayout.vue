<template>
  <div>
    <Header />
    <SidebarNav />
    <div class="ml-[230px] pt-20">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/AppNavbar.vue'
import SidebarNav from '@/components/SidebarNav.vue';
</script>
