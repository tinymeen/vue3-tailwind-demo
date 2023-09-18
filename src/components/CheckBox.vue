<template>
  <input
    type="checkbox"
    v-model="modelValue"
    class="border-gray-300 rounded h-4 w-4"
    @input="$emit('input', modelValue)"
  />
</template>

<script setup lang="ts">
defineEmits(['input'])
const modelValue = defineModel()
</script>
