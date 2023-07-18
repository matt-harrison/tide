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
      'guided-search-toggle ',
      props.isActive && 'primary-variant tier-3',
      'flex column axis2-center shrink-none mt-1',
      !props.isActive && 'border-1 border-gray',
      'radius-1/2 px-1 pb-1/2',
      !props.isActive && 'bg-gray-light',
      'snap-start',
    ]"
    class=""
  >
    <div class="guided-search-toggle-thumb relative mb-1 radius-1/4 bg-gray" />

    <div class="flex axis1-center axis2-center gap-1/4 font-12">
      <span class="font-700 whitespace-nowrap">{{ props.vehicleType.label }}</span>

      <SvgIcon
        :icon="ICON.CHECK"
        :size="SIZE_ICON.SMALL"
        v-if="props.isActive"
      />
    </div>
  </button>
</template>

<style scoped src="@/assets/css/dynamic-buttons.css" />

<style scoped>
  .guided-search-toggle-thumb {
    margin-top: -1rem;
    width: 90px;
    height: 40px;
  }
</style>
