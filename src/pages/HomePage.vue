<script lang="ts" setup>
  import { storeToRefs } from 'pinia';

  import type { VehicleType } from '@/types/VehicleType';

  import AdPlaceholder from '@/components/AdPlaceholder.vue';
  import BasicButton from '@/components/BasicButton.vue';
  import BasicCarousel from '@/components/BasicCarousel.vue';
  import BasicContainer from '@/components/BasicContainer.vue';
  import BasicLinkWithIcon from '@/components/BasicLinkWithIcon.vue';
  import CardCarouselListingDealer from '@/components/CardCarouselListingDealer.vue';
  import CardCarouselListingFeatured from '@/components/CardCarouselListingFeatured.vue';
  import PatternTopography from '@/assets/svg/patterns/PatternTopography.vue';
  import SeoContent from '@/components/SeoContent.vue';
  import { ICON } from '@/types/Icon';
  import { PRIORITY } from '@/types/Priority';
  import { SIZE_BUTTON } from '@/types/Size';
  import { TIER } from '@/types/Tier';
  import { formatKebabCase } from '@/utilities/format';
  import { formatNumber } from '@/utilities/format';
  import { realm } from '@/config/main.config';
  import { useFavoriteStore } from '@/stores/FavoriteStore';
  import { useFeaturedListingStore } from '@/stores/FeaturedListingStore';
  import { useHomeStore } from '@/stores/HomeStore';
  import { useUserAgentStore } from '@/stores/UserAgentStore';
  import { useViewportStore } from '@/stores/ViewportStore';

  const favoriteStore = useFavoriteStore();
  const featuredListingStore = useFeaturedListingStore();
  const homeStore = useHomeStore();
  const userAgentStore = useUserAgentStore();
  const viewportStore = useViewportStore();

  const { isExtraSmall, isSmall } = storeToRefs(viewportStore);

  featuredListingStore.getVehicles();
  homeStore.getVehicles();

  const blogPosts = new Array(4).fill('').map((empty, index) => index + 1);

  const { isTouchscreen } = storeToRefs(userAgentStore);

  // TODO: Replace upon determining a method for retrieving live Elasticsearch data.
  const dummies: number[] = new Array(10);

  const vehicleTypes: VehicleType[] = [
    { label: 'Travel trailer' },
    { label: 'Fifth wheel' },
    { label: 'Class A' },
    { label: 'Class C' },
    { label: 'Pop-up camper' },
    { label: 'Toy hauler' },
    { label: 'Truck camper' },
    { label: 'Class B' },
    { label: 'Park model' },
    { label: 'Fish house' },
  ];
</script>

