<script lang="ts" setup>
  import type { BadgeTrustedYears } from '@/types/Badge';

  import TideIcon from '@/components/TideIcon.vue';
  import { BADGE_TRUSTED } from '@/types/Badge';
  import { CSS } from '@/types/Styles';
  import { ICON } from '@/types/Icon';

  type Props = {
    years?: BadgeTrustedYears;
  };

  const props = withDefaults(defineProps<Props>(), {
    years: BADGE_TRUSTED.YEARS_5,
  });
</script>

<template>
  <div
    :class="[
      'tide-badge-trusted-partner',
      CSS.FONT.COLOR.SURFACE.BRAND,
      CSS.DISPLAY.INLINE_FLEX,
      CSS.AXIS2.CENTER,
      CSS.GAP.QUARTER,
      CSS.PADDING.Y.QUARTER,
      CSS.PADDING.X.HALF,
      CSS.FONT.SIZE.FOURTEEN,
    ]"
  >
    <TideIcon :icon="ICON.VIEW_IN_AR" />
    <div :class="[]">
      <span>{{ props.years }} year trusted partner</span>
    </div>
  </div>
</template>

<style scoped></style>
