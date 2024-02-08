<script lang="ts" setup>
  import { ref } from 'vue';

  import BasicCarousel from '@/components/BasicCarousel.vue';
  import FullscreenMediaGallery from '@/components/FullscreenMediaGallery.vue';
  import ListingMediaSlide from '@/components/ListingMediaSlide.vue';
  import ListingMediaTool from '@/components/ListingMediaTool.vue';
  import { getListingMediaSlides, getSlideIndex } from '@/utilities/media';
  import { storeToRefs } from 'pinia';
  import { useVehicleDetailStore } from '@/stores/VehicleDetailStore';

  const vehicleDetailStore = useVehicleDetailStore();
  const { vehicle } = storeToRefs(vehicleDetailStore);

  const currentSlide = ref(0);
  const galleryInitialSlide = ref<number | null>(null);
  const galleryIsOpen = ref(false);

  const slides = ref(getListingMediaSlides(vehicle.value));
  const showMediaTools = slides.value.length > 4;
  const mediaToolSlides = slides.value.slice(1, 5);

  const openGallery = (initialSlideIndex?: number) => {
    if (initialSlideIndex) galleryInitialSlide.value = initialSlideIndex;
    galleryIsOpen.value = true;
  };

  const handleSlideClick = (slideIndexInitial: number) => {
    openGallery(slideIndexInitial);
  };

  const handleMediaToolClick = (slideIndexInitial: number) => {
    openGallery(slideIndexInitial);
  };

  const handleSlideChange = (slideIndexInitial: number) => {
    currentSlide.value = slideIndexInitial;
  };

  const closeGallery = () => {
    galleryInitialSlide.value = null;
    galleryIsOpen.value = false;
  };
</script>

<template>
  <div :class="['listing-media-slider', showMediaTools && 'has-media-tools', 'tide-position-relative']">
    <div class="tide-position-relative">
      <BasicCarousel
        :is-touchscreen="false"
        @slide-change="handleSlideChange"
        class="media-slider-carousel border-overlay tide-radius-1/2 tide-xy-hidden"
      >
        <ListingMediaSlide
          :key="index"
          :slide="slide"
          :slide-index="index"
          :vehicle="vehicle"
          @click="handleSlideClick"
          v-for="(slide, index) in slides"
        />
      </BasicCarousel>
      <div
        :style="{
          backgroundColor: 'rgba(26, 48, 53, 0.9)',
          backdropFilter: 'blur(2px)',
        }"
        class="slide-count tide-position-absolute tide-right-0 tide-bottom-0 tide-margin-1/2 tide-radius-1/2 tide-padding-y-1/2 tide-padding-x-1 tide-font-12 tide-font-white tide-font-600"
      >
        {{ currentSlide + 1 }}/{{ slides.length }}
      </div>
    </div>
    <div
      class="media-tools tide-display-flex tide-gap-1/2 tide-margin-top-1/2"
      v-if="showMediaTools"
    >
      <ListingMediaTool
        :is-last-tool="getSlideIndex(slide, slides) === 4"
        :key="`lmt-${index}`"
        :show-all="getSlideIndex(slide, slides) === 4 && slides.length > 5"
        :slide="slide"
        :slide-count="slides.length"
        :slide-index="getSlideIndex(slide, slides)"
        @click="handleMediaToolClick"
        v-for="(slide, index) in mediaToolSlides"
      />
    </div>
    <FullscreenMediaGallery
      :initial-slide="galleryInitialSlide"
      :slides="slides"
      :vehicle="vehicle"
      @close="closeGallery"
      v-if="galleryIsOpen"
    />
  </div>
</template>

<style lang="scss" scoped>
  .listing-media-slider {
    .site-carousel {
      @media (max-width: 992px) {
        border-radius: 0;
      }
    }

    &.has-media-tools {
      @media (min-width: 992px) {
        :deep(.media-slider-carousel) {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
      }
    }
  }

  .media-tools {
    @media (max-width: 991px) {
      display: none;
    }

    :deep(.listing-media-tool:first-of-type) {
      border-bottom-left-radius: 8px;
    }

    :deep(.listing-media-tool:nth-of-type(4)) {
      border-bottom-right-radius: 8px;
      &.show-all::after {
        content: 'Show all ' attr(data-photo-count) ' photos';
        display: grid;
        place-items: center;
        tide-font-weight: 700;
        color: #fff;
        padding: 1rem;
        tide-font-size: 14px;
        background-color: rgba(26, 48, 53, 0.75);
        backdrop-filter: blur(2px);
        transition: background-color 75ms ease-out;
      }

      &:hover::after {
        text-decoration: underline;
      }
    }
  }
</style>
