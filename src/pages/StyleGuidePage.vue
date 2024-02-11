<script lang="ts" setup>
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';

  import type { BreadCrumb } from '@/types/BreadCrumb';

  import BasicAccordionItem from '@/components/BasicAccordionItem.vue';
  import BasicBreadCrumbs from '@/components/BasicBreadCrumbs.vue';
  import BasicButton from '@/components/BasicButton.vue';
  import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
  import BasicCard from '@/components/BasicCard.vue';
  import BasicCarousel from '@/components/BasicCarousel.vue';
  import BasicChipAction from '@/components/BasicChipAction.vue';
  import BasicChipFilter from '@/components/BasicChipFilter.vue';
  import BasicChipInput from '@/components/BasicChipInput.vue';
  import BasicIcon from '@/components/BasicIcon.vue';
  import BasicLink from '@/components/BasicLink.vue';
  import BasicModal from '@/components/BasicModal.vue';
  import BasicTabs from '@/components/BasicTabs.vue';
  import BasicToggle from '@/components/BasicToggle.vue';
  import CardCarouselListingFeatured from '@/components/CardCarouselListingFeatured.vue';
  import CardCarouselListingDealer from '@/components/CardCarouselListingDealer.vue';
  import CardListing from '@/components/CardListing.vue';
  import CardListingFeatured from '@/components/CardListingFeatured.vue';
  import CardListingPremiumSelect from '@/components/CardListingPremiumSelect.vue';
  import { ELEMENT } from '@/types/Element';
  import { ICON } from '@/types/Icon';
  import { PRIORITY } from '@/types/Priority';
  import { useFavoriteStore } from '@/stores/FavoriteStore';
  import { useUserAgentStore } from '@/stores/UserAgentStore';
  import { useViewportStore } from '@/stores/ViewportStore';

  // Permanent reference to dummy data for demonstration purposes.
  import { dummyVehicles } from '@/data/dummy-vehicles';

  type Swatch = {
    background: string;
    border?: string;
    foreground: string;
  };

  type SwatchSet = {
    name: string;
    swatches: Swatch[];
  };

  const favoriteStore = useFavoriteStore();
  const userAgentStore = useUserAgentStore();
  const viewportStore = useViewportStore();

  const { isExtraSmall, isSmall, isMedium, isLarge } = storeToRefs(viewportStore);
  const { isTouchscreen } = storeToRefs(userAgentStore);

  const isActiveChip = ref(true);
  const isToggleActive = ref(false);
  const modalIsOpen = ref(false);
  const tabs = [
    {
      callback: () => {},
      label: 'Tab 1',
    },
    {
      callback: () => {},
      label: 'Tab 2',
    },
    {
      callback: () => {},
      label: 'Tab 3',
    },
  ];

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

  const increments: string[] = ['1/4', '1/2', '1', '2', '4'];
  const sides: string[] = ['', '-y', '-x', '-top', '-right', '-bottom', '-left'];

  const swatchSets: SwatchSet[] = [
    {
      name: 'Realm Primary',
      swatches: [
        {
          background: 'tide-bg-primary',
          border: 'tide-border-primary',
          foreground: 'tide-font-primary',
        },
      ],
    },
    {
      name: 'Realm Surface',
      swatches: [
        {
          background: 'tide-bg-surface-high',
          border: 'tide-border-surface-high',
          foreground: 'tide-font-surface-high',
        },
        {
          background: 'tide-bg-surface',
          border: 'tide-border-surface',
          foreground: 'tide-font-surface',
        },
        {
          background: 'tide-bg-surface-low',
          border: 'tide-border-surface-low',
          foreground: 'tide-font-surface-low',
        },
      ],
    },
    {
      name: 'Realm Surface Variant',
      swatches: [
        {
          background: 'tide-bg-surface-variant-highest',
          foreground: 'tide-font-surface-variant-high',
        },
        {
          background: 'tide-bg-surface-variant-high',
          foreground: 'tide-font-surface-variant-high',
        },
        {
          background: 'tide-bg-surface-variant',
          foreground: 'tide-font-surface-variant-high',
        },
        {
          background: 'tide-bg-surface-variant-low',
          foreground: 'tide-font-surface-variant-high',
        },
        {
          background: 'tide-bg-surface-variant-lowest',
          foreground: 'tide-font-surface-variant-high',
        },
      ],
    },
  ];

  const swatchSetsGlobalBackground: SwatchSet[] = [
    {
      name: 'Global',
      swatches: [
        {
          background: 'tide-bg-black',
          foreground: 'tide-font-white',
        },
        {
          background: 'tide-bg-gray-dark',
          foreground: 'tide-font-white',
        },
        {
          background: 'tide-bg-gray',
          foreground: 'tide-font-black',
        },
        {
          background: 'tide-bg-gray-light',
          foreground: 'tide-font-black',
        },
        {
          background: 'tide-bg-white',
          foreground: 'tide-font-black',
        },
      ],
    },
  ];

  const swatchSetsGlobalBorder: SwatchSet[] = [
    {
      name: 'Global',
      swatches: [
        {
          background: 'tide-bg-black',
          border: 'tide-border-black',
          foreground: 'tide-font-black',
        },
        {
          background: 'tide-bg-gray-dark',
          border: 'tide-border-gray-dark',
          foreground: 'tide-font-white',
        },
        {
          background: 'tide-bg-gray',
          border: 'tide-border-gray',
          foreground: 'tide-font-black',
        },
        {
          background: 'tide-bg-gray-light',
          border: 'tide-border-gray-light',
          foreground: 'tide-font-black',
        },
        {
          background: 'tide-bg-white',
          border: 'tide-border-white',
          foreground: 'tide-font-black',
        },
      ],
    },
  ];

  const swatchSetsGlobalForeground: SwatchSet[] = [
    {
      name: 'Global',
      swatches: [
        {
          background: 'tide-bg-gray-light',
          foreground: 'tide-font-black',
        },
        {
          background: 'tide-bg-gray-light',
          foreground: 'tide-font-gray-dark',
        },
        {
          background: 'tide-bg-gray-dark',
          foreground: 'tide-font-gray',
        },
        {
          background: 'tide-bg-gray-dark',
          foreground: 'tide-font-gray-light',
        },
        {
          background: 'tide-bg-gray-dark',
          foreground: 'tide-font-white',
        },
      ],
    },
  ];

  const swatchSetsBackground = [...swatchSetsGlobalBackground, ...swatchSets];
  const swatchSetsBorder = [...swatchSetsGlobalBorder, ...swatchSets.slice(0, 3)];
  const swatchSetsForeground = [...swatchSetsGlobalForeground, ...swatchSets];

  const closeModal = () => {
    modalIsOpen.value = false;
  };

  const handleButtonClick = () => {
    alert('Button clicked.');
  };

  const handleChipClickFilter = () => {
    isActiveChip.value = !isActiveChip.value;
  };

  const handleChipClickInput = (event: Event) => {
    const target = event.currentTarget as Element;

    target.classList.add('tide-display-hidden');

    setTimeout(() => {
      target.classList.remove('tide-display-hidden');
    }, 1000);
  };

  const openModal = () => {
    modalIsOpen.value = true;
  };

  const toggleIsToggleActive = () => {
    isToggleActive.value = !isToggleActive.value;
  };
