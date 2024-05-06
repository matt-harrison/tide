<script lang="ts" setup>
  import type { Badge } from '@/types/Badge';

  import { CSS } from '@/types/Styles';

  type Props = {
    label: Badge;
  };

  const props = defineProps<Props>();
</script>

<template>
  <div
    :class="[
      'tide-badge',
      CSS.FONT.COLOR.SURFACE,
      CSS.BG.SURFACE.FLOATING,
      CSS.DISPLAY.INLINE_FLEX,
      CSS.GAP.QUARTER,
      CSS.BORDER.RADIUS.QUARTER,
      CSS.PADDING.Y.QUARTER,
      CSS.PADDING.X.HALF,
      CSS.FONT.SIZE.FOURTEEN,
    ]"
  >
    {{ props.label }}
  </div>
</template>

<style scoped></style>
