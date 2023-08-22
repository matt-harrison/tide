<script lang="ts" setup>
  import { storeToRefs } from 'pinia';

  import type { Icon } from '@/types/Icon';

  import BasicButton from '@/components/BasicButton.vue';
  import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
  import BasicContainer from '@/components/BasicContainer.vue';
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
  <footer class="site-footer flex column gap-1/4 font-14">
    <div class="py-2 bg-beige">
      <BasicContainer class="flex wrap axis1-between axis2-start gap-2">
        <div
          :class="isExtraSmall ? 'order-2 w-full' : ''"
          class="site-footer-explore"
        >
          <h2 class="mb-1 font-18">Explore {{ realm.label.singular }} Trader</h2>

          <div class="flex wrap gap-1 axis1-between">
            <div class="flex column gap-1">
              <a
                class="underline-none"
                href="#"
              >
                About {{ realm.label.singular }}Trader.com
              </a>

              <a
                class="underline-none"
                href="#"
              >
                {{ realm.label.singular }}Trader.com blog
              </a>

              <a
                class="underline-none"
                href="#"
              >
                Site map
              </a>

              <a
                class="underline-none"
                href="#"
              >
                Need help?
              </a>

              <a
                class="underline-none"
                href="#"
              >
                Email us feedback
              </a>

              <a
                class="underline-none"
                href="#"
              >
                Security center
              </a>

              <a
                class="underline-none"
                href="#"
              >
                Community guidelines
              </a>
            </div>
          </div>
        </div>

        <div
          :class="isExtraSmall ? 'order-2 w-full' : ''"
          class="site-footer-affiliates"
        >
          <h2 class="mb-1 font-18">{{ realm.label.singular }} Trader affiliates</h2>

          <div class="flex column gap-1 axis1-between">
            <a
              class="underline-none"
              href="#"
            >
              Airplanes for sale
            </a>

            <a
              class="underline-none"
              href="#"
            >
              ATVs for sale
            </a>

            <a
              class="underline-none"
              href="#"
            >
              Trucks for sale
            </a>

            <a
              class="underline-none"
              href="#"
            >
              Motorcycles for sale
            </a>

            <a
              class="underline-none"
              href="#"
            >
              Heavy Equipment for sale
            </a>

            <a
              class="underline-none"
              href="#"
            >
              Jet Skis for sale
            </a>

            <a
              class="underline-none"
              href="#"
            >
              Snowmobiles for sale
            </a>

            <a
              class="underline-none"
              href="#"
            >
              Boats for sale
            </a>
          </div>
        </div>

        <div
          :class="isExtraSmall ? 'order-1 w-full' : ''"
          class="site-footer-dealers-sellers"
        >
          <div class="flex column gap-1 mb-2">
            <h2 class="font-18">Dealers</h2>

            <div class="flex column axis2-start gap-1">
              <BasicButton
                :class="isExtraSmall ? 'w-full' : ''"
                :priority="PRIORITY.SECONDARY"
                href="#"
                label="TraderTraxx login"
              />

              <p>
                <a
                  class="font-600"
                  href="#"
                >
                  Advertise your inventory
                </a>
                <span> with us!</span>
              </p>
            </div>
          </div>

          <div>
            <h2 class="mb-1 font-18">Private sellers</h2>

            <div class="flex column axis2-start gap-1">
              <span>Sell your {{ realm.label.singular }} for $69.95</span>

              <BasicButton
                :class="isExtraSmall ? 'w-full' : ''"
                :label="`Sell my ${realm.label.singular}`"
                :priority="PRIORITY.SECONDARY"
                href="#"
              />

              <a
                class="font-600"
                href="#"
              >
                Edit my listing
              </a>
            </div>
          </div>
        </div>

        <div :class="isExtraSmall ? 'order-2 axis1-center w-full' : ''">
          <div class="site-footer-socials flex wrap gap-1 mb-1 font-20">
            <BasicButtonIcon
              :href="socialLink.url"
              :icon="socialLink.icon"
              :key="socialLink.url"
              :priority="PRIORITY.TERTIARY"
              target="_blank"
              v-for="socialLink in socialLinks"
            />
          </div>

          <div class="flex wrap gap-1">
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

    <div class="py-2 bg-beige">
      <BasicContainer
        :class="isExtraSmall ? 'column axis2-center' : 'row'"
        class="flex wrap gap-1"
      >
        <span>{{ realm.label.singular }}Trader.com © 2023 Trader Interactive | All rights reserved.</span>
        <a
          class="underline-none"
          href="#"
        >
          Privacy Policy
        </a>

        <a
          class="underline-none"
          href="#"
        >
          Terms of Use
        </a>

        <a
          class="underline-none"
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
