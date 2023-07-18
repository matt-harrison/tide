<script lang="ts" setup>
  import { storeToRefs } from 'pinia';

  import type { Vehicle } from '@/types/Vehicle';

  import { useFavoriteStore } from '@/stores/FavoriteStore';
  import { useUserAgentStore } from '@/stores/UserAgentStore';

  import BasicButton from '@/components/BasicButton.vue';
  import CardCarouselListingFeatured from '@/components/CardCarouselListingFeatured.vue';
  import { PRIORITY } from '@/types/Priority';
  import { formatKebabCase } from '@/utilities/format';
  import { realm } from '@/config/main.config';

  const favoriteStore = useFavoriteStore();
  const userAgentStore = useUserAgentStore();

  const { isTouchscreen } = storeToRefs(userAgentStore);

  type Props = {
    vehicles: Vehicle[];
  };

  const props = defineProps<Props>();
</script>

<template>
  <section class="card-carousel-listing-dealer flex axis1-between axis2-center gap-2 w-full no-shrink">
    <aside class="card-carousel-listing-dealer-aside flex column gap-1/2">
      <div class="card-carousel-listing-dealer-img border-overlay radius-1 bg-gray" />
      <span class="font-12">Sponsored · Atlanta, GA</span>
      <span class="font-20 font-700">Roy Robinson</span>
      <span class="font-14">Largest premium pre-owned inventory</span>

      <a
        class="font-700"
        href="tel:+17575551234"
      >
        Call 757 555-1234
      </a>

      <BasicButton
        :href="`/${formatKebabCase(realm.label.plural)}s-for-sale`"
        :priority="PRIORITY.SECONDARY"
        class="w-full"
      >
        View inventory
      </BasicButton>
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
