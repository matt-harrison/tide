<script lang="ts" setup>
  import TideIcon from '@/components/TideIcon.vue';
  import { ICON } from '@/types/Icon';
  import { TARGET } from '@/types/Target';

  type Props = {
    href: string;
    isNewTab?: boolean;
    label: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    isNewTab: false,
  });
</script>

<template>
  <a
    :href="props.href"
    :target="props.isNewTab ? TARGET.BLANK : TARGET.SELF"
    class="basic-chip-action tide-display-flex tide-axis2-center tide-gap-1/2 tide-border-2 tide-border tide-radius-full tide-padding-x-1 tide-padding-y-1/2 tide-bg-surface tide-font-14 tide-font-500 tide-font-on-surface tide-underline-none"
  >
    <TideIcon :icon="ICON.SEARCH" />

    <span>{{ props.label }}</span>
  </a>
</template>

<style scoped>
  .basic-chip-action:hover {
    background-color: var(--surface-variant);
    border-color: var(--border-high);
  }
</style>
