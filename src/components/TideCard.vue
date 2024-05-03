<script lang="ts" setup>
  import { CSS } from '@/types/Styles';
</script>

<template>
  <div
    :class="[
      'tide-card',
      CSS.HEIGHT.FULL,
      CSS.BORDER.RADIUS.HALF,
      'tide-bg-surface-low',
      'tide-shadow-bottom',
      'tide-font-surface',
      'tide-scroll-snap-start',
    ]"
  >
    <slot />
  </div>
</template>
