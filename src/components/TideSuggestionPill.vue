<script lang="ts" setup>
  import TideIcon from '@/components/TideIcon.vue';
  import { ICON } from '@/types/Icon';
</script>

<template>
  <button
    class="basic-suggestion-pill tide-display-flex tide-axis1-center tide-axis2-center tide-gap-1/2 tide-radius-1/2 tide-padding-1 tide-font-700"
  >
    <TideIcon :icon="ICON.SEARCH" />
    <slot />
  </button>
</template>
