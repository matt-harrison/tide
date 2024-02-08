<script lang="ts" setup>
  import type { PropType } from 'vue';

  import type { BreadCrumb } from '@/types/BreadCrumb';

  const props = defineProps({
    breadCrumbs: {
      default: undefined,
      required: true,
      type: Object as PropType<BreadCrumb[]>,
    },
  });
</script>

<template>
  <ul class="bread-crumbs tide-display-flex tide-axis2-center tide-gap-1/2 tide-font-14 tide-font-500 tide-list-none">
    <template
      :key="crumb.label"
      v-for="(crumb, index) in props.breadCrumbs"
    >
      <li :class="[crumb.url ? 'tide-font-700' : '']">
        <a
          :href="crumb.url"
          v-if="crumb.url"
        >
          {{ crumb.label }}
        </a>

        <span v-else>
          {{ crumb.label }}
        </span>
      </li>

      <li
        class="tide-font-surface-variant"
        v-if="props.breadCrumbs && index < props.breadCrumbs.length - 1"
      >
        /
      </li>
    </template>
  </ul>
</template>
