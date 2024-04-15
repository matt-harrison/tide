<script lang="ts" setup>
  import type { PropType } from 'vue';

  import type { BreadCrumb } from '@/types/BreadCrumb';

  import TideIcon from '@/components/TideIcon.vue';
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
  <ul class="bread-crumbs tide-display-flex tide-axis2-center tide-gap-1/4 tide-list-none">
    <template
      :key="crumb.label"
      v-for="(crumb, index) in props.breadCrumbs"
    >
      <li class="tide-font-14">
        <a
          :href="crumb.url"
          class="tide-font-700 tide-font-on-surface"
          v-if="crumb.url"
        >
          {{ crumb.label }}
        </a>

        <span
          class="tide-font-500 tide-font-on-surface-variant"
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