</script>

<template>
  <div class="style-guide-page tide-fluid tide-padding-y-2 tide-border-surface tide-font-surface">
    <header class="tide-margin-x-2/tide-margin-bottom-1 tide-padding-x-2">
      <h1 class="tide-font-32">Style Guide</h1>
    </header>

    <section
      :class="[
        'tide-margin-bottom-1/2 tide-padding-y-1/2 tide-padding-x-2',
        isExtraSmall && 'tide-bg-blue-dark tide-font-white',
        isSmall && 'tide-bg-blue tide-font-gray-dark',
        isMedium && 'tide-bg-blue-light tide-font-gray-dark',
        isLarge && 'tide-bg-white tide-font-gray-dark',
      ]"
    >
      <h2 class="tide-margin-bottom-1">Breakpoints</h2>

      <div class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-left-1">
        <div
          :class="isLarge ? '' : 'tide-border-1 tide-border-white'"
          class="tide-display-flex tide-flex-column tide-gap-1/4 tide-radius-1/2 tide-padding-1 tide-bg-blue-dark tide-font-white"
        >
          <span>Extra Small</span>
          <span>0-767px</span>
        </div>

        <div
          :class="isLarge ? '' : 'tide-border-1 tide-border-white'"
          class="tide-display-flex tide-flex-column tide-gap-1/4 tide-radius-1/2 tide-padding-1 tide-bg-blue tide-font-black"
        >
          <span>Small</span>
          <span>768-991px</span>
        </div>

        <div
          :class="isLarge ? '' : 'tide-border-1 tide-border-white'"
          class="tide-display-flex tide-flex-column tide-gap-1/4 tide-radius-1/2 tide-padding-1 tide-bg-blue-light tide-font-black"
        >
          <span>Medium</span>
          <span>992-1231px</span>
        </div>

        <div
          :class="isLarge ? 'tide-border-gray-light' : 'tide-border-white'"
          class="tide-display-flex tide-flex-column tide-gap-1/4 tide-border-1 tide-radius-1/2 tide-padding-1 tide-bg-white tide-font-black"
        >
          <span>Large</span>
          <span>1232+px</span>
        </div>
      </div>
    </section>

    <section class="tide-margin-x-2 tide-margin-bottom-2">
      <h2 class="tide-margin-bottom-1">Foundation</h2>

      <section class="tide-margin-bottom-1">
        <h3 class="tide-margin-bottom-1">Background Color</h3>

        <section
          :key="swatchSet.name"
          class="tide-margin-bottom-1"
          v-for="swatchSet in swatchSetsBackground"
        >
          <h4 class="tide-margin-bottom-1">{{ swatchSet.name }}</h4>

          <ul class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-left-1 tide-list-none">
            <li
              :class="[swatch.background, swatch.foreground]"
              :key="swatch.background"
              class="swatch tide-display-flex tide-flex-column tide-gap-1/4 tide-radius-1/2 tide-padding-1"
              v-for="swatch in swatchSet.swatches"
            >
              <span>.{{ swatch.background }}</span>
            </li>
          </ul>
        </section>
      </section>

      <section class="tide-margin-bottom-1">
        <h3 class="tide-margin-bottom-1">Typography</h3>

        <section class="tide-margin-bottom-1">
          <h4 class="tide-margin-bottom-1">Font Color</h4>

          <section
            :key="swatchSet.name"
            class="tide-margin-bottom-1"
            v-for="swatchSet in swatchSetsForeground"
          >
            <h5 class="tide-margin-bottom-1">{{ swatchSet.name }}</h5>

            <ul class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-left-1 tide-list-none">
              <li
                :class="[swatch.background, swatch.foreground]"
                :key="swatch.foreground"
                class="swatch tide-display-flex tide-flex-column tide-gap-1/4 tide-radius-1/2 tide-padding-1"
                v-for="swatch in swatchSet.swatches"
              >
                <span>.{{ swatch.foreground }}</span>
              </li>
            </ul>
          </section>
        </section>

        <section class="tide-margin-bottom-1">
          <h4 class="tide-margin-bottom-1">Font Family</h4>

          <div class="tide-margin-left-1">
            <p class="tide-font-default">.tide-font-default</p>
            <p class="tide-font-title">.tide-font-title</p>
          </div>
        </section>

        <section class="tide-margin-bottom-1">
          <h4 class="tide-margin-bottom-1">Font Size</h4>

          <div class="tide-margin-left-1 tide-display-flex tide-flex-column">
            <span class="tide-font-32">.tide-font-32</span>
            <span class="tide-font-24">.tide-font-24</span>
            <span class="tide-font-20">.tide-font-20</span>
            <span class="tide-font-16">.tide-font-16</span>
            <span class="tide-font-14">.tide-font-14</span>
            <span class="tide-font-12">.tide-font-12</span>
          </div>
        </section>

        <section>
          <h4 class="tide-margin-bottom-1">Font Weight</h4>

          <div class="tide-margin-left-1">
            <p class="tide-font-500">.tide-font-500</p>
            <p class="tide-font-600">.tide-font-600</p>
            <p class="tide-font-700">.tide-font-700</p>
          </div>
        </section>
      </section>

      <section class="tide-margin-bottom-1">
        <h3 class="tide-margin-bottom-1">Spacing</h3>

        <section class="tide-margin-bottom-1">
          <h4 class="tide-margin-bottom-1">Margin</h4>

          <div
            :class="index < increments.length - 1 ? 'tide-margin-bottom-1' : ''"
            :key="increment"
            class="tide-display-flex tide-flex-wrap tide-axis2-center tide-gap-1 tide-margin-left-1"
            v-for="(increment, index) in increments"
          >
            <div
              :key="side"
              class="tide-bg-blue-light"
              v-for="side in sides"
            >
              <div
                :class="[`tide-margin${side}-${increment}`, 'tide-bg-white']"
                class="tide-border-1 tide-border-blue-dark tide-padding-1 tide-bg-white tide-font-gray-dark"
              >
                .{{ `tide-margin${side}-${increment}` }}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h4 class="tide-margin-bottom-1">Padding</h4>

          <div
            :class="index < increments.length - 1 ? 'tide-margin-bottom-1' : ''"
            :key="increment"
            class="tide-display-flex tide-flex-wrap tide-axis2-center tide-gap-1 tide-margin-left-1"
            v-for="(increment, index) in increments"
          >
            <div
              :key="side"
              v-for="side in sides"
            >
              <div
                :class="`tide-padding${side}-${increment}`"
                class="tide-border-1 tide-border-blue-dark tide-bg-blue-light"
              >
                <div class="tide-padding-1/4 tide-bg-white tide-font-gray-dark">
                  .{{ `tide-padding${side}-${increment}` }}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section class="tide-margin-bottom-1">
        <h3 class="tide-margin-bottom-1">Border</h3>

        <section class="tide-margin-bottom-1">
          <h4 class="tide-margin-bottom-1">Color</h4>

          <section
            :key="swatchSet.name"
            class="tide-margin-bottom-1"
            v-for="swatchSet in swatchSetsBorder"
          >
            <h5 class="tide-margin-bottom-1">{{ swatchSet.name }}</h5>

            <div class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-left-1">
              <div
                :class="swatch.border"
                :key="swatch.border"
                class="tide-display-flex tide-flex-column tide-gap-1/4 tide-border-2 tide-radius-1/2 tide-padding-1"
                v-for="swatch in swatchSet.swatches"
              >
                <span>.{{ swatch.border }}</span>
              </div>
            </div>
          </section>
        </section>

        <section class="tide-margin-bottom-1">
          <h4 class="tide-margin-bottom-1">Radius</h4>

          <div class="tide-display-flex tide-flex-wrap tide-axis2-start tide-gap-1 tide-margin-left-1">
            <div class="tide-display-flex tide-axis2-center tide-flex-column">
              <span class="tide-margin-bottom-1/2">.tide-radius-1/4</span>
              <div class="tide-radius-demo tide-border-1 tide-radius-1/4" />
            </div>

            <div class="tide-display-flex tide-axis2-center tide-flex-column">
              <span class="tide-margin-bottom-1/2">.tide-radius-1/2</span>
              <div class="tide-radius-demo tide-border-1 tide-radius-1/2" />
            </div>

            <div class="tide-display-flex tide-axis2-center tide-flex-column">
              <span class="tide-margin-bottom-1/2">.tide-radius-full</span>
              <div class="tide-radius-demo tide-border-1 tide-radius-full" />
            </div>
          </div>
        </section>

        <section class="tide-margin-bottom-1">
          <h4 class="tide-margin-bottom-1">Side</h4>

          <div class="tide-display-flex tide-flex-wrap tide-axis2-start tide-gap-1 tide-margin-left-1 tide-font-black">
            <div class="tide-border-1 tide-border-blue-dark tide-padding-1 tide-bg-blue-light">.tide-border-1</div>

            <div class="tide-border-top tide-border-blue-dark tide-padding-1 tide-bg-blue-light">.tide-border-top</div>

            <div class="tide-border-r tide-border-blue-dark tide-padding-1 tide-bg-blue-light">.tide-border-r</div>

            <div class="tide-border-bottom tide-border-blue-dark tide-padding-1 tide-bg-blue-light">
              .tide-border-bottom
            </div>

            <div class="tide-border-left tide-border-blue-dark tide-padding-1 tide-bg-blue-light">
              .tide-border-left
            </div>
          </div>
        </section>

        <section class="tide-margin-bottom-1">
          <h4 class="tide-margin-bottom-1">Width</h4>

          <div class="tide-display-flex tide-flex-wrap tide-axis2-start tide-gap-1 tide-margin-left-1">
            <div class="tide-border-1 tide-radius-1/2 tide-padding-1">.tide-border-1</div>
            <div class="tide-border-2 tide-radius-1/2 tide-padding-1">.tide-border-2</div>
          </div>
        </section>
      </section>
    </section>

    <section>
      <h2 class="tide-margin-x-2 tide-margin-bottom-1">Components</h2>

      <section class="tide-margin-x-2 tide-margin-bottom-1">
        <h3 class="tide-margin-bottom-1">Accordion</h3>

        <div class="tide-margin-left-1 tide-border-top tide-border-gray">
          <BasicAccordionItem
            :key="index"
            :label="`Accordion Item ${index} Label`"
            class="tide-border-bottom tide-border-gray"
            class-label="tide-padding-y-1"
            v-for="index in [1, 2, 3]"
          >
            <div class="tide-margin-left-1 tide-margin-bottom-1">
              <p class="tide-margin-bottom-1">Accordion Item {{ index }} Body Content</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta nec arcu vel aliquam. Quisque a sem
                accumsan, mattis nunc at, rhoncus urna. Vivamus rutrum lorem quis risus dictum dapibus. Donec id rutrum
                sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam in
                leo ex. Phasellus porttitor ac turpis at bibendum. Cras faucibus rutrum dictum. Integer pellentesque
                mollis dictum.
              </p>

              <p
                class="tide-padding-top-1"
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
                class="tide-padding-top-1"
                v-if="index >= 3"
              >
                Curabitur leo nulla, ultrices vitae elementum a, interdum sed quam. Pellentesque accumsan, arcu eu
                eleifend placerat, metus odio dignissim arcu, et cursus eros dolor vitae tortor. Vestibulum interdum
                nulla eget metus aliquet laoreet. Nunc suscipit tellus tortor, eget gravida lacus tincidunt in. Maecenas
                vitae nisi blandit justo fermentum laoreet vel eget lorem. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Duis in odio eu est bibendum venenatis a ut leo.
              </p>
            </div>
          </BasicAccordionItem>
        </div>
      </section>

      <section class="tide-margin-x-2 tide-margin-bottom-1">
        <h3 class="tide-margin-bottom-1">Breadcrumbs</h3>

        <BasicBreadCrumbs
          :bread-crumbs="breadCrumbs"
          class="tide-margin-left-1"
        />
      </section>

      <section class="tide-margin-x-2 tide-margin-bottom-1">
        <h3 class="tide-margin-bottom-1">Button</h3>

        <div class="tide-margin-bottom-1">
          <h4 class="tide-margin-bottom-1">Basic Button</h4>

          <div class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-bottom-1 tide-margin-left-1">
            <BasicButton
              @click="handleButtonClick"
              label="Primary"
            />

            <BasicButton
              :priority="PRIORITY.SECONDARY"
              @click="handleButtonClick"
              label="Secondary"
            />

            <BasicButton
              :priority="PRIORITY.TERTIARY"
              @click="handleButtonClick"
              label="Tertiary"
            />

            <BasicButton
              :is-floating="true"
              :priority="PRIORITY.QUATERNARY"
              @click="handleButtonClick"
              label="Floating"
            />
          </div>

          <div class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-bottom-1 tide-margin-left-1">
            <BasicButton
              @click="handleButtonClick"
              disabled
              label="Primary"
            />

            <BasicButton
              :priority="PRIORITY.SECONDARY"
              @click="handleButtonClick"
              disabled
              label="Secondary"
            />

            <BasicButton
              :priority="PRIORITY.TERTIARY"
              @click="handleButtonClick"
              disabled
              label="Tertiary"
            />

            <BasicButton
              :is-floating="true"
              :priority="PRIORITY.QUATERNARY"
              @click="handleButtonClick"
              disabled
              label="Floating"
            />
          </div>

          <div class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-left-1">
            <BasicButton
              :icon-leading="ICON.STAR"
              @click="handleButtonClick"
              label="Leading Icon"
            />

            <BasicButton
              :icon-trailing="ICON.IOS_SHARE"
              @click="handleButtonClick"
              label="Trailing Icon"
            />

            <BasicButton label="No Icon" />
          </div>
        </div>

        <div class="tide-margin-bottom-1">
          <h4 class="tide-margin-bottom-1">Basic Button As Link</h4>

          <div class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-left-1">
            <BasicLink
              :element="ELEMENT.BUTTON"
              :icon-leading="ICON.STAR"
              href="#"
              label="Leading Icon"
            />

            <BasicLink
              :element="ELEMENT.BUTTON"
              :icon-trailing="ICON.IOS_SHARE"
              href="#"
              label="Trailing Icon"
            />

            <BasicLink
              :element="ELEMENT.BUTTON"
              href="#"
              label="No Icon"
            />
          </div>
        </div>

        <div class="tide-margin-bottom-1">
          <h4 class="tide-margin-bottom-1">Basic Button Icon</h4>

          <div class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-bottom-1 tide-margin-left-1">
            <BasicButtonIcon
              :icon="icon"
              :key="icon"
              :title="icon"
              @click="handleButtonClick"
              v-for="icon in ICON"
            />
          </div>

          <div class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-bottom-1 tide-margin-left-1">
            <BasicButtonIcon
              :icon="icon"
              :key="icon"
              :priority="PRIORITY.SECONDARY"
              :title="icon"
              @click="handleButtonClick"
              v-for="icon in ICON"
            />
          </div>

          <div class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-bottom-1 tide-margin-left-1">
            <BasicButtonIcon
              :icon="icon"
              :key="icon"
              :priority="PRIORITY.TERTIARY"
              :title="icon"
              @click="handleButtonClick"
              v-for="icon in ICON"
            />
          </div>

          <div class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-bottom-1 tide-margin-left-1">
            <BasicButtonIcon
              :icon="icon"
              :is-floating="true"
              :key="icon"
              :priority="PRIORITY.QUATERNARY"
              :title="icon"
              @click="handleButtonClick"
              v-for="icon in ICON"
            />
          </div>
        </div>

        <div class="tide-margin-bottom-1">
          <h4 class="tide-margin-bottom-1">Button Tabs</h4>

          <div class="tide-display-flex tide-margin-left-1">
            <BasicTabs
              :tabs="tabs"
              class="tide-font-gray-dark"
            />
          </div>
        </div>
      </section>

      <section class="tide-margin-x-2 tide-margin-bottom-1">
        <h3 class="tide-margin-bottom-1">Card</h3>

        <div class="tide-margin-bottom-1">
          <h4 class="tide-margin-bottom-1">Basic Card</h4>

          <ul class="tide-display-flex tide-margin-left-1 tide-list-none">
            <li>
              <BasicCard class="tide-padding-1">Demo</BasicCard>
            </li>
          </ul>
        </div>

        <div class="tide-margin-bottom-1">
          <h4 class="tide-margin-bottom-1">Featured Listing Card</h4>

          <ul class="tide-list-none">
            <CardListingFeatured
              :is-favorite="favoriteStore.getIsFavorite(dummyVehicles[0].adId)"
              :vehicle="dummyVehicles[0]"
              @favorite-click="favoriteStore.toggleIsFavorite(dummyVehicles[0].adId)"
              class="tide-font-gray-dark"
            />
          </ul>
        </div>

        <div class="tide-margin-bottom-1">
          <h4 class="tide-margin-bottom-1">Listing Card</h4>

          <ul class="tide-list-none">
            <CardListing
              :is-favorite="favoriteStore.getIsFavorite(dummyVehicles[0].adId)"
              :vehicle="dummyVehicles[0]"
              @favorite-click="favoriteStore.toggleIsFavorite(dummyVehicles[0].adId)"
              class="tide-font-gray-dark"
            />
          </ul>
        </div>

        <div class="tide-margin-bottom-1">
          <h4 class="tide-margin-bottom-1">Premium Select Listing Card</h4>

          <CardListingPremiumSelect
            :is-favorite="favoriteStore.getIsFavorite(dummyVehicles[0].adId)"
            :vehicle="dummyVehicles[0]"
            @favorite-click="favoriteStore.toggleIsFavorite"
            class="tide-width-container"
          />
        </div>
      </section>

      <section class="tide-margin-bottom-1">
        <h3 class="tide-margin-x-2 tide-margin-bottom-1">Carousel</h3>

        <div class="tide-margin-bottom-1">
          <h4 class="tide-margin-x-2 tide-margin-bottom-1">Basic Carousel</h4>

          <BasicCarousel
            :is-touchscreen="isTouchscreen"
            :offset-x="64"
          >
            <li
              :key="card"
              class="tide-shrink-none tide-padding-y-1"
              v-for="card in cards"
            >
              <BasicCard class="tide-padding-1">Card demo {{ card }}</BasicCard>
            </li>
          </BasicCarousel>
        </div>

        <div>
          <h4 class="tide-margin-x-2 tide-margin-bottom-1">Featured Listing Carousel</h4>

          <CardCarouselListingFeatured
            :get-is-favorite="favoriteStore.getIsFavorite"
            :handle-favorite-click="favoriteStore.toggleIsFavorite"
            :is-touchscreen="isTouchscreen"
            :vehicles="dummyVehicles"
            class="tide-display-flex tide-flex-wrap tide-gap-1 tide-font-gray-dark"
          />
        </div>

        <div>
          <h4 class="tide-margin-x-2 tide-margin-bottom-1">Dealer Listing Carousel</h4>

          <CardCarouselListingDealer
            :vehicles="dummyVehicles"
            class="tide-padding-left-2"
          />
        </div>
      </section>

      <section class="tide-margin-x-2 tide-margin-bottom-1">
        <h3
          class="tide-margin-bottom-1"
          id="chip"
        >
          Chip
        </h3>

        <div class="tide-margin-bottom-1">
          <h4 class="tide-margin-bottom-1">Basic Action Chip</h4>

          <div class="tide-display-flex tide-flex-wrap">
            <BasicChipAction
              href="#chip"
              label="Basic Action Chip"
            />
          </div>
        </div>

        <div class="tide-margin-bottom-1">
          <h4 class="tide-margin-bottom-1">Basic Filter Chip</h4>

          <BasicChipFilter
            :is-active="isActiveChip"
            @click="handleChipClickFilter"
            label="Basic Filter Chip"
          />
        </div>

        <div>
          <h4 class="tide-margin-bottom-1">Basic Input Chip</h4>

          <BasicChipInput
            @click="handleChipClickInput"
            label="Basic Input Chip"
          />
        </div>
      </section>

      <section class="tide-margin-x-2 tide-margin-bottom-1">
        <h3 class="tide-margin-bottom-1">Icon</h3>

        <section class="tide-margin-bottom-1">
          <h4 class="tide-margin-bottom-1">Medium (24px)</h4>
          <div class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-left-1">
            <BasicIcon
              :icon="icon"
              :key="icon"
              :title="icon"
              class="tide-border-1 tide-border-blue-dark tide-bg-blue-light tide-font-gray-dark"
              v-for="icon in ICON"
            />
          </div>
        </section>

        <section class="tide-margin-bottom-1">
          <h4 class="tide-margin-bottom-1">Small (16px)</h4>
          <div class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-left-1">
            <BasicIcon
              :icon="icon"
              :key="icon"
              :title="icon"
              class="tide-border-1 tide-border-blue-dark tide-bg-blue-light tide-font-gray-dark"
              v-for="icon in ICON"
            />
          </div>
        </section>
      </section>

      <section class="tide-margin-x-2 tide-margin-bottom-1">
        <h3 class="tide-margin-bottom-1">Link</h3>

        <div class="tide-margin-bottom-1">
          <h4 class="tide-margin-bottom-1">Basic Link</h4>

          <div class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-left-1">
            <BasicLink
              :icon-leading="ICON.STAR"
              href="/"
              label="Leading Icon"
            />

            <BasicLink
              :icon-trailing="ICON.IOS_SHARE"
              href="/"
              label="Trailing Icon"
            />

            <BasicLink
              href="/"
              label="No Icon"
            />
          </div>
        </div>

        <div class="tide-margin-bottom-1">
          <h4 class="tide-margin-bottom-1">Basic Link as Button</h4>

          <div class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-bottom-1 tide-margin-left-1">
            <BasicButton
              :element="ELEMENT.LINK"
              href="/"
              label="Primary"
            />

            <BasicButton
              :element="ELEMENT.LINK"
              :priority="PRIORITY.SECONDARY"
              href="#"
              label="Secondary"
            />

            <BasicButton
              :element="ELEMENT.LINK"
              :priority="PRIORITY.TERTIARY"
              href="#"
              label="Tertiary"
            />

            <BasicButton
              :element="ELEMENT.LINK"
              :is-floating="true"
              :priority="PRIORITY.QUATERNARY"
              href="#"
              label="Floating"
            />
          </div>

          <div class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-left-1">
            <BasicButton
              :element="ELEMENT.LINK"
              :icon-leading="ICON.STAR"
              href="#"
              label="Leading Icon"
            />

            <BasicButton
              :element="ELEMENT.LINK"
              :icon-trailing="ICON.IOS_SHARE"
              href="#"
              label="Trailing Icon"
            />

            <BasicButton
              :element="ELEMENT.LINK"
              href="#"
              label="No Icon"
            />
          </div>
        </div>

        <div>
          <h4 class="tide-margin-bottom-1">Basic Link As Button Icon</h4>

          <div class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-bottom-1 tide-margin-left-1">
            <BasicButtonIcon
              :icon="icon"
              :key="icon"
              :title="icon"
              @click="handleButtonClick"
              href="#"
              v-for="icon in ICON"
            />
          </div>

          <div class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-bottom-1 tide-margin-left-1">
            <BasicButtonIcon
              :icon="icon"
              :key="icon"
              :priority="PRIORITY.SECONDARY"
              :title="icon"
              @click="handleButtonClick"
              href="#"
              v-for="icon in ICON"
            />
          </div>

          <div class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-bottom-1 tide-margin-left-1">
            <BasicButtonIcon
              :icon="icon"
              :key="icon"
              :priority="PRIORITY.TERTIARY"
              :title="icon"
              @click="handleButtonClick"
              href="#"
              v-for="icon in ICON"
            />
          </div>

          <div class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-bottom-1 tide-margin-left-1">
            <BasicButtonIcon
              :icon="icon"
              :is-floating="true"
              :key="icon"
              :priority="PRIORITY.QUATERNARY"
              :title="icon"
              @click="handleButtonClick"
              href="#"
              v-for="icon in ICON"
            />
          </div>
        </div>
      </section>

      <section class="tide-margin-x-2 tide-margin-bottom-1">
        <h3 class="tide-margin-bottom-1">Modal</h3>

        <BasicButton
          @click="openModal"
          class="tide-margin-left-1"
          label="Open modal"
        />

        <BasicModal
          :is-open="modalIsOpen"
          @close="closeModal"
          title="Modal Title"
          width="32rem"
        >
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae expedita sed in ea, voluptatem dolore
            quia soluta delectus earum repellat voluptatibus dolorum magni voluptatum laboriosam dignissimos tenetur
            porro numquam? Fugiat. Beatae obcaecati voluptate, enim temporibus veritatis illo magni vero alias quod, ab
            corrupti sint assumenda praesentium eius! Explicabo vel consectetur ullam molestiae. Quam ipsa illo, saepe
            doloremque sunt nam fuga! Aspernatur unde tempora esse porro, totam quod, facilis, cupiditate error in ipsam
            eos dignissimos. Autem dignissimos non, tempore placeat ipsa recusandae debitis, expedita animi nostrum,
            mollitia itaque est provident minima. Porro excepturi cupiditate beatae quasi fuga? Repellat, aliquam. Ad
            veniam sequi, repellat quibusdam aperiam quod ex fugit. Placeat fugit asperiores earum sed! Voluptas
            nesciunt voluptatibus est molestiae earum ducimus natus. Numquam quis sunt repellendus nisi ullam omnis
            consequatur doloribus corrupti sapiente, nam odio distinctio ex magnam est vel libero fugiat esse labore
            eligendi aspernatur laudantium ducimus quae quos neque. Quos? Perferendis pariatur distinctio perspiciatis,
            quibusdam reprehenderit, voluptatem enim libero at dolorem quam ab eius. Earum numquam debitis temporibus
            accusamus possimus adipisci ipsum totam tempore repudiandae quaerat? Similique aliquam commodi corrupti! At
            consectetur ea modi eligendi sint necessitatibus suscipit quisquam cupiditate nostrum inventore. Quos
            inventore perspiciatis quaerat ducimus architecto cumque ipsa? Inventore optio eaque aliquam? Reprehenderit
            aperiam dignissimos veniam quisquam soluta. Ducimus harum, cupiditate itaque nisi enim id aliquid pariatur
            ad, ipsum, rem inventore. Veritatis maiores, exercitationem dignissimos esse officia laboriosam modi
            deserunt facilis eaque incidunt laborum fugiat, in inventore quam. Adipisci vel aspernatur saepe autem nobis
            tempore, recusandae repellat, quae tempora, iste incidunt! Provident expedita similique qui ullam aut libero
            distinctio vel nesciunt esse, beatae temporibus iusto nisi cupiditate sequi? Necessitatibus, accusantium
            recusandae! Iure perspiciatis quibusdam porro in facilis, nemo deleniti blanditiis vel voluptas adipisci
            reiciendis pariatur explicabo atque commodi architecto reprehenderit consequatur, sapiente dolorum soluta
            enim dolore. Ducimus, laudantium. Voluptatem itaque aliquid quae repellendus! Harum molestias ea debitis
            saepe et sint accusantium incidunt, ipsa delectus est. Obcaecati voluptatibus ad itaque dicta, neque esse
            quae reprehenderit in velit consequatur. Quasi. Iure magni excepturi eaque, mollitia facilis maiores impedit
            distinctio nostrum tempore unde id non molestias quibusdam voluptatum consequatur numquam facere repellat
            praesentium neque sequi. Eaque recusandae minima in sequi veniam? Voluptates, possimus. Pariatur et dolore
            sequi ullam? Nobis ex recusandae dolor quas deserunt natus dignissimos maxime? Voluptatibus, quibusdam. Sunt
            excepturi explicabo nemo ut dolores doloremque impedit dignissimos eaque dolorem rerum. Sint corrupti facere
            dignissimos. Labore facere id omnis ex? Recusandae, ut corporis numquam fuga ex iste atque nobis alias
            tempore quaerat! Delectus est eligendi saepe esse, blanditiis nam voluptatum! In. Velit enim modi
            consectetur quaerat suscipit accusantium perspiciatis molestiae? Natus esse ex nisi architecto voluptates
            mollitia magnam modi aperiam velit, atque illo, voluptatum sequi non adipisci neque porro expedita eius?
            Natus laborum suscipit veritatis nemo? Reiciendis, nemo inventore facere dolore non excepturi error vel
            illum odio, qui aliquid quasi et fugiat assumenda sit. Tempore assumenda et ea deserunt, eveniet libero?
            Culpa sapiente dolore et blanditiis commodi pariatur quod dignissimos accusamus, repe libero exercitationem
            non accusamus dolorum! Architecto ipsa facere asperiores voluptate possimus maiores assumenda? Voluptate,
            voluptates? Dolorem eveniet laudantium delectus illo ullam cupiditate natus cumque dolorum veritatis maiores
            nesciunt, molestiae architecto obcaecati iure repellat ducimus vero libero et impedit qui vel labore
            explicabo. Blanditiis? Dicta totam molestiae eveniet delectus deleniti, harum nulla nam? Doloremque
            laudantium eos rerum veniam labore aspernatur blanditiis! Aut, possimus quibusdam est facere hic quod eaque
            ratione quasi ipsam voluptates error? Recusandae tenetur nostrum dolorem cum. Voluptatem accusamus
            distinctio, maxime quae voluptatum unde sapiente nihil soluta quis sint eius impedit reprehenderit molestiae
            cupiditate ex! Necessitatibus alias ipsa quod quo, quibusdam fugiat. Consequuntur, eveniet, hic qui suscipit
            voluptas, enim nesciunt impedit unde dignissimos similique illum libero ducimus vel asperiores! Incidunt
            quia voluptate ut inventore temporibus quo, dolor itaque dicta fugit. Voluptate, itaque! At accusantium odit
            dolorum mollitia perferendis cumque? Cumque quibusdam nostrum illo ducimus earum, dolorum repellendus,
            doloremque molestias voluptas at dolores saepe ex soluta ut minima? Quas quos aspernatur nesciunt illo.
            Numquam perspiciatis nostrum ex cumque repellendus, harum fugiat eveniet ut quidem dolores deserunt iure
            repudiandae, velit ipsam odit consequatur officiis sapiente, libero ad nulla accusamus. Magni asperiores
            unde vero optio. Laboriosam possimus alias cumque delectus, eos odit, explicabo quod eveniet asperiores,
            laudantium autem aliquid! Odit incidunt quisquam sit voluptatem veritatis ipsa consectetur nostrum unde,
            sint est molestiae aperiam cum in. Magni aliquid rerum incidunt natus voluptatibus quibusdam reiciendis,
            alias libero tempore unde omnis totam veritatis eaque debitis minus laborum minima. Dolore amet temporibus
            vitae? Possimus obcaecati corporis repellat sit sequi! Dolorum aperiam possimus quasi dolores ullam porro
            nihil modi suscipit explicabo obcaecati. Similique quos provident ipsa totam excepturi veritatis optio ad
            recusandae? Vero, provident labore laudantium quam aspernatur nemo atque!llendus eum doloremque magnam
            delectus aliquid impedit unde recusandae, quis laborum reprehenderit. Voluptate at similique earum quisquam
            explicabo sunt incidunt. Totam modi eos aliquid quidem fugit, officia cumque optio nam, quam eius ipsam
            harum eveniet, corrupti nihil. Laudantium et amet qui dolorem? Placeat quo cupiditate eveniet aspernatur
            minus earum voluptatibus. Sed, ipsum nam. Pariatur magnam voluptatem eum quam ducimus, facilis quia nam
            assumenda cum architecto? Reprehenderit doloribus, autem magnam dicta expedita laudantium ad odit, quo error
            illo inventore maiores laboriosam! Temporibus ab deleniti, quod, magnam iure dicta minima amet voluptates
            distinctio error quos? Similique dolorem ducimus nesciunt? Quisquam sapiente quibusdam, et sint sunt
            dignissimos cumque nostrum doloremque quidem ducimus quod. Vero sint, maiores debitis ad ullam, maxime omnis
            in laudantium aliquam quam nobis quod obcaecati illum nulla autem quas porro ut eos quasi laborum officiis
            cum? Laudantium nisi asperiores tempora! Nam aperiam exercitationem non facilis velit et error
            necessitatibus dicta est eum odit, tempora porro vero qui omnis nesciunt officiis, modi quam, debitis
            cupiditate dolorem! Mollitia nesciunt atque ad eius. Iure ad vel modi reprehenderit exercitationem
            laboriosam laborum incidunt accusamus fugit. Magni esse dolore maxime perspiciatis ab
          </span>
          <template #footer>
            <BasicLink
              :element="ELEMENT.BUTTON"
              @click="closeModal"
              label="Cancel"
            />

            <BasicButton
              class="tide-margin-left-auto"
              label="Confirm"
            />
          </template>
        </BasicModal>
      </section>

      <section class="tide-margin-x-2">
        <h3 class="tide-margin-bottom-1">Toggle</h3>

        <div class="tide-display-flex tide-flex-wrap tide-gap-1 tide-margin-bottom-1 tide-margin-left-1">
          <BasicToggle
            :is-active="isToggleActive"
            @click="toggleIsToggleActive"
          />
        </div>
      </section>
    </section>
  </div>
</template>

<style scoped>
  .tide-radius-demo {
    width: 50px;
    height: 50px;
  }
</style>
