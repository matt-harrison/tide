<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { storeToRefs } from 'pinia';

  import type { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  import type { BreadCrumb } from '@/types/BreadCrumb';

  import AccordionItem from '@/components/AccordionItem.vue';
  import BreadCrumbs from '@/components/BreadCrumbs.vue';
  import ListingCard from '@/components/ListingCard.vue';
  import SiteButton from '@/components/SiteButton.vue';
  import SiteButtonIcon from '@/components/SiteButtonIcon.vue';
  import SiteButtonToggle from '@/components/SiteButtonToggle.vue';
  import SiteLinkAsButton from '@/components/SiteLinkAsButton.vue';
  import SiteLinkWithIcon from '@/components/SiteLinkWithIcon.vue';
  import SiteCarousel from '@/components/SiteCarousel.vue';
  import VehicleCard from '@/components/VehicleCard.vue';
  import VehicleCardCarousel from '@/components/VehicleCardCarousel.vue';
  import { useBreakpointStore } from '@/stores/BreakpointStore';
  import { useDarkModeStore } from '@/stores/DarkModeStore';
  import { useFavoriteStore } from '@/stores/FavoriteStore';
  import { useUserAgentStore } from '@/stores/UserAgentStore';
  import { formatKebabCase } from '@/utilities/format';

  // Permanent reference to dummy data for demonstration purposes.
  import { dummyVehicles } from '@/data/dummy-vehicles';

  type ColorGroups = {
    global: string[];
    realm: string[];
  };

  const breakpointStore = useBreakpointStore();
  const darkModeStore = useDarkModeStore();
  const favoriteStore = useFavoriteStore();
  const userAgentStore = useUserAgentStore();

  const { isExtraSmall, isSmall, isMedium, isLarge } = storeToRefs(breakpointStore);
  const { isTouchscreen } = storeToRefs(userAgentStore);

  const breadCrumbs: BreadCrumb[] = [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Style Guide',
      url: '/style-guide',
    },
    {
      label: 'Breadcrumb Demo',
    },
  ];

  const cards = new Array(15).fill('').map((empty, index) => index + 1);

  const colors: ColorGroups = {
    global: ['Black', 'Blue', 'Blue Dark', 'Blue Light', 'Gray', 'Gray Dark', 'Gray Light', 'Green', 'Red', 'White'],
    realm: ['Primary', 'Secondary', 'Tertiary'],
  };

  const icons: string[] = [
    'arrow-circle-left',
    'arrow-circle-right',
    'arrow-right-arrow-left',
    'arrow-up-from-bracket',
    'bars',
    'bookmark',
    'calculator',
    'calendar',
    'chevron-down',
    'chevron-left',
    'chevron-right',
    'chevron-up',
    'circle-check',
    'comments',
    'cube',
    'envelope',
    'eye',
    'heart',
    'message',
    'phone',
    'play',
    'search',
    'star',
    'tag',
    'times',
    'trash-alt',
    'up-right-from-square',
    'user',
    'video',
  ];

  const increments: string[] = ['1/4', '1/2', '1', '2', '4'];

  const isToggleActive = ref(false);

  const sides: string[] = ['', 'y', 'x', 't', 'r', 'b', 'l'];

  const getBackgroundColorClass = (name: string): string => {
    return `bg-${formatKebabCase(name)}`;
  };

  const getBorderColorClass = (name: string): string => {
    return `border-${formatKebabCase(name)}`;
  };

  const getFontColorClass = (name: string): string => {
    return `font-${formatKebabCase(name)}`;
  };

  const getIsDark = (target: Element) => {
    const rgb = getRgb(target);
    let isDark = false;

    rgb?.forEach((factor) => {
      if (Number(factor) < 128) {
        isDark = true;
      }
    });

    return isDark;
  };

  const getHex = (target: Element) => {
    const rgb = getRgb(target);
    const hexes = rgb?.map((decimal) => {
      const hex = Number(decimal).toString(16);

      return hex === '0' ? '00' : hex;
    });

    return hexes ? `#${hexes[0]}${hexes[1]}${hexes[2]}`.toUpperCase() : '';
  };

  const getRgb = (target: Element) => {
    const bgColor = window.getComputedStyle(target).backgroundColor;
    const rgb = bgColor.match(/\d+/g);

    return rgb;
  };

  const toggleIsToggleActive = () => {
    isToggleActive.value = !isToggleActive.value;
  };

  onMounted(() => {
    const swatches = document.querySelectorAll('.swatch');

    swatches.forEach((swatch) => {
      const hex = getHex(swatch);
      const isDark = getIsDark(swatch);
      const isWhite = hex === '#FFFFFF';
      const nameNode = swatch.querySelector('.name');
      const hexNode = swatch.querySelector('.hex');

      if (hexNode) {
        hexNode.innerHTML = hex;
      }

      if (isDark) {
        swatch.classList.remove('font-black');
        swatch.classList.add('font-white');
      }

      if (isWhite && nameNode) {
        const borderClass = getBorderColorClass(nameNode.innerHTML);

        swatch.classList.remove(borderClass);
        swatch.classList.add('border-gray');
      }
    });
  });
