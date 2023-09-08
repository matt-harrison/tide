<script lang="ts" setup>
  import BasicIcon from '@/components/BasicIcon.vue';
  import { ICON } from '@/types/Icon';

  type Props = {
    isActive: boolean;
    label: string;
  };

  const props = defineProps<Props>();
</script>

<template>
  <button
    :class="[
      'basic-chip-filter',
      props.isActive && `primary-variant tier-3`,
      'flex column axis1-center axis2-center',
      !props.isActive && 'border-1 border-gray',
      'radius-1/2 px-1 py-1/2',
      !props.isActive && 'bg-gray-light',
      'font-14 font-600',
    ]"
    class=""
  >
    <slot />
    <div class="flex axis1-center axis2-center gap-1/2">
      <span
        :class="props.isActive ? '' : 'icon-spacing'"
        class="font-700 whitespace-nowrap"
      >
        {{ props.label }}
      </span>

      <BasicIcon
        :icon="ICON.CHECK"
        v-if="props.isActive"
      />
    </div>
  </button>
</template>

<style scoped src="@/assets/css/dynamic-buttons.css" />

<style scoped>
  /* Button must be wide enough to account for icon when icon is not present so that toggling won't alter the button width. */
  .icon-spacing {
    padding-right: 0.75rem;
    padding-left: 0.75rem;
  }
</style>
