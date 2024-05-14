<script lang="ts" setup>
  import type { PropType } from 'vue';

  import type { BreadCrumb } from '@/types/BreadCrumb';

  import TideIcon from '@/components/TideIcon.vue';
  import { CSS } from '@/types/Styles';
  import { ICON } from '@/types/Icon';
  import { SIZE } from '@/types/Size';

  const props = defineProps({
    breadCrumbs: {
      default: undefined,
      required: true,
      type: Object as PropType<BreadCrumb[]>,
    },
  });
</script>

<template>
  <ul :class="['tide-bread-crumbs', CSS.DISPLAY.FLEX, CSS.AXIS2.CENTER, CSS.GAP.QUARTER, CSS.LIST_BULLETS.OFF]">
    <template
      :key="crumb.label"
      v-for="(crumb, index) in props.breadCrumbs"
    >
      <li :class="[CSS.FONT.SIZE.FOURTEEN]">
        <a
          :class="[CSS.FONT.WEIGHT.SEVEN_HUNDRED, CSS.FONT.COLOR.SURFACE.DEFAULT]"
          :data-track="crumb.dataTrack || undefined"
          :href="crumb.url"
          v-if="crumb.url"
        >
          {{ crumb.label }}
        </a>

        <span
          :class="[CSS.FONT.WEIGHT.FIVE_HUNDRED, CSS.FONT.COLOR.SURFACE.VARIANT]"
          :data-track="crumb.dataTrack || undefined"
          v-else
        >
          {{ crumb.label }}
        </span>
      </li>

      <li v-if="props.breadCrumbs && index < props.breadCrumbs.length - 1">
        <TideIcon
          :icon="ICON.ARROW_RIGHT"
          :size="SIZE.SMALL"
        />
      </li>
    </template>
  </ul>
</template>
