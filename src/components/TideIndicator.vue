<script lang="ts" setup>
  import { CSS } from '@/types/Styles';

  type Props = {
    label?: string | number;
  };

  const props = withDefaults(defineProps<Props>(), {
    label: undefined,
  });
</script>

<template>
  <div
    :class="[
      props.label ? 'tide-indicator-label' : 'tide-indicator',
      'border-white',
      CSS.BG.SURFACE.ACCENT,
      CSS.BORDER.SIDE.FULL.ONE,
      CSS.BORDER.RADIUS.FULL,
      props.label
        ? [CSS.POSITION.RELATIVE, CSS.FONT.SIZE.TWELVE, CSS.FONT.WEIGHT.SEVEN_HUNDRED, CSS.FONT.COLOR.SURFACE]
        : [],
    ]"
  >
    <div
      :class="[
        CSS.POSITION.ABSOLUTE,
        CSS.POSITIONING.TOP_0,
        CSS.DISPLAY.FLEX,
        CSS.AXIS1.CENTER,
        CSS.AXIS2.CENTER,
        CSS.WIDTH.FULL,
        CSS.HEIGHT.FULL,
      ]"
      v-if="props.label"
    >
      {{ props.label }}
    </div>
  </div>
</template>

<style scoped>
  .tide-indicator {
    width: 0.5rem;
    height: 0.5rem;
  }

  .tide-indicator-label {
    width: 1rem;
    height: 1rem;
  }

  .border-white {
    border-color: white;
  }
</style>
