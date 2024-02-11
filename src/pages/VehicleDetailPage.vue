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
    class="vdp-top-banner tide-display-flex tide-axis1-center tide-margin-bottom-2 tide-padding-y-2 tide-border-bottom tide-border-gray-light"
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
    class="vdp-breadcrumbs tide-margin-bottom-2"
    v-show="!isSingleColumn"
  >
    <BasicBreadCrumbs :bread-crumbs="breadCrumbs" />
  </section>

  <div
    :class="isSingleColumn ? 'tide-contents' : 'tide-start-1 tide-end-7 tide-margin-right-1'"
    class="vdp-left"
  >
    <section
      :class="
        isSingleColumn
          ? 'tide-flex-column tide-margin-y-2'
          : 'row-reverse tide-axis1-between tide-gap-1 tide-margin-bottom-1'
      "
      :style="{
        order: mobileSectionOrder.header,
      }"
      class="vdp-header layout-item tide-display-flex"
    >
      <div class="tide-display-flex tide-axis1-between tide-gap-1 tide-margin-bottom-1">
        <a
          :href="`/${formatKebabCase(realm.label.plural)}-for-sale`"
          v-if="isSingleColumn"
        >
          <BasicButtonIcon :icon="ICON.CHEVRON_LEFT" />
        </a>

        <div class="tide-display-flex tide-gap-1 tide-margin-left-auto">
          <BasicButtonIcon
            :icon="ICON.IOS_SHARE"
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
            :icon="isFavorite ? ICON.FAVORITE_FILLED : ICON.FAVORITE"
            :is-active="isFavorite"
            :priority="PRIORITY.SECONDARY"
            @click.prevent="toggleIsFavorite"
          />
        </div>
      </div>

      <div>
        <h1 class="tide-margin-bottom-1/2 tide-font-24">{{ vehicleTitle }}</h1>

        <div class="tide-display-flex tide-axis2-center tide-gap-1 tide-font-12">
          <div
            class="tide-display-flex tide-axis2-center tide-gap-1/4"
            v-if="vehicle.dealerName"
          >
            <BasicLink
              :href="dealerLinkHref"
              :icon-leading="ICON.CHECK"
              class="tide-font-12"
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
      :class="isSingleColumn ? 'tide-fluid' : ''"
      :style="{
        order: mobileSectionOrder.media,
      }"
      class="vdp-media layout-item"
    >
      <ListingMediaSlider />
    </section>

    <section
      :class="isSingleColumn ? 'tide-padding-top-2' : 'tide-padding-y-2'"
      :style="{
        order: mobileSectionOrder.pricing,
      }"
      class="vdp-pricing layout-item tide-display-flex tide-flex-wrap tide-axis1-between tide-gap-1 tide-axis2-start tide-padding-bottom-2 tide-border-bottom tide-border-gray"
    >
      <div class="tide-display-flex tide-flex-column tide-gap-1/2">
        <div class="tide-font-20 tide-font-700">{{ price }}</div>
        <div class="tide-display-flex tide-flex-wrap tide-axis2-center tide-gap-1/4 tide-font-14">
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
        </div>
      </div>

      <BasicButton
        :priority="PRIORITY.SECONDARY"
        @click="() => (makeAnOfferModalIsOpen = true)"
        class="tide-shrink-none"
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
      class="vdp-details layout-item tide-border-bottom tide-border-gray tide-padding-y-2"
    >
      <h2 class="tide-margin-bottom-1 tide-font-20">{{ realm.label.singular }} details</h2>

      <div
        :class="isExtraSmall ? 'tide-flex-column' : 'tide-flex-row'"
        class="tide-display-flex tide-axis2-start tide-gap-2 tide-border-bottom tide-border-gray tide-padding-bottom-2 tide-margin-bottom-2"
      >
        <div
          class="floorplan-thumb tide-shrink-none border-overlay tide-radius-1/2"
          v-if="vehicle.floorPlanMediaId"
        >
          <BasicImage
            :src="vehicle.floorPlanMediaId"
            class="tide-shrink-none"
          />
        </div>
        <ul class="tide-display-flex tide-flex-wrap tide-gap-1 tide-width-full tide-font-14 tide-list-none">
          <li
            :class="isExtraSmall ? 'tide-margin-bottom-1' : ''"
            class="vehicle-detail-item tide-display-flex tide-axis2-center tide-gap-1/2"
          >
            <BasicIcon :icon="ICON.BOOKMARK" />
            <span class="tide-font-14 tide-font-600">Under warranty</span>
          </li>

          <li
            :key="detail.label"
            class="vehicle-detail-item tide-width-full"
            v-for="detail in details"
          >
            <span class="tide-font-600">{{ detail.label }}: </span>
            <span>{{ detail.value }}</span>
          </li>
        </ul>
      </div>

      <ReadMore
        class="tide-font-14 tide-margin-bottom-2 tide-padding-bottom-2 tide-border-bottom tide-border-gray"
        height-collapsed="4.5em"
        v-if="vehicle.description"
      >
        <div>
          {{ vehicle.description }}
        </div>
      </ReadMore>

      <h2 class="tide-font-20 tide-margin-top-2">About the dealership</h2>

      <div class="tide-display-flex tide-gap-2 tide-margin-top-1">
        <div class="tide-width-0 tide-flex-grow tide-display-flex tide-flex-column tide-axis2-start">
          <div class="tide-display-flex tide-gap-1/2">
            <div
              class="border-overlay tide-radius-1/2 tide-xy-hidden"
              style="height: 74px; width: 88px"
              v-if="vehicle?.dealerLogo"
            >
              <BasicImage
                :src="vehicle.dealerLogo.url"
                class="tide-width-full"
              />
            </div>

            <div class="tide-display-flex tide-flex-column tide-axis2-start tide-margin-top-1/4">
              <div class="tide-display-flex tide-axis2-center tide-gap-1/2">
                <BasicIcon :icon="ICON.CHECK" />
                <span class="tide-font-green tide-font-12 tide-font-600">15 Year Trusted Partner</span>
              </div>

              <a
                :href="dealerLinkHref"
                class="tide-font-16 tide-font-700 tide-margin-top-1/4"
                target="_blank"
                title="View dealer's website"
              >
                {{ vehicle.dealerName }}
              </a>

              <a
                :href="dealerMapUrl"
                class="tide-font-14 tide-margin-top-1/2 tide-font-600"
                target="_blank"
                title="View dealer's location on map"
              >
                {{ vehicle.location }}
              </a>
            </div>
          </div>

          <a
            :href="dealerLinkHref"
            class="tide-display-flex tide-axis2-center tide-gap-1/4 tide-font-14 tide-margin-top-2 tide-font-600"
            target="_blank"
            title="View dealer's website"
          >
            Visit dealer's website
            <!-- replace with external link icon -->
            <BasicIcon :icon="ICON.IOS_SHARE" />
          </a>

          <BasicButton
            :icon-leading="ICON.VIDEO"
            :priority="PRIORITY.SECONDARY"
            @click="() => (videoCallModalIsOpen = true)"
            class="tide-margin-top-1"
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

        <p class="tide-width-0 tide-flex-grow tide-font-14">
          {{ vehicle.dealerRepeatTag }}
        </p>
      </div>

      <h2 class="tide-font-16 tide-margin-top-2">More from this dealer</h2>

      <CardCarouselListingFeatured
        :get-is-favorite="favoriteStore.getIsFavorite"
        :handle-favorite-click="favoriteStore.toggleIsFavorite"
        :is-touchscreen="isTouchscreen"
        :vehicles="featuredListingStore.vehicles"
      />
    </section>

    <section
      :class="isSingleColumn ? 'tide-margin-x-2' : ''"
      :style="{
        order: mobileSectionOrder.resources,
      }"
      class="vdp-resources layout-item tide-padding-y-2 tide-border-bottom tide-border-gray"
      v-show="!isSingleColumn"
    >
      <h2 class="tide-margin-bottom-1 tide-font-20">Resources</h2>

      <div class="tide-display-flex tide-flex-column tide-gap-2">
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
      class="vdp-disclaimer layout-item tide-padding-y-2"
    >
      <SiteDisclaimer />
    </section>
  </div>

  <div
    :class="isSingleColumn ? 'tide-contents' : 'tide-start-8 tide-end-12'"
    class="vdp-right tide-margin-left-1"
  >
    <section
      :style="{
        order: mobileSectionOrder.contact,
      }"
      class="vdp-contact layout-item tide-xy-hidden tide-radius-1/2 tide-bg-surface"
      v-show="!isSingleColumn"
    >
      <div class="tide-margin-bottom-1/4 tide-padding-x-1 tide-padding-y-1 tide-font-16 tide-font-700">
        <div class="tide-display-flex tide-flex-wrap tide-gap-1">
          <div class="tide-display-flex tide-axis2-center tide-gap-1/2 tide-shrink-none">
            <BasicButtonIcon
              :href="phoneHref"
              :icon="ICON.CALL"
            />

            <a :href="phoneHref"> Call {{ phone }} </a>
          </div>

          <div class="tide-display-flex tide-axis2-center tide-gap-1/2 tide-shrink-none">
            <BasicButtonIcon
              :href="`sms:+7575551234`"
              :icon="ICON.MESSAGE"
              :priority="PRIORITY.TERTIARY"
            />

            <a :href="`sms:+7575551234`"> Text 757 555-1234 </a>
          </div>
        </div>
      </div>

      <hr class="tide-bg-white tide-padding-top-1/4" />

      <div class="tide-padding-1">
        <h2 class="tide-margin-bottom-1">Email the seller</h2>
        <EmailSellerForm :vehicle="vehicle" />
      </div>
    </section>

    <section
      :style="{
        order: mobileSectionOrder.stickyContact,
      }"
      class="sticky-contact layout-item tide-fluid"
      v-show="isSingleColumn"
    >
      <div
        :class="isStickyContact ? 'tide-position-fixed tide-bottom-0 shadow-b-1' : ''"
        ref="stickableFooterRef"
        class="sticky-footer tide-display-flex tide-gap-1/2 tide-padding-y-2 tide-padding-x-1 tide-width-full tide-bg-white"
      >
        <VdpStickyContact />
      </div>
    </section>

    <section
      :style="{
        order: mobileSectionOrder.stats,
      }"
      class="vdp-stats layout-item tide-display-flex tide-flex-column tide-gap-1 tide-border-bottom tide-border-gray tide-padding-y-2 tide-font-12"
    >
      <div class="tide-display-flex tide-axis2-center tide-gap-1/2">
        <BasicLink
          :icon-leading="ICON.STAR"
          class="tide-font-700"
          href="#"
        >
          Reviews for this {{ realm.label.singular }}
        </BasicLink>

        <span>on</span>
        <div class="insider-logo tide-radius-1/2 tide-bg-gray" />
      </div>

      <div class="tide-display-flex tide-axis2-center tide-gap-1/2">
        <BasicIcon :icon="ICON.EYE" />

        <span>
          <span>Seen </span>
          <span class="tide-font-700">
            <span>1057</span>
            <span> times</span>
          </span>
          <span> over the last 30 days</span>
        </span>
      </div>

      <div class="tide-display-flex tide-axis2-center tide-gap-1/2">
        <BasicIcon :icon="ICON.FAVORITE_FILLED" />

        <div>
          <span>Saved by </span>
          <span>2</span>
          <span> people</span>
        </div>
      </div>

      <div class="tide-display-flex tide-axis2-center tide-gap-1/2">
        <BasicIcon :icon="ICON.CALENDAR" />

        <span>
          <span>Listed for </span>
          <span class="tide-font-700">
            <span>30</span>
            <span> days</span>
          </span>
        </span>
      </div>

      <div class="tide-display-flex tide-axis2-center tide-gap-1/2">
        <BasicIcon :icon="ICON.SELL" />

        <span class="tide-font-12">The price has not decreased recently</span>
      </div>
    </section>

    <section
      :class="isSingleColumn ? 'tide-axis2-center' : 'tide-padding-bottom-2'"
      :style="{
        order: mobileSectionOrder.webLinks,
      }"
      class="vdp-web-links layout-item tide-display-flex tide-flex-column tide-gap-2 tide-padding-top-2"
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
    :class="isSingleColumn ? '' : 'tide-margin-top-2'"
    :style="{
      order: mobileSectionOrder.similar,
    }"
    class="vdp-similar tide-fluid tide-margin-bottom-2 tide-padding-y-2 tide-bg-gray-light"
  >
    <BasicContainer class="tide-display-flex tide-axis1-between tide-margin-bottom-1">
      <h2 class="tide-font-20">More {{ realm.label.plural }} like this</h2>

      <BasicLink
        :href="`/${formatKebabCase(realm.label.plural)}-for-sale`"
        :icon-trailing="ICON.CHEVRON_RIGHT"
        class="tide-font-14 tide-font-700"
      >
        See more
      </BasicLink>
    </BasicContainer>

    <CardCarouselListingFeatured
      :get-is-favorite="favoriteStore.getIsFavorite"
      :handle-favorite-click="favoriteStore.toggleIsFavorite"
      :is-touchscreen="isTouchscreen"
      :vehicles="featuredListingStore.vehicles"
    />
  </section>

  <section
    :class="isSingleColumn ? '' : 'tide-padding-y-2'"
    :style="{
      order: mobileSectionOrder.categories,
    }"
    class="vdp-categories"
    v-if="searchPills.length"
  >
    <h2 class="tide-margin-bottom-1 tide-font-20">Related categories</h2>

    <div class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-bottom-2 tide-font-14">
      <ChipActionRelatedSearch
        :href="searchPill.url"
        :key="searchPill.label"
        :label="searchPill.label"
        v-for="searchPill in searchPills"
      />
    </div>

    <div
      :class="
        isSingleColumn
          ? 'tide-margin-bottom-2 tide-padding-bottom-2'
          : 'tide-padding-top-2 tide-padding-bottom-4 tide-margin-y-2'
      "
      class="tide-display-flex tide-axis1-center tide-border-bottom tide-border-gray"
    >
      <AdPlaceholder
        :height="isSingleColumn ? '250' : '90'"
        :width="isSingleColumn ? '300' : '720'"
      />
    </div>

    <div :class="isSingleColumn ? '' : 'tide-padding-y-2'">
      <SubscribeToNewsletter class="tide-margin-bottom-2" />
    </div>
  </section>

  <Transition name="slide-down-from-top">
    <section
      class="sticky-header tide-position-fixed tide-top-0 tide-left-0 tide-width-full tide-bg-white tide-border-bottom tide-border-gray-light"
      style="z-index: 1"
      v-show="!isSingleColumn && stickyHeaderIsVisible"
    >
      <BasicContainer class="tide-display-flex tide-axis2-center tide-padding-y-1/2">
        <div
          class="tide-shrink-none tide-radius-full tide-xy-hidden"
          v-if="vehicle.photos.length"
        >
          <BasicImage
            :src="vehicle.photos[0].url"
            height="52"
            width="52"
          />
        </div>

        <div class="tide-display-flex tide-flex-column tide-axis2-start shrink tide-margin-left-1">
          <div class="tide-display-flex tide-axis2-center tide-font-12 tide-font-700">
            <BasicIcon :icon="ICON.CHECK" />

            <a
              :href="dealerLinkHref"
              class="tide-margin-left-1/4"
              target="_blank"
              title="View dealer's website"
            >
              {{ vehicle.dealerName }}
            </a>

            <div class="tide-font-gray-dark tide-font-600">&nbsp;• {{ vehicle.location }}</div>
          </div>

          <div class="tide-font-20 tide-font-700 tide-margin-top-1/4">{{ vehicleTitle }}</div>
        </div>

        <div
          class="self-stretch tide-display-flex tide-axis2-center tide-margin-y-1/4 tide-margin-left-1 tide-padding-left-1 tide-border-left tide-border-gray-light tide-font-700 tide-font-20"
        >
          {{ price }}
        </div>

        <div
          class="tide-display-flex tide-axis2-center tide-shrink-none tide-gap-1 tide-margin-left-auto tide-padding-left-1"
        >
          <a
            :href="phoneHref"
            class="tide-display-flex tide-gap-1/2 tide-axis2-center tide-font-20 tide-font-700"
          >
            <BasicIcon
              :icon="ICON.CALL"
              class="tide-bg-gray-dark tide-font-white tide-padding-1/2 tide-font-16 tide-radius-full"
            />
            Call {{ phone }}
          </a>

          <BasicButton
            :icon-leading="ICON.MAIL"
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
              class="tide-margin-bottom-1"
            />
            <EmailSellerForm :vehicle="vehicle" />
          </BasicModal>

          <BasicButtonIcon
            :icon="isFavorite ? ICON.FAVORITE_FILLED : ICON.FAVORITE"
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
