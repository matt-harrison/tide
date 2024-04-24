<script lang="ts" setup>
  import TideIcon from './TideIcon.vue';
  import { CSS } from '../types/Styles';
  import { ICON } from '../types/Icon';
</script>

<template>
  <button
    :class="[
      'tide-suggestion-pill',
      CSS.AXIS1.CENTER,
      CSS.AXIS2.CENTER,
      CSS.GAP.HALF,
      CSS.BORDER.RADIUS.HALF,
      CSS.PADDING.FULL.ONE,
      CSS.FONT.WEIGHT.SEVEN_HUNDRED,
    ]"
  >
    <TideIcon :icon="ICON.SEARCH" />
    <slot />
  </button>
</template>
