<script lang="ts" setup>
  import { storeToRefs } from 'pinia';

  import SiteButton from '@/components/SiteButton.vue';
  import SiteButtonIcon from '@/components/SiteButtonIcon.vue';
  import SiteContainer from '@/components/SiteContainer.vue';
  import { useBreakpointStore } from '@/stores/BreakpointStore';

  const breakpointStore = useBreakpointStore();

  const { isExtraSmall } = storeToRefs(breakpointStore);
</script>

<template>
  <footer class="site-footer flex column gap-1/4 font-14">
    <div class="py-2 bg-gray-light">
      <SiteContainer class="flex wrap axis1-between axis2-start gap-2">
        <div
          :class="isExtraSmall ? 'order-2 w-full' : ''"
          class="site-footer-explore"
        >
          <h2 class="mb-1 font-18">Explore RV Trader</h2>

          <div class="flex wrap gap-1 axis1-between">
            <div class="flex column gap-1">
              <router-link
                class="underline-none"
                to="#"
              >
                About RVTrader.com
              </router-link>

              <router-link
                class="underline-none"
                to="#"
              >
                RVTrader.com Blog
              </router-link>

              <router-link
                class="underline-none"
                to="#"
              >
                Site Map
              </router-link>

              <router-link
                class="underline-none"
                to="#"
              >
                Need Help?
              </router-link>

              <router-link
                class="underline-none"
                to="#"
              >
                Email Us Feedback
              </router-link>

              <router-link
                class="underline-none"
                to="#"
              >
                Security Center
              </router-link>

              <router-link
                class="underline-none"
                to="#"
              >
                Community Guidelines
              </router-link>
            </div>
          </div>
        </div>

        <div
          :class="isExtraSmall ? 'order-2 w-full' : ''"
          class="site-footer-affiliates"
        >
          <h2 class="mb-1 font-18">RV Trader affiliates</h2>

          <div class="flex column gap-1 axis1-between">
            <router-link
              class="underline-none"
              to="#"
            >
              Airplanes For Sale
            </router-link>

            <router-link
              class="underline-none"
              to="#"
            >
              ATVs For Sale
            </router-link>

            <router-link
              class="underline-none"
              to="#"
            >
              Trucks For Sale
            </router-link>

            <router-link
              class="underline-none"
              to="#"
            >
              Motorcycles For Sale
            </router-link>

            <router-link
              class="underline-none"
              to="#"
            >
              Heavy Equipment For Sale
            </router-link>

            <router-link
              class="underline-none"
              to="#"
            >
              Jet Skis For Sale
            </router-link>

            <router-link
              class="underline-none"
              to="#"
            >
              Snowmobiles For Sale
            </router-link>

            <router-link
              class="underline-none"
              to="#"
            >
              Boats For Sale
            </router-link>
          </div>
        </div>

        <div
          :class="isExtraSmall ? 'order-1 w-full' : ''"
          class="site-footer-dealers-sellers"
        >
          <div class="flex column gap-1 mb-2">
            <h2 class="font-18">Dealers</h2>

            <div class="flex column axis2-start gap-1">
              <SiteButton
                :class-button="isExtraSmall ? '' : 'w-full'"
                is-secondary
              >
                TraderTraxx Login
              </SiteButton>

              <p>
                <router-link
                  class="font-600"
                  to="#"
                >
                  Advertise your inventory
                </router-link>
                <span> with us!</span>
              </p>
            </div>
          </div>

          <div>
            <h2 class="mb-1 font-18">Private sellers</h2>

            <div class="flex column axis2-start gap-1">
              <span>Sell your RV fro $69.95</span>

              <SiteButton
                :class-button="isExtraSmall ? '' : 'w-full'"
                is-secondary
              >
                Sell my RV
              </SiteButton>

              <router-link
                class="font-600"
                to="#"
              >
                Edit my listing
              </router-link>
            </div>
          </div>
        </div>

        <div
          :class="isExtraSmall ? 'order-2 axis1-center w-full' : ''"
          class="site-footer-socials flex gap-1/2 font-24"
        >
          <SiteButtonIcon
            class-icon="site-footer-social"
            icon="twitter"
            is-brand
            is-restyled
            is-secondary
          />

          <SiteButtonIcon
            class-icon="site-footer-social fa-brands"
            icon="facebook-f"
            is-brand
            is-restyled
            is-secondary
          />

          <SiteButtonIcon
            class-icon="site-footer-social fa-brands"
            icon="instagram"
            is-brand
            is-restyled
            is-secondary
          />

          <SiteButtonIcon
            class-icon="site-footer-social fa-brands"
            icon="youtube"
            is-brand
            is-restyled
            is-secondary
          />

          <SiteButtonIcon
            class-icon="site-footer-social fa-brands"
            icon="pinterest-p"
            is-brand
            is-restyled
            is-secondary
          />

          <SiteButtonIcon
            class-icon="site-footer-social fa-brands"
            icon="linkedin-in"
            is-brand
            is-restyled
            is-secondary
          />
        </div>
      </SiteContainer>
    </div>

    <div class="py-2 bg-gray-light">
      <SiteContainer
        :class="isExtraSmall ? 'column axis2-center' : 'row'"
        class="flex wrap gap-1"
      >
        <span>RVTrader.com © 2023 Trader Interactive | All rights reserved.</span>
        <router-link
          class="underline-none"
          to="#"
        >
          Privacy Policy
        </router-link>

        <router-link
          class="underline-none"
          to="#"
        >
          Terms of Use
        </router-link>

        <router-link
          class="underline-none"
          to="#"
        >
          Advertiser Agreement
        </router-link>
      </SiteContainer>
    </div>
    <slot />
  </footer>
</template>

<style scoped>
  .order-1 {
    order: 1;
  }

  .order-2 {
    order: 2;
  }
</style>

<style>
  .site-footer-social {
    width: 36px;
  }
</style>
