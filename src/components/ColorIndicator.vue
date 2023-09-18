<template>
  <span
    class="border rounded-full h-2 w-2 block mr-2"
    :class="color ? `${colorVariants[color]}` : 'bg-primary'"
  >&nbsp;</span>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps(['color'])

const colorVariants: any = ref({
  positive: 'bg-positive',
  warning: 'bg-warning',
  negative: 'bg-negative'
})
</script>
