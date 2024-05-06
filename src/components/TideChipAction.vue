<script lang="ts" setup>
  import TideIcon from '@/components/TideIcon.vue';
  import { CSS } from '@/types/Styles';
  import { ICON } from '@/types/Icon';
  import { TARGET } from '@/types/Target';

  type Props = {
    href: string;
    isNewTab?: boolean;
    label: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    isNewTab: false,
  });
</script>

<template>
  <a
    :class="[
      'tide-chip-action',
      CSS.AXIS2.CENTER,
      CSS.GAP.HALF,
      CSS.BORDER.SIDE.FULL.ONE,
      CSS.BORDER.RADIUS.FULL,
      CSS.PADDING.X.ONE,
      CSS.PADDING.Y.HALF,
      CSS.BG.SURFACE.DEFAULT,
      CSS.FONT.SIZE.FOURTEEN,
      CSS.FONT.WEIGHT.FIVE_HUNDRED,
      CSS.FONT.COLOR.SURFACE.DEFAULT,
      CSS.UNDERLINE.OFF,
    ]"
    :href="props.href"
    :target="props.isNewTab ? TARGET.BLANK : TARGET.SELF"
  >
    <TideIcon :icon="ICON.SEARCH" />

    <span>{{ props.label }}</span>
  </a>
</template>

<style scoped>
  .tide-chip-action:hover {
    background-color: var(--surface-variant);
    border-color: var(--border-high);
  }
</style>
