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
      'basic-toggle flex axis2-center border-1 border-gray radius-full',
      props.isActive ? 'bg-primary-variant-tier-3' : 'bg-gray-light',
    ]"
  >
    <div
      :class="props.isActive ? 'active' : ''"
      class="basic-toggle-indicator relative border-1 border-gray radius-full bg-white ratio-1/1"
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
    transition: left var(--animate);
  }

  .active {
    left: 22px;
  }
</style>
