<script lang="ts" setup>
  const props = defineProps({
    isActive: {
      required: true,
      type: Boolean,
    },
  });
</script>

<template>
  <button
    :class="[
      'basic-toggle tide-display-flex tide-axis2-center tide-border-1 tide-border-gray tide-radius-full',
      props.isActive ? 'tide-bg-primary-variant-tier-3' : 'tide-bg-gray-light',
    ]"
  >
    <div
      :class="props.isActive ? 'active' : ''"
      class="basic-toggle-indicator tide-position-relative tide-border-1 tide-border-gray tide-radius-full tide-bg-white ratio-1/1"
    />
  </button>
</template>

<style scoped>
  .basic-toggle {
    width: 50px;
    height: 30px;
  }

  .basic-toggle-indicator {
    left: 2px;
    width: 24px;
    height: 24px;
    transition: left var(--animate);
  }

  .active {
    left: 22px;
  }
</style>
