<script lang="ts" setup>
  import { storeToRefs } from 'pinia';

  import type { Vehicle } from '@/types/Vehicle';

  import BasicButton from '@/components/BasicButton.vue';
  import CardCarouselListingFeatured from '@/components/CardCarouselListingFeatured.vue';
  import { PRIORITY } from '@/types/Priority';
  import { formatKebabCase } from '@/utilities/format';
  import { realm } from '@/config/main.config';
  import { useFavoriteStore } from '@/stores/FavoriteStore';
  import { useUserAgentStore } from '@/stores/UserAgentStore';

  const favoriteStore = useFavoriteStore();
  const userAgentStore = useUserAgentStore();

  const { isTouchscreen } = storeToRefs(userAgentStore);

  type Props = {
    vehicles: Vehicle[];
  };

  const props = defineProps<Props>();
</script>

<template>
  <section
    class="card-carousel-listing-dealer tide-display-flex tide-axis1-between tide-axis2-center tide-gap-2 tide-width-full no-shrink"
  >
    <aside class="card-carousel-listing-dealer-aside tide-display-flex tide-flex-column tide-gap-1/2">
      <div class="card-carousel-listing-dealer-img border-overlay tide-radius-1 tide-bg-gray" />
      <span class="tide-font-12">Sponsored · Atlanta, GA</span>
      <span class="tide-font-20 tide-font-700">Roy Robinson</span>
      <span class="tide-font-14">Largest premium pre-owned inventory</span>

      <a
        class="tide-font-700"
        href="tel:+17575551234"
      >
        Call 757 555-1234
      </a>

      <BasicButton
        :href="`/${formatKebabCase(realm.label.plural)}s-for-sale`"
        :priority="PRIORITY.SECONDARY"
        class="tide-width-full"
        label="View inventory"
      />
    </aside>

    <CardCarouselListingFeatured
      :get-is-favorite="favoriteStore.getIsFavorite"
      :handle-favorite-click="favoriteStore.toggleIsFavorite"
      :is-touchscreen="isTouchscreen"
      :vehicles="props.vehicles"
      class="card-carousel-listing-dealer-carousel"
    />
  </section>
</template>

<style>
  :root {
    --card-carousel-listing-dealer-aside-width: 216px;
  }

  .card-carousel-listing-dealer-aside {
    width: var(--card-carousel-listing-dealer-aside-width);
  }

  .card-carousel-listing-dealer-carousel {
    width: calc(100% - var(--card-carousel-listing-dealer-aside-width) - 2rem);
  }

  .card-carousel-listing-dealer-img {
    width: 100px;
    height: 74px;
  }
</style>
