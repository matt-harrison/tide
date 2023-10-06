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
  <div :class="['basic-card radius-1/2 h-full bg-surface-light box-shadow font-surface snap-start', props.class]">
    <slot />
  </div>
</template>
