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
    :class="props.isActive ? 'bg-blue-light' : 'bg-gray-light'"
    class="site-toggle flex axis2-center border-1 border-gray radius-full"
  >
    <div
      :class="props.isActive ? 'active' : ''"
      class="site-toggle-switch relative border-1 border-gray radius-full bg-white ratio-1/1"
    />
  </button>
</template>

<style scoped>
  .site-toggle {
    width: 50px;
    height: 30px;
  }

  .site-toggle-switch {
    left: 2px;
    width: 24px;
    transition: left var(--animate);
  }

  .active {
    left: 22px;
  }
</style>
