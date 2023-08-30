<script lang="ts" setup>
  import type { Tier } from '@/types/Tier';

  import BasicIcon from '@/components/BasicIcon.vue';
  import { ICON } from '@/types/Icon';
  import { TIER } from '@/types/Tier';

  type Props = {
    href: string;
    label: string;
    tier?: Tier;
  };

  const props = withDefaults(defineProps<Props>(), {
    tier: TIER.TIER_3,
  });
</script>

<template>
  <a
    :class="[
      `basic-chip-action primary-variant ${props.tier}`,
      'flex axis2-center gap-1/2 radius-full py-1/2 px-1 font-14 font-600 underline-none',
    ]"
    :href="props.href"
  >
    <BasicIcon :icon="ICON.MAGNIFYING_GLASS" />

    <span>{{ props.label }}</span>
  </a>
</template>

<style scoped src="@/assets/css/dynamic-buttons.css" />
