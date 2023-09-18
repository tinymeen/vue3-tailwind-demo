<template>
  <!-- Navbar -->
  <nav class="bg-main z-10 flex items-center justify-between py-6 px-[18px] shadow-nav fixed w-full top-0">
    <img
      class="w-40"
      src="/logo.svg"
    />
    <div
      v-if="userStore.isLoggedIn"
      class="flex relative"
    >
      <button class="bg-[#333778] flex text-xs py-2 px-3 rounded-full text-white mr-4">
        <SparkIcon class="mr-1" />
        Trail expires in 12 days
      </button>
      <QuestionMarkCircleIcon class="text-white w-5 mr-4 cursor-pointer" />
      <GiftIcon class="text-white w-5 mr-4 cursor-pointer" />
      <img
        :src="userStore.currentUser.avatar"
        class="w-8 h-8 rounded-full cursor-pointer"
        @click="isOpen = !isOpen"
      />
      <ul
        v-if="isOpen"
        ref="menu"
        class="bg-white absolute border rounded-md shadow-login-card py-6 right-0 top-10 ease-in-out duration-150"
      >
        <li class="hover:bg-primary px-6 py-2 cursor-pointer">{{ userStore.currentUser.name }}</li>
        <li class="hover:bg-primary px-6 py-2 cursor-pointer">{{ userStore.currentUser.email }}</li>
        <li
          class="hover:bg-primary px-6 py-2 cursor-pointer"
          @click="isOpenDialog = true"
        >
          Logout
        </li>
      </ul>
    </div>
  </nav>
  <ConfirmationDialog
    v-model="isOpenDialog"
    @logout="userStore.logout"
  />
</template>

<script setup lang="ts">
import SparkIcon from '@/components/icons/SparkleIcon.vue'
import ConfirmationDialog from './ConfirmationDialog.vue';
import { QuestionMarkCircleIcon, GiftIcon } from '@heroicons/vue/24/outline'
import { onClickOutside } from '@vueuse/core'
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';

const userStore = useUserStore()
const isOpen = ref(false)
const isOpenDialog = ref(false)
const menu = ref()

onClickOutside(menu, () => isOpen.value = false)
</script>