</script>

<template>
  <div
    :class="darkModeStore.isDarkMode ? 'bg-gray-dark font-white' : ''"
    class="style-guide-page my-2"
  >
    <header class="mx-2 mb-2">
      <h1 class="font-32">Style Guide</h1>
    </header>

    <section
      :class="[
        darkModeStore.isDarkMode ? ' l-bg-gray-dark' : ' l-bg-white',
        isExtraSmall ? 'bg-blue-dark' : '',
        isSmall ? 'bg-blue' : '',
        isMedium ? 'bg-blue-light' : '',
        isLarge ? 'bg-white' : '',
      ]"
      class="mb-1 py-1 px-2"
    >
      <h2 class="mb-1 font-28">Breakpoints</h2>

      <div class="flex wrap gap-1 ml-1">
        <div class="flex column gap-1/4 border-1 border-white radius-1/2 p-1 bg-blue-dark font-black">
          <span>Extra Small</span>
          <span>0-767px</span>
        </div>

        <div class="flex column gap-1/4 border-1 border-white radius-1/2 p-1 bg-blue font-black">
          <span>Small</span>
          <span>768-991px</span>
        </div>

        <div class="flex column gap-1/4 border-1 border-white radius-1/2 p-1 bg-blue-light font-black">
          <span>Medium</span>
          <span>992-1231px</span>
        </div>

        <div
          :class="darkModeStore.isDarkMode ? 'bg-gray-dark' : 'bg-white'"
          class="flex column gap-1/4 border-1 border-white radius-1/2 p-1"
        >
          <span>Large</span>
          <span>1232+px</span>
        </div>
      </div>
    </section>

    <section class="mx-2 mb-2">
      <h2 class="mb-1">Foundation</h2>

      <section class="mb-2">
        <h3 class="mb-1">Color</h3>

        <section class="mb-2">
          <h4 class="mb-1">Global</h4>

          <ul class="flex wrap gap-1 ml-1 list-none">
            <li
              :class="[getBackgroundColorClass(color), getBorderColorClass(color)]"
              :key="color"
              class="swatch flex column gap-1/4 border-1 radius-1/2 p-1 font-black"
              v-for="color in colors.global"
            >
              <span>
                <span>Name: </span>
                <span class="name">{{ color }}</span>
              </span>

              <span>
                <span>Hex: </span>
                <span class="hex" />
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h4 class="mb-1 font-20">Realm</h4>

          <div class="flex wrap gap-1 ml-1">
            <div
              :class="[getBackgroundColorClass(color), getBorderColorClass(color)]"
              :key="color"
              class="swatch flex column gap-1/4 border-1 radius-1/2 p-1 font-black"
              v-for="color in colors.realm"
            >
              <span>
                <span>Name: </span>
                <span class="name">{{ color }}</span>
              </span>

              <span>
                <span>Hex: </span>
                <span class="hex" />
              </span>
            </div>
          </div>
        </section>
      </section>

      <section class="mb-2">
        <h3 class="mb-1">Typography</h3>

        <section class="mb-2">
          <h4 class="mb-1">Font Color</h4>

          <section class="mb-1">
            <h5 class="mb-1">Global</h5>

            <div class="ml-1">
              <p
                :class="getFontColorClass(color)"
                :key="color"
                v-for="color in colors.global"
              >
                .{{ getFontColorClass(color) }}
              </p>
            </div>
          </section>

          <section class="mb-2">
            <h5 class="mb-1">Realm</h5>

            <div class="ml-1">
              <p
                :class="getFontColorClass(color)"
                :key="color"
                v-for="color in colors.realm"
              >
                .{{ getFontColorClass(color) }}
              </p>
            </div>
          </section>
        </section>

        <section class="mb-2">
          <h4 class="mb-1">Font Family</h4>

          <div class="ml-1">
            <p class="font-default">.font-default</p>
            <p class="font-title">.font-title</p>
          </div>
        </section>

        <section class="mb-2">
          <h4 class="mb-1">Font Size</h4>

          <div class="ml-1 flex column">
            <span class="font-32">.font-32</span>
            <span class="font-28">.font-28</span>
            <span class="font-24">.font-24</span>
            <span class="font-20">.font-20</span>
            <span class="font-16">.font-16</span>
            <span class="font-14">.font-14</span>
            <span class="font-12">.font-12</span>
          </div>
        </section>

        <section>
          <h4 class="mb-1">Font Weight</h4>

          <div class="ml-1">
            <p class="font-500">.font-500</p>
            <p class="font-600">.font-600</p>
            <p class="font-700">.font-700</p>
          </div>
        </section>
      </section>

      <section class="mb-2">
        <h3 class="mb-1">Spacing</h3>

        <section class="mb-2">
          <h4 class="mb-1">Margin</h4>

          <div
            :class="index < increments.length - 1 ? 'mb-1' : ''"
            :key="increment"
            class="flex wrap axis2-center gap-1 ml-1"
            v-for="(increment, index) in increments"
          >
            <div
              :key="side"
              class="bg-blue-light"
              v-for="side in sides"
            >
              <div
                :class="[`m${side}-${increment}`, darkModeStore.isDarkMode ? 'bg-gray-dark' : 'bg-white']"
                class="border-1 border-blue-dark p-1 bg-white font-gray-dark"
              >
                .{{ `m${side}-${increment}` }}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h4 class="mb-1">Padding</h4>

          <div
            :class="index < increments.length - 1 ? 'mb-1' : ''"
            :key="increment"
            class="flex wrap axis2-center gap-1 ml-1"
            v-for="(increment, index) in increments"
          >
            <div
              :key="side"
              v-for="side in sides"
            >
              <div
                :class="`p${side}-${increment}`"
                class="border-1 border-blue-dark bg-blue-light"
              >
                <div
                  :class="darkModeStore.isDarkMode ? 'bg-gray-dark' : 'bg-white'"
                  class="p-1/4 bg-white font-gray-dark"
                >
                  .{{ `p${side}-${increment}` }}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section class="mb-2">
        <h3 class="mb-1">Border</h3>

        <section class="mb-2">
          <h4 class="mb-1">Color</h4>

          <section class="mb-2">
            <h5 class="mb-1">Global</h5>
            <div class="flex wrap gap-1 ml-1">
              <div
                :class="getBorderColorClass(color)"
                :key="color"
                class="border-1 radius-1/2 p-1"
                v-for="color in colors.global"
              >
                .{{ getBorderColorClass(color) }}
              </div>
            </div>
          </section>

          <section>
            <h5 class="mb-1">Realm</h5>
            <div class="flex wrap gap-1 ml-1">
              <div
                :class="getBorderColorClass(color)"
                :key="color"
                class="border-1 radius-1/2 p-1"
                v-for="color in colors.realm"
              >
                .{{ getBorderColorClass(color) }}
              </div>
            </div>
          </section>
        </section>

        <section class="mb-2">
          <h4 class="mb-1">Radius</h4>

          <div class="flex wrap axis2-start gap-1 ml-1">
            <div class="flex axis2-center column">
              <span class="mb-1/2">.radius-1/4</span>
              <div
                :class="darkModeStore.isDarkMode ? 'border-white' : 'border-gray-dark'"
                class="radius-demo border-1 radius-1/4"
              />
            </div>

            <div class="flex axis2-center column">
              <span class="mb-1/2">.radius-1/2</span>
              <div
                :class="darkModeStore.isDarkMode ? 'border-white' : 'border-gray-dark'"
                class="radius-demo border-1 radius-1/2"
              />
            </div>

            <div class="flex axis2-center column">
              <span class="mb-1/2">.radius-1</span>
              <div
                :class="darkModeStore.isDarkMode ? 'border-white' : 'border-gray-dark'"
                class="radius-demo border-1 radius-1"
              />
            </div>

            <div class="flex axis2-center column">
              <span class="mb-1/2">.radius-full</span>
              <div
                :class="darkModeStore.isDarkMode ? 'border-white' : 'border-gray-dark'"
                class="radius-demo border-1 radius-full"
              />
            </div>
          </div>
        </section>

        <section class="mb-2">
          <h4 class="mb-1">Side</h4>

          <div class="flex wrap axis2-start gap-1 ml-1 font-black">
            <div class="border-1 border-blue-dark p-1 bg-blue-light">.border-1</div>

            <div class="border-t border-blue-dark p-1 bg-blue-light">.border-t</div>

            <div class="border-r border-blue-dark p-1 bg-blue-light">.border-r</div>

            <div class="border-b border-blue-dark p-1 bg-blue-light">.border-b</div>

            <div class="border-l border-blue-dark p-1 bg-blue-light">.border-l</div>
          </div>
        </section>

        <section class="mb-2">
          <h4 class="mb-1">Width</h4>

          <div class="flex wrap axis2-start gap-1 ml-1">
            <div
              :class="darkModeStore.isDarkMode ? 'border-white' : 'border-gray-dark'"
              class="border-1 radius-1/2 p-1"
            >
              .border-1
            </div>

            <div
              :class="darkModeStore.isDarkMode ? 'border-white' : 'border-gray-dark'"
              class="border-2 radius-1/2 p-1"
            >
              .border-2
            </div>
          </div>
        </section>
      </section>
    </section>

    <section>
      <h2 class="mx-2 mb-1">Components</h2>

      <section class="mx-2 mb-2">
        <h3 class="mb-1">Accordion</h3>

        <div class="ml-1 border-t border-gray">
          <AccordionItem
            :is-expanded-initial="index === 1"
            :key="index"
            :label="`Accordion Item ${index} Label`"
            class-label="py-1"
            v-for="index in [1, 2, 3]"
          >
            <div class="ml-1 mb-1">
              <p class="mb-1">Accordion Item {{ index }} Body Content</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta nec arcu vel aliquam. Quisque a sem
                accumsan, mattis nunc at, rhoncus urna. Vivamus rutrum lorem quis risus dictum dapibus. Donec id rutrum
                sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam in
                leo ex. Phasellus porttitor ac turpis at bibendum. Cras faucibus rutrum dictum. Integer pellentesque
                mollis dictum.
              </p>

              <p
                class="pt-1"
                v-if="index >= 2"
              >
                Morbi nec tempus leo. Morbi faucibus arcu mauris, eget consequat dolor vestibulum a. Nullam varius
                sapien id urna sodales, vel facilisis leo aliquam. Fusce et dolor nec velit facilisis blandit sit amet a
                metus. Aliquam erat volutpat. Nullam a tortor nibh. Integer accumsan elit consectetur, cursus lectus
                malesuada, commodo turpis. Proin turpis risus, bibendum et elementum in, sagittis et mauris. Phasellus
                et magna ultrices, hendrerit nibh sit amet, auctor sapien. Pellentesque aliquam lectus a enim
                consectetur pharetra. Vivamus in ornare enim.
              </p>

              <p
                class="pt-1"
                v-if="index >= 3"
              >
                Curabitur leo nulla, ultrices vitae elementum a, interdum sed quam. Pellentesque accumsan, arcu eu
                eleifend placerat, metus odio dignissim arcu, et cursus eros dolor vitae tortor. Vestibulum interdum
                nulla eget metus aliquet laoreet. Nunc suscipit tellus tortor, eget gravida lacus tincidunt in. Maecenas
                vitae nisi blandit justo fermentum laoreet vel eget lorem. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Duis in odio eu est bibendum venenatis a ut leo.
              </p>
            </div>
          </AccordionItem>
        </div>
      </section>

      <section class="mx-2 mb-2">
        <h3 class="mb-1">Breadcrumbs</h3>

        <BreadCrumbs
          :bread-crumbs="breadCrumbs"
          class="ml-1"
        />
      </section>

      <section class="mx-2 mb-2">
        <h3 class="mb-1">Button</h3>

        <div class="flex wrap gap-1 mb-1 ml-1">
          <SiteButton is-primary>Primary</SiteButton>
          <SiteButton is-secondary>Secondary</SiteButton>
          <SiteButton disabled>Inactive</SiteButton>
        </div>

        <div class="flex wrap gap-1 ml-1">
          <SiteButton
            icon-leading="star"
            is-primary
            is-solid
          >
            Leading Icon
          </SiteButton>

          <SiteButton
            icon-trailing="up-right-from-square"
            is-secondary
            is-solid
          >
            Trailing Icon
          </SiteButton>

          <SiteButton disabled>No Icon</SiteButton>
        </div>
      </section>

      <section class="mx-2 mb-2">
        <h3 class="mb-1">Button Icon</h3>

        <div class="flex wrap gap-1 mb-1 ml-1">
          <SiteButtonIcon
            :icon="icon"
            :key="icon"
            :title="icon"
            class-button="site-icon-demo border-2 border-gray-dark"
            is-primary
            is-restyled
            is-solid
            v-for="icon in icons"
          />
        </div>

        <div class="flex wrap gap-1 mb-1 ml-1">
          <SiteButtonIcon
            :icon="icon"
            :key="icon"
            :title="icon"
            class-button="site-icon-demo border-2 border-gray-dark"
            is-restyled
            is-secondary
            is-solid
            v-for="icon in icons"
          />
        </div>

        <div class="flex wrap gap-1 ml-1">
          <SiteButtonIcon
            :icon="icon"
            :key="icon"
            :title="icon"
            class="site-icon-demo"
            is-restyled
            is-secondary
            is-solid
            v-for="icon in icons"
          />
        </div>
      </section>

      <section class="mx-2 mb-2">
        <h3 class="mb-1">Button Toggle</h3>

        <div class="flex wrap gap-1 mb-1 ml-1">
          <SiteButtonToggle
            :is-active="isToggleActive"
            @click="toggleIsToggleActive"
          />
        </div>
      </section>

      <section class="mx-2 mb-2">
        <h3 class="mb-1">Icon</h3>

        <div class="flex wrap gap-1 ml-1">
          <div
            :class="darkModeStore.isDarkMode ? 'border-white font-white' : 'border-gray-dark'"
            :key="icon"
            :title="icon"
            class="site-icon-demo flex axis1-center axis2-center border-1 radius-1/2 p-1"
            v-for="icon in icons"
          >
            <FontAwesomeIcon :icon="`fa-solid fa-${icon}`" />
          </div>
        </div>
      </section>

      <section class="mb-2">
        <h3 class="mx-2 mb-1">Carousel</h3>

        <div class="mb-2">
          <h4 class="mx-2 mb-1">Site Carousel</h4>

          <SiteCarousel
            :card-width="150"
            :gap="16"
            :is-touchscreen="isTouchscreen"
            :offset-x="64"
          >
            <div
              :class="darkModeStore.isDarkMode ? 'border-white font-white' : 'border-gray-dark bg-white'"
              :key="card"
              class="site-carousel-card-demo flex axis1-center shrink-none border-1 p-1 radius-1/2 snap-start"
              v-for="card in cards"
            >
              Card demo {{ card }}
            </div>
          </SiteCarousel>
        </div>

        <div>
          <h4 class="mx-2 mb-1 pl-1">Vehicle Card Carousel</h4>

          <VehicleCardCarousel
            :get-is-favorite="favoriteStore.getIsFavorite"
            :handle-favorite-click="favoriteStore.toggleIsFavorite"
            :is-touchscreen="isTouchscreen"
            :offset-x="64"
            :vehicles="dummyVehicles"
            class="flex wrap gap-1 font-gray-dark"
          />
        </div>
      </section>

      <section class="mx-2 mb-2">
        <h3 class="mb-1">Cards</h3>

        <div class="mb-2">
          <h4 class="mb-1">Listing Card</h4>

          <ul class="list-none">
            <ListingCard
              :is-favorite="favoriteStore.getIsFavorite(dummyVehicles[0].adId)"
              :vehicle="dummyVehicles[0]"
              @handle-favorite-click="favoriteStore.toggleIsFavorite"
              class="font-gray-dark"
            />
          </ul>
        </div>

        <div class="mb-2">
          <h4 class="mb-1">Vehicle Card</h4>

          <ul class="list-none">
            <VehicleCard
              :is-favorite="favoriteStore.getIsFavorite(dummyVehicles[0].adId)"
              :vehicle="dummyVehicles[0]"
              @handle-favorite-click="favoriteStore.toggleIsFavorite"
              class="font-gray-dark"
            />
          </ul>
        </div>
      </section>

      <section class="mx-2">
        <h3 class="mb-1">Link</h3>

        <div class="ml-1">
          <div class="mb-2">
            <h4 class="mb-1">Standard Link</h4>

            <router-link to="#"> Standard link </router-link>
          </div>

          <div class="mb-2">
            <h4 class="mb-1">Link with Icon</h4>

            <div class="flex wrap gap-2">
              <SiteLinkWithIcon
                icon-leading="star"
                is-solid
                to="#"
              >
                Leading Icon
              </SiteLinkWithIcon>

              <SiteLinkWithIcon
                icon-trailing="up-right-from-square"
                is-solid
                to="#"
              >
                Trailing Icon
              </SiteLinkWithIcon>
            </div>
          </div>

          <div>
            <h4 class="mb-1">Link as Button</h4>

            <div class="flex wrap gap-1 mb-1">
              <SiteLinkAsButton
                is-primary
                to="#"
              >
                Primary
              </SiteLinkAsButton>

              <SiteLinkAsButton
                is-secondary
                to="#"
              >
                Secondary
              </SiteLinkAsButton>
            </div>

            <div class="flex wrap gap-1">
              <SiteLinkAsButton
                icon-leading="star"
                is-primary
                is-solid
                to="#"
              >
                Leading Icon
              </SiteLinkAsButton>

              <SiteLinkAsButton
                icon-trailing="up-right-from-square"
                is-secondary
                is-solid
                to="#"
              >
                Trailing Icon
              </SiteLinkAsButton>

              <SiteLinkAsButton
                is-secondary
                to="#"
              >
                No Icon
              </SiteLinkAsButton>
            </div>
          </div>
        </div>
      </section>
    </section>

    <button
      :class="darkModeStore.isDarkMode ? 'border-white font-white' : 'border-gray-dark bg-white'"
      @click="darkModeStore.toggleIsDarkMode"
      class="dark-mode-toggle fixed border-1 radius-1/2 p-1/2 bg-gray-dark"
    >
      Dark Mode: {{ darkModeStore.isDarkMode ? 'On' : 'Off' }}
    </button>
  </div>
</template>

<style scoped>
  .dark-mode-toggle {
    bottom: 0.5rem;
    right: 0.5rem;
  }

  .radius-demo {
    width: 50px;
    height: 50px;
  }
</style>

<style>
  .site-icon-demo {
    width: 36px;
    height: 36px;
  }

  .site-carousel-card-demo {
    width: 150px;
  }
</style>
