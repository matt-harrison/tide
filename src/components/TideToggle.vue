<script lang="ts" setup>
  const props = defineProps({
    disabled: {
      default: false,
      required: false,
      type: Boolean,
    },
    isActive: {
      required: true,
      type: Boolean,
    },
  });
</script>

<template>
  <button
    :class="[
      'tide-toggle tide-display-flex tide-axis2-center tide-radius-full tide-xy-hidden',
      props.isActive ? 'tide-bg-secondary' : 'tide-bg-surface-variant',
    ]"
    :disabled="props.disabled"
  >
    <div
      :class="props.isActive ? 'active' : ''"
      class="tide-toggle-indicator tide-position-relative tide-radius-full tide-bg-surface tide-shadow-bottom"
    />
  </button>
</template>

<style scoped>
  .tide-toggle {
    width: 64px;
    height: 32px;
    transition: background-color var(--animate);
  }

  .tide-toggle:disabled {
    opacity: 0.32;
  }

  .tide-toggle-indicator {
    left: 4px;
    width: 24px;
    height: 24px;
    transition: left var(--animate);
  }

  .active {
    left: 36px;
  }
</style>
