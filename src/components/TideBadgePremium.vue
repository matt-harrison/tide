<script lang="ts" setup>
  import type { BadgePremium } from '@/types/Badge';

  import { CSS } from '@/types/Styles';

  type Props = {
    label: BadgePremium;
  };

  const props = defineProps<Props>();
</script>

<template>
  <div
    :class="[
      'tide-badge',
      CSS.FONT.COLOR.SURFACE,
      CSS.BG.SURFACE.VARIANT,
      CSS.DISPLAY.INLINE_FLEX,
      CSS.GAP.QUARTER,
      CSS.BORDER.RADIUS.QUARTER,
      CSS.PADDING.Y.QUARTER,
      CSS.PADDING.X.HALF,
      CSS.FONT.SIZE.TWELVE,
    ]"
  >
    {{ props.label }}
  </div>
</template>

<style scoped></style>
