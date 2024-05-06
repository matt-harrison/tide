<script lang="ts" setup>
  import { CSS } from '@/types/Styles';
</script>

<template>
  <div
    :class="[
      'tide-card',
      CSS.HEIGHT.FULL,
      CSS.BORDER.RADIUS.HALF,
      CSS.BG.SURFACE.DEFAULT,
      CSS.SHADOW.BOTTOM,
      CSS.FONT.COLOR.SURFACE.DEFAULT,
      CSS.SNAP_ALIGN.START,
    ]"
  >
    <slot />
  </div>
</template>
