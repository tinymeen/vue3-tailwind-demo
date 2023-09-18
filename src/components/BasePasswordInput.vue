<template>
  <div>
    <div class="flex justify-between">
      <p class="block mb-1 text-sm text-label font-medium">{{ label }}</p>
      <router-link
        class="text-primary text-sm"
        to="#"
      >
        Forgot Password ?
      </router-link>
    </div>
    <div class="relative">
      <input
        v-model="modelValue"
        :type="inputType"
        class="border border-[#C6C7DB] rounded-[3px] bg-gray-50 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary block w-full p-2.5"
      >
      <span
        class="absolute text-primary text-sm right-2 top-3 cursor-pointer"
        @click="toggleType"
      >
        {{ inputType == 'password' ? 'Show' : 'Hide' }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps(['label'])
const modelValue = defineModel()
const inputType = ref('password')

const toggleType = () => {
  if (inputType.value == 'password') inputType.value = 'text'
  else inputType.value = 'password'
}
</script>
