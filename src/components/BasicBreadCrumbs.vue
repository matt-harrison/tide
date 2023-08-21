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
  <ul class="bread-crumbs flex axis2-center gap-1/2 font-14 font-500 list-none">
    <template
      :key="crumb.label"
      v-for="(crumb, index) in props.breadCrumbs"
    >
      <li
        :class="[props.breadCrumbs && index !== props.breadCrumbs.length - 1 ? 'font-700' : 'font-surface-variant']"
        v-if="crumb.url"
      >
        <a
          :href="crumb.url"
          v-if="crumb.url"
        >
          {{ crumb.label }}
        </a>
      </li>

      <li
        class="flex column axis1-center font-surface-variant"
        v-if="crumb.url"
      >
        /
      </li>

      <li v-if="!crumb.url">{{ crumb.label }}</li>
    </template>
  </ul>
</template>
