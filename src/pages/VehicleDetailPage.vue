<script lang="ts" setup>
  import { computed, ref } from 'vue';
  import { storeToRefs } from 'pinia';

  import AdPlaceholder from '@/components/AdPlaceholder.vue';
  import BasicBreadCrumbs from '@/components/BasicBreadCrumbs.vue';
  import BasicButton from '@/components/BasicButton.vue';
  import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
  import BasicContainer from '@/components/BasicContainer.vue';
  import BasicIcon from '@/components/BasicIcon.vue';
  import BasicImage from '@/components/BasicImage.vue';
  import BasicLink from '@/components/BasicLink.vue';
  import BasicModal from '@/components/BasicModal.vue';
  import CardCarouselListingFeatured from '@/components/CardCarouselListingFeatured.vue';
  import ChipActionRelatedSearch from '@/components/ChipActionRelatedSearch.vue';
  import EmailSellerForm from '@/components/EmailSellerForm.vue';
  import ListingMediaSlider from '@/components/ListingMediaSlider.vue';
  import ReadMore from '@/components/ReadMore.vue';
  import SiteDisclaimer from '@/components/SiteDisclaimer.vue';
  import SubscribeToNewsletter from '@/components/SubscribeToNewsletter.vue';
  import VdpStickyContact from '@/components/VdpStickyContact.vue';
  import VehiclePreview from '@/components/VehiclePreview.vue';
  import { ELEMENT } from '@/types/Element';
  import { ICON } from '@/types/Icon';
  import { PRIORITY } from '@/types/Priority';
  import { formatKebabCase } from '@/utilities/format';
  import {
    getSearchPills,
    getVehiclePrice,
    getVehicleTitle,
    getDetailItems,
    getBreadcrumbs,
    getVehiclePhone,
  } from '@/utilities/vehicle';
  import { realm } from '@/config/main.config';
  import { useFavoriteStore } from '@/stores/FavoriteStore';
  import { useFeaturedListingStore } from '@/stores/FeaturedListingStore';
  import { useUserAgentStore } from '@/stores/UserAgentStore';
  import { useVehicleDetailStore } from '@/stores/VehicleDetailStore';
  import { useViewportStore } from '@/stores/ViewportStore';

  const favoriteStore = useFavoriteStore();
  const featuredListingStore = useFeaturedListingStore();
  const userAgentStore = useUserAgentStore();
  const vehicleDetailStore = useVehicleDetailStore();
  const viewportStore = useViewportStore();

  featuredListingStore.getVehicles();

  const { isExtraSmall, isSmall, scrollY } = storeToRefs(viewportStore);
  const { isTouchscreen } = storeToRefs(userAgentStore);
  const { vehicle } = storeToRefs(vehicleDetailStore);

  const isStickyContact = ref(false);
  const isFavorite = ref(vehicle?.value ? favoriteStore.getIsFavorite(Number(vehicle.value.id)) : false);
  const stickableFooterRef = ref();
  const emailModalIsOpen = ref(false);
  const loanCalculatorIsOpen = ref(false);
  const makeAnOfferModalIsOpen = ref(false);
  const shareModalIsOpen = ref(false);
  const videoCallModalIsOpen = ref(false);

  const breadCrumbs = getBreadcrumbs(vehicle.value);
  const isSingleColumn = computed(() => isExtraSmall.value || isSmall.value);
  const price = computed(() => getVehiclePrice(vehicle.value));
  const details = computed(() => getDetailItems(vehicle.value));
  const searchPills = computed(() => getSearchPills(vehicle.value));
  const vehicleTitle = computed(() => getVehicleTitle(vehicle.value));
  const stickyHeaderScrollThreshold = 600;
  const stickyHeaderIsVisible = computed(() => scrollY.value && scrollY.value > stickyHeaderScrollThreshold);
  const phone = computed(() => getVehiclePhone(vehicle.value));
  const phoneHref = computed(() => `tel:${phone.value}`);
  const dealerLinkHref = computed(() => vehicle.value.dealerLink);
  const dealerMapUrl = computed(() => vehicle.value.dealerMapUrl);

  const toggleIsFavorite = () => {
    if (vehicle?.value) {
      favoriteStore.toggleIsFavorite(Number(vehicle.value.id));

      isFavorite.value = favoriteStore.getIsFavorite(Number(vehicle.value.id));
    }
  };

  /* eslint-disable vue/sort-keys */
  const mobileSectionOrder = {
    breadcrumbs: undefined,
    contact: undefined,
    resources: undefined,
    topBanner: undefined,
    header: 1,
    media: 2,
    stickyContact: 3,
    pricing: 4,
    stats: 5,
    details: 6,
    webLinks: 7,
    disclaimer: 8,
    similar: 9,
    categories: 10,
  };
  /* eslint-enable vue/sort-keys */
