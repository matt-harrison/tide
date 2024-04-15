<script lang="ts" setup>
  import { storeToRefs } from 'pinia';
  import TideButton from 'tide2-design-system/components/TideButton';
  import { ELEMENT } from 'tide2-design-system/types/Element';
  import { ICON } from 'tide2-design-system/types/Icon';
  import { PRIORITY } from 'tide2-design-system/types/Priority';
  import { formatKebabCase } from 'tide2-design-system/utilities/format';
  import { formatNumber } from 'tide2-design-system/utilities/format';
  import { vehicleTypes } from 'tide2-design-system/types/VehicleType';

  import AdPlaceholder from '@/components/AdPlaceholder.vue';
  import BasicButton from '@/components/BasicButton.vue';
  import BasicCarousel from '@/components/BasicCarousel.vue';
  import BasicColumns from '@/components/BasicColumns.vue';
  import BasicContainer from '@/components/BasicContainer.vue';
  import BasicLink from '@/components/BasicLink.vue';
  import CardCarouselListingDealer from '@/components/CardCarouselListingDealer.vue';
  import CardCarouselListingFeatured from '@/components/CardCarouselListingFeatured.vue';
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

  const { isExtraSmall, isLarge } = storeToRefs(viewportStore);
  const { isTouchscreen } = storeToRefs(userAgentStore);

  featuredListingStore.getVehicles();
  homeStore.getVehicles();

  const bgAdventure = new URL('@/assets/images/realm/rv/bg-adventure.jpg', import.meta.url).href;
  const fgSellYourVehicle = new URL('@/assets/images/realm/rv/fg-sell-your-vehicle.png', import.meta.url).href;
  const patternTopography = new URL('@/assets/svg/patterns/pattern-topography.svg', import.meta.url).href;

  // TODO: Replace upon determining a method for retrieving live Elasticsearch data.
  const dummyAlphaDmaAd = new URL('@/assets/images/alpha-DMA.jpg', import.meta.url).href;
  const dummies: number[] = new Array(10);
</script>

