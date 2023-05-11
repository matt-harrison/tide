<script lang="ts" setup>
  import { storeToRefs } from 'pinia';

  import { useBreakpointStore } from '@/stores/BreakpointStore';

  const breakpointStore = useBreakpointStore();

  const { isLarge } = storeToRefs(breakpointStore);
</script>

<template>
  <div
    :class="isLarge ? 'mx-auto' : 'mx-2'"
    class="w-container"
  >
    <slot />
  </div>
</template>

<style scoped></style>
