<template>
  <div class="overflow-x-auto p-5">
    <table class="w-full whitespace-nowrap">
      <thead class="bg-[#E9EBF9]">
        <tr>
          <th>
            <div class="pl-3 text-left py-4">
              <CheckBox
                v-model="headerCheckbox"
                @input="$emit('select-all', $event)"
              />
            </div>
          </th>
          <th colspan="2">
            <div class="text-left pl-[22px] text-base font-bold text-[#686B8A] py-4">
              Campaign Details
            </div>
          </th>
          <th colspan="7">
            <div class="text-left pl-[22px] text-base font-bold text-[#686B8A] py-4">
              Report
            </div>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="data.length">
        <tr
          v-for="(item, index) in data"
          :key="index"
          tabindex="0"
          class="bg-white"
        >
          <td>
            <div class="pl-3">
              <CheckBox v-model="item.isChecked" />
            </div>
          </td>
          <td>
            <div class="ml-5">
              <CircularProgress
                :percent="item.engagement"
                :color="item.condition"
              />
            </div>
          </td>
          <td class="">
            <div class="flex flex-col py-6">
              <p class="text-base text-btn font-bold mb-2 leading-none mr-2">{{ item.name }}</p>
              <label class="text-sm text-side-nav flex items-center font-normal">
                <ColorIndicatorVue :color="item.condition" />
                {{ item.status }}
              </label>
            </div>
          </td>
          <td class="pl-5">
            <div class="flex flex-col">
              <p class="text-btn text-xl font-medium mb-2">{{ item.sent.total }}</p>
              <label class="text-sm text-side-nav flex items-center">Sent
                <ErrorIcon
                  v-if="item.condition == 'warning'"
                  class="ml-1"
                />
              </label>
            </div>
          </td>
          <td class="pl-5">
            <div class="flex flex-col">
              <p class="text-warning text-xl font-medium mb-2">{{ item.clicked.total }}
                <span class="text-xs text-side-nav">{{ item.clicked.percent }}</span>
              </p>
              <label class="text-sm text-side-nav flex items-center">Clicked
                <ErrorIcon
                  v-if="item.condition == 'warning'"
                  class="ml-1"
                />
              </label>
            </div>
          </td>
          <td class="pl-5">
            <div class="flex flex-col">
              <p class="text-pink text-xl font-medium mb-2">{{ item.opened.total }}
                <span class="text-xs text-side-nav">{{ item.opened.percent }}</span>
              </p>
              <label class="text-sm text-side-nav flex items-center">Opened
                <ErrorIcon
                  v-if="item.condition == 'warning'"
                  class="ml-1"
                />
              </label>
            </div>
          </td>
          <td class="pl-5">
            <div class="flex flex-col">
              <p class="text-sea text-xl font-medium mb-2">{{ item.replied.total }}
                <span class="text-xs text-side-nav">{{ item.replied.percent }}</span>
              </p>
              <label class="text-sm text-side-nav flex items-center">Replied
                <ErrorIcon
                  v-if="item.condition == 'warning'"
                  class="ml-1"
                />
              </label>
            </div>
          </td>
          <td class="pl-5">
            <div class="flex flex-col">
              <p class="text-positive text-xl font-medium mb-2">{{ item.positive_reply.total }}
                <span class="text-xs text-side-nav">{{ item.positive_reply.percent }}</span>
              </p>
              <label class="text-sm text-side-nav flex items-center">Positve Reply
                <SolidWarningIcon
                  v-if="item.condition == 'warning'"
                  class="ml-1"
                />
                <WarningIcon
                  v-else
                  class="ml-1"
                />
              </label>
            </div>
          </td>
          <td>
            <button
              class="text-sm leading-none border border-[#E5E7F9] text-gray-400 p-2 bg-[#FAFAFF] rounded hover:bg-gray-200"
            >
              <PauseIcon class="w-5 h-5" />
            </button>
          </td>
          <td>
            <button
              class="text-sm leading-none border border-[#E5E7F9] text-gray-400 p-2 bg-[#FAFAFF] rounded hover:bg-gray-200"
            >
              <EditIcon class="w-5 h-5" />
            </button>
          </td>
          <td>
            <button
              class="text-sm leading-none border border-[#E5E7F9] text-gray-400 p-2 bg-[#FAFAFF] rounded hover:bg-gray-200"
            >
              <MoreIcon class="w-5 h-5" />
            </button>
          </td>
        </tr>
        <tr class="h-3"></tr>
      </tbody>
    </table>
    <div
      v-if="!data.length"
      class="text-center pl-[22px] text-base font-bold text-[#686B8A] py-4"
    >
      No Results Found, Please try another key word !!
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CheckBox from './CheckBox.vue';
import PauseIcon from '@/components/icons/PauseIcon.vue';
import EditIcon from '@/components/icons/EditIcon.vue';
import MoreIcon from '@/components/icons/MoreIcon.vue';
import WarningIcon from '@/components/icons/WarningIcon.vue'
import SolidWarningIcon from '@/components/icons/SolidWarningIcon.vue'
import ColorIndicatorVue from './ColorIndicator.vue';
import CircularProgress from './CircularProgress.vue'
import ErrorIcon from '@/components/icons/ErrorIcon.vue'

defineProps(['data'])

const headerCheckbox = ref(false)
</script>

<style scoped>
td {
  padding: 0;
}
</style>
