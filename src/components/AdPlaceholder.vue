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
    class="flex column axis1-center axis2-center gap-1/4 w-full bg-gray-light font-gray font-700"
  >
    <div>*Advertisement {{ props.width ? `${props.width}px` : '100%' }} x {{ props.height }}px</div>
    <slot />
  </div>
</template>

<style scoped></style>
