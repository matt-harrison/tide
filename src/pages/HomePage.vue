<script lang="ts" setup>
  import { storeToRefs } from 'pinia';

  import AdPlaceholder from '@/components/AdPlaceholder.vue';
  import BasicButton from '@/components/BasicButton.vue';
  import BasicCarousel from '@/components/BasicCarousel.vue';
  import BasicColumns from '@/components/BasicColumns.vue';
  import BasicContainer from '@/components/BasicContainer.vue';
  import BasicLink from '@/components/BasicLink.vue';
  import CardCarouselListingDealer from '@/components/CardCarouselListingDealer.vue';
  import CardCarouselListingFeatured from '@/components/CardCarouselListingFeatured.vue';
  import { ELEMENT } from '@/types/Element';
  import { ICON } from '@/types/Icon';
  import { PRIORITY } from '@/types/Priority';
  import { formatKebabCase } from '@/utilities/format';
  import { formatNumber } from '@/utilities/format';
  import { realm } from '@/config/main.config';
  import { useFavoriteStore } from '@/stores/FavoriteStore';
  import { useFeaturedListingStore } from '@/stores/FeaturedListingStore';
  import { useHomeStore } from '@/stores/HomeStore';
  import { useUserAgentStore } from '@/stores/UserAgentStore';
  import { useViewportStore } from '@/stores/ViewportStore';
  import { vehicleTypes } from '@/types/VehicleType';

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
  <div class="home-page tide-margin-bottom-2">
    <BasicContainer
      :class="!isLarge ? 'tide-flex-column' : 'tide-flex-row'"
      class="tide-display-flex tide-axis1-center tide-axis2-center tide-gap-2 tide-margin-top-2 tide-margin-bottom-4"
    >
      <form
        class="home-search-form tide-position-relative tide-radius-1/2 tide-padding-2 tide-bg-gradient tide-xy-hidden"
      >
        <img
          :src="patternTopography"
          class="tide-position-absolute tide-top-0 tide-left-0 tide-width-full h-full tide-object-cover tide-font-secondary"
        />

        <div class="tide-position-relative tide-radius-1/4 tide-padding-1 tide-bg-white">
          <h1
            :class="isExtraSmall ? 'tide-flex-row' : 'tide-flex-column'"
            class="tide-display-flex tide-axis1-center tide-axis2-center tide-gap-1/2 tide-margin-bottom-1 tide-font-24 text-center"
          >
            Let's find your next {{ realm.label.singular }}
          </h1>

          <fieldset class="tide-display-flex tide-flex-column tide-gap-1 tide-margin-bottom-1">
            <fieldset class="tide-display-flex tide-flex-column tide-gap-1/4">
              <label
                class="tide-font-14"
                for="type"
              >
                {{ realm.label.singular }} type
              </label>

              <input
                class="tide-border-1 tide-border-gray tide-radius-1/4 tide-padding-1 tide-bg-white tide-font-14"
                id="type"
                type="text"
              />
            </fieldset>

            <fieldset class="tide-display-flex tide-flex-column tide-gap-1/4">
              <label
                class="tide-font-14"
                for="keyword"
              >
                Make, model, keyword
              </label>

              <input
                class="tide-border-1 tide-border-gray tide-radius-1/4 tide-padding-1 tide-bg-white tide-font-14"
                id="keyword"
                type="text"
              />
            </fieldset>

            <fieldset class="tide-display-flex tide-gap-1/2">
              <fieldset class="tide-display-flex tide-flex-column tide-gap-1/4 tide-width-1/2">
                <label
                  class="tide-font-14"
                  for="zip"
                >
                  Zip code
                </label>

                <input
                  class="tide-border-1 tide-border-gray tide-radius-1/4 tide-padding-1 tide-width-full tide-bg-white tide-font-14"
                  id="zip"
                  type="text"
                />
              </fieldset>

              <fieldset class="tide-display-flex tide-flex-column tide-gap-1/4 tide-width-1/2">
                <label
                  class="tide-font-14"
                  for="distance"
                >
                  Search within
                </label>

                <select
                  class="tide-border-1 tide-border-gray tide-radius-1/4 tide-padding-1 tide-width-full tide-bg-white tide-font-14"
                  id="distance"
                >
                  <option>150 mi</option>
                </select>
              </fieldset>
            </fieldset>
          </fieldset>

          <BasicButton
            :element="ELEMENT.LINK"
            :href="`/${formatKebabCase(realm.label.plural)}-for-sale`"
            class="tide-margin-bottom-1 tide-width-full"
            label="Search"
          />

          <div class="tide-display-flex tide-axis1-center">
            <a
              class="tide-font-14 tide-font-700"
              href="#"
            >
              Sell your {{ realm.label.singular }}
            </a>
          </div>
        </div>
      </form>

      <div class="tide-display-flex tide-axis2-center tide-width-full">
        <div
          class="tide-position-relative tide-display-flex tide-flex-column tide-gap-1 tide-radius-1/2 tide-xy-hidden"
        >
          <img
            :src="dummyAlphaDmaAd"
            alt="Alpha DMA"
            class="tide-width-full"
          />

          <div
            :class="isExtraSmall ? 'tide-position-relative' : 'tide-position-absolute tide-padding-1'"
            class="tide-bottom-0 tide-display-flex tide-flex-wrap tide-axis1-between tide-axis2-center tide-gap-1 tide-width-full"
          >
            <span class="tide-font-14">Sponsored by Uwharrie RV • Seattle, WA</span>

            <div
              :class="isExtraSmall ? 'tide-axis1-between tide-width-full' : ''"
              class="tide-display-flex tide-flex-wrap tide-gap-1"
            >
              <BasicLink
                :element="ELEMENT.LINK"
                :icon-leading="ICON.CALL"
                class="tide-whitespace-nowrap"
                href="tel:17575551234"
                label="757 555-1234"
              />

              <BasicButton
                :element="ELEMENT.LINK"
                :is-new-tab="true"
                :priority="isExtraSmall ? PRIORITY.PRIMARY : PRIORITY.TERTIARY"
                class="tide-whitespace-nowrap"
                href="/"
                label="View inventory"
              />
            </div>
          </div>
        </div>
      </div>
    </BasicContainer>

    <section class="tide-margin-bottom-4">
      <BasicContainer class="tide-margin-bottom-1">
        <h2 class="tide-font-28">{{ realm.label.plural }} for every outdoor adventure</h2>
      </BasicContainer>

      <BasicCarousel :is-touchscreen="isTouchscreen">
        <li
          :key="vehicleType.label"
          class="home-vehicle-type tide-shrink-none ratio-1/1 tide-scroll-snap-start"
          v-for="vehicleType in vehicleTypes"
        >
          <a
            :href="`/${formatKebabCase(realm.label.plural)}-for-sale`"
            class="tide-display-flex tide-flex-column tide-axis1-between tide-gap-1 tide-radius-1/2 tide-padding-1 h-full tide-bg-surface-variant-lightest tide-underline-none"
          >
            <span class="tide-font-20 tide-font-700">{{ vehicleType.label }}</span>

            <div class="tide-display-flex tide-axis1-center tide-axis2-center h-full">
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
      :class="isLarge ? 'tide-flex-row' : 'tide-flex-column tide-axis2-center'"
      class="tide-display-flex tide-gap-1 tide-margin-bottom-4"
    >
      <section
        class="home-section-sell-your-vehicle tide-position-relative tide-radius-1/2 tide-width-full tide-padding-1 tide-bg-gradient tide-xy-hidden"
      >
        <img
          :src="patternTopography"
          class="tide-position-absolute tide-top-0 tide-left-0 tide-width-full h-full tide-object-cover tide-font-secondary"
        />

        <img
          :src="fgSellYourVehicle"
          alt="Sell your vehicle"
          class="home-section-sell-your-vehicle-img tide-position-absolute tide-right-0 tide-bottom-0 tide-margin-bottom-1"
        />

        <div class="tide-position-relative tide-display-flex tide-axis2-start tide-flex-column tide-gap-1">
          <h2 class="tide-font-24">Sell your {{ realm.label.singular }} on {{ realm.label.singular }} Trader</h2>
          <p class="tide-font-600">Millions of buyers are looking for their next RV on RV Trader this month.</p>
          <BasicButton
            :element="ELEMENT.LINK"
            :label="`Sell my ${realm.label.singular}`"
            href="#"
          />
        </div>
      </section>

      <section
        class="home-section-live-the-adventure tide-position-relative tide-radius-1/2 tide-width-full tide-xy-hidden"
      >
        <img
          :src="bgAdventure"
          alt="Adventure"
          class="home-section-live-the-adventure-bg tide-position-absolute tide-right-0 tide-bottom-0"
        />
        <div
          class="home-section-live-the-adventure-gradient tide-position-absolute tide-right-0 tide-bottom-0 tide-width-full h-full"
        />

        <div
          class="tide-position-relative tide-display-flex tide-axis2-start tide-flex-column tide-gap-1 tide-padding-1"
        >
          <h2 class="tide-font-24">Live the adventure</h2>
          <p class="tide-font-600">
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

    <section class="tide-margin-bottom-4">
      <CardCarouselListingDealer :vehicles="featuredListingStore.vehicles" />
    </section>

    <section class="tide-margin-right-2 tide-margin-bottom-4">
      <BasicContainer>
        <h2 class="tide-margin-bottom-1 tide-font-24">Featured listings</h2>
      </BasicContainer>

      <div class="tide-display-flex tide-gap-2">
        <CardCarouselListingFeatured
          :get-is-favorite="favoriteStore.getIsFavorite"
          :handle-favorite-click="favoriteStore.toggleIsFavorite"
          :is-touchscreen="isTouchscreen"
          :vehicles="homeStore.featuredListings"
          class="home-featured-listings"
        />

        <AdPlaceholder
          class="tide-shrink-none"
          height="250"
          v-if="!viewportStore.isExtraSmall"
          width="300"
        />
      </div>
    </section>

    <section class="tide-margin-bottom-4">
      <BasicContainer>
        <h2 class="tide-margin-bottom-1 tide-font-24">Recommended {{ realm.label.plural }}</h2>
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
        class="tide-display-flex tide-axis1-center tide-margin-bottom-4"
        v-if="!viewportStore.isExtraSmall"
      >
        <AdPlaceholder
          height="90"
          width="728"
        />
      </section>

      <section class="tide-display-flex tide-gap-2 tide-margin-bottom-4">
        <div>
          <h2 class="tide-margin-bottom-1">
            Find {{ realm.label.plural }} for sale on {{ realm.label.singular }} Trader
          </h2>
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
          <h2 class="tide-margin-bottom-1 tide-font-20">Top {{ realm.label.singular }} makes</h2>

          <ul class="tide-display-flex tide-flex-column tide-gap-1 tide-list-none">
            <li
              :key="dummy"
              class="tide-display-flex tide-flex-column tide-gap-1/4"
              v-for="(dummy, index) in dummies"
            >
              <a
                :href="`/${realm.label.plural.toLowerCase()}-for-sale`"
                class="tide-underline-none"
              >
                Make {{ index + 1 }} {{ realm.label.plural }} for sale ({{
                  formatNumber(Math.floor(Math.random() * 50000))
                }})
              </a>
            </li>
          </ul>
        </template>

        <template #section2>
          <h2 class="tide-margin-bottom-1 tide-font-20">Top {{ realm.label.singular }} models</h2>

          <ul class="tide-display-flex tide-flex-column tide-gap-1 tide-list-none">
            <li
              :key="dummy"
              class="tide-display-flex tide-flex-column tide-gap-1/4"
              v-for="(dummy, index) in dummies"
            >
              <a
                :href="`/${realm.label.plural.toLowerCase()}-for-sale`"
                class="tide-underline-none"
              >
                Model {{ index + 1 }} {{ realm.label.plural }} for sale ({{
                  formatNumber(Math.floor(Math.random() * 50000))
                }})
              </a>
            </li>
          </ul>
        </template>

        <template #section3>
          <h2 class="tide-margin-bottom-1 tide-font-20">Top {{ realm.label.singular }} types</h2>

          <ul class="tide-display-flex tide-flex-column tide-gap-1 tide-list-none">
            <li
              :key="dummy"
              v-for="(dummy, index) in dummies"
            >
              <a
                :href="`/${realm.label.plural.toLowerCase()}-for-sale`"
                class="tide-underline-none"
              >
                Type {{ index + 1 }} {{ realm.label.plural }} for sale ({{
                  formatNumber(Math.floor(Math.random() * 50000))
                }})
              </a>
            </li>
          </ul>
        </template>

        <template #section4>
          <h2 class="tide-margin-bottom-1 tide-font-20">Top {{ realm.label.singular }} states</h2>

          <ul class="tide-display-flex tide-flex-column tide-gap-1 tide-list-none">
            <li
              :key="dummy"
              v-for="(dummy, index) in dummies"
            >
              <a
                :href="`/${realm.label.plural.toLowerCase()}-for-sale`"
                class="tide-underline-none"
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
