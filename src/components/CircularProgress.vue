<template>
  <div class="relative w-16 h-16">
    <svg class="w-16 h-16">
      <circle
        class="text-gray-300"
        stroke-width="5"
        stroke="currentColor"
        fill="transparent"
        r="20"
        cx="30"
        cy="30"
      />
      <circle
        :class="`${colorVariants[color]}`"
        style="transform: rotate(268deg); transform-origin: 46% 46%;"
        stroke-width="5"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="circumference - percent / 100 * circumference"
        stroke-linecap="round"
        stroke="currentColor"
        fill="transparent"
        r="20"
        cx="30"
        cy="30"
      />
    </svg>
    <label
      v-if="percent > 0 && color == 'positive'"
      class="text-xs text-side-nav absolute top-5 right-5"
    >
      {{ percent }}%
    </label>
    <BlockIcon
      v-else-if="color == 'negative'"
      class="absolute top-[21px] right-[25px]"
    />
    <DraftIcon
      v-else
      class="absolute top-5 right-7"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DraftIcon from '@/components/icons/DraftIcon.vue';
import BlockIcon from '@/components/icons/BlockIcon.vue'

defineProps(['percent', 'color'])
const circumference = ref(20 * 2 * Math.PI)

const colorVariants: any = ref({
  positive: 'text-positive',
  warning: 'text-warning',
  negative: 'text-negative'
})
</script>
