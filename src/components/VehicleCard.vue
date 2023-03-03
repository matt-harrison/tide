<script lang="ts" setup>
  import type { VehicleRaw } from '@/types/Vehicle';

  import SiteButtonIcon from '@/components/SiteButtonIcon.vue';
  import { formatPrice } from '@/utilities/format';

  type Props = {
    vehicle: VehicleRaw;
  };

  const props = defineProps<Props>();
</script>

<template>
  <li class="site-carousel-card shrink-none p-1/4 snap-start xy-hidden">
    <router-link
      class="block p-1/2 h-full bg-white shadow-box underline-none"
      to="/listing"
    >
      <div class="flex column axis1-between h-full">
        <div>
          <div class="site-carousel-card-img mb-1/2 w-full bg-gray" />

          <div class="flex column gap-1/4 mb-1">
            <div class="font-12">
              {{ props.vehicle.condition.raw }} {{ props.vehicle.year.raw }} {{ props.vehicle.make_name.raw[0] }}
            </div>

            <div class="font-14 font-600">{{ props.vehicle.model_name.raw[0] }}</div>

            <div class="font-12">{{ props.vehicle.dealer_group_name?.raw }}</div>
          </div>
        </div>

        <div class="flex axis1-between axis2-center">
          <span class="font-14 font-700">
            {{ formatPrice(props.vehicle.price.raw) }}
          </span>

          <SiteButtonIcon
            class="p-1/4"
            icon="heart"
            is-restyled
            is-secondary
          />
        </div>
      </div>
    </router-link>
  </li>
</template>

<style scoped>
  .site-carousel-card {
    width: 208px;
  }

  .site-carousel-card-img {
    height: 129px;
  }
</style>
