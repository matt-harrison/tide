<script lang="ts" setup>
  import { onMounted, onUnmounted } from 'vue';

  import type { VehicleType } from '@/types/VehicleType';

  import AdPlaceholder from '@/components/AdPlaceholder.vue';
  import SeoContent from '@/components/SeoContent.vue';
  import SiteButton from '@/components/SiteButton.vue';
  import SiteCarousel from '@/components/SiteCarousel.vue';
  import SiteContainer from '@/components/SiteContainer.vue';
  import SiteLinkAsButton from '@/components/SiteLinkAsButton.vue';
  import SiteLinkWithIcon from '@/components/SiteLinkWithIcon.vue';
  import VehicleCardCarousel from '@/components/VehicleCardCarousel.vue';
  import { formatNumber } from '@/utilities/format';
  import { useBreakpointStore } from '@/stores/BreakpointStore';
  import { useHomeStore } from '@/stores/HomeStore';

  const breakpointStore = useBreakpointStore();
  const homeStore = useHomeStore();

  homeStore.getVehicles();

  const blogPosts = new Array(4).fill('').map((empty, index) => index + 1);

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

  onMounted(() => {
    breakpointStore.initialize();
  });

  onUnmounted(() => {
    breakpointStore.cleanup();
  });
</script>

<template>
  <div class="home-page">
    <SiteContainer class="flex column m-row axis1-center gap-2 mt-2 mx-2 mb-4">
      <form class="home-search-form flex column axis1-center shrink radius-1/2 p-2 bg-gray-light">
        <h1 class="flex axis1-center axis2-center row m-column gap-1/2 mb-1 font-32 x-center">
          <span class="contents m-inline">Where you go </span>
          <span class="contents m-inline">for an RV</span>
        </h1>

        <fieldset class="mb-1 border-1 border-gray radius-1/2 bg-white xy-hidden">
          <fieldset class="flex column gap-1/4 border-b border-gray p-1">
            <label
              class="font-14 font-600"
              for="keyword"
            >
              Find any RV
            </label>

            <input
              class="w-full bg-white font-14"
              id="keyword"
              placeholder="Enter keyword or model"
              type="text"
            />
          </fieldset>

          <fieldset class="flex column gap-1/4 border-b border-gray p-1">
            <label
              class="font-14 font-600"
              for="type"
            >
              RV type
            </label>

            <select
              class="w-full bg-white font-14"
              id="type"
            >
              <option>All RV types</option>
            </select>
          </fieldset>

          <div class="flex">
            <fieldset class="flex column gap-1/4 border-r border-gray p-1 w-1/2">
              <label
                class="font-14 font-600"
                for="distance"
              >
                Search within
              </label>

              <select
                class="w-full bg-white font-14"
                id="distance"
                type="text"
              >
                <option>Any dist.</option>
              </select>
            </fieldset>

            <fieldset class="flex column gap-1/4 p-1 w-1/2">
              <label
                class="font-14 font-600"
                for="location"
              >
                Location
              </label>

              <input
                class="w-full bg-white font-14"
                id="location"
                type="text"
                value="Seattle, WA"
              />
            </fieldset>
          </div>
        </fieldset>

        <SiteLinkAsButton
          class="mb-1 radius-1/2 p-1 w-full"
          icon-leading="search"
          is-primary
          is-solid
          to="/rvs-for-sale"
        >
          Search
        </SiteLinkAsButton>
      </form>

      <div class="home-alpha-dma-ad flex axis1-center axis2-center radius-1/2 w-full bg-gray-light font-gray font-700">
        Alpha-DMA
      </div>
    </SiteContainer>

    <section class="mb-4">
      <SiteContainer class="flex column s-row axis1-center axis2-center mb-4 gap-1">
        <h2
          :class="{
            'border-r pr-1': !breakpointStore.isExtraSmall,
          }"
          class="border-gray font-32 whitespace-nowrap"
        >
          Every RV type
        </h2>

        <p>Whether you're looking for something drivable or towable, we have the RV type for you.</p>
      </SiteContainer>

      <SiteCarousel
        :card-width="280"
        :gap="16"
        :offset-x="32"
      >
        <li
          :key="vehicleType.label"
          :vehicle-type="vehicleType"
          class="home-vehicle-type shrink-none ratio-1/1 snap-start"
          v-for="vehicleType in vehicleTypes"
        >
          <router-link
            class="flex column axis1-between gap-1 radius-1/2 p-1 h-full bg-gray-light underline-none"
            to="/rvs-for-sale"
          >
            <span class="font-20 font-700">{{ vehicleType.label }}</span>
            <div class="home-vehicle-type-img mx-auto radius-1/2 bg-gray" />
          </router-link>
        </li>
      </SiteCarousel>
    </section>

    <SiteContainer class="mb-4">
      <section class="home-sell-your-vehicle flex column s-row gap-2 mb-4 radius-1/2 p-2 s-p-4 bg-gray-light y-hidden">
        <div class="home-sell-your-rv-content flex column axis2-center gap-1 s-w-1/2">
          <h2 class="font-32">Sell your RV on RV Trader</h2>
          <p>Millions of buyers are looking for their next RV on RV Trader this month.</p>
          <SiteButton
            class="px-4 whitespace-nowrap"
            is-primary
          >
            Sell my RV
          </SiteButton>
        </div>

        <div class="relative flex axis1-center s-w-1/2">
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
    </SiteContainer>

    <section class="mr-2 mb-4">
      <SiteContainer>
        <h2 class="mb-1 font-24">Featured listings</h2>
      </SiteContainer>

      <div class="flex gap-2">
        <VehicleCardCarousel
          :offset-x="32"
          :vehicles="homeStore.featuredListings"
          class="home-featured-listings"
        />

        <AdPlaceholder
          class="shrink-none"
          height="250"
          v-if="!breakpointStore.isExtraSmall"
          width="300"
        />
      </div>
    </section>

    <section class="mb-4">
      <SiteContainer>
        <h2 class="mb-1 font-24">Recommended RVs</h2>
      </SiteContainer>

      <VehicleCardCarousel
        :offset-x="32"
        :vehicles="homeStore.recommendedVehicles"
      />
    </section>

    <SiteContainer>
      <section class="mb-4">
        <h2 class="mb-1 font-32">Fresh from the blog</h2>

        <div class="flex column m-row gap-1">
          <router-link
            class="flex column gap-1 m-1/4 p-1/2 w-full m-w-1/2 shadow-box underline-none"
            to="#"
          >
            <div class="bg-gray ratio-3/2" />

            <div class="flex column gap-1/2">
              <span class="font-12 font-600">Blog date {{ blogPosts[0] }}</span>
              <h3 class="font-20">Blog headline {{ blogPosts[0] }}</h3>
              <p class="home-blog-preview font-14 y-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aperiam iure officia, nostrum labore
                qui eligendi! Incidunt, obcaecati adipisci. Quibusdam doloribus at minus culpa autem eaque odit. Earum,
                cum esse.
              </p>

              <SiteLinkWithIcon
                class="font-14 font-700"
                icon-trailing="chevron-right"
                is-solid
                to="#"
              >
                Learn more
              </SiteLinkWithIcon>
            </div>
          </router-link>

          <div class="flex column gap-1 w-full m-w-1/2">
            <router-link
              :key="blogPost"
              class="flex column s-row gap-1 m-1/4 p-1/2 shadow-box underline-none"
              to="#"
              v-for="blogPost in blogPosts.slice(1)"
            >
              <div class="home-blog-thumb-small shrink-none bg-gray ratio-3/2" />

              <div class="flex column gap-1/2">
                <span class="font-12 font-600">Blog date {{ blogPost }}</span>

                <h3 class="font-20">Blog headline {{ blogPost }}</h3>

                <p class="home-blog-preview y-hidden font-14">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aperiam iure officia, nostrum
                  labore qui eligendi! Incidunt, obcaecati adipisci. Quibusdam doloribus at minus culpa autem eaque
                  odit. Earum, cum esse.
                </p>

                <SiteLinkWithIcon
                  class="font-14 font-700"
                  icon-trailing="chevron-right"
                  is-solid
                  to="#"
                >
                  Learn more
                </SiteLinkWithIcon>
              </div>
            </router-link>
          </div>
        </div>
      </section>

      <section
        class="flex axis1-center mb-4"
        v-if="!breakpointStore.isExtraSmall"
      >
        <AdPlaceholder
          height="90"
          width="728"
        />
      </section>

      <section class="flex gap-2 mb-4">
        <div>
          <h2 class="mb-1">Find RVs for sale on RV Trader</h2>
          <p>
            RVTrader.com is the online source for all your RV needs. Looking to sell a RV or find a RV Park? We can
            help. Place your RV ad in front of millions of monthly visitors today. Ready to buy a cheap RV? We can help
            with that that too ― browse over 200,000 new and used RVs for sale nationwide from all of your favorite RV
            makes or types like Travel Trailer, Pop Up Camper, Fifth Wheel, Toy Hauler, Truck Camper, Class A, Class B,
            Class C, Fish House, Park Model or locate a specific RV Brand like Newmar RVs. You can easily estimate
            monthly payments, get insurance quotes, and set up price alerts for the RVs you’re interested in while you
            search. Make sure to follow us on social media for everything RV, on and off the road!
          </p>
        </div>

        <AdPlaceholder
          height="250"
          v-if="!breakpointStore.isExtraSmall"
          width="300"
        />
      </section>

      <SeoContent class="mb-4">
        <li class="w-1/4">
          <h2 class="mb-1 font-20">Top RV makes</h2>

          <ul class="flex column gap-1 list-none">
            <li
              :key="dummy"
              class="flex column gap-1/4"
              v-for="(dummy, index) in dummies"
            >
              Make {{ index + 1 }} RVs for sale ({{ formatNumber(Math.floor(Math.random() * 50000)) }})
            </li>
          </ul>
        </li>

        <li class="w-1/4">
          <h2 class="mb-1 font-20">Top RV models</h2>

          <ul class="flex column gap-1 list-none">
            <li
              :key="dummy"
              class="flex column gap-1/4"
              v-for="(dummy, index) in dummies"
            >
              Model {{ index + 1 }} RVs for sale ({{ formatNumber(Math.floor(Math.random() * 50000)) }})
            </li>
          </ul>
        </li>

        <li class="w-1/4">
          <h2 class="mb-1 font-20">Top RV types</h2>

          <ul class="flex column gap-1 list-none">
            <li
              :key="dummy"
              v-for="(dummy, index) in dummies"
            >
              Type {{ index + 1 }} RVs for sale ({{ formatNumber(Math.floor(Math.random() * 50000)) }})
            </li>
          </ul>
        </li>

        <li class="w-1/4">
          <h2 class="mb-1 font-20">Top RV states</h2>

          <ul class="flex column gap-1 list-none">
            <li
              :key="dummy"
              v-for="(dummy, index) in dummies"
            >
              State {{ index + 1 }} RVs for sale ({{ formatNumber(Math.floor(Math.random() * 50000)) }})
            </li>
          </ul>
        </li>
      </SeoContent>
    </SiteContainer>
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

  .home-search-form {
    min-width: 350px;
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
    .s-p-4 {
      padding: 4rem;
    }

    .s-w-1\/2 {
      width: 50%;
    }

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
  }
</style>
