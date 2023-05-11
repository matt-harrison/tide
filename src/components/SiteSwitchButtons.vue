<script lang="ts" setup>
  type SwitchButton = {
    callback: () => void;
    count: number;
    isActive?: boolean;
    label: string;
  };

  type Props = {
    buttons: SwitchButton[];
  };

  const props = defineProps<Props>();
</script>

<template>
  <div class="flex gap-1/4 border-1 border-gray radius-1/4 p-1/4 bg-gray-light">
    <button
      :class="button.isActive ? 'bg-white' : 'border-gray-light bg-gray-light'"
      :key="button.label"
      @click="button.callback"
      class="switch-button border-1 border-gray radius-1/4 py-1/2 px-2 w-full font-14 font-600 whitespace-nowrap"
      v-for="button in props.buttons"
    >
      <span>{{ button.label }} </span>
      <span v-if="button.count > 0">({{ button.count }})</span>
    </button>
  </div>
</template>

<style scoped>
  .switch-button {
    flex: 1;
    transition: background-color var(--animate), border-color var(--animate);
  }
</style>
