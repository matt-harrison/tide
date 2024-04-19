<script lang="ts" setup>
  type Props = {
    label?: string | number;
  };

  const props = withDefaults(defineProps<Props>(), {
    label: undefined,
  });
</script>

<template>
  <div
    :class="[
      props.label ? 'tide-indicator-label' : 'tide-indicator',
      'tide-radius-full tide-bg-surface-accent',
      props.label ? 'tide-position-relative tide-font-700 tide-font-on-surface tide-font-12' : '',
    ]"
  >
    <div
      class="tide-position-absolute tide-top-0 tide-display-flex tide-axis1-center tide-axis2-center tide-width-full tide-height-full"
      v-if="props.label"
    >
      {{ props.label }}
    </div>
  </div>
</template>

<style scoped>
  .tide-indicator {
    width: 0.5rem;
    height: 0.5rem;
  }

  .tide-indicator-label {
    width: 1rem;
    height: 1rem;
  }
</style>
