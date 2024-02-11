<script lang="ts" setup>
  import type { Vehicle } from '@/types/Vehicle';

  import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
  import BasicCard from '@/components/BasicCard.vue';
  import BasicImage from '@/components/BasicImage.vue';
  import { ICON } from '@/types/Icon';
  import { PRIORITY } from '@/types/Priority';
  import { formatPrice, getCdnMediaRoot } from '@/utilities/format';
  import { realm } from '@/config/main.config';

  type Props = {
    isFavorite: boolean;
    vehicle: Vehicle;
  };

  const emit = defineEmits(['favoriteClick']);

  const props = defineProps<Props>();

  const cdn = getCdnMediaRoot(realm);
  const thumbnail: string | undefined =
    props.vehicle.photoIds.length > 0
      ? `${cdn}/${props.vehicle.photoIds[0]}.jpg?width=245&height=151&quality=60&bestfit=true&upsize=true&blurBackground=true&blurValue=100`
      : undefined;

  const handleFavoriteClick = () => {
    emit('favoriteClick', props.vehicle.adId);
  };
</script>

<template>
  <li class="card-listing-featured tide-shrink-none tide-scroll-snap-start">
    <a
      :href="`/listing?realm=${realm.id}`"
      class="tide-display-block h-full tide-underline-none"
    >
      <BasicCard class="tide-display-flex tide-flex-column tide-axis1-between tide-padding-1/2">
        <div>
          <div class="tide-margin-bottom-1/2 border-overlay tide-radius-1">
            <BasicImage
              :offset="200"
              :src="thumbnail"
              assume-horizontal
              class="card-listing-featured-img tide-width-full"
              is-lazy-load
            />
          </div>

          <div class="tide-display-flex tide-flex-column tide-gap-1/4 tide-margin-bottom-1">
            <div class="tide-font-12">
              {{ props.vehicle.condition }} {{ props.vehicle.year }} {{ props.vehicle.makeName[0] }}
            </div>

            <div class="tide-font-14 tide-font-600">{{ props.vehicle.modelName[0] }}</div>

            <div class="tide-font-12">{{ props.vehicle.dealerGroupName }}</div>
          </div>
        </div>

        <div class="tide-display-flex tide-axis1-between tide-axis2-center">
          <span class="tide-font-14 tide-font-700">
            {{ formatPrice(props.vehicle.price) }}
          </span>

          <BasicButtonIcon
            :icon="isFavorite ? ICON.FAVORITE_FILLED : ICON.FAVORITE"
            :priority="PRIORITY.TERTIARY"
            @click.prevent="handleFavoriteClick"
          />
        </div>
      </BasicCard>
    </a>
  </li>
</template>

<style scoped>
  .card-listing-featured {
    width: 232px;
  }

  .card-listing-featured-img {
    height: 129px;
  }
</style>