<template>
  <div class="home-page mb-2">
    <BasicContainer
      :class="!isLarge ? 'column' : 'row'"
      class="flex axis1-center axis2-center gap-2 mt-2 mb-4"
    >
      <form class="home-search-form relative radius-1/2 p-2 bg-gradient xy-hidden">
        <img
          :src="patternTopography"
          class="absolute top-0 left-0 w-full h-full object-cover font-secondary"
        />

        <div class="relative radius-1/4 p-1 bg-white">
          <h1
            :class="isExtraSmall ? 'row' : 'column'"
            class="flex axis1-center axis2-center gap-1/2 mb-1 font-24 text-center"
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

          <TideButton
            :element="ELEMENT.LINK"
            :href="`/${formatKebabCase(realm.label.plural)}-for-sale`"
            class="mb-1 w-full"
            label="Search"
          />

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

      <div class="flex axis2-center w-full">
        <div class="relative flex column gap-1 radius-1/2 xy-hidden">
          <img
            :src="dummyAlphaDmaAd"
            alt="Alpha DMA"
            class="w-full"
          />

          <div
            :class="isExtraSmall ? 'relative' : 'absolute p-1'"
            class="bottom-0 flex wrap axis1-between axis2-center gap-1 w-full"
          >
            <span class="font-14">Sponsored by Uwharrie RV • Seattle, WA</span>

            <div
              :class="isExtraSmall ? 'axis1-between w-full' : ''"
              class="flex wrap gap-1"
            >
              <BasicLink
                :element="ELEMENT.LINK"
                :icon-leading="ICON.PHONE"
                class="whitespace-nowrap"
                href="tel:17575551234"
                label="757 555-1234"
              />

              <BasicButton
                :element="ELEMENT.LINK"
                :is-new-tab="true"
                :priority="isExtraSmall ? PRIORITY.PRIMARY : PRIORITY.TERTIARY"
                class="whitespace-nowrap"
                href="/"
                label="View inventory"
              />
            </div>
          </div>
        </div>
      </div>
    </BasicContainer>

    <section class="mb-4">
      <BasicContainer class="mb-1">
        <h2 class="font-28">{{ realm.label.plural }} for every outdoor adventure</h2>
      </BasicContainer>

      <BasicCarousel :is-touchscreen="isTouchscreen">
        <li
          :key="vehicleType.label"
          class="home-vehicle-type shrink-none ratio-1/1 snap-start"
          v-for="vehicleType in vehicleTypes"
        >
          <a
            :href="`/${formatKebabCase(realm.label.plural)}-for-sale`"
            class="flex column axis1-between gap-1 radius-1/2 p-1 h-full bg-surface-variant-lightest underline-none"
          >
            <span class="font-20 font-700">{{ vehicleType.label }}</span>

            <div class="flex axis1-center axis2-center h-full">
              <img
                :alt="vehicleType.label"
                :src="vehicleType.img"
                class="home-vehicle-type-img"
              />
            </div>
          </a>
        </li>
      </BasicCarousel>
    </section>

    <div
      :class="isLarge ? 'row' : 'column axis2-center'"
      class="flex gap-1 mb-4"
    >
      <section class="home-section-sell-your-vehicle relative radius-1/2 w-full p-1 bg-gradient xy-hidden">
        <img
          :src="patternTopography"
          class="absolute top-0 left-0 w-full h-full object-cover font-secondary"
        />

        <img
          :src="fgSellYourVehicle"
          alt="Sell your vehicle"
          class="home-section-sell-your-vehicle-img absolute right-0 bottom-0 mb-1"
        />

        <div class="relative flex axis2-start column gap-1">
          <h2 class="font-24">Sell your {{ realm.label.singular }} on {{ realm.label.singular }} Trader</h2>
          <p class="font-600">Millions of buyers are looking for their next RV on RV Trader this month.</p>
          <BasicButton
            :element="ELEMENT.LINK"
            :label="`Sell my ${realm.label.singular}`"
            href="#"
          />
        </div>
      </section>

      <section class="home-section-live-the-adventure relative radius-1/2 w-full xy-hidden">
        <img
          :src="bgAdventure"
          alt="Adventure"
          class="home-section-live-the-adventure-bg absolute right-0 bottom-0"
        />
        <div class="home-section-live-the-adventure-gradient absolute right-0 bottom-0 w-full h-full" />

        <div class="relative flex axis2-start column gap-1 p-1">
          <h2 class="font-24">Live the adventure</h2>
          <p class="font-600">
            Get tips on buying and selling RVs, top destinations to visit, maintenance, and living the RV lifestyle.
          </p>
          <BasicButton
            :element="ELEMENT.LINK"
            href="#"
            label="Explore resources"
          />
        </div>
      </section>
    </div>

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
        :vehicles="homeStore.recommendedVehicles"
      />
    </section>

    <BasicContainer>
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

      <BasicColumns>
        <template #section1>
          <h2 class="mb-1 font-20">Top {{ realm.label.singular }} makes</h2>

          <ul class="flex column gap-1 list-none">
            <li
              :key="dummy"
              class="flex column gap-1/4"
              v-for="(dummy, index) in dummies"
            >
              <a
                :href="`/${realm.label.plural.toLowerCase()}-for-sale`"
                class="underline-none"
              >
                Make {{ index + 1 }} {{ realm.label.plural }} for sale ({{
                  formatNumber(Math.floor(Math.random() * 50000))
                }})
              </a>
            </li>
          </ul>
        </template>

        <template #section2>
          <h2 class="mb-1 font-20">Top {{ realm.label.singular }} models</h2>

          <ul class="flex column gap-1 list-none">
            <li
              :key="dummy"
              class="flex column gap-1/4"
              v-for="(dummy, index) in dummies"
            >
              <a
                :href="`/${realm.label.plural.toLowerCase()}-for-sale`"
                class="underline-none"
              >
                Model {{ index + 1 }} {{ realm.label.plural }} for sale ({{
                  formatNumber(Math.floor(Math.random() * 50000))
                }})
              </a>
            </li>
          </ul>
        </template>

        <template #section3>
          <h2 class="mb-1 font-20">Top {{ realm.label.singular }} types</h2>

          <ul class="flex column gap-1 list-none">
            <li
              :key="dummy"
              v-for="(dummy, index) in dummies"
            >
              <a
                :href="`/${realm.label.plural.toLowerCase()}-for-sale`"
                class="underline-none"
              >
                Type {{ index + 1 }} {{ realm.label.plural }} for sale ({{
                  formatNumber(Math.floor(Math.random() * 50000))
                }})
              </a>
            </li>
          </ul>
        </template>

        <template #section4>
          <h2 class="mb-1 font-20">Top {{ realm.label.singular }} states</h2>

          <ul class="flex column gap-1 list-none">
            <li
              :key="dummy"
              v-for="(dummy, index) in dummies"
            >
              <a
                :href="`/${realm.label.plural.toLowerCase()}-for-sale`"
                class="underline-none"
              >
                State {{ index + 1 }} {{ realm.label.plural }} for sale ({{
                  formatNumber(Math.floor(Math.random() * 50000))
                }})
              </a>
            </li>
          </ul>
        </template>
      </BasicColumns>
    </BasicContainer>
  </div>
</template>

<style scoped>
  .home-section-live-the-adventure,
  .home-section-sell-your-vehicle {
    flex: 0 0 50%;
    max-width: 750px;
    min-height: 400px;
  }

  .home-section-live-the-adventure-bg {
    max-width: 1056px;
    width: 1056px;
    height: 400px;
  }

  .home-section-live-the-adventure-gradient {
    background: linear-gradient(to bottom right, rgba(255, 255, 255, 15) 0%, rgba(255, 255, 255, 0) 100%);
  }

  .home-section-sell-your-vehicle-img {
    margin-right: -4rem;
  }

  .home-vehicle-type {
    width: 280px;
  }

  .home-vehicle-type-img {
    width: auto;
    height: 96px;
  }

  @media (min-width: 768px) {
    .home-featured-listings {
      width: calc(100% - 300px - 2rem);
    }
  }

  .home-search-form {
    max-width: 500px;
    min-width: 350px;
  }
</style>
