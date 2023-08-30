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
  <div class="flex gap-1 axis1-start axis2-start font-600 font-14">
    <div class="shrink-none border-overlay radius-1/2 xy-hidden">
      <BasicImage
        :src="thumb"
        height="70"
        width="85"
      />
    </div>
    <div>
      <div>{{ vehicleTitle }}</div>
      <div class="mt-1/4 font-12 font-surface-variant">{{ locationTitle }}</div>
      <div class="mt-1/4">{{ price }}</div>
    </div>
  </div>
</template>
