<script lang="ts" setup>
  import { CSS } from '../types/Styles';

  type Props = {
    isActive: boolean;
    label: string;
  };

  const props = defineProps<Props>();
</script>

<template>
  <button
    :class="[
      'tide-chip-filter',
      props.isActive
        ? ['tide-bg-secondary', 'tide-font-on-secondary']
        : ['tide-bg-surface-variant', 'tide-font-on-surface'],
      CSS.DISPLAY.FLEX,
      CSS.AXIS2.CENTER,
      CSS.GAP.HALF,
      CSS.BORDER.FULL.ONE,
      CSS.BORDER.RADIUS.FULL,
      CSS.PADDING.X.ONE,
      CSS.PADDING.Y.HALF,
      CSS.FONT.SIZE.FOURTEEN,
      CSS.FONT.WEIGHT.FIVE_HUNDRED,
      props.isActive ? 'active' : '',
    ]"
  >
    <slot />
    <div :class="[CSS.DISPLAY.FLEX, CSS.AXIS1.CENTER, CSS.AXIS2.CENTER, CSS.GAP.HALF]">
      <span :class="[props.isActive ? '' : 'icon-spacing', CSS.FONT.WEIGHT.FIVE_HUNDRED, CSS.WHITESPACE_WRAP.OFF]">
        {{ props.label }}
      </span>
    </div>
  </button>
</template>

<style scoped>
  /* Border must always exist to prevent resize on hover state, but match background color on rest state to blend in. */
  .tide-chip-filter {
    border-color: var(--surface-variant);
  }

  .tide-chip-filter.active {
    border-color: var(--secondary);
  }

  .tide-chip-filter:hover {
    background-color: var(--surface-variant);
    border-color: var(--border);
    color: var(--on-surface);
  }
</style>
