<script lang="ts" setup>
  import { computed, ref } from 'vue';
  import { storeToRefs } from 'pinia';

  import type { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  import type { BreadCrumb } from '@/types/BreadCrumb';
  import type { RvDetail } from '@/types/RvDetail';

  import ReadMore from '@/components/ReadMore.vue';
  import AdPlaceholder from '@/components/AdPlaceholder.vue';
  import BreadCrumbs from '@/components/BreadCrumbs.vue';
  import LeadForm from '@/components/LeadForm.vue';
  import SiteButton from '@/components/SiteButton.vue';
  import SiteButtonIcon from '@/components/SiteButtonIcon.vue';
  import SiteContainer from '@/components/SiteContainer.vue';
  import SiteDisclaimer from '@/components/SiteDisclaimer.vue';
  import SiteIconToggle from '@/components/SiteIconToggle.vue';
  import SiteImage from '@/components/SiteImage.vue';
  import SiteLinkWithIcon from '@/components/SiteLinkWithIcon.vue';
  import SubscribeToNewsletter from '@/components/SubscribeToNewsletter.vue';
  import VehicleCardCarousel from '@/components/VehicleCardCarousel.vue';
  import { cdnDomain, cdnVersion } from '@/config/rv.config';
  import { formatPrice, formatTitleCase } from '@/utilities/format';
  import { useBreakpointStore } from '@/stores/BreakpointStore';
  import { useFavoriteStore } from '@/stores/FavoriteStore';
  import { useFeaturedListingStore } from '@/stores/FeaturedListingStore';
  import { useUserAgentStore } from '@/stores/UserAgentStore';
  import { useVehicleDetailStore } from '@/stores/VehicleDetailStore';

  const breakpointStore = useBreakpointStore();
  const favoriteStore = useFavoriteStore();
  const featuredListingStore = useFeaturedListingStore();
  const userAgentStore = useUserAgentStore();
  const vehicleDetailStore = useVehicleDetailStore();

  const { isExtraSmall, isSmall, isLarge } = storeToRefs(breakpointStore);

  featuredListingStore.getVehicles();
  vehicleDetailStore.getVehicle();

  const { isTouchscreen } = storeToRefs(userAgentStore);
  const { vehicle } = storeToRefs(vehicleDetailStore);

  const isSingleColumn = computed(() => isExtraSmall.value || isSmall.value);

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
      label: 'Search results',
      url: '#',
    },
    {
      label: '2019 Airstream Flying Cloud 25R',
    },
  ];

  const cityState = computed(() =>
    vehicle?.value ? `${formatTitleCase(vehicle.value.city)}, ${vehicle.value.stateCode}` : ''
  );

  const details: RvDetail[] = [
    {
      label: 'Type',
      value: 'Travel Trailer',
    },
    {
      label: 'Water capacity',
      value: '39 gal',
    },
    {
      label: 'Condition',
      value: 'Used',
    },
    {
      label: 'Exterior color',
      value: 'Aluminum',
    },
    {
      label: 'Length',
      value: '32 ft',
    },
    {
      label: 'Interior color',
      value: 'Beige',
    },
    {
      label: 'GVWR',
      value: '7,000 lbs',
    },
    {
      label: 'Sleep options',
      value: 'Dinette, queen, full, bunkbeds',
    },
    {
      label: 'Dry weight',
      value: '5,220 lbs',
    },
    {
      label: 'Floor plan',
      value: 'Bunkhouse',
    },
    {
      label: 'Sleeping capacity',
      value: '6',
    },
    {
      label: 'Fuel type',
      value: 'None',
    },
    {
      label: 'Air conditioners',
      value: '2',
    },
  ];

  // TODO: Replace upon determining a method for retrieving live Elasticsearch data.
  const dummy = {
    address: '123 Main St',
    milesAway: 21,
    stockNumber: '326303',
    zip: '12345',
  };

  let isFavorite = ref(vehicle?.value ? favoriteStore.getIsFavorite(vehicle.value.adId) : false);

  const searchPills = [
    {
      label: 'Airstream Flying Cloud in Washington',
      url: '/rvs-for-sale',
    },
    {
      label: 'Airstream Flying Cloud in Everette, Washington',
      url: '/rvs-for-sale',
    },
    {
      label: '2019 Airstream Flying Cloud',
      url: '/rvs-for-sale',
    },
    {
      label: 'Airstream Flying Cloud',
      url: '/rvs-for-sale',
    },
    {
      label: 'Airstream Travel Trailers',
      url: '/rvs-for-sale',
    },
    {
      label: 'Airstream RVs',
      url: '/rvs-for-sale',
    },
    {
      label: 'Travel Trailers',
      url: '/rvs-for-sale',
    },
  ];

  const thumbnail: string | undefined =
    vehicle?.value && vehicle?.value?.photoIds?.length > 0
      ? `https://${cdnDomain}/${cdnVersion}/media/${vehicle.value.photoIds[0]}.jpg?width=245&height=151&quality=60&bestfit=true&upsize=true&blurBackground=true&blurValue=100`
      : undefined;

  const toggleIsFavorite = () => {
    if (vehicle?.value) {
      favoriteStore.toggleIsFavorite(vehicle.value.adId);

      isFavorite.value = favoriteStore.getIsFavorite(vehicle.value.adId);
    }
  };
