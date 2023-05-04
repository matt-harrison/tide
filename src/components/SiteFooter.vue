<script lang="ts" setup>
  import SiteButton from '@/components/SiteButton.vue';
  import SiteButtonIcon from '@/components/SiteButtonIcon.vue';
  import SiteContainer from '@/components/SiteContainer.vue';
</script>

<template>
  <footer class="site-footer font-14">
    <section class="p-2 bg-gray-light">
      <SiteContainer>
        <div class="flex wrap axis1-between axis2-start gap-2 mb-4">
          <div>
            <h2 class="mb-1 font-18">Explore RV Trader</h2>

            <div class="flex wrap gap-1 axis1-between">
              <div class="flex column gap-1">
                <span>About RVTrader.com</span>
                <span>RVTrader.com Blog</span>
                <span>Site Map</span>
                <span>Need Help?</span>
                <span>Email Us Feedback</span>
                <span>Security Center</span>
                <span>Community Guidelines</span>
              </div>
            </div>
          </div>

          <div>
            <h2 class="mb-1 font-18">RV Trader affiliates</h2>

            <div class="flex column gap-1 axis1-between">
              <span>Airplanes For Sale</span>
              <span>ATVs For Sale</span>
              <span>Trucks For Sale</span>
              <span>Motorcycles For Sale</span>
              <span>Heavy Equipment For Sale</span>
              <span>Jet Skis For Sale</span>
              <span>Snowmobiles For Sale</span>
              <span>Boats For Sale</span>
            </div>
          </div>

          <div>
            <div class="mb-2">
              <h2 class="mb-1 font-18">Dealers</h2>

              <div class="flex column gap-1">
                <SiteButton is-secondary> TraderTraxx Login </SiteButton>

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

              <div class="flex column gap-1">
                <span>Sell your RV fro $69.95</span>

                <SiteButton is-secondary> Sell my RV </SiteButton>

                <router-link
                  class="font-600"
                  to="#"
                >
                  Edit my listing
                </router-link>
              </div>
            </div>
          </div>

          <div class="flex gap-1/2 font-24">
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
        </div>

        <div class="flex axis1-center">
          <div class="flex wrap gap-1">
            <span>RVTrader.com © 2023 Trader Interactive | All rights reserved.</span>
            <router-link to="#">Privacy Policy</router-link>
            <router-link to="#">Terms of Use</router-link>
            <router-link to="#">Advertiser Agreement</router-link>
          </div>
        </div>
      </SiteContainer>
    </section>

    <slot />
  </footer>
</template>

<style scoped></style>

<style>
  .site-footer-social {
    width: 36px;
  }
</style>
