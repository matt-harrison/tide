<script lang="ts" setup>
  import BasicIcon from '@/components/BasicIcon.vue';
  import { ICON } from '@/types/Icon';

  const props = defineProps({
    href: {
      required: true,
      type: String,
    },
    label: {
      required: true,
      type: String,
    },
  });
</script>

<template>
  <a
    :href="props.href"
    class="chip-action-related-search secondary tide-display-flex tide-axis2-center tide-gap-1/2 tide-radius-full tide-padding-y-1/2 tide-padding-x-1 tide-font-600 tide-underline-none"
  >
    <BasicIcon :icon="ICON.SEARCH" />

    <span>{{ props.label }}</span>
  </a>
</template>

<style scoped src="@/assets/css/dynamic-buttons.css" />
