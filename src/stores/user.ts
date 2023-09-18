import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { userList } from './DB.json'

export const useUserStore = defineStore('user', () => {

  const router = useRouter()
  // state
  const currentUser: any = ref(null)
  const isLoggedIn = ref(false)

  // Getter
  const getCurrentUser = computed(() => currentUser.value)

  // Action
  const login = (payload: any) => {
    const isUserExist: any = userList.find(u => u.email === payload.email)
    if (isUserExist) {
      if (isUserExist.password == payload.password) {
        currentUser.value = isUserExist
        isLoggedIn.value = true
        router.push({ name: 'email-campaign' })
      } else {
        return new Error("Password is incorrect, please enter valid password");
      }
    } else {
      return new Error("User with this email does not exists");
    }
  }

  const logout = () => {
    currentUser.value = null
    isLoggedIn.value = false
    router.push({ name: 'login' })
  }

  return { currentUser, getCurrentUser, login, isLoggedIn, logout }
}, { persist: true })
