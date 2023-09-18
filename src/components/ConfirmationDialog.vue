<template>
  <div
    v-if="modelValue"
    tabindex="-1"
    class="flex backdrop-blur-md overflow-y-auto shadow-login-card overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
  >
    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative p-4 text-center bg-label rounded-lg shadow sm:p-5">
        <button
          type="button"
          class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          data-modal-toggle="deleteModal"
        >
          <span class="sr-only">Close modal</span>
        </button>
        <p class="mb-4 text-white">Are you sure you want to logout?</p>
        <div class="flex justify-center items-center space-x-4">
          <button
            data-modal-toggle="deleteModal"
            type="button"
            class="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 focus:ring-4 focus:outline-none focus:ring-primary-300 focus:z-10"
            @click="modelValue = false"
          >
            No, cancel
          </button>
          <button
            type="submit"
            class="py-2 px-3 text-sm font-medium text-center text-white bg-main rounded-lg focus:ring-4 focus:outline-none focus:ring-red-300"
            @click="$emit('logout', $event)"
          >
            Yes, I'm sure
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel()
defineEmits(['logout'])
</script>
