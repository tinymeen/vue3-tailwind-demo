<template>
  <div class="flex shadow-login-card flex-col justify-center items-center bg-white w-[34rem] mx-auto mt-16 py-16 px-12">
    <h3 class="text-2xl font-bold mb-2">Welcome to Smartlead.ai</h3>
    <p class="text-sm">Log in to your account</p>

    <form class="w-full mt-6">
      <div class="mb-6">
        <BaseInput
          v-model="loginPayload.email"
          label="Email"
          type="email"
        />
      </div>
      <div class="mb-6">
        <BasePasswordInput
          v-model="loginPayload.password"
          label="Password"
          type="password"
        />
      </div>
      <BaseButton
        :disabled="!isEmailValid || !isPassValid"
        @click.prevent="signIn"
      >
        Sign In
      </BaseButton>
      <p
        v-if="message"
        class="mt-3 text-red-500 text-base"
      >
        {{ message }}
      </p>

    </form>

  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useUserStore } from '@/stores/user'
import BaseInput from '@/components/BaseInput.vue';
import BasePasswordInput from '@/components/BasePasswordInput.vue';
import BaseButton from '@/components/BaseButton.vue'

const userStore = useUserStore()
const loginPayload = ref({
  email: '',
  password: ''
})
const message: any = ref('')

const isEmailValid = computed(() => {
  return String(loginPayload.value.email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
})

const isPassValid = computed(() => {
  if (loginPayload.value.password?.length >= 6) {
    return true
  } else {
    return false
  }
})

const signIn = () => {
  const res = userStore.login(loginPayload.value)
  message.value = res?.message
}
</script>
