<script lang="ts" setup>
  import type { VehicleType } from '@/types/VehicleType';

  import SvgIcon from '@/components/SvgIcon.vue';
  import { ICON } from '@/types/Icon';
  import { SIZE_ICON } from '@/types/Size';

  type Props = {
    isActive: boolean;
    vehicleType: VehicleType;
  };

  const props = defineProps<Props>();
</script>

<template>
  <button
    :class="[
      'guided-search-toggle',
      props.isActive && 'primary-variant tier-3',
      'flex axis1-center axis2-center shrink-none',
      'radius-1/2',
      !props.isActive && 'bg-surface-variant-lightest',
      'snap-start',
    ]"
  >
    <div class="flex axis2-center column gap-1/4">
      <img
        :alt="vehicleType.label"
        :src="vehicleType.img"
        class="guided-search-toggle-thumb"
      />

      <div class="flex axis1-center axis2-center gap-1/4 font-12">
        <span class="font-700 whitespace-nowrap">{{ props.vehicleType.label }}</span>

        <SvgIcon
          :icon="ICON.CHECK"
          :size="SIZE_ICON.SMALL"
          v-if="props.isActive"
        />
      </div>
    </div>
  </button>
</template>

<style scoped src="@/assets/css/dynamic-buttons.css" />

<style scoped>
  .guided-search-toggle {
    width: 125px;
    height: 97px;
  }

  .guided-search-toggle-thumb {
    width: auto;
    height: 44px;
  }
</style>
