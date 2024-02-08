<script lang="ts" setup>
  import { storeToRefs } from 'pinia';

  import type { Icon } from '@/types/Icon';

  import BasicButton from '@/components/BasicButton.vue';
  import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
  import BasicContainer from '@/components/BasicContainer.vue';
  import { ELEMENT } from '@/types/Element';
  import { ICON } from '@/types/Icon';
  import { PRIORITY } from '@/types/Priority';
  import { realm } from '@/config/main.config';
  import { useViewportStore } from '@/stores/ViewportStore';

  const viewportStore = useViewportStore();

  type SocialLink = {
    icon: Icon;
    url: string;
  };

  const socialLinks: SocialLink[] = [
    {
      icon: ICON.TWITTER,
      url: `https://twitter.com/${realm.id}Trder`,
    },
    {
      icon: ICON.FACEBOOK,
      url: `https://www.facebook.com/${realm.id}trader`,
    },
    {
      icon: ICON.INSTAGRAM,
      url: `https://www.instagram.com/${realm.id}Trader`,
    },
    {
      icon: ICON.YOUTUBE,
      url: `https://www.youtube.com/${realm.id}TraderVideo`,
    },
    {
      icon: ICON.PINTEREST,
      url: `https://www.pinterest.com/${realm.id}Trader`,
    },
    {
      icon: ICON.LINKED_IN,
      url: `https://www.linkedin.com/showcase/${realm.id}trader`,
    },
  ];

  const { isExtraSmall } = storeToRefs(viewportStore);

  const buttonAppStore = new URL('@/assets/images/app-store.png', import.meta.url).href;
  const buttonGooglePlay = new URL('@/assets/images/google-play.png', import.meta.url).href;
</script>

<template>
  <footer class="site-footer tide-display-flex tide-flex-column tide-gap-1/4 tide-font-14">
    <div class="tide-padding-y-2 tide-bg-beige">
      <BasicContainer class="tide-display-flex tide-flex-wrap tide-axis1-between tide-axis2-start tide-gap-2">
        <div
          :class="isExtraSmall ? 'order-2 tide-width-full' : ''"
          class="site-footer-explore"
        >
          <h2 class="tide-margin-bottom-1 tide-font-16">Explore {{ realm.label.singular }} Trader</h2>

          <div class="tide-display-flex tide-flex-wrap tide-gap-1 tide-axis1-between">
            <div class="tide-display-flex tide-flex-column tide-gap-1">
              <a
                class="tide-underline-none"
                href="#"
              >
                About {{ realm.label.singular }}Trader.com
              </a>

              <a
                class="tide-underline-none"
                href="#"
              >
                {{ realm.label.singular }}Trader.com blog
              </a>

              <a
                class="tide-underline-none"
                href="#"
              >
                Site map
              </a>

              <a
                class="tide-underline-none"
                href="#"
              >
                Need help?
              </a>

              <a
                class="tide-underline-none"
                href="#"
              >
                Email us feedback
              </a>

              <a
                class="tide-underline-none"
                href="#"
              >
                Security center
              </a>

              <a
                class="tide-underline-none"
                href="#"
              >
                Community guidelines
              </a>
            </div>
          </div>
        </div>

        <div
          :class="isExtraSmall ? 'order-2 tide-width-full' : ''"
          class="site-footer-affiliates"
        >
          <h2 class="tide-margin-bottom-1 tide-font-16">{{ realm.label.singular }} Trader affiliates</h2>

          <div class="tide-display-flex tide-flex-column tide-gap-1 tide-axis1-between">
            <a
              class="tide-underline-none"
              href="#"
            >
              Airplanes for sale
            </a>

            <a
              class="tide-underline-none"
              href="#"
            >
              ATVs for sale
            </a>

            <a
              class="tide-underline-none"
              href="#"
            >
              Trucks for sale
            </a>

            <a
              class="tide-underline-none"
              href="#"
            >
              Motorcycles for sale
            </a>

            <a
              class="tide-underline-none"
              href="#"
            >
              Heavy Equipment for sale
            </a>

            <a
              class="tide-underline-none"
              href="#"
            >
              Jet Skis for sale
            </a>

            <a
              class="tide-underline-none"
              href="#"
            >
              Snowmobiles for sale
            </a>

            <a
              class="tide-underline-none"
              href="#"
            >
              Boats for sale
            </a>
          </div>
        </div>

        <div
          :class="isExtraSmall ? 'order-1 tide-width-full' : ''"
          class="site-footer-dealers-sellers"
        >
          <div class="tide-display-flex tide-flex-column tide-gap-1 tide-margin-bottom-2">
            <h2 class="tide-font-16">Dealers</h2>

            <div class="tide-display-flex tide-flex-column tide-axis2-start tide-gap-1">
              <BasicButton
                :class="isExtraSmall ? 'tide-width-full' : ''"
                :element="ELEMENT.LINK"
                :priority="PRIORITY.SECONDARY"
                href="#"
                label="TraderTraxx login"
              />

              <p>
                <a
                  class="tide-font-600"
                  href="#"
                >
                  Advertise your inventory
                </a>
                <span> with us!</span>
              </p>
            </div>
          </div>

          <div>
            <h2 class="tide-margin-bottom-1 tide-font-16">Private sellers</h2>

            <div class="tide-display-flex tide-flex-column tide-axis2-start tide-gap-1">
              <span>Sell your {{ realm.label.singular }} for $69.95</span>

              <BasicButton
                :class="isExtraSmall ? 'tide-width-full' : ''"
                :element="ELEMENT.LINK"
                :label="`Sell my ${realm.label.singular}`"
                :priority="PRIORITY.SECONDARY"
                href="#"
              />

              <a
                class="tide-font-600"
                href="#"
              >
                Edit my listing
              </a>
            </div>
          </div>
        </div>

        <div :class="isExtraSmall ? 'order-2 tide-axis1-center tide-width-full' : ''">
          <div
            class="site-footer-socials tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-bottom-1 tide-font-20"
          >
            <BasicButtonIcon
              :element="ELEMENT.LINK"
              :href="socialLink.url"
              :icon="socialLink.icon"
              :key="socialLink.url"
              :priority="PRIORITY.TERTIARY"
              target="_blank"
              v-for="socialLink in socialLinks"
            />
          </div>

          <div class="tide-display-flex tide-flex-wrap tide-gap-1">
            <a href="#">
              <img
                :src="buttonAppStore"
                alt="App Store"
              />
            </a>

            <a href="#">
              <img
                :src="buttonGooglePlay"
                alt="Google Play"
              />
            </a>
          </div>
        </div>
      </BasicContainer>
    </div>

    <div class="tide-padding-y-2 tide-bg-beige">
      <BasicContainer
        :class="isExtraSmall ? 'tide-flex-column tide-axis2-center' : 'tide-flex-row'"
        class="tide-display-flex tide-flex-wrap tide-gap-1"
      >
        <span>{{ realm.label.singular }}Trader.com © 2023 Trader Interactive | All rights reserved.</span>
        <a
          class="tide-underline-none"
          href="#"
        >
          Privacy Policy
        </a>

        <a
          class="tide-underline-none"
          href="#"
        >
          Terms of Use
        </a>

        <a
          class="tide-underline-none"
          href="#"
        >
          Advertiser Agreement
        </a>
      </BasicContainer>
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
