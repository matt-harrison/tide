<script lang="ts" setup>
  import type { Vehicle } from '@/types/Vehicle';

  import SiteIconToggle from '@/components/SiteIconToggle.vue';
  import SiteImage from '@/components/SiteImage.vue';
  import { cdnDomain, cdnVersion } from '@/config/rv.config';

  import { formatPrice } from '@/utilities/format';

  type Props = {
    isFavorite: boolean;
    vehicle: Vehicle;
  };

  const emit = defineEmits(['handleFavoriteClick']);

  const props = defineProps<Props>();

  const thumbnail: string | undefined =
    props.vehicle.photoIds?.length > 0
      ? `https://${cdnDomain}/${cdnVersion}/media/${props.vehicle.photoIds[0]}.jpg?width=245&height=151&quality=60&bestfit=true&upsize=true&blurBackground=true&blurValue=100`
      : undefined;

  const handleFavoriteClick = () => {
    emit('handleFavoriteClick', props.vehicle.adId);
  };
</script>

<template>
  <li class="site-carousel-card shrink-none p-1/4 snap-start xy-hidden">
    <router-link
      class="block p-1/2 h-full bg-white shadow-box underline-none"
      to="/listing"
    >
      <div class="flex column axis1-between h-full">
        <div>
          <SiteImage
            :offset="200"
            :src="thumbnail"
            assume-horizontal
            class="site-carousel-card-img mb-1/2 w-full"
            is-lazy-load
          />

          <div class="flex column gap-1/4 mb-1">
            <div class="font-12">
              {{ props.vehicle.condition }} {{ props.vehicle.year }} {{ props.vehicle.makeName[0] }}
            </div>

            <div class="font-14 font-600">{{ props.vehicle.modelName[0] }}</div>

            <div class="font-12">{{ props.vehicle.dealerGroupName }}</div>
          </div>
        </div>

        <div class="flex axis1-between axis2-center">
          <span class="font-14 font-700">
            {{ formatPrice(props.vehicle.price) }}
          </span>

          <SiteIconToggle
            :is-solid="isFavorite"
            @click.prevent="handleFavoriteClick"
            class-button="p-1/4"
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
