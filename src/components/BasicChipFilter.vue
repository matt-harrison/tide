<script lang="ts" setup>
  import type { Tier } from '@/types/Tier';

  import BasicIcon from '@/components/BasicIcon.vue';
  import { ICON } from '@/types/Icon';
  import { TIER } from '@/types/Tier';

  type Props = {
    isActive: boolean;
    label: string;
    tier?: Tier;
  };

  const props = withDefaults(defineProps<Props>(), {
    tier: TIER.TIER_3,
  });
</script>

<template>
  <button
    :class="[
      'basic-chip-filter',
      props.isActive && `primary-variant ${props.tier}`,
      'flex column axis2-center',
      !props.isActive && 'border-1 border-gray',
      'radius-1/2 px-1 py-1/2',
      !props.isActive && 'bg-gray-light',
      'font-14 font-600',
    ]"
    class=""
  >
    <div class="flex axis1-center axis2-center gap-1/2">
      <span class="font-700 whitespace-nowrap">{{ props.label }}</span>

      <BasicIcon
        :icon="ICON.CHECK"
        v-if="props.isActive"
      />
    </div>
  </button>
</template>

<style scoped src="@/assets/css/dynamic-buttons.css" />
