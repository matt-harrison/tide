<script lang="ts" setup>
  type Props = {
    isDesktop?: boolean;
  };

  const props = withDefaults(defineProps<Props>(), {
    isDesktop: false,
  });
</script>

<template>
  <div :class="['tide-container', props.isDesktop ? 'tide-margin-x-auto' : 'tide-margin-x-1', 'tide-width-container']">
    <slot />
  </div>
</template>

<style scoped></style>
