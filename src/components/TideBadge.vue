<script lang="ts" setup>
  import type { Icon } from '@/types/Icon';

  import TideIcon from './TideIcon.vue';
  import { CSS } from '../types/Styles';

  type Props = {
    hasHighlight?: boolean;
    iconLeading?: Icon;
    label: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    hasHighlight: false,
    iconLeading: undefined,
  });
</script>

<template>
  <div
    :class="[
      'tide-badge',
      'tide-on-surface',
      props.hasHighlight ? 'tide-bg-surface-variant' : 'tide-bg-surface-floating',
      CSS.DISPLAY.INLINE_FLEX,
      CSS.AXIS2.CENTER,
      CSS.FLEX.SHRINK.ON,
      CSS.GAP.QUARTER,
      CSS.BORDER.RADIUS.QUARTER,
      CSS.PADDING.Y.QUARTER,
      CSS.PADDING.X.HALF,
      CSS.FONT.SIZE.FOURTEEN,
      CSS.SHADOW.BOTTOM,
    ]"
  >
    <TideIcon
      :icon="props.iconLeading"
      v-if="props.iconLeading"
    />

    <span>
      {{ props.label }}
    </span>
  </div>
</template>

<style scoped></style>
