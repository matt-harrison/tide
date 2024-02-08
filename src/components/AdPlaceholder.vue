<script lang="ts" setup>
  const props = defineProps({
    height: {
      required: true,
      type: String,
    },
    width: {
      default: undefined,
      required: false,
      type: String,
    },
  });
</script>

<template>
  <div
    :style="{
      aspectRatio: props.width ? `${width} / ${height}` : undefined,
      maxWidth: props.width ? `${props.width}px` : undefined,
      height: props.width ? undefined : `${props.height}px`,
    }"
    class="ad-placeholder tide-display-flex tide-flex-column tide-axis1-center tide-axis2-center tide-gap-1/4 tide-width-full tide-bg-gray-light tide-font-gray tide-font-700"
  >
    <div>*Advertisement {{ props.width ? `${props.width}px` : '100%' }} x {{ props.height }}px</div>
    <slot />
  </div>
</template>

<style scoped></style>
