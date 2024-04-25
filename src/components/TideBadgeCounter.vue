<script lang="ts" setup>
  import { CSS } from '../types/Styles';

  type Props = {
    slideCurrent: number;
    slideTotal: number;
  };

  const props = defineProps<Props>();
</script>

<template>
  <div
    :class="[
      'tide-badge',
      'tide-on-surface',
      'tide-bg-surface-floating',
      CSS.DISPLAY.INLINE_FLEX,
      CSS.GAP.QUARTER,
      CSS.BORDER.RADIUS.QUARTER,
      CSS.PADDING.Y.QUARTER,
      CSS.PADDING.X.HALF,
      CSS.FONT.SIZE.FOURTEEN,
    ]"
  >
    {{ props.slideCurrent }} / {{ props.slideTotal }}
  </div>
</template>

<style scoped></style>
