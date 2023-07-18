<script lang="ts" setup>
  import SvgIcon from '@/components/SvgIcon.vue';

  import { ICON } from '@/types/Icon';
  import { SIZE_ICON } from '@/types/Size';

  const props = defineProps({
    href: {
      required: true,
      type: String,
    },
    label: {
      required: true,
      type: String,
    },
  });
</script>

<template>
  <a
    :href="props.href"
    class="chip-action-related-search secondary flex axis2-center gap-1/2 radius-full py-1/2 px-1 font-600 underline-none"
  >
    <SvgIcon
      :icon="ICON.MAGNIFYING_GLASS"
      :size="SIZE_ICON.SMALL"
    />

    <span>{{ props.label }}</span>
  </a>
</template>

<style scoped src="@/assets/css/dynamic-buttons.css" />
