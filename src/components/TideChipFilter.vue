<script lang="ts" setup>
  import TideIcon from '@/components/TideIcon.vue';
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
      'basic-chip-filter tide-display-flex tide-axis2-center tide-gap-1/2 tide-border-2 tide-border tide-radius-full tide-padding-x-1 tide-padding-y-1/2 tide-bg-surface tide-font-14 tide-font-500 tide-font-on-surface',
      props.isActive ? 'active' : '',
      'tide-font-14 tide-font-600',
    ]"
    class=""
  >
    <slot />
    <div class="basic-chip-filter-content tide-display-flex tide-axis1-center tide-axis2-center tide-gap-1/2">
      <span
        :class="props.isActive ? '' : 'icon-spacing'"
        class="tide-font-500 tide-whitespace-nowrap"
      >
        {{ props.label }}
      </span>

      <TideIcon
        :icon="ICON.CHECK"
        v-if="props.isActive"
      />
    </div>
  </button>
</template>

<style scoped src="@/assets/css/dynamic-buttons.css" />

<style scoped>
  .basic-chip-filter:hover,
  .basic-chip-filter.active {
    background-color: var(--surface-variant);
    border-color: var(--border-high);
  }

  /* Button must be sized to account for icon when icon is not present so that toggling won't alter the button dimensions. */
  .icon-spacing {
    padding-right: 14px;
    padding-left: 14px;
    line-height: 20px;
  }
</style>
