<template>
  <component :is="$route.meta.layout || 'div'">
    <div class="font-dm-sans">
      <RouterView />
    </div>
  </component>
</template>

<script lang="ts">
import { RouterView } from "vue-router";

export default {
  components: {
    RouterView
  }
}
</script>
