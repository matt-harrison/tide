<script lang="ts" setup>
  import { storeToRefs } from 'pinia';

  import { useViewportStore } from '@/stores/ViewportStore';

  const viewportStore = useViewportStore();

  const { isLarge } = storeToRefs(viewportStore);
</script>

<template>
  <div :class="['basic-container', isLarge ? 'tide-margin-x-auto' : 'tide-margin-x-1', 'tide-width-container']">
    <slot />
  </div>
</template>

<style scoped></style>
