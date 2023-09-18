<template>
  <div class="bg-white">
    <div
      class="sidebar shadow-login-card mt-[80px] fixed top-0 bottom-0 lg:left-0 w-[230px] overflow-y-auto text-center bg-white"
    >
      <div
        v-for="(link, index) in navLinks"
        :key="index"
        :class="activeLink.name == link.name ? 'bg-primary bg-opacity-20 border-l-4 border-primary' : ''"
        class="p-2.5 mt-3 flex items-center px-4 duration-100 cursor-pointer text-white"
        @click="changeRoute(link)"
      >
        <component
          :is="link.icon"
          :bg-icon="activeLink.name == link.name ? '#757AE9' : '#E1E3EF'"
          :icon="activeLink.name == link.name ? 'white' : '#A9ABC1'"
        />
        <span class="text-sm ml-4 text-side-nav">{{ link.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { useRouter } from 'vue-router'
import LeadIcon from '@/components/icons/LeadsIcon.vue'
import InboxIcon from '@/components/icons/InboxIcon.vue'
import CampaignIcon from '@/components/icons/CampaignIcon.vue'

const router = useRouter()

const navLinks = shallowRef([
  { name: 'All Leads', route: 'all-leads', icon: LeadIcon },
  { name: 'Master Inbox', route: 'master-inbox', icon: InboxIcon },
  { name: 'Email Campaigns', route: 'email-campaign', icon: CampaignIcon }
])

const activeLink = ref({ name: 'Email Campaigns', route: 'email-campaign', icon: CampaignIcon })

const changeRoute = (val: any) => {
  router.push({ name: val.route })
  activeLink.value = val
}
</script>
