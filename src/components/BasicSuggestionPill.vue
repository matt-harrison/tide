<script lang="ts" setup>
  import BasicIcon from '@/components/BasicIcon.vue';
  import { ICON } from '@/types/Icon';
</script>

<template>
  <button class="basic-suggestion-pill flex axis1-center axis2-center gap-1/2 radius-1/2 p-1 font-700">
    <BasicIcon :icon="ICON.MAGNIFYING_GLASS" />
    <slot />
  </button>
</template>
