<script lang="ts" setup>
  import type { Tier } from '@/types/Tier';

  import SvgIcon from '@/components/SvgIcon.vue';
  import { ICON } from '@/types/Icon';
  import { SIZE_ICON } from '@/types/Size';

  type Props = {
    label: string;
    tier?: Tier;
  };

  const props = defineProps<Props>();
</script>

<template>
  <button
    :class="[
      'basic-chip-input primary-variant',
      props.tier ? props.tier : 'tier-2',
      'flex axis2-center gap-1/2 radius-full px-1 py-1/2 font-14 font-600',
    ]"
  >
    <span>{{ props.label }}</span>

    <SvgIcon
      :icon="ICON.XMARK"
      :size="SIZE_ICON.SMALL"
    />
  </button>
</template>

<style scoped src="@/assets/css/dynamic-buttons.css" />
