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
      'tide-display-flex tide-flex-column tide-axis1-center tide-axis2-center',
      !props.isActive && 'tide-border-1 tide-border-gray',
      'tide-radius-1/2 tide-padding-x-1 tide-padding-y-1/2',
      !props.isActive && 'tide-bg-gray-light',
      'tide-font-14 tide-font-600',
    ]"
    class=""
  >
    <slot />
    <div class="tide-display-flex tide-axis1-center tide-axis2-center tide-gap-1/2">
      <span
        :class="props.isActive ? '' : 'icon-spacing'"
        class="tide-font-700 tide-whitespace-nowrap"
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
