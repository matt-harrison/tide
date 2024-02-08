<script lang="ts" setup>
  import { computed, onMounted, ref } from 'vue';
  import { storeToRefs } from 'pinia';

  import type { BreadCrumb } from '@/types/BreadCrumb';

  import AdPlaceholder from '@/components/AdPlaceholder.vue';
  import BasicAccordionItem from '@/components/BasicAccordionItem.vue';
  import BasicBreadCrumbs from '@/components/BasicBreadCrumbs.vue';
  import BasicButton from '@/components/BasicButton.vue';
  import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
  import BasicButtonTextAsIcon from '@/components/BasicButtonTextAsIcon.vue';
  import BasicCarousel from '@/components/BasicCarousel.vue';
  import BasicChipInput from '@/components/BasicChipInput.vue';
  import BasicContainer from '@/components/BasicContainer.vue';
  import BasicLink from '@/components/BasicLink.vue';
  import BasicSeoLinks from '@/components/BasicSeoLinks.vue';
  import BasicTabs from '@/components/BasicTabs.vue';
  import BasicToggle from '@/components/BasicToggle.vue';
  import CardCarouselListingDealer from '@/components/CardCarouselListingDealer.vue';
  import CardCarouselListingFeatured from '@/components/CardCarouselListingFeatured.vue';
  import CardListing from '@/components/CardListing.vue';
  import CardListingPremiumSelect from '@/components/CardListingPremiumSelect.vue';
  import ChipActionRelatedSearch from '@/components/ChipActionRelatedSearch.vue';
  import ChipFilterGuidedSearch from '@/components/ChipFilterGuidedSearch.vue';
  import SiteDisclaimer from '@/components/SiteDisclaimer.vue';
  import SubscribeToNewsletter from '@/components/SubscribeToNewsletter.vue';
  import { ELEMENT } from '@/types/Element';
  import { ELEMENT_TEXT_AS_ICON } from '@/types/Element';
  import { ICON } from '@/types/Icon';
  import { PRIORITY } from '@/types/Priority';
  import { formatKebabCase, formatNumber } from '@/utilities/format';
  import { realm } from '@/config/main.config';
  import { useFavoriteStore } from '@/stores/FavoriteStore';
  import { useFeaturedListingStore } from '@/stores/FeaturedListingStore';
  import { useFilterStore } from '@/stores/FilterStore';
  import { useSearchResultStore } from '@/stores/SearchResultStore';
  import { useUserAgentStore } from '@/stores/UserAgentStore';
  import { useViewportStore } from '@/stores/ViewportStore';
  import { vehicleMakes, vehicleTypes } from '@/types/VehicleType';

  const favoriteStore = useFavoriteStore();
  const featuredListingStore = useFeaturedListingStore();
  const filterStore = useFilterStore();
  const searchResultStore = useSearchResultStore();
  const userAgentStore = useUserAgentStore();
  const viewportStore = useViewportStore();

  featuredListingStore.getVehicles();
  filterStore.setPagesTotal(5);
  searchResultStore.getVehicles();

  const { isExtraSmall, isSmall, isLarge } = storeToRefs(viewportStore);
  const { filters, isBrowseByType, makes, types } = storeToRefs(filterStore);
  const { isTouchscreen } = storeToRefs(userAgentStore);

  const isSingleColumn = computed(() => isExtraSmall.value || isSmall.value);

  const breadCrumbs: BreadCrumb[] = [
    {
      label: 'Home',
      url: '#',
    },
    {
      label: `Browse ${realm.label.plural}`,
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

  let guidedSearchTabs = ref();
  let isSavedSearch = ref();

  // TODO: Replace upon determining a method for retrieving live Elasticsearch data.
  const dummy = {
    floorplanResults: 98430,
    headline: 'New and used Grand Design travel trailers for sale',
    resultCount: 123456,
  };

  const paginationButtons = new Array(filterStore.pagesTotal).fill('').map((empty, index) => index + 1);

  const searchPills = [
    {
      label: 'New travel trailers',
      url: `/${formatKebabCase(realm.label.plural)}-for-sale`,
    },
    {
      label: 'Used travel trailers',
      url: `/${formatKebabCase(realm.label.plural)}-for-sale`,
    },
  ];

  const sleepingCapacities = new Array(9).fill('').map((item, index) => {
    return {
      label: `Sleeps ${index + 1} (${formatNumber(Math.floor(Math.random() * 50000))})`,
      url: '/',
    };
  });

  const topCities = new Array(12).fill('').map((item, index) => {
    return {
      label: `Top City ${index + 1} (${formatNumber(Math.floor(Math.random() * 50000))})`,
      url: '/',
    };
  });

  const topMakes = new Array(9).fill('').map((item, index) => {
    return {
      label: `Top Make ${index + 1} (${formatNumber(Math.floor(Math.random() * 50000))})`,
      url: '/',
    };
  });

  const topStates = new Array(12).fill('').map((item, index) => {
    return {
      label: `State ${index + 1} (${formatNumber(Math.floor(Math.random() * 50000))})`,
      url: '/',
    };
  });

  const vehicleTypesFormatted = vehicleTypes.map((vehicleType) => {
    return {
      label: vehicleType.label,
      url: '/',
    };
  });

  const handleFilterChipClick = (callback: () => void) => {
    callback();
    setBrowseButtons();
    setIsSavedSearch();
  };

  const handleClearAllClick = () => {
    filters.value.forEach((filter) => {
      filter.callback();
    });

    setBrowseButtons();
    setIsSavedSearch();
  };

  const handleMakeToggleClick = (label: string) => {
    filterStore.toggleMake(label);
    setBrowseButtons();
    setIsSavedSearch();
  };

  const handleTypeToggleClick = (label: string) => {
    filterStore.toggleType(label);
    setBrowseButtons();
    setIsSavedSearch();
  };

  const setBrowseButtons = () => {
    guidedSearchTabs.value = [
      {
        callback: () => {
          filterStore.setIsBrowseByType(true);
          setBrowseButtons();
        },
        count: filterCounts.type,
        label: types.value.length > 0 ? `Type (${types.value.length})` : 'Type',
      },
      {
        callback: () => {
          filterStore.setIsBrowseByType(false);
          setBrowseButtons();
        },
        count: filterCounts.make,
        label: makes.value.length > 0 ? `Make (${makes.value.length})` : 'Make',
      },
    ];
  };

  const setIsSavedSearch = () => {
    isSavedSearch.value = filters?.value ? filterStore.getIsSavedSearch(filters.value) : false;
  };

  const toggleIsSavedSearch = () => {
    const isSavedSearch = filterStore.getIsSavedSearch(filters.value);

    if (isSavedSearch) {
      filterStore.removeSavedSearch(filters.value);
    } else {
      filterStore.addSavedSearch(filters.value);
    }

    setIsSavedSearch();
  };

  onMounted(() => {
    setBrowseButtons();
  });
</script>

<template>
  <div class="search-results-page tide-margin-bottom-2">
    <AdPlaceholder
      class="tide-margin-bottom-2"
      height="150"
    />

    <div
      :class="isSingleColumn ? 'tide-flex-column' : 'column-reverse'"
      class="tide-display-flex tide-gap-2 tide-margin-bottom-2"
    >
      <BasicContainer :class="isLarge ? 'tide-width-full' : ''">
        <BasicBreadCrumbs
          :bread-crumbs="breadCrumbs"
          class="tide-margin-bottom-1"
          v-if="!isSingleColumn"
        />

        <header class="tide-display-flex tide-flex-wrap tide-axis1-between tide-gap-1">
          <div class="tide-display-flex tide-flex-wrap tide-axis2-center tide-gap-1">
            <h1 class="tide-font-24">{{ dummy.headline }}</h1>
            <span class="tide-font-14">{{ formatNumber(dummy.resultCount) }} results</span>
          </div>

          <div
            :class="isSingleColumn ? 'tide-axis1-between tide-width-full' : ''"
            class="tide-display-flex tide-flex-wrap tide-axis2-center tide-gap-1"
          >
            <div
              class="tide-position-relative"
              v-if="isSingleColumn"
            >
              <BasicButton
                :icon-leading="ICON.SLIDERS"
                label="Filters"
              />

              <div
                class="search-results-filter-count tide-position-absolute tide-top-0 tide-right-0 tide-display-flex tide-axis1-center tide-axis2-center tide-radius-full tide-bg-primary-tier-1 tide-font-14 tide-font-700"
                v-if="isSingleColumn && filters.length > 0"
              >
                {{ filters.length }}
              </div>
            </div>

            <div class="tide-display-flex tide-axis2-center tide-gap-1/2">
              <BasicButton
                :icon-leading="isSavedSearch ? ICON.HEART : ICON.HEART_OPEN"
                :is-active="isSavedSearch"
                :priority="PRIORITY.SECONDARY"
                @click="toggleIsSavedSearch"
                label="Save search"
                v-if="isSingleColumn"
              />

              <BasicButton
                :icon-leading="isSavedSearch ? ICON.HEART : ICON.HEART_OPEN"
                :is-active="isSavedSearch"
                :priority="PRIORITY.TERTIARY"
                @click="toggleIsSavedSearch"
                label="Save search"
                v-else
              />

              <BasicButton
                :icon-leading="ICON.ARROW_UP_ARROW_DOWN"
                :icon-trailing="!isSingleColumn ? ICON.CHEVRON_DOWN : undefined"
                :label="`Sort by ${!isSingleColumn ? '' : 'Premium'}`"
                :priority="isSingleColumn ? PRIORITY.SECONDARY : PRIORITY.TERTIARY"
              />
            </div>
          </div>
        </header>
      </BasicContainer>

      <section v-if="guidedSearchTabs">
        <BasicContainer class="tide-margin-bottom-2">
          <section class="tide-display-flex tide-axis2-center tide-gap-1">
            <span
              class="tide-font-20 tide-font-700"
              v-if="!isSingleColumn"
            >
              Browse
            </span>

            <BasicTabs
              :class="isSingleColumn ? 'tide-width-full' : ''"
              :tabs="guidedSearchTabs"
            />
          </section>
        </BasicContainer>

        <BasicCarousel
          :is-touchscreen="isTouchscreen"
          v-if="isBrowseByType"
        >
          <li
            :key="vehicleType.label"
            v-for="vehicleType in vehicleTypes"
          >
            <ChipFilterGuidedSearch
              :is-active="types.includes(vehicleType.label)"
              :vehicle-type="vehicleType"
              @click="handleTypeToggleClick(vehicleType.label)"
            />
          </li>
        </BasicCarousel>

        <BasicCarousel
          :is-touchscreen="isTouchscreen"
          class="tide-axis1-center"
          v-if="!isBrowseByType"
        >
          <ChipFilterGuidedSearch
            :is-active="makes.includes(vehicleMake.label)"
            :key="vehicleMake.label"
            :vehicle-type="vehicleMake"
            @click="handleMakeToggleClick(vehicleMake.label)"
            v-for="vehicleMake in vehicleMakes"
          />
        </BasicCarousel>
      </section>
    </div>

    <div
      :class="[isSingleColumn ? '' : 'tide-margin-x-2', isLarge ? 'tide-margin-x-auto tide-width-container' : '']"
      class="search-results-columns"
    >
      <section class="tide-display-flex tide-gap-2 tide-margin-bottom-2">
        <aside
          class="search-results-aside tide-shrink-none tide-bg-white"
          v-if="!isSingleColumn"
        >
          <div class="tide-margin-bottom-2">
            <BasicAccordionItem
              :is-expanded-initial="true"
              :label="`Location ${filterCounts.location ? '(' + filterCounts.location + ')' : ''}`"
              class-label="tide-padding-bottom-1"
            >
              <div class="tide-margin-bottom-1">
                <div
                  class="tide-display-flex tide-axis1-between tide-gap-1 tide-margin-y-1 tide-border-bottom tide-border-gray-light tide-padding-bottom-1"
                >
                  <div class="tide-display-flex tide-flex-column tide-gap-1/2 tide-width-1/2">
                    <label
                      class="tide-font-14"
                      for="zip"
                    >
                      Zip code
                    </label>

                    <input
                      class="tide-border-1 tide-border-gray tide-radius-1/4 tide-padding-1 tide-bg-white tide-font-14"
                      name="zip"
                      type="text"
                    />
                  </div>

                  <div class="tide-display-flex tide-flex-column tide-gap-1/2 tide-width-1/2">
                    <label
                      class="tide-font-14"
                      for="radius"
                    >
                      Search within
                    </label>

                    <select
                      class="tide-border-1 tide-border-gray tide-radius-1/4 tide-padding-1 tide-bg-white tide-font-14"
                      name="radius"
                    />
                  </div>
                </div>

                <div class="tide-display-flex tide-axis1-between tide-axis2-center tide-gap-1">
                  <span>
                    <span class="tide-font-14">Only show listings with a floor plan image </span>
                    <span v-if="dummy.floorplanResults">({{ formatNumber(dummy.floorplanResults) }})</span>
                  </span>

                  <BasicToggle
                    :is-active="filterStore.isFilterByFloorplans"
                    @click="filterStore.toggleIsFilterByFloorplans"
                    class="tide-shrink-none"
                  />
                </div>
              </div>
            </BasicAccordionItem>

            <BasicAccordionItem
              :label="`Make, model, floor plan ${
                filterCounts.makeModelFloorplan ? '(' + filterCounts.makeModelFloorplan + ')' : ''
              }`"
              class-label="tide-padding-y-1"
            >
              <div class="tide-margin-bottom-1">
                <fieldset class="tide-display-flex tide-flex-column tide-gap-1/4 tide-margin-bottom-1">
                  <label
                    class="tide-font-14"
                    for="make"
                  >
                    Find a make
                  </label>

                  <input
                    class="tide-border-1 tide-border-gray tide-radius-1/4 tide-padding-1 tide-bg-white tide-font-14"
                    name="make"
                    type="text"
                  />
                </fieldset>

                <fieldset class="tide-display-flex tide-flex-column tide-gap-1/4 tide-margin-bottom-1/4">
                  <label
                    class="tide-font-14 tide-font-700"
                    for="topMake"
                  >
                    Top makes
                  </label>

                  <ul class="tide-display-flex tide-flex-column tide-gap-1/4">
                    <li
                      :key="index"
                      class="tide-display-flex tide-axis2-center tide-gap-1/2"
                      v-for="(empty, index) in Array(8)"
                    >
                      <input
                        :id="`make${index}`"
                        type="checkbox"
                      />

                      <label
                        :for="`make${index}`"
                        class="tide-font-14"
                      >
                        Make {{ index + 1 }}
                      </label>
                    </li>
                  </ul>
                </fieldset>

                <div class="tide-margin-bottom-1">
                  <a
                    class="tide-font-14 tide-font-600"
                    href="#"
                  >
                    See all makes
                  </a>
                </div>

                <BasicButton label="Select models and floor plans" />
              </div>
            </BasicAccordionItem>

            <BasicAccordionItem
              :label="`${realm.label.singular} type`"
              class-label="tide-padding-y-1"
            >
              <div class="tide-display-flex tide-flex-column tide-gap-1/4 tide-margin-bottom-1">
                <div
                  :key="index"
                  class="tide-display-flex tide-axis2-center tide-gap-1/2"
                  v-for="(empty, index) in Array(8)"
                >
                  <input
                    :id="`type${index}`"
                    type="checkbox"
                  />

                  <label
                    :for="`type${index}`"
                    class="tide-font-14"
                  >
                    {{ realm.label.singular }} type {{ index + 1 }}
                  </label>
                </div>
              </div>
            </BasicAccordionItem>
          </div>

          <section>
            <h2 class="tide-margin-bottom-1 tide-font-16">Partner center</h2>

            <AdPlaceholder
              class="tide-margin-bottom-2"
              height="181"
              width="300"
            />

            <AdPlaceholder
              height="250"
              width="300"
            />
          </section>
        </aside>

        <main class="search-results-main">
          <ul
            :class="isSingleColumn ? 'tide-margin-x-2' : ''"
            class="tide-display-flex tide-flex-wrap tide-axis2-center tide-gap-1/2 tide-margin-bottom-2 tide-list-none"
            v-if="!isSingleColumn && filters.length > 0"
          >
            <li
              :key="filter.label"
              v-for="filter in filters"
            >
              <BasicChipInput
                :label="filter.label"
                @click="handleFilterChipClick(filter.callback)"
              />
            </li>

            <li>
              <BasicLink
                :element="ELEMENT.BUTTON"
                @click="handleClearAllClick"
                label="Clear all"
              />
            </li>
          </ul>

          <section class="tide-margin-bottom-2 tide-border-bottom tide-border-gray-light tide-padding-bottom-2">
            <h2
              :class="isSingleColumn ? 'tide-margin-x-2' : ''"
              class="tide-margin-bottom-1 tide-font-16"
            >
              Featured listings
            </h2>

            <CardCarouselListingFeatured
              :get-is-favorite="favoriteStore.getIsFavorite"
              :handle-favorite-click="favoriteStore.toggleIsFavorite"
              :is-touchscreen="isTouchscreen"
              :vehicles="featuredListingStore.vehicles"
            />
          </section>

          <section class="tide-margin-bottom-2">
            <CardListingPremiumSelect
              :is-favorite="favoriteStore.getIsFavorite(searchResultStore.vehicles[0].adId)"
              :vehicle="searchResultStore.vehicles[0]"
              @favorite-click="favoriteStore.toggleIsFavorite"
            />
          </section>

          <ul class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-bottom-2 tide-list-none">
            <template
              :key="vehicle.adId"
              v-for="(vehicle, index) in [
                ...searchResultStore.vehicles,
                ...searchResultStore.vehicles,
                ...searchResultStore.vehicles,
                ...searchResultStore.vehicles.slice(0, 6),
              ]"
            >
              <CardListing
                :class="isSingleColumn ? 'tide-margin-x-2' : ''"
                :is-favorite="favoriteStore.getIsFavorite(vehicle.adId)"
                :vehicle="vehicle"
                @favorite-click="favoriteStore.toggleIsFavorite"
              />

              <li
                class="tide-display-flex tide-axis1-center tide-width-full no-shrink"
                v-if="[12, 24].includes(index + 1)"
              >
                <AdPlaceholder
                  class="tide-margin-x-2"
                  height="90"
                  v-if="!isSingleColumn"
                  width="728"
                />

                <AdPlaceholder
                  class="tide-margin-x-2"
                  height="250"
                  v-if="isSingleColumn"
                  width="300"
                />
              </li>

              <li
                class="tide-width-full"
                v-if="[3, 18].includes(index + 1)"
              >
                <CardCarouselListingDealer
                  :class="isSingleColumn ? 'tide-margin-x-2' : ''"
                  :vehicles="featuredListingStore.vehicles"
                />
              </li>
            </template>
          </ul>

          <section
            :class="isSingleColumn ? 'tide-padding-x-2' : ''"
            class="tide-display-flex tide-axis1-center tide-axis2-center tide-gap-1 tide-margin-bottom-2 tide-width-full"
            v-if="filterStore.pagesTotal > 1"
          >
            <BasicButtonIcon
              :disabled="filterStore.pageCurrent === 1"
              :icon="ICON.CHEVRON_LEFT"
              :priority="PRIORITY.TERTIARY"
              @click="filterStore.setPagePrevious"
            />

            <ul class="tide-display-flex tide-axis2-center tide-gap-1/4 tide-margin-x-2 tide-list-none">
              <li
                :key="paginationButton"
                v-for="paginationButton in paginationButtons"
              >
                <BasicButtonTextAsIcon
                  :element="ELEMENT_TEXT_AS_ICON.DIV"
                  :label="paginationButton"
                  v-if="filterStore.pageCurrent === paginationButton"
                />

                <BasicButtonTextAsIcon
                  :label="paginationButton"
                  :priority="PRIORITY.TERTIARY"
                  @click="filterStore.setPageCurrent(paginationButton)"
                  v-else
                />
              </li>
            </ul>

            <BasicButtonIcon
              :disabled="filterStore.pageCurrent === paginationButtons[paginationButtons.length - 1]"
              :icon="ICON.CHEVRON_RIGHT"
              :priority="PRIORITY.TERTIARY"
              @click="filterStore.setPageNext"
            />
          </section>

          <section
            :class="isSingleColumn ? 'tide-margin-x-2' : ''"
            class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-bottom-2 tide-font-14"
          >
            <ChipActionRelatedSearch
              :href="searchPill.url"
              :key="searchPill.label"
              :label="searchPill.label"
              v-for="searchPill in searchPills"
            />
          </section>

          <SiteDisclaimer :class="isSingleColumn ? 'tide-margin-x-2 tide-display-flex tide-axis1-center' : ''" />

          <div
            class="tide-display-flex tide-flex-column tide-axis1-center tide-margin-top-2"
            v-if="!isSingleColumn"
          >
            <AdPlaceholder
              class="tide-margin-bottom-1"
              height="216"
            />

            <AdPlaceholder
              class="tide-margin-bottom-1"
              height="148"
            />

            <AdPlaceholder
              class="tide-margin-bottom-1"
              height="207"
            />

            <AdPlaceholder
              class="tide-margin-bottom-1"
              height="216"
            />

            <AdPlaceholder height="148" />
          </div>
        </main>
      </section>

      <BasicContainer>
        <section
          class="tide-margin-bottom-2"
          v-if="!isSingleColumn"
        >
          <BasicSeoLinks
            :heading="`Top ${realm.label.singular} makes for sale`"
            :links="topMakes"
            class="tide-margin-bottom-2"
          />

          <BasicSeoLinks
            :heading="`States with ${realm.label.plural} for sale`"
            :links="topStates"
            class="tide-margin-bottom-2"
          />

          <BasicSeoLinks
            :heading="`Top cities with ${realm.label.plural} for sale`"
            :links="topCities"
            class="tide-margin-bottom-2"
          />

          <BasicSeoLinks
            :heading="`${realm.label.singular} sleeping capacity`"
            :links="sleepingCapacities"
            class="tide-margin-bottom-2"
          />

          <BasicSeoLinks
            :heading="`${realm.label.singular} types`"
            :links="vehicleTypesFormatted"
          />
        </section>

        <SubscribeToNewsletter />
      </BasicContainer>
    </div>
  </div>
</template>

<style scoped>
  .full-width-ad {
    height: 150px;
  }

  .search-results-aside {
    width: 350px;
  }

  .search-results-filter-count {
    margin-top: -0.5rem;
    margin-right: -0.5rem;
    width: 1.25rem;
    height: 1.25rem;
  }

  .search-results-main {
    min-width: calc(100% - 350px - 4rem);
  }
</style>

<style>
  .pagination-label {
    width: 1rem;
    height: 1rem;
  }
</style>