</script>

<template>
  <div class="vehicle-detail-page my-2">
    <div>
      <section
        class="flex axis1-center mx-2 mb-2 border-b border-gray-light pb-2"
        v-if="!isSingleColumn"
      >
        <AdPlaceholder
          height="90"
          width="728"
        />
      </section>

      <BreadCrumbs
        :bread-crumbs="breadCrumbs"
        class="mx-2 mb-2"
        v-if="!isSingleColumn"
      />

      <section
        :class="[isSingleColumn ? 'column' : 'row mx-2', isLarge ? 'mx-auto w-container' : '']"
        class="vehicle-detail-columns flex gap-2 mb-2"
      >
        <main
          :class="isSingleColumn ? 'contents' : 'flex column gap-2'"
          class="vehicle-detail-main w-full"
        >
          <section
            :class="isSingleColumn ? 'column order-1 mx-2' : 'row-reverse axis2-end mb-1'"
            class="flex axis1-between gap-2"
          >
            <div class="flex axis1-between gap-1">
              <router-link
                to="/rvs-for-sale"
                v-if="isSingleColumn"
              >
                <SiteButtonIcon
                  class-button="icon-button border-2 border-gray-dark"
                  icon="chevron-left"
                  is-restyled
                  is-secondary
                  is-solid
                />
              </router-link>

              <div class="flex gap-1">
                <SiteButtonIcon
                  class-button="icon-button border-2 border-gray-dark"
                  icon="arrow-up-from-bracket"
                  is-restyled
                  is-secondary
                  is-solid
                />

                <SiteIconToggle
                  :is-active="isFavorite"
                  :is-solid="isFavorite"
                  @click.prevent="toggleIsFavorite"
                  class-button="icon-button border-2 border-gray-dark"
                  icon="heart"
                  is-restyled
                  is-secondary
                />
              </div>
            </div>

            <header>
              <h1 class="mb-1 font-24">{{ vehicle?.year }} {{ vehicle?.makeName[0] }} {{ vehicle?.modelName[0] }}</h1>

              <div class="flex axis2-center gap-1 font-12">
                <div
                  class="flex axis2-center gap-1/4"
                  v-if="vehicle?.dealerGroupName"
                >
                  <SiteLinkWithIcon
                    class="font-12"
                    icon-leading="circle-check"
                    is-solid
                    to="/rvs-for-sale"
                  >
                    {{ vehicle.dealerGroupName }}
                  </SiteLinkWithIcon>
                </div>

                <span v-if="cityState">{{ cityState }} - </span>
                <span>{{ dummy.milesAway }} miles away</span>
                <span>Stock #: {{ dummy.stockNumber }}</span>
              </div>
            </header>
          </section>

          <section :class="isSingleColumn ? 'order-1' : ''">
            <div class="radius-1/2 xy-hidden">
              <div class="relative">
                <div class="flex axis1-center axis2-center">
                  <SiteImage
                    :src="thumbnail"
                    class="w-full ratio-3/2"
                  />
                </div>

                <span class="absolute right-0 bottom-0 m-1/2 radius-1/2 py-1/2 px-1 bg-gray-dark font-12 font-white">
                  1/28
                </span>
              </div>

              <ul
                class="flex gap-1 mt-1 list-none"
                v-if="!isSingleColumn"
              >
                <li class="relative w-1/4 ratio-3/2">
                  <SiteImage
                    :src="thumbnail"
                    class="absolute w-full h-full"
                  />

                  <div class="overlay absolute w-full h-full" />
                </li>

                <li class="relative w-1/4 ratio-3/2">
                  <SiteImage
                    :src="thumbnail"
                    class="absolute w-full h-full"
                  />

                  <div class="overlay absolute w-full h-full" />

                  <div class="absolute flex axis1-center axis2-center w-full h-full">
                    <SiteButtonIcon
                      class-button="icon-button border-2 border-gray-dark"
                      icon="play"
                      is-primary
                      is-restyled
                      is-solid
                    />
                  </div>
                </li>

                <li class="relative w-1/4 ratio-3/2">
                  <SiteImage
                    :src="thumbnail"
                    class="absolute w-full h-full"
                  />

                  <div class="overlay absolute w-full h-full" />

                  <div class="absolute flex axis1-center axis2-center w-full h-full">
                    <SiteButtonIcon
                      class-button="icon-button border-2 border-gray-dark"
                      icon="cube"
                      is-primary
                      is-restyled
                      is-solid
                    />
                  </div>
                </li>

                <li class="relative w-1/4 ratio-3/2">
                  <SiteImage
                    :src="thumbnail"
                    class="absolute w-full h-full"
                  />

                  <div class="overlay absolute w-full h-full" />

                  <div class="absolute flex axis1-center axis2-center p-1 w-full h-full">
                    <span class="font-14 font-white font-700 shadow-text x-center">See all 28 photos</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section
            class="flex gap-1/2 mx-2 order-1"
            v-if="isSingleColumn"
          >
            <SiteButton
              class="flex column"
              class-button="vehicle-detail-text-cta"
              icon-leading="message"
              is-secondary
              is-solid
            >
              <span class="font-12 font-600">text</span>
            </SiteButton>

            <SiteButton
              class="flex column"
              class-button="vehicle-detail-call-cta"
              icon-leading="phone"
              is-primary
              is-solid
            >
              <span class="font-12 font-600">call</span>
            </SiteButton>

            <SiteButton
              class="flex column"
              class-button="vehicle-detail-email-cta"
              icon-leading="envelope"
              is-primary
              is-solid
            >
              <span class="font-12 font-600">email</span>
            </SiteButton>

            <SiteButton
              class="flex column"
              class-button="vehicle-detail-chat-cta"
              icon-leading="comments"
              is-secondary
              is-solid
            >
              <span class="font-12 font-600">chat</span>
            </SiteButton>
          </section>

          <section
            :class="isSingleColumn ? 'order-1 mx-2' : ''"
            class="flex axis1-between axis2-start gap-1 border-b border-gray pb-2"
          >
            <div class="flex column gap-1/2">
              <div class="font-20 font-700">{{ vehicle ? formatPrice(vehicle?.price) : '' }}</div>

              <div class="flex wrap gap-1/4 font-14">
                <router-link to="#">Estimated Payment: </router-link>

                <SiteLinkWithIcon
                  icon-trailing="calculator"
                  is-solid
                  to="#"
                >
                  <span class="font-700">$50/month</span>
                </SiteLinkWithIcon>
              </div>
            </div>

            <SiteButton
              class-button="shrink-none"
              is-secondary
            >
              Make an offer
            </SiteButton>
          </section>

          <section
            :class="isSingleColumn ? 'order-3 mx-2' : ''"
            class="border-b border-gray pb-2"
          >
            <h2 class="mb-1 font-20">RV details</h2>

            <div class="flex axis2-center gap-1/2 mb-1">
              <FontAwesomeIcon icon="fa-solid fa-bookmark" />
              <span class="font-14 font-600">Under warranty</span>
            </div>

            <div
              :class="isExtraSmall ? 'column' : 'row'"
              class="flex axis2-start gap-2"
            >
              <div class="floorplan-thumb shrink-none radius-1/2 bg-gray" />
              <ul class="flex wrap gap-1 w-full font-14 list-none">
                <li
                  :key="detail.label"
                  class="vehicle-detail-item w-full"
                  v-for="detail in details"
                >
                  <span class="font-700">{{ detail.label }}: </span>
                  <span>{{ detail.value }}</span>
                </li>
              </ul>
            </div>
          </section>

          <section
            :class="isSingleColumn ? 'order-3 mx-2' : ''"
            class="flex column gap-1 border-b border-gray pb-2"
          >
            <ReadMore heightCollapsed="72px">
              <p class="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus, sapien semper vestibulum vestibulum, metus purus commodo massa, et tristique elit metus pretium odio. Sed eget metus erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur erat augue, congue sit amet laoreet quis, scelerisque at tortor. Morbi non eleifend mi. Integer ut felis volutpat, rutrum leo ut, cursus sem. Donec fermentum lacus at leo finibus, hendrerit finibus augue venenatis. Aliquam sed iaculis augue, vitae faucibus nunc.</p>
              <p class="mb-1">Aenean eleifend bibendum faucibus. Vivamus tortor arcu, venenatis id aliquam nec, cursus ut sem. Sed sodales, metus in convallis ultrices, tortor urna porta augue, eget aliquam dui lectus non erat. Cras non vestibulum lorem. Proin sem massa, porttitor vel mollis vel, porttitor eget nisl. Aliquam consectetur lorem sit amet mollis imperdiet. In eu elit facilisis, facilisis leo sed, eleifend nisl. Sed quis justo eu mi suscipit semper at vel orci. Cras ornare nisi semper purus volutpat finibus.</p>
              <p>Donec ac augue nec est sodales placerat in id magna. Fusce eu faucibus orci. Nunc ac iaculis neque. Ut vestibulum massa sit amet mi imperdiet rhoncus. In quam ligula, lacinia vitae fermentum eu, rhoncus nec ante. Fusce vel sollicitudin orci, eget aliquet risus. Nunc vitae auctor lectus, vel rhoncus ex. </p>
            </ReadMore>
          </section>

          <section :class="isSingleColumn ? 'order-3 mx-2' : ''">
            <h2 class="mb-1 font-20">About the dealership</h2>

            <div
              :class="isSingleColumn ? 'column' : ''"
              class="flex gap-2"
            >
              <div class="w-full m-w-1/2">
                <div class="flex gap-1 mb-1">
                  <div class="dealership-logo radius-1/2 bg-gray" />

                  <div class="flex column gap-1/2">
                    <div class="flex axis2-center gap-1/2">
                      <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                      <span class="font-12 font-700">15 year trusted partner</span>
                    </div>

                    <router-link
                      class="font-700"
                      to="/rvs-for-sale"
                      v-if="vehicle?.dealerGroupName"
                    >
                      {{ vehicle.dealerGroupName }}
                    </router-link>

                    <router-link
                      class="font-14 font-600"
                      to="/rvs-for-sale"
                    >
                      <div>{{ dummy.address }}</div>
                      <div>
                        <span>{{ cityState }}</span>
                        <span>&nbsp;{{ dummy.zip }}</span>
                      </div>
                    </router-link>
                  </div>
                </div>

                <SiteLinkWithIcon
                  class="mb-1"
                  icon-trailing="up-right-from-square"
                  is-solid
                  to="#"
                >
                  Visit dealer's website
                </SiteLinkWithIcon>

                <SiteButton
                  icon-leading="video"
                  is-secondary
                  is-solid
                >
                  Schedule a video call
                </SiteButton>
              </div>

              <p class="w-full m-w-1/2">
                Roy Robinson RV Center opened its' doors in 1971 as a family-owned enterprise in Seattle. Thankfully,
                we've earned a reputation of excellent customer service and satisfaction through our investment in
                exceptional service and sales people. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque vel tortor enim. Vestibulum ante ipsum primis in faucibus orci luctus.
              </p>
            </div>
          </section>

          <section :class="isSingleColumn ? 'order-3' : ''">
            <div
              :class="isSingleColumn ? 'mx-2' : ''"
              class="flex axis1-between"
            >
              <h3 class="mb-1 font-16">More from this dealer</h3>

              <SiteLinkWithIcon
                class="font-14 font-700"
                icon-trailing="chevron-right"
                is-solid
                to="/rvs-for-sale"
              >
                See more
              </SiteLinkWithIcon>
            </div>

            <VehicleCardCarousel
              :get-is-favorite="favoriteStore.getIsFavorite"
              :handle-favorite-click="favoriteStore.toggleIsFavorite"
              :is-touchscreen="isTouchscreen"
              :offset-x="isSingleColumn ? 32 : undefined"
              :vehicles="featuredListingStore.vehicles"
            />
          </section>

          <div
            :class="isSingleColumn ? 'order-3 mx-2' : ''"
            class="border-b border-gray"
          />

          <section v-if="!isSingleColumn">
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

          <SiteDisclaimer :class="isSingleColumn ? 'order-5 mx-2' : ''" />
        </main>

        <aside
          :class="isSingleColumn ? 'contents' : 'flex column gap-2'"
          class="vehicle-detail-aside"
        >
          <section
            class="radius-1/2 xy-hidden"
            v-if="!isSingleColumn"
          >
            <div class="mb-1/4 p-1 bg-gray-light">
              <div class="flex wrap axis1-between gap-1/2">
                <button class="flex axis2-center gap-1/2 shrink-none">
                  <SiteButtonIcon
                    class-button="icon-button"
                    icon="phone"
                    is-primary
                    is-solid
                  />

                  <router-link
                    class="font-14"
                    to="#"
                  >
                    Call 1-800-123-4567
                  </router-link>
                </button>

                <button class="flex axis2-center gap-1/2 shrink-none">
                  <SiteButtonIcon
                    class-button="icon-button"
                    icon="message"
                    is-secondary
                    is-solid
                  />

                  <router-link
                    class="font-14"
                    to="#"
                  >
                    Text 1-800-123-4567
                  </router-link>
                </button>
              </div>
            </div>

            <div class="p-1 bg-gray-light">
              <h2 class="mb-1">Email the seller</h2>
              <LeadForm :vehicle="vehicle" />
            </div>
          </section>

          <section
            :class="isSingleColumn ? 'order-2 mx-2' : ''"
            class="flex column gap-1 border-b border-gray pb-2 font-12"
          >
            <div class="flex axis2-center gap-1/2">
              <SiteLinkWithIcon
                class="font-700"
                icon-leading="star"
                is-solid
                to="#"
              >
                Reviews for this RV
              </SiteLinkWithIcon>
              <span>on</span>

              <div class="rv-insider-logo radius-1/2 bg-gray" />
            </div>

            <div>
              <FontAwesomeIcon
                class="mr-1/2"
                icon="fa-solid fa-eye"
              />
              <span>
                <span>Seen </span>
                <span class="font-700">
                  <span>1057</span>
                  <span> times</span>
                </span>
                <span> over the last 30 days</span>
              </span>
            </div>

            <div class="flex gap-1/2">
              <FontAwesomeIcon icon="fa-solid fa-heart" />

              <div>
                <span>Saved by </span>
                <span>2</span>
                <span> people</span>
              </div>
            </div>

            <div>
              <FontAwesomeIcon
                class="mr-1/2"
                icon="fa-solid fa-calendar"
              />
              <span>
                <span>Listed for </span>
                <span class="font-700">
                  <span>30</span>
                  <span> days</span>
                </span>
              </span>
            </div>

            <div>
              <FontAwesomeIcon
                class="mr-1/2"
                icon="fa-solid fa-tag"
              />
              <span class="font-12">The price has not decreased recently</span>
            </div>
          </section>

          <section
            :class="isSingleColumn ? 'axis2-center order-4 mx-2' : ''"
            class="flex column gap-2"
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
        </aside>
      </section>
    </div>

    <div class="mb-2 py-2 bg-gray-light">
      <SiteContainer class="flex axis1-between mb-1">
        <h2 class="font-20">More RVs like this</h2>

        <SiteLinkWithIcon
          class="font-14 font-700"
          icon-trailing="chevron-right"
          is-solid
          to="/rvs-for-sale"
        >
          See more
        </SiteLinkWithIcon>
      </SiteContainer>

      <VehicleCardCarousel
        :get-is-favorite="favoriteStore.getIsFavorite"
        :handle-favorite-click="favoriteStore.toggleIsFavorite"
        :is-touchscreen="isTouchscreen"
        :offset-x="32"
        :vehicles="featuredListingStore.vehicles"
      />
    </div>

    <SiteContainer>
      <h2 class="mb-1 font-20">Related categories</h2>

      <div class="flex wrap gap-1 mb-2 font-14">
        <router-link
          :key="searchPill.label"
          :to="searchPill.url"
          class="underline-none"
          v-for="searchPill in searchPills"
        >
          <SiteButton
            class="radius-full underline-none"
            icon-leading="magnifying-glass"
            is-secondary
            is-solid
          >
            {{ searchPill.label }}
          </SiteButton>
        </router-link>
      </div>

      <div class="flex axis1-center mb-2 border-b border-gray pb-2">
        <AdPlaceholder
          :height="isSingleColumn ? '250' : '90'"
          :width="isSingleColumn ? '300' : '720'"
        />
      </div>

      <SubscribeToNewsletter />
    </SiteContainer>
  </div>
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

  .order-1 {
    order: 1;
  }

  .order-2 {
    order: 2;
  }

  .order-3 {
    order: 3;
  }

  .order-4 {
    order: 4;
  }

  .order-5 {
    order: 5;
  }

  .overlay {
    background-color: var(--black);
    opacity: 50%;
  }

  .rv-insider-logo {
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

<style>
  .icon-button {
    width: 36px;
  }

  .vehicle-detail-call-cta {
    flex: 3;
  }

  .vehicle-detail-chat-cta,
  .vehicle-detail-text-cta {
    flex: 1;
  }

  .vehicle-detail-email-cta {
    flex: 2;
  }
</style>
