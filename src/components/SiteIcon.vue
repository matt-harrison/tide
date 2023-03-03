<script lang="ts" setup>
  const props = defineProps({
    icon: {
      required: true,
      type: String,
    },
    isSolid: {
      default: false,
      required: false,
      type: Boolean,
    },
  });
</script>

<template>
  <i
    :class="[props.isSolid ? 'fa-solid' : 'fa-regular', `fa-${props.icon}`]"
    class="site-icon"
  />
</template>

<style scoped></style>
