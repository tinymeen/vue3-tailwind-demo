<template>
  <div>
    <button
      :disabled="disabled"
      :class="disabled ? 'bg-opacity-30 bg-btn' : 'hover:bg-primary bg-btn'"
      class=" text-white w-full font-bold py-2 px-4 rounded flex items-center justify-center"
    >
      <slot name="leftIcon" />
      <slot />
      <slot name="rightIcon" />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps(['disabled'])
</script>
