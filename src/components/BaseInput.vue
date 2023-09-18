<template>
  <div class="relative">
    <p
      v-if="label"
      class="block mb-1 text-sm text-label font-medium"
    >
      {{ label }}
    </p>
    <div class="absolute top-2 left-1">
      <slot name="leftIcon"></slot>
    </div>
    <input
      v-model="modelValue"
      :type="type"
      :placeholder="placeholder"
      :class="icon ? 'indent-6' : ''"
      class="border border-[#C6C7DB] rounded-[3px] bg-gray-50 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary block w-full p-2.5"
      @input="$emit('input', $event)"
    >
  </div>
</template>

<script setup lang="ts">
defineProps(['label', 'type', 'icon', 'placeholder'])
defineEmits(['input'])
const modelValue = defineModel()
</script>
