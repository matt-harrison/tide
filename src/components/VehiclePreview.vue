<script setup lang="ts">
  import type { VehicleDetail } from '@/types/VehicleDetail';

  import BasicImage from '@/components/BasicImage.vue';
  import { getVehicleTitle, getSellerNameLocation, getVehiclePrice, getVehicleThumbnail } from '@/utilities/vehicle';

  type Props = {
    vehicle: VehicleDetail;
  };

  const props = defineProps<Props>();

  const vehicleTitle = getVehicleTitle(props.vehicle);
  const locationTitle = getSellerNameLocation(props.vehicle);
  const price = getVehiclePrice(props.vehicle);
  const thumb = getVehicleThumbnail(props.vehicle);
</script>

<template>
  <div class="tide-display-flex tide-gap-1 tide-axis1-start tide-axis2-start tide-font-600 tide-font-14">
    <div class="tide-shrink-none border-overlay tide-radius-1/2 tide-xy-hidden">
      <BasicImage
        :src="thumb"
        height="70"
        width="85"
      />
    </div>
    <div>
      <div>{{ vehicleTitle }}</div>
      <div class="tide-margin-top-1/4 tide-font-12 tide-font-surface-variant">{{ locationTitle }}</div>
      <div class="tide-margin-top-1/4">{{ price }}</div>
    </div>
  </div>
</template>
