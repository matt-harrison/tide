<script lang="ts" setup>
  import type { PropType } from 'vue';

  import type { BreadCrumb } from '@/types/BreadCrumb';

  import SiteIcon from '@/components/SiteIcon.vue';

  const props = defineProps({
    breadCrumbs: {
      default: undefined,
      required: true,
      type: Object as PropType<BreadCrumb[]>,
    },
  });
</script>

<template>
  <section class="bread-crumbs">
    <ul class="flex axis2-center gap-1/2 font-14 list-none">
      <template
        :key="crumb.label"
        v-for="crumb in props.breadCrumbs"
      >
        <li v-if="crumb.url">
          <a
            :href="crumb.url"
            v-if="crumb.url"
          >
            {{ crumb.label }}
          </a>
        </li>

        <li v-if="crumb.url">
          <SiteIcon
            icon="angle-right"
            is-solid
          />
        </li>

        <li v-if="!crumb.url">{{ crumb.label }}</li>
      </template>
    </ul>
  </section>
</template>

<style scoped></style>
