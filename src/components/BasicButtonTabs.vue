<script lang="ts" setup>
  type ButtonTab = {
    callback: () => void;
    count?: number;
    isActive?: boolean;
    label: string;
  };

  type Props = {
    buttons: ButtonTab[];
  };

  const props = defineProps<Props>();
</script>

<template>
  <div class="basic-button-tabs flex gap-1/4 border-1 border-gray radius-1/4 p-1/4 bg-gray-light">
    <button
      :class="button.isActive ? 'bg-white' : 'border-gray-light bg-gray-light'"
      :key="button.label"
      @click="button.callback"
      class="basic-button-tabs-tab border-1 border-gray radius-1/4 py-1/2 px-2 w-full font-14 font-600 whitespace-nowrap"
      v-for="button in props.buttons"
    >
      <span>{{ button.label }} </span>
      <span v-if="button.count && button.count > 0">({{ button.count }})</span>
    </button>
  </div>
</template>

<style scoped>
  .basic-button-tabs-tab {
    flex: 1;
    transition: background-color var(--animate), border-color var(--animate);
  }
</style>
