<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { storeToRefs } from 'pinia';

  import type { BreadCrumb } from '@/types/BreadCrumb';
  import type { VehicleType } from '@/types/VehicleType';

  import AccordionItem from '@/components/AccordionItem.vue';
  import AdPlaceholder from '@/components/AdPlaceholder.vue';
  import BreadCrumbs from '@/components/BreadCrumbs.vue';
  import ListingCard from '@/components/ListingCard.vue';
  import SeoContent from '@/components/SeoContent.vue';
  import SiteButton from '@/components/SiteButton.vue';
  import SiteButtonIcon from '@/components/SiteButtonIcon.vue';
  import SiteButtonToggle from '@/components/SiteButtonToggle.vue';
  import SiteCarousel from '@/components/SiteCarousel.vue';
  import SiteContainer from '@/components/SiteContainer.vue';
  import SiteDisclaimer from '@/components/SiteDisclaimer.vue';
  import SiteIcon from '@/components/SiteIcon.vue';
  import SiteSwitchButtons from '@/components/SiteSwitchButtons.vue';
  import SubscribeToNewsletter from '@/components/SubscribeToNewsletter.vue';
  import VehicleCardCarousel from '@/components/VehicleCardCarousel.vue';
  import VehicleToggle from '@/components/VehicleToggle.vue';
  import { formatNumber } from '@/utilities/format';
  import { useFeaturedListingStore } from '@/stores/FeaturedListingStore';
  import { useFilterStore } from '@/stores/FilterStore';
  import { useSearchResultStore } from '@/stores/SearchResultStore';

  const featuredListingStore = useFeaturedListingStore();
  const filterStore = useFilterStore();
  const searchResultStore = useSearchResultStore();

  featuredListingStore.getVehicles();
  searchResultStore.getVehicles();
  filterStore.setPagesTotal(5);

  const breadCrumbs: BreadCrumb[] = [
    {
      label: 'Home',
      url: '#',
    },
    {
      label: 'Browse RVs',
      url: '#',
    },
    {
      label: 'Travel trailer',
      url: '#',
    },
    {
      label: 'Grand Design',
    },
  ];

  const filterCounts = {
    keyword: 0,
    location: 0,
    make: 0,
    makeModelFloorplan: 0,
    model: 0,
    type: 0,
  };
  const { isBrowseByType, makes, types } = storeToRefs(filterStore);

  let browseButtons = ref();

  const floorplanResults = 98430;

  const paginationButtons = new Array(filterStore.pagesTotal).fill('').map((empty, index) => index + 1);

  const rvTypes = new Array(9).fill('').map((item, index) => {
    return `RV Type ${index + 1}`;
  });

  const searchPills = [
    {
      label: 'New travel trailers',
      url: '/rvs-for-sale',
    },
    {
      label: 'Used travel trailers',
      url: '/rvs-for-sale',
    },
  ];

  const sleepingCapacities = new Array(9).fill('').map((item, index) => {
    return `Sleeps ${index + 1}`;
  });

  const topCities = new Array(12).fill('').map((item, index) => {
    return `Top City ${index + 1}`;
  });

  const topMakes = new Array(9).fill('').map((item, index) => {
    return `Top Make ${index + 1}`;
  });

  const topStates = new Array(12).fill('').map((item, index) => {
    return `State ${index + 1}`;
  });

  // TODO: Replace upon determining a method for retrieving live Elasticsearch data.
  const dummyVehicleMakes: VehicleType[] = [
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

  // TODO: Replace upon determining a method for retrieving live Elasticsearch data.
  const dummyVehicleTypes: VehicleType[] = [
    { label: 'Airstream' },
    { label: 'Alliance Rv' },
    { label: 'Coachmen' },
    { label: 'Fleetwood' },
    { label: 'Forest River' },
  ];

  const setBrowseButtons = () => {
    browseButtons.value = [
      {
        callback: () => {
          filterStore.setIsBrowseByType(true);
          setBrowseButtons();
        },
        count: filterCounts.type,
        isActive: isBrowseByType.value,
        label: 'Type',
      },
      {
        callback: () => {
          filterStore.setIsBrowseByType(false);
          setBrowseButtons();
        },
        count: filterCounts.make,
        isActive: !isBrowseByType.value,
        label: 'Make',
      },
    ];
  };

  onMounted(() => {
    setBrowseButtons();
  });
</script>

<template>
  <div class="search-results-page">
    <AdPlaceholder
      class="mb-2"
      height="150"
    />

    <SiteContainer class="mb-2">
      <section class="flex axis2-center gap-1 mb-2">
        <span class="font-20 font-700">Browse</span>

        <SiteSwitchButtons :buttons="browseButtons" />
      </section>
    </SiteContainer>

    <SiteCarousel
      :card-width="125"
      :gap="16"
      :offset-x="32"
      class="axis1-center mb-2"
      v-if="isBrowseByType"
    >
      <VehicleToggle
        :is-active="types.includes(vehicleType.label)"
        :key="vehicleType.label"
        :vehicle-type="vehicleType"
        @click="filterStore.toggleType(vehicleType.label)"
        v-for="vehicleType in dummyVehicleMakes"
      />
    </SiteCarousel>

    <SiteCarousel
      :card-width="125"
      :gap="16"
      :offset-x="32"
      class="axis1-center mb-2"
      v-if="!isBrowseByType"
    >
      <VehicleToggle
        :is-active="makes.includes(vehicleMake.label)"
        :key="vehicleMake.label"
        :vehicle-type="vehicleMake"
        @click="filterStore.toggleMake(vehicleMake.label)"
        v-for="vehicleMake in dummyVehicleTypes"
      />
    </SiteCarousel>

    <SiteContainer>
      <BreadCrumbs
        :bread-crumbs="breadCrumbs"
        class="mb-1"
      />

      <header class="flex wrap axis1-between gap-1 mb-1">
        <div class="flex wrap axis2-center gap-1">
          <h1 class="font-24">New and used Grand Design travel trailers for sale</h1>
          <span class="font-14">123,456 results</span>
        </div>

        <div class="flex wrap axis2-center gap-1">
          <button class="flex axis2-center gap-1/4">
            <SiteIcon icon="heart" />
            <span>Save search</span>
          </button>

          <button class="flex axis2-center gap-1/4">
            <SiteIcon
              class="rotate-90"
              icon="arrow-right-arrow-left"
              is-solid
            />
            <span>Sort by: Premium</span>
            <SiteIcon
              icon="chevron-down"
              is-solid
            />
          </button>
        </div>
      </header>

      <section class="flex gap-2 mb-2">
        <aside class="search-results-aside shrink-none hidden m-initial pt-1 bg-white">
          <div class="mb-2">
            <AccordionItem
              :label="`Location ${filterCounts.location ? '(' + filterCounts.location + ')' : ''}`"
              class-label="pb-1"
            >
              <div class="mb-1">
                <div class="flex axis1-between gap-1 my-1 border-b border-gray pb-1">
                  <div class="flex column gap-1/2 w-1/2">
                    <label
                      class="font-14"
                      for="zip"
                    >
                      Zip code
                    </label>
                    <input
                      class="border-1 border-gray p-1 w-full"
                      name="zip"
                      type="text"
                    />
                  </div>

                  <div class="flex column gap-1/2 w-1/2">
                    <label
                      class="font-14"
                      for="radius-1/2"
                    >
                      Search within
                    </label>
                    <select
                      class="border-1 border-gray p-1 w-full"
                      name="radius-1/2"
                    />
                  </div>
                </div>

                <div class="flex axis1-between axis2-center gap-1">
                  <span>
                    <span class="font-14">Only show listings with a floor plan image </span>
                    <span v-if="floorplanResults">({{ formatNumber(floorplanResults) }})</span>
                  </span>

                  <SiteButtonToggle
                    :is-active="filterStore.isFilterByFloorplans"
                    @click="filterStore.toggleIsFilterByFloorplans"
                    class="shrink-none"
                  />
                </div>
              </div>
            </AccordionItem>

            <AccordionItem
              :label="`Make, model, floor plan ${
                filterCounts.makeModelFloorplan ? '(' + filterCounts.makeModelFloorplan + ')' : ''
              }`"
              class-label="py-1"
            >
              <div class="mb-1">
                <fieldset class="flex column gap-1/4 mb-1">
                  <label
                    class="font-14"
                    for="make"
                  >
                    Find a make
                  </label>

                  <input
                    class="border-1 border-gray p-1 w-full"
                    name="make"
                    type="text"
                  />
                </fieldset>

                <fieldset class="flex column gap-1/4 mb-1/4">
                  <label
                    class="font-14 font-700"
                    for="topMake"
                  >
                    Top makes
                  </label>

                  <ul class="flex column gap-1/4">
                    <li
                      :key="index"
                      class="flex axis2-center gap-1/2"
                      v-for="(empty, index) in Array(8)"
                    >
                      <input
                        :id="`make${index}`"
                        type="checkbox"
                      />

                      <label
                        :for="`make${index}`"
                        class="font-14"
                      >
                        Make {{ index + 1 }}
                      </label>
                    </li>
                  </ul>
                </fieldset>

                <div class="mb-1">
                  <a
                    class="font-14 font-600"
                    href="#"
                  >
                    See all makes
                  </a>
                </div>

                <SiteButton is-secondary> Select models and floor plans </SiteButton>
              </div>
            </AccordionItem>

            <AccordionItem
              class-label="py-1"
              label="RV type"
            >
              <div class="flex column gap-1/4 mb-1">
                <div
                  :key="index"
                  class="flex axis2-center gap-1/2"
                  v-for="(empty, index) in Array(8)"
                >
                  <input
                    :id="`type${index}`"
                    type="checkbox"
                  />
                  <label
                    :for="`type${index}`"
                    class="font-14"
                  >
                    RV type {{ index + 1 }}
                  </label>
                </div>
              </div>
            </AccordionItem>
          </div>

          <section class="mb-2">
            <h2 class="mb-1 font-16">Partner center</h2>

            <AdPlaceholder
              class="mb-2"
              height="181"
              width="300"
            />

            <AdPlaceholder
              height="250"
              width="300"
            />
          </section>
        </aside>

        <main class="search-results-main pt-1">
          <section class="mb-2 border-b border-gray pb-2">
            <h2 class="mb-1 font-16">Featured listings</h2>

            <VehicleCardCarousel :vehicles="featuredListingStore.vehicles" />
          </section>

          <ul class="flex wrap gap-1 mb-2 list-none">
            <template
              :key="vehicle.id"
              v-for="(vehicle, index) in [
                ...searchResultStore.vehicles,
                ...searchResultStore.vehicles,
                ...searchResultStore.vehicles,
                ...searchResultStore.vehicles.slice(0, 6),
              ]"
            >
              <ListingCard :vehicle="vehicle" />

              <li
                class="flex axis1-center w-full no-shrink"
                v-if="[12, 24].includes(index + 1)"
              >
                <AdPlaceholder
                  height="90"
                  width="728"
                />
              </li>

              <li
                class="flex axis1-between axis2-center gap-2 w-full no-shrink"
                v-if="[3, 18].includes(index + 1)"
              >
                <aside class="search-results-dealer-ad flex column gap-1/2">
                  <div class="search-results-dealer-ad-img radius-1/2 bg-gray" />
                  <span class="font-12">Sponsored · Atlanta, GA</span>
                  <span class="font-20 font-700">Roy Robinson RV</span>
                  <span class="font-14">Largest premium pre-owned inventory</span>
                  <a
                    class="font-700"
                    href="tel:+18775551234"
                  >
                    Call 1-877-555-1234
                  </a>

                  <SiteButton
                    class="border-2 border-primary radius-1/2 p-1/2 font-14 font-700"
                    is-restyled
                    is-secondary
                  >
                    View Inventory
                  </SiteButton>
                </aside>

                <VehicleCardCarousel
                  :vehicles="featuredListingStore.vehicles"
                  class="search-results-dealer-ad-carousel"
                />
              </li>
            </template>
          </ul>

          <section
            class="flex axis1-center axis2-center gap-1 mx-auto mb-2 w-full"
            v-if="filterStore.pagesTotal > 1"
          >
            <SiteButtonIcon
              :disabled="filterStore.pageCurrent === 1"
              @click="filterStore.setPagePrevious"
              class="pagination-button ratio-1/1"
              icon="chevron-left"
              is-secondary
              is-solid
            />

            <ul class="flex gap-1/4 mx-2 list-none">
              <li
                :key="paginationButton"
                v-for="paginationButton in paginationButtons"
              >
                <SiteButton
                  :class="`pagination-button relative flex axis1-center axis2-center radius-full p-1/2 ratio-1/1 ${
                    paginationButton === filterStore.pageCurrent ? 'border-2' : ''
                  }`"
                  :is-primary="paginationButton === filterStore.pageCurrent"
                  :is-secondary="paginationButton !== filterStore.pageCurrent"
                  @click="filterStore.setPageCurrent(paginationButton)"
                  is-restyled
                >
                  <span class="absolute">{{ paginationButton }}</span>
                </SiteButton>
              </li>
            </ul>

            <SiteButtonIcon
              :disabled="filterStore.pageCurrent === paginationButtons[paginationButtons.length - 1]"
              @click="filterStore.setPageNext"
              class="pagination-button"
              icon="chevron-right"
              is-secondary
              is-solid
            />
          </section>

          <section class="flex wrap gap-1 mb-2 font-14">
            <router-link
              :key="searchPill.label"
              :to="searchPill.url"
              class="underline-none"
              v-for="searchPill in searchPills"
            >
              <SiteButton
                class="radius-full underline-none"
                icon-leading="search"
                is-secondary
                is-solid
              >
                {{ searchPill.label }}
              </SiteButton>
            </router-link>
          </section>

          <SiteDisclaimer class="mb-2" />

          <div class="flex column axis1-center mb-2">
            <AdPlaceholder
              class="mb-1"
              height="216"
            />

            <AdPlaceholder
              class="mb-1"
              height="148"
            />

            <AdPlaceholder
              class="mb-1"
              height="207"
            />

            <AdPlaceholder
              class="mb-1"
              height="216"
            />

            <AdPlaceholder
              class="mb-1"
              height="148"
            />
          </div>
        </main>
      </section>

      <SeoContent
        class="mb-2"
        heading="Top RV makes for sale"
      >
        <li
          :key="topMake"
          class="flex column gap-1/4 w-1/4 font-14"
          v-for="topMake in topMakes"
        >
          <span>{{ topMake }}</span>
          <span>({{ formatNumber(Math.floor(Math.random() * 50000)) }})</span>
        </li>
      </SeoContent>

      <SeoContent
        class="mb-2"
        heading="States with RVs for sale"
      >
        <li
          :key="topState"
          class="flex column gap-1/4 w-1/4 font-14"
          v-for="topState in topStates"
        >
          <span>{{ topState }}</span>
          <span>({{ formatNumber(Math.floor(Math.random() * 50000)) }})</span>
        </li>
      </SeoContent>

      <SeoContent
        class="mb-2"
        heading="Top cities with RVs for sale"
      >
        <li
          :key="topCity"
          class="flex column gap-1/4 w-1/4 font-14"
          v-for="topCity in topCities"
        >
          <span>{{ topCity }}</span>
          <span>({{ formatNumber(Math.floor(Math.random() * 50000)) }})</span>
        </li>
      </SeoContent>

      <SeoContent
        class="mb-2"
        heading="RV sleeping capacity"
      >
        <li
          :key="sleepingCapacity"
          class="flex column gap-1/4 w-1/4 font-14"
          v-for="sleepingCapacity in sleepingCapacities"
        >
          <span>{{ sleepingCapacity }}</span>
          <span>({{ formatNumber(Math.floor(Math.random() * 50000)) }})</span>
        </li>
      </SeoContent>

      <SeoContent
        class="mb-4"
        heading="RV types"
      >
        <li
          :key="rvType"
          class="flex column gap-1/4 w-full w-1/4 font-14"
          v-for="rvType in rvTypes"
        >
          <span>{{ rvType }}</span>
          <span>({{ formatNumber(Math.floor(Math.random() * 50000)) }})</span>
        </li>
      </SeoContent>

      <SubscribeToNewsletter class="mb-4" />
    </SiteContainer>
  </div>
</template>

<style scoped>
  .full-width-ad {
    height: 150px;
  }

  .search-results-aside {
    width: 350px;
  }

  .search-results-main {
    min-width: calc(100% - 350px - 4rem);
  }
</style>

<style>
  .pagination-button {
    width: 32px;
  }

  .search-results-dealer-ad-aside {
    width: 157px;
  }

  .search-results-dealer-ad-carousel {
    width: calc(100% - 157px - 2rem);
  }
</style>
