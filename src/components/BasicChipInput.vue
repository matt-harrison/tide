<script lang="ts" setup>
  import BasicIcon from '@/components/BasicIcon.vue';
  import { ICON } from '@/types/Icon';

  type Props = {
    label: string;
  };

  const props = defineProps<Props>();
</script>

<template>
  <button
    :class="`basic-chip-input primary-variant tier-3 tide-display-flex tide-axis2-center tide-gap-1/2 tide-radius-full tide-padding-x-1 tide-padding-y-1/2 tide-font-14 tide-font-600`"
  >
    <span>{{ props.label }}</span>

    <BasicIcon :icon="ICON.XMARK" />
  </button>
</template>

<style scoped src="@/assets/css/dynamic-buttons.css" />
