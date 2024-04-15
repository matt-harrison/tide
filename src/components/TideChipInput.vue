<script lang="ts" setup>
  import TideIcon from '@/components/TideIcon.vue';
  import { ICON } from '@/types/Icon';

  type Props = {
    label: string;
  };

  const props = defineProps<Props>();
</script>

<template>
  <button
    class="basic-chip-input tide-display-flex tide-axis2-center tide-gap-1/2 tide-border-2 tide-border tide-radius-full tide-padding-x-1 tide-padding-y-1/2 tide-bg-surface tide-font-14 tide-font-500 tide-font-on-surface"
  >
    <span>{{ props.label }}</span>

    <TideIcon :icon="ICON.CLOSE" />
  </button>
</template>

<style scoped>
  .basic-chip-input:hover {
    background-color: var(--surface-variant);
    border-color: var(--border-high);
  }
</style>
