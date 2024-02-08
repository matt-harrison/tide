<script lang="ts" setup>
  import BasicIcon from '@/components/BasicIcon.vue';
  import { ICON } from '@/types/Icon';

  type Props = {
    href: string;
    label: string;
  };

  const props = defineProps<Props>();
</script>

<template>
  <a
    :href="props.href"
    class="basic-chip-action secondary tide-display-flex tide-axis2-center tide-gap-1/2 tide-radius-full tide-padding-y-1/2 tide-padding-x-1 tide-font-14 tide-font-600 tide-underline-none"
  >
    <BasicIcon :icon="ICON.MAGNIFYING_GLASS" />

    <span>{{ props.label }}</span>
  </a>
</template>

<style scoped src="@/assets/css/dynamic-buttons.css" />
