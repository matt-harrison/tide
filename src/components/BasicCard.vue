<script lang="ts" setup>
  // There must be some JS content to qualify for Storybook config.
  const props = defineProps({
    class: {
      default: '',
      required: false,
      type: String,
    },
  });
</script>

<template>
  <div
    :class="props.class"
    class="basic-card tide-radius-1/2 h-full tide-bg-surface-low shadow-b-1 tide-font-surface tide-scroll-snap-start"
  >
    <slot />
  </div>
</template>