</script>

<template>
  <section
    :style="{
      order: mobileSectionOrder.topBanner,
    }"
    class="vdp-top-banner flex axis1-center mb-2 py-2 border-b border-gray-light"
    v-show="!isSingleColumn"
  >
    <AdPlaceholder
      height="90"
      width="728"
    />
  </section>

  <section
    :style="{
      order: mobileSectionOrder.breadcrumbs,
    }"
    class="vdp-breadcrumbs mb-2"
    v-show="!isSingleColumn"
  >
    <BasicBreadCrumbs :bread-crumbs="breadCrumbs" />
  </section>

  <div
    :class="isSingleColumn ? 'contents' : 'start-1 end-7 mr-1'"
    class="vdp-left"
  >
    <section
      :class="isSingleColumn ? 'column my-2' : 'row-reverse axis1-between gap-1 mb-1'"
      :style="{
        order: mobileSectionOrder.header,
      }"
      class="vdp-header layout-item flex"
    >
      <div class="flex axis1-between gap-1 mb-1">
        <a
          :href="`/${formatKebabCase(realm.label.plural)}-for-sale`"
          v-if="isSingleColumn"
        >
          <BasicButtonIcon :icon="ICON.CHEVRON_LEFT" />
        </a>

        <div class="flex gap-1 ml-auto">
          <BasicButtonIcon
            :icon="ICON.ARROW_UP_FROM_BRACKET"
            :priority="PRIORITY.SECONDARY"
            @click="() => (shareModalIsOpen = true)"
          />

          <BasicModal
            :is-open="shareModalIsOpen"
            @close="() => (shareModalIsOpen = false)"
            title="Share"
          >
            Share Modal
          </BasicModal>

          <BasicButtonIcon
            :icon="isFavorite ? ICON.HEART : ICON.HEART_OPEN"
            :is-active="isFavorite"
            :priority="PRIORITY.SECONDARY"
            @click.prevent="toggleIsFavorite"
          />
        </div>
      </div>

      <div>
        <h1 class="mb-1/2 font-24">{{ vehicleTitle }}</h1>

        <div class="flex axis2-center gap-1 font-12">
          <div
            class="flex axis2-center gap-1/4"
            v-if="vehicle.dealerName"
          >
            <BasicLink
              :href="dealerLinkHref"
              :icon-leading="ICON.CIRCLE_CHECK"
              class="font-12"
              target="_blank"
            >
              {{ vehicle.dealerName }}
            </BasicLink>
          </div>

          <span>
            <span v-if="vehicle.location">{{ vehicle.location }}</span>
            <span v-if="vehicle.location && vehicle.locationDistance"> - </span>
            <span v-if="vehicle.locationDistance">{{ vehicle.locationDistance }} miles away</span>
          </span>
          <span v-if="vehicle.details['Stock Number']">Stock #: {{ vehicle.details['Stock Number'] }}</span>
        </div>
      </div>
    </section>

    <section
      :class="isSingleColumn ? 'fluid' : ''"
      :style="{
        order: mobileSectionOrder.media,
      }"
      class="vdp-media layout-item"
    >
      <ListingMediaSlider />
    </section>

    <section
      :class="isSingleColumn ? 'pt-2' : 'py-2'"
      :style="{
        order: mobileSectionOrder.pricing,
      }"
      class="vdp-pricing layout-item flex wrap axis1-between gap-1 axis2-start pb-2 border-b border-gray"
    >
      <div class="flex column gap-1/2">
        <div class="font-20 font-700">{{ price }}</div>
        <div class="flex wrap axis2-center gap-1/4 font-14">
          <BasicLink
            :element="ELEMENT.BUTTON"
            @click="() => (loanCalculatorIsOpen = true)"
          >
            Estimated Payment: $50/month
          </BasicLink>

          <BasicModal
            :is-open="loanCalculatorIsOpen"
            @close="() => (loanCalculatorIsOpen = false)"
            title="Loan Calculator"
          >
            Loan Calculator
          </BasicModal>

          <BasicIcon :icon="ICON.CALCULATOR" />
        </div>
      </div>

      <BasicButton
        :priority="PRIORITY.SECONDARY"
        @click="() => (makeAnOfferModalIsOpen = true)"
        class="shrink-none"
        label="Make an offer"
      />

      <BasicModal
        :is-open="makeAnOfferModalIsOpen"
        @close="() => (makeAnOfferModalIsOpen = false)"
        label="Make an offer modal"
        title="Make an offer"
      />
    </section>

    <section
      :style="{
        order: mobileSectionOrder.details,
      }"
      class="vdp-details layout-item border-b border-gray py-2"
    >
      <h2 class="mb-1 font-20">{{ realm.label.singular }} details</h2>

      <div
        :class="isExtraSmall ? 'column' : 'row'"
        class="flex axis2-start gap-2 border-b border-gray pb-2 mb-2"
      >
        <div
          class="floorplan-thumb shrink-none border-overlay radius-1/2"
          v-if="vehicle.floorPlanMediaId"
        >
          <BasicImage
            :src="vehicle.floorPlanMediaId"
            class="shrink-none"
          />
        </div>
        <ul class="flex wrap gap-1 w-full font-14 list-none">
          <li
            :class="isExtraSmall ? 'mb-1' : ''"
            class="vehicle-detail-item flex axis2-center gap-1/2"
          >
            <BasicIcon :icon="ICON.BOOKMARK" />
            <span class="font-14 font-600">Under warranty</span>
          </li>

          <li
            :key="detail.label"
            class="vehicle-detail-item w-full"
            v-for="detail in details"
          >
            <span class="font-600">{{ detail.label }}: </span>
            <span>{{ detail.value }}</span>
          </li>
        </ul>
      </div>

      <ReadMore
        class="font-14 mb-2 pb-2 border-b border-gray"
        height-collapsed="4.5em"
        v-if="vehicle.description"
      >
        <div>
          {{ vehicle.description }}
        </div>
      </ReadMore>

      <h2 class="font-20 mt-2">About the dealership</h2>

      <div class="flex gap-2 mt-1">
        <div class="w-0 grow flex column axis2-start">
          <div class="flex gap-1/2">
            <div
              class="border-overlay radius-1/2 xy-hidden"
              style="height: 74px; width: 88px"
              v-if="vehicle?.dealerLogo"
            >
              <BasicImage
                :src="vehicle.dealerLogo.url"
                class="w-full"
              />
            </div>

            <div class="flex column axis2-start mt-1/4">
              <div class="flex axis2-center gap-1/2">
                <BasicIcon :icon="ICON.CIRCLE_CHECK" />
                <span class="font-green font-12 font-600">15 Year Trusted Partner</span>
              </div>

              <a
                :href="dealerLinkHref"
                class="font-16 font-700 mt-1/4"
                target="_blank"
                title="View dealer's website"
              >
                {{ vehicle.dealerName }}
              </a>

              <a
                :href="dealerMapUrl"
                class="font-14 mt-1/2 font-600"
                target="_blank"
                title="View dealer's location on map"
              >
                {{ vehicle.location }}
              </a>
            </div>
          </div>

          <a
            :href="dealerLinkHref"
            class="flex axis2-center gap-1/4 font-14 mt-2 font-600"
            target="_blank"
            title="View dealer's website"
          >
            Visit dealer's website
            <!-- replace with external link icon -->
            <BasicIcon :icon="ICON.ARROW_UP_FROM_BRACKET" />
          </a>

          <BasicButton
            :icon-leading="ICON.VIDEO"
            :priority="PRIORITY.SECONDARY"
            @click="() => (videoCallModalIsOpen = true)"
            class="mt-1"
            label="Schedule a video call"
          />

          <BasicModal
            :is-open="videoCallModalIsOpen"
            @close="() => (videoCallModalIsOpen = false)"
            title="Schedule a video call"
          >
            Schedule a video call
          </BasicModal>
        </div>

        <p class="w-0 grow font-14">
          {{ vehicle.dealerRepeatTag }}
        </p>
      </div>

      <h2 class="font-16 mt-2">More from this dealer</h2>

      <CardCarouselListingFeatured
        :get-is-favorite="favoriteStore.getIsFavorite"
        :handle-favorite-click="favoriteStore.toggleIsFavorite"
        :is-touchscreen="isTouchscreen"
        :offset-x="32"
        :vehicles="featuredListingStore.vehicles"
      />
    </section>

    <section
      :class="isSingleColumn ? 'mx-2' : ''"
      :style="{
        order: mobileSectionOrder.resources,
      }"
      class="vdp-resources layout-item py-2 border-b border-gray"
      v-show="!isSingleColumn"
    >
      <h2 class="mb-1 font-20">Resources</h2>

      <div class="flex column gap-2">
        <AdPlaceholder
          height="87"
          width="512"
        >
          <div>Geico Ad</div>
        </AdPlaceholder>

        <AdPlaceholder
          height="90"
          width="720"
        />
      </div>
    </section>

    <section
      :style="{
        order: mobileSectionOrder.disclaimer,
      }"
      class="vdp-disclaimer layout-item py-2"
    >
      <SiteDisclaimer />
    </section>
  </div>

  <div
    :class="isSingleColumn ? 'contents' : 'start-8 end-12'"
    class="vdp-right ml-1"
  >
    <section
      :style="{
        order: mobileSectionOrder.contact,
      }"
      class="vdp-contact layout-item xy-hidden radius-1/2 bg-surface"
      v-show="!isSingleColumn"
    >
      <div class="mb-1/4 px-1 py-1 font-16 font-700">
        <div class="flex wrap gap-1">
          <div class="flex axis2-center gap-1/2 shrink-none">
            <BasicButtonIcon
              :href="phoneHref"
              :icon="ICON.PHONE"
            />

            <a :href="phoneHref"> Call {{ phone }} </a>
          </div>

          <div class="flex axis2-center gap-1/2 shrink-none">
            <BasicButtonIcon
              :href="`sms:+7575551234`"
              :icon="ICON.MESSAGE"
              :priority="PRIORITY.TERTIARY"
            />

            <a :href="`sms:+7575551234`"> Text 757 555-1234 </a>
          </div>
        </div>
      </div>

      <hr class="bg-white pt-1/4" />

      <div class="p-1">
        <h2 class="mb-1">Email the seller</h2>
        <EmailSellerForm :vehicle="vehicle" />
      </div>
    </section>

    <section
      :style="{
        order: mobileSectionOrder.stickyContact,
      }"
      class="sticky-contact layout-item fluid"
      v-show="isSingleColumn"
    >
      <div
        :class="isStickyContact ? 'fixed bottom-0 box-shadow-1' : ''"
        ref="stickableFooterRef"
        class="sticky-footer flex gap-1/2 py-2 px-1 w-full bg-white"
      >
        <VdpStickyContact />
      </div>
    </section>

    <section
      :style="{
        order: mobileSectionOrder.stats,
      }"
      class="vdp-stats layout-item flex column gap-1 border-b border-gray py-2 font-12"
    >
      <div class="flex axis2-center gap-1/2">
        <BasicLink
          :icon-leading="ICON.STAR"
          class="font-700"
          href="#"
        >
          Reviews for this {{ realm.label.singular }}
        </BasicLink>

        <span>on</span>
        <div class="insider-logo radius-1/2 bg-gray" />
      </div>

      <div class="flex axis2-center gap-1/2">
        <BasicIcon :icon="ICON.EYE" />

        <span>
          <span>Seen </span>
          <span class="font-700">
            <span>1057</span>
            <span> times</span>
          </span>
          <span> over the last 30 days</span>
        </span>
      </div>

      <div class="flex axis2-center gap-1/2">
        <BasicIcon :icon="ICON.HEART" />

        <div>
          <span>Saved by </span>
          <span>2</span>
          <span> people</span>
        </div>
      </div>

      <div class="flex axis2-center gap-1/2">
        <BasicIcon :icon="ICON.CALENDAR" />

        <span>
          <span>Listed for </span>
          <span class="font-700">
            <span>30</span>
            <span> days</span>
          </span>
        </span>
      </div>

      <div class="flex axis2-center gap-1/2">
        <BasicIcon :icon="ICON.TAG" />

        <span class="font-12">The price has not decreased recently</span>
      </div>
    </section>

    <section
      :class="isSingleColumn ? 'axis2-center' : 'pb-2'"
      :style="{
        order: mobileSectionOrder.webLinks,
      }"
      class="vdp-web-links layout-item flex column gap-2 pt-2"
    >
      <AdPlaceholder
        height="600"
        v-if="!isSingleColumn"
        width="300"
      />

      <AdPlaceholder
        height="250"
        width="300"
      />

      <AdPlaceholder
        height="250"
        width="490"
      >
        Customizable web link ad
      </AdPlaceholder>
    </section>
  </div>

  <section
    :class="isSingleColumn ? '' : 'mt-2'"
    :style="{
      order: mobileSectionOrder.similar,
    }"
    class="vdp-similar fluid mb-2 py-2 bg-gray-light"
  >
    <BasicContainer class="flex axis1-between mb-1">
      <h2 class="font-20">More {{ realm.label.plural }} like this</h2>

      <BasicLink
        :href="`/${formatKebabCase(realm.label.plural)}-for-sale`"
        :icon-trailing="ICON.CHEVRON_RIGHT"
        class="font-14 font-700"
      >
        See more
      </BasicLink>
    </BasicContainer>

    <CardCarouselListingFeatured
      :get-is-favorite="favoriteStore.getIsFavorite"
      :handle-favorite-click="favoriteStore.toggleIsFavorite"
      :is-touchscreen="isTouchscreen"
      :offset-x="32"
      :vehicles="featuredListingStore.vehicles"
    />
  </section>

  <section
    :class="isSingleColumn ? '' : 'py-2'"
    :style="{
      order: mobileSectionOrder.categories,
    }"
    class="vdp-categories"
    v-if="searchPills.length"
  >
    <h2 class="mb-1 font-20">Related categories</h2>

    <div class="flex wrap gap-1 mb-2 font-14">
      <ChipActionRelatedSearch
        :href="searchPill.url"
        :key="searchPill.label"
        :label="searchPill.label"
        v-for="searchPill in searchPills"
      />
    </div>

    <div
      :class="isSingleColumn ? 'mb-2 pb-2' : 'pt-2 pb-4 my-2'"
      class="flex axis1-center border-b border-gray"
    >
      <AdPlaceholder
        :height="isSingleColumn ? '250' : '90'"
        :width="isSingleColumn ? '300' : '720'"
      />
    </div>

    <div :class="isSingleColumn ? '' : 'py-2'">
      <SubscribeToNewsletter class="mb-2" />
    </div>
  </section>

  <Transition name="slide-down-from-top">
    <section
      class="sticky-header fixed top-0 left-0 w-full bg-white border-b border-gray-light"
      style="z-index: 1"
      v-show="!isSingleColumn && stickyHeaderIsVisible"
    >
      <BasicContainer class="flex axis2-center py-1/2">
        <div
          class="shrink-none radius-full xy-hidden"
          v-if="vehicle.photos.length"
        >
          <BasicImage
            :src="vehicle.photos[0].url"
            height="52"
            width="52"
          />
        </div>

        <div class="flex column axis2-start shrink ml-1">
          <div class="flex axis2-center font-12 font-700">
            <BasicIcon :icon="ICON.CIRCLE_CHECK" />

            <a
              :href="dealerLinkHref"
              class="ml-1/4"
              target="_blank"
              title="View dealer's website"
            >
              {{ vehicle.dealerName }}
            </a>

            <div class="font-gray-dark font-600">&nbsp;• {{ vehicle.location }}</div>
          </div>

          <div class="font-20 font-700 mt-1/4">{{ vehicleTitle }}</div>
        </div>

        <div class="self-stretch flex axis2-center my-1/4 ml-1 pl-1 border-l border-gray-light font-700 font-20">
          {{ price }}
        </div>

        <div class="flex axis2-center shrink-none gap-1 ml-auto pl-1">
          <a
            :href="phoneHref"
            class="flex gap-1/2 axis2-center font-20 font-700"
          >
            <BasicIcon
              :icon="ICON.PHONE"
              class="bg-gray-dark font-white p-1/2 font-16 radius-full"
            />
            Call {{ phone }}
          </a>

          <BasicButton
            :icon-leading="ICON.ENVELOPE"
            @click="() => (emailModalIsOpen = true)"
            label="Email seller"
          />

          <BasicModal
            :is-open="emailModalIsOpen"
            @close="() => (emailModalIsOpen = false)"
            title="Email seller"
          >
            <VehiclePreview
              :vehicle="vehicle"
              class="mb-1"
            />
            <EmailSellerForm :vehicle="vehicle" />
          </BasicModal>

          <BasicButtonIcon
            :icon="isFavorite ? ICON.HEART : ICON.HEART_OPEN"
            :is-active="isFavorite"
            :priority="PRIORITY.SECONDARY"
            @click.prevent="toggleIsFavorite"
          />
        </div>
      </BasicContainer>
    </section>
  </Transition>
</template>

<style scoped>
  .dealership-logo {
    width: 88px;
    height: 74px;
  }

  .floorplan-thumb {
    width: 202px;
    height: 145px;
  }

  .logo {
    width: 140px;
    height: 65px;
  }

  .overlay {
    background-color: var(--black);
    opacity: 50%;
  }

  .insider-logo {
    width: 70px;
    height: 28px;
  }

  @media (min-width: 768px) {
    .vehicle-detail-item {
      width: calc(50% - 2rem);
    }
  }

  @media (min-width: 992px) {
    .vehicle-detail-aside {
      max-width: 40%;
    }

    .vehicle-detail-main {
      width: calc(60% - 2rem);
    }
  }
</style>
