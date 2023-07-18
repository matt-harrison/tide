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
              <RouterLink
                class="underline-none"
                to="#"
              >
                About {{ realm.label.singular }}Trader.com
              </RouterLink>

              <RouterLink
                class="underline-none"
                to="#"
              >
                {{ realm.label.singular }}Trader.com blog
              </RouterLink>

              <RouterLink
                class="underline-none"
                to="#"
              >
                Site map
              </RouterLink>

              <RouterLink
                class="underline-none"
                to="#"
              >
                Need help?
              </RouterLink>

              <RouterLink
                class="underline-none"
                to="#"
              >
                Email us feedback
              </RouterLink>

              <RouterLink
                class="underline-none"
                to="#"
              >
                Security center
              </RouterLink>

              <RouterLink
                class="underline-none"
                to="#"
              >
                Community guidelines
              </RouterLink>
            </div>
          </div>
        </div>

        <div
          :class="isExtraSmall ? 'order-2 w-full' : ''"
          class="site-footer-affiliates"
        >
          <h2 class="mb-1 font-18">{{ realm.label.singular }} Trader affiliates</h2>

          <div class="flex column gap-1 axis1-between">
            <RouterLink
              class="underline-none"
              to="#"
            >
              Airplanes for sale
            </RouterLink>

            <RouterLink
              class="underline-none"
              to="#"
            >
              ATVs for sale
            </RouterLink>

            <RouterLink
              class="underline-none"
              to="#"
            >
              Trucks for sale
            </RouterLink>

            <RouterLink
              class="underline-none"
              to="#"
            >
              Motorcycles for sale
            </RouterLink>

            <RouterLink
              class="underline-none"
              to="#"
            >
              Heavy Equipment for sale
            </RouterLink>

            <RouterLink
              class="underline-none"
              to="#"
            >
              Jet Skis for sale
            </RouterLink>

            <RouterLink
              class="underline-none"
              to="#"
            >
              Snowmobiles for sale
            </RouterLink>

            <RouterLink
              class="underline-none"
              to="#"
            >
              Boats for sale
            </RouterLink>
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
              >
                TraderTraxx login
              </BasicButton>

              <p>
                <RouterLink
                  class="font-600"
                  to="#"
                >
                  Advertise your inventory
                </RouterLink>
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
                :priority="PRIORITY.SECONDARY"
                href="#"
              >
                Sell my {{ realm.label.singular }}
              </BasicButton>

              <RouterLink
                class="font-600"
                to="#"
              >
                Edit my listing
              </RouterLink>
            </div>
          </div>
        </div>

        <div
          :class="isExtraSmall ? 'order-2 axis1-center w-full' : ''"
          class="site-footer-socials flex gap-1 font-20"
        >
          <BasicButtonIcon
            :href="socialLink.url"
            :icon="socialLink.icon"
            :key="socialLink.url"
            :priority="PRIORITY.TERTIARY"
            target="_blank"
            v-for="socialLink in socialLinks"
          />
        </div>
      </BasicContainer>
    </div>

    <div class="py-2 bg-beige">
      <BasicContainer
        :class="isExtraSmall ? 'column axis2-center' : 'row'"
        class="flex wrap gap-1"
      >
        <span>{{ realm.label.singular }}Trader.com © 2023 Trader Interactive | All rights reserved.</span>
        <RouterLink
          class="underline-none"
          to="#"
        >
          Privacy Policy
        </RouterLink>

        <RouterLink
          class="underline-none"
          to="#"
        >
          Terms of Use
        </RouterLink>

        <RouterLink
          class="underline-none"
          to="#"
        >
          Advertiser Agreement
        </RouterLink>
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
