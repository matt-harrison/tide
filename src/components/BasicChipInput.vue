<script lang="ts" setup>
  import type { Tier } from '@/types/Tier';

  import BasicIcon from '@/components/BasicIcon.vue';
  import { ICON } from '@/types/Icon';
  import { TIER } from '@/types/Tier';

  type Props = {
    label: string;
    tier?: Tier;
  };

  const props = withDefaults(defineProps<Props>(), {
    tier: TIER.TIER_3,
  });
</script>

<template>
  <button
    :class="`basic-chip-input primary-variant ${props.tier} flex axis2-center gap-1/2 radius-full px-1 py-1/2 font-14 font-600`"
  >
    <span>{{ props.label }}</span>

    <BasicIcon :icon="ICON.XMARK" />
  </button>
</template>

<style scoped src="@/assets/css/dynamic-buttons.css" />