<template>
  <div class="home-page mb-2">
    <BasicContainer
      :class="isExtraSmall ? 'column' : 'row'"
      class="flex axis1-center gap-2 mt-2 mx-2 mb-4"
    >
      <form class="home-search-form relative flex column axis1-center axis2-center shrink radius-1/2 p-2 w-full bg-primary-variant-tier-3 xy-hidden">
        <PatternTopography class="absolute top-0 left-0 font-primary-tier-1" />

        <div class="absolute radius-1/4 p-1 bg-white">
          <h1
            :class="isExtraSmall ? 'row' : 'column'"
            class="flex axis1-center axis2-center gap-1/2 mb-3/2 font-24 text-center"
          >
            Let's find your next {{ realm.label.singular }}
          </h1>

          <fieldset class="flex column gap-1 mb-1">
            <fieldset class="flex column gap-1/4">
              <label
                class="font-14"
                for="type"
              >
                {{ realm.label.singular }} type
              </label>

              <input
                class="border-1 border-gray radius-1/4 p-1 bg-white font-14"
                id="type"
                type="text"
              />
            </fieldset>

            <fieldset class="flex column gap-1/4">
              <label
                class="font-14"
                for="keyword"
              >
                Make, model, keyword
              </label>

              <input
                class="border-1 border-gray radius-1/4 p-1 bg-white font-14"
                id="keyword"
                type="text"
              />
            </fieldset>

            <fieldset class="flex gap-1/2">
              <fieldset class="flex column gap-1/4 w-1/2">
                <label
                  class="font-14"
                  for="zip"
                >
                  Zip code
                </label>

                <input
                  class="border-1 border-gray radius-1/4 p-1 w-full bg-white font-14"
                  id="zip"
                  type="text"
                />
              </fieldset>

              <fieldset class="flex column gap-1/4 w-1/2">
                <label
                  class="font-14"
                  for="distance"
                >
                  Search within
                </label>

                <select
                  class="border-1 border-gray radius-1/4 p-1 w-full bg-white font-14"
                  id="distance"
                >
                  <option>150 mi</option>
                </select>
              </fieldset>
            </fieldset>
          </fieldset>

          <BasicButton
            :href="`/${formatKebabCase(realm.label.plural)}-for-sale`"
            :priority="PRIORITY.PRIMARY"
            :tier="TIER.TIER_1"
            class="mb-1 w-full"
          >
            Search
          </BasicButton>

          <div class="flex axis1-center">
            <a
              class="font-14 font-700"
              href="#"
            >
              Sell your {{ realm.label.singular }}
            </a>
          </div>
        </div>
      </form>

      <div class="home-alpha-dma-ad flex axis1-center axis2-center radius-1/2 w-full bg-gray-light font-gray font-700">
        Alpha-DMA
      </div>
    </BasicContainer>

    <section class="mb-4">
      <BasicContainer
        :class="isExtraSmall ? 'column' : 'row'"
        class="flex axis1-center axis2-center mb-4 gap-1"
      >
        <h2
          :class="{
            'border-r pr-1': !viewportStore.isExtraSmall,
          }"
          class="border-gray font-32 whitespace-nowrap"
        >
          Every {{ realm.label.singular }} type
        </h2>

        <p>
          Whether you're looking for something drivable or towable, we have the {{ realm.label.singular }} type for you.
        </p>
      </BasicContainer>

      <BasicCarousel
        :card-width="280"
        :gap="16"
        :is-touchscreen="isTouchscreen"
        :offset-x="32"
      >
        <li
          :key="vehicleType.label"
          :vehicle-type="vehicleType"
          class="home-vehicle-type shrink-none ratio-1/1 snap-start"
          v-for="vehicleType in vehicleTypes"
        >
          <a
            :href="`/${formatKebabCase(realm.label.plural)}-for-sale`"
            class="flex column axis1-between gap-1 radius-1/2 p-1 h-full bg-gray-light underline-none"
          >
            <span class="font-20 font-700">{{ vehicleType.label }}</span>
            <div class="home-vehicle-type-img mx-auto radius-1/2 bg-gray" />
          </a>
        </li>
      </BasicCarousel>
    </section>

    <BasicContainer class="mb-4">
      <section
        :class="isExtraSmall ? 'column p-2' : 'row p-4'"
        class="home-sell-your-vehicle flex gap-2 mb-4 radius-1/2 bg-primary-variant-tier-3 y-hidden"
      >
        <div
          :class="isExtraSmall ? '' : 'w-1/2'"
          class="home-sell-your-vehicle-content flex column axis2-center gap-1"
        >
          <h2 class="font-32">Sell your {{ realm.label.singular }} on {{ realm.label.singular }} Trader</h2>
          <p>
            Millions of buyers are looking for their next {{ realm.label.singular }} on
            {{ realm.label.singular }} Trader this month.
          </p>
          <BasicButton
            :priority="PRIORITY.PRIMARY"
            :size="SIZE_BUTTON.LARGE"
            :tier="TIER.TIER_2"
            class="whitespace-nowrap"
          >
            Sell my {{ realm.label.singular }}
          </BasicButton>
        </div>

        <div
          :class="isExtraSmall ? '' : 'w-1/2'"
          class="relative flex axis1-center"
        >
          <div class="home-sell-your-vehicle-img absolute top-0 mx-auto radius-1/2 w-full bg-gray" />
        </div>
      </section>

      <AdPlaceholder
        class="shrink-none mb-4"
        height="250"
        width="1168"
      >
        Native summit showcase banner
      </AdPlaceholder>
    </BasicContainer>

    <section class="mb-4">
      <CardCarouselListingDealer :vehicles="featuredListingStore.vehicles" />
    </section>

    <section class="mr-2 mb-4">
      <BasicContainer>
        <h2 class="mb-1 font-24">Featured listings</h2>
      </BasicContainer>

      <div class="flex gap-2">
        <CardCarouselListingFeatured
          :get-is-favorite="favoriteStore.getIsFavorite"
          :handle-favorite-click="favoriteStore.toggleIsFavorite"
          :is-touchscreen="isTouchscreen"
          :offset-x="32"
          :vehicles="homeStore.featuredListings"
          class="home-featured-listings"
        />

        <AdPlaceholder
          class="shrink-none"
          height="250"
          v-if="!viewportStore.isExtraSmall"
          width="300"
        />
      </div>
    </section>

    <section class="mb-4">
      <BasicContainer>
        <h2 class="mb-1 font-24">Recommended {{ realm.label.plural }}</h2>
      </BasicContainer>

      <CardCarouselListingFeatured
        :get-is-favorite="favoriteStore.getIsFavorite"
        :handle-favorite-click="favoriteStore.toggleIsFavorite"
        :is-touchscreen="isTouchscreen"
        :offset-x="32"
        :vehicles="homeStore.recommendedVehicles"
      />
    </section>

    <BasicContainer>
      <section class="mb-4">
        <h2 class="mb-1 font-32">Fresh from the blog</h2>

        <div
          :class="isExtraSmall ? 'column' : 'row'"
          class="flex gap-1"
        >
          <a
            class="flex column gap-1 m-1/4 p-1/2 w-full m-w-1/2 shadow-box underline-none"
            href="#"
          >
            <div class="border-overlay radius-1/4 bg-gray ratio-3/2" />

            <div class="flex column">
              <span class="mb-1/2 font-12 font-600">Blog date {{ blogPosts[0] }}</span>
              <h3 class="mb-1 font-20">Blog headline {{ blogPosts[0] }}</h3>
              <p class="home-blog-preview mb-1 font-14 y-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aperiam iure officia, nostrum labore
                qui eligendi! Incidunt, obcaecati adipisci. Quibusdam doloribus at minus culpa autem eaque odit. Earum,
                cum esse.
              </p>
            </div>
          </a>

          <div class="flex column w-full m-w-1/2">
            <a
              :class="isExtraSmall ? 'column' : 'row'"
              :key="blogPost"
              class="flex gap-1 m-1/4 p-1/2 shadow-box underline-none"
              href="#"
              v-for="blogPost in blogPosts.slice(1)"
            >
              <div
                :class="isSmall ? 'w-1/3' : ''"
                class="home-blog-thumb-small shrink-none border-overlay radius-1/4 w-full bg-gray ratio-3/2"
              />

              <div class="flex column">
                <span class="mb-1/2 font-12 font-600">Blog date {{ blogPost }}</span>

                <h3 class="mb-1 font-20">Blog headline {{ blogPost }}</h3>

                <p class="home-blog-preview mb-1 y-hidden font-14">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aperiam iure officia, nostrum
                  labore qui eligendi! Incidunt, obcaecati adipisci. Quibusdam doloribus at minus culpa autem eaque
                  odit. Earum, cum esse.
                </p>

                <BasicLinkWithIcon
                  :icon-trailing="ICON.CHEVRON_RIGHT"
                  class="font-14 font-700"
                  href="#"
                >
                  Learn more
                </BasicLinkWithIcon>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section
        class="flex axis1-center mb-4"
        v-if="!viewportStore.isExtraSmall"
      >
        <AdPlaceholder
          height="90"
          width="728"
        />
      </section>

      <section class="flex gap-2 mb-4">
        <div>
          <h2 class="mb-1">Find {{ realm.label.plural }} for sale on {{ realm.label.singular }} Trader</h2>
          <p>
            {{ realm.label.singular }}Trader.com is the online source for all your {{ realm.label.singular }} needs.
            Looking to sell a {{ realm.label.singular }} or find a {{ realm.label.singular }} Park? We can help. Place
            your {{ realm.label.singular }} ad in front of millions of monthly visitors today. Ready to buy a cheap
            {{ realm.label.singular }}? We can help with that that too ― browse over 200,000 new and used
            {{ realm.label.plural }} for sale nationwide from all of your favorite {{ realm.label.singular }} makes or
            types like Travel Trailer, Pop Up Camper, Fifth Wheel, Toy Hauler, Truck Camper, Class A, Class B, Class C,
            Fish House, Park Model or locate a specific {{ realm.label.singular }} Brand like Newmar
            {{ realm.label.plural }}. You can easily estimate monthly payments, get insurance quotes, and set up price
            alerts for the {{ realm.label.plural }} you’re interested in while you search. Make sure to follow us on
            social media for everything {{ realm.label.singular }}, on and off the road!
          </p>
        </div>

        <AdPlaceholder
          height="250"
          v-if="!viewportStore.isExtraSmall"
          width="300"
        />
      </section>

      <SeoContent>
        <li class="w-1/4">
          <h2 class="mb-1 font-20">Top {{ realm.label.singular }} makes</h2>

          <ul class="flex column gap-1 list-none">
            <li
              :key="dummy"
              class="flex column gap-1/4"
              v-for="(dummy, index) in dummies"
            >
              Make {{ index + 1 }} {{ realm.label.plural }} for sale ({{
                formatNumber(Math.floor(Math.random() * 50000))
              }})
            </li>
          </ul>
        </li>

        <li class="w-1/4">
          <h2 class="mb-1 font-20">Top {{ realm.label.singular }} models</h2>

          <ul class="flex column gap-1 list-none">
            <li
              :key="dummy"
              class="flex column gap-1/4"
              v-for="(dummy, index) in dummies"
            >
              Model {{ index + 1 }} {{ realm.label.plural }} for sale ({{
                formatNumber(Math.floor(Math.random() * 50000))
              }})
            </li>
          </ul>
        </li>

        <li class="w-1/4">
          <h2 class="mb-1 font-20">Top {{ realm.label.singular }} types</h2>

          <ul class="flex column gap-1 list-none">
            <li
              :key="dummy"
              v-for="(dummy, index) in dummies"
            >
              Type {{ index + 1 }} {{ realm.label.plural }} for sale ({{
                formatNumber(Math.floor(Math.random() * 50000))
              }})
            </li>
          </ul>
        </li>

        <li class="w-1/4">
          <h2 class="mb-1 font-20">Top {{ realm.label.singular }} states</h2>

          <ul class="flex column gap-1 list-none">
            <li
              :key="dummy"
              v-for="(dummy, index) in dummies"
            >
              State {{ index + 1 }} {{ realm.label.plural }} for sale ({{
                formatNumber(Math.floor(Math.random() * 50000))
              }})
            </li>
          </ul>
        </li>
      </SeoContent>
    </BasicContainer>
  </div>
</template>

<style scoped>
  .home-alpha-dma-ad {
    aspect-ratio: 3 / 2;
  }

  .home-blog-preview {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .home-sell-your-vehicle {
    min-height: 500px;
  }

  .home-sell-your-vehicle-img {
    max-width: 277px;
    aspect-ratio: 1 / 2;
  }

  .home-vehicle-type {
    width: 280px;
  }

  .home-vehicle-type-img {
    width: 200px;
    height: 90px;
  }

  @media (min-width: 768px) {
    .home-blog-thumb-small {
      max-width: 228px;
    }

    .home-featured-listings {
      width: calc(100% - 300px - 2rem);
    }

    .home-sell-your-vehicle {
      min-height: unset;
    }
  }

  @media (min-width: 992px) {
    .m-inline {
      display: unset;
    }

    .home-search-form {
      width: unset;
      min-width: 350px;
    }
  }
</style>
