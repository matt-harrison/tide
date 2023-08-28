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
      <li :class="[crumb.url ? 'font-700' : '']">
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
        class="font-surface-variant"
        v-if="props.breadCrumbs && index < props.breadCrumbs.length - 1"
      >
        /
      </li>
    </template>
  </ul>
</template>
