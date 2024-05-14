<script lang="ts" setup>
  import TideIcon from '@/components/TideIcon.vue';
  import { CSS } from '@/types/Styles';
  import { ICON } from '@/types/Icon';

  type Props = {
    label: string;
  };

  const props = defineProps<Props>();
</script>

<template>
  <button
    :class="[
      'tide-chip-input',
      CSS.BG.SURFACE.VARIANT,
      CSS.FONT.COLOR.SURFACE,
      CSS.DISPLAY.FLEX,
      CSS.AXIS2.CENTER,
      CSS.GAP.HALF,
      CSS.BORDER.FULL.ONE,
      CSS.BORDER.RADIUS.FULL,
      CSS.PADDING.X.ONE,
      CSS.PADDING.Y.HALF,
      CSS.FONT.SIZE.FOURTEEN,
      CSS.FONT.WEIGHT.FIVE_HUNDRED,
    ]"
  >
    <span>{{ props.label }}</span>

    <TideIcon :icon="ICON.CLOSE" />
  </button>
</template>

<style scoped>
  .tide-chip-input {
    border-color: var(--border);
  }

  .tide-chip-input:hover {
    border-color: var(--border-high);
  }
</style>
