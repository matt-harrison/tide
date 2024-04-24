<script lang="ts" setup>
  import TideIcon from './TideIcon.vue';
  import { CSS } from '../types/Styles';
  import { ICON } from '../types/Icon';

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
      'tide-border',
      'tide-bg-surface',
      'tide-font-on-surface',
      CSS.DISPLAY.FLEX,
      CSS.AXIS2.CENTER,
      CSS.GAP.HALF,
      CSS.BORDER.FULL.TWO,
      CSS.BORDER.RADIUS.FULL,
      CSS.PADDING.X.ONE,
      CSS.PADDING.Y.HALF,
      CSS.FONT.SIZE.FOURTEEN,
      CSS.FONT.WEIGHT.FIVE_HUNDRED,
      props.isActive ? 'active' : '',
    ]"
  >
    <slot />
    <div :class="['tide-chip-filter-content', CSS.DISPLAY.FLEX, CSS.AXIS1.CENTER, CSS.AXIS2.CENTER, CSS.GAP.HALF]">
      <span :class="[props.isActive ? '' : 'icon-spacing', CSS.FONT.WEIGHT.FIVE_HUNDRED, CSS.WHITESPACE_WRAP.OFF]">
        {{ props.label }}
      </span>

      <TideIcon
        :icon="ICON.CHECK"
        v-if="props.isActive"
      />
    </div>
  </button>
</template>

<style scoped src="../assets/css/dynamic-buttons.css" />

<style scoped>
  .tide-chip-filter:hover,
  .tide-chip-filter.active {
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
