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
    :class="`basic-chip-input primary-variant tier-3 flex axis2-center gap-1/2 radius-full px-1 py-1/2 font-14 font-600`"
  >
    <span>{{ props.label }}</span>

    <BasicIcon :icon="ICON.XMARK" />
  </button>
</template>

<style scoped src="@/assets/css/dynamic-buttons.css" />
