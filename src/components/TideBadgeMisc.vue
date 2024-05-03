<script lang="ts" setup>
  import { CSS } from '@/types/Styles';

  type Props = {
    label: string;
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
      CSS.AXIS2.CENTER,
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
