<script lang="ts" setup>
  import { onBeforeMount, onMounted, onUnmounted, ref, watch } from 'vue';

  import type { ListingMedia } from '@/types/ListingMedia';

  import AdPlaceholder from './AdPlaceholder.vue';
  import BasicButton from '@/components/BasicButton.vue';
  import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
  import BasicIcon from '@/components/BasicIcon.vue';
  import BasicModal from '@/components/BasicModal.vue';
  import BasicTextInput from './BasicTextInput.vue';
  import BasicTextarea from './BasicTextarea.vue';
  import EmailSellerForm from '@/components/EmailSellerForm.vue';
  import SmsLeadForm from './SmsLeadForm.vue';
  import YoutubeVideo from './YoutubeVideo.vue';
  import { ICON } from '@/types/Icon';
  import { MEDIA_SLIDE_TYPES } from '@/types/ListingMedia';
  import { PRIORITY } from '@/types/Priority';
  import { formatPhone } from '@/utilities/format';
  import {
    getSellerNameLocation,
    getVehiclePhone,
    getVehiclePhoneHref,
    getVehiclePrice,
    getVehicleTitle,
  } from '@/utilities/vehicle';
  import { useVehicleDetailStore } from '@/stores/VehicleDetailStore';
  import { useViewportStore } from '@/stores/ViewportStore';
  import { storeToRefs } from 'pinia';

  type Emits = (e: 'close') => void;
  type Props = {
    slides: ListingMedia[];
    initialSlide: number | null;
  };

  const emit = defineEmits<Emits>();
  const props = defineProps<Props>();
  const viewportStore = useViewportStore();
  const vehicleDetailStore = useVehicleDetailStore();
  const { vehicle } = storeToRefs(vehicleDetailStore);

  const contactActionsRef = ref<HTMLElement | null>(null);

  const sellerNameLocation = getSellerNameLocation(vehicle.value);
  const listingTitle = getVehicleTitle(vehicle.value);
  const price = getVehiclePrice(vehicle.value);
  const sellerPhoneNumber = getVehiclePhone(vehicle.value);
  const sellerTextNumber = formatPhone(Number(vehicle.value.phone));
  const phoneHref = getVehiclePhoneHref(vehicle.value);

  const currentSlide = ref<number>(0);
  const gallery = ref<HTMLElement | null>(null);
  const navList = ref<HTMLElement | null>(null);
  const observer = ref<IntersectionObserver | null>(null);
  const track = ref<HTMLElement | null>(null);
  const emailModalIsOpen = ref(false);
  const smsModalIsOpen = ref(false);

  const comments = ref(`Is this ${listingTitle} still for sale?`);
  const contactOptionsOffset = ref();

  type BannerSlide = {
    type: 'banner';
    bannerId: string; // some unique identifier for the banner, i guess.
    width: number;
    height: number;
  };

  type FullscreenGallerySlide = ListingMedia | BannerSlide;
  const gallerySlides = ref<FullscreenGallerySlide[]>(props.slides);
  onBeforeMount(() => {
    const newSlides = [...gallerySlides.value];
    newSlides.splice(3, 0, {
      bannerId: 'banner-1',
      height: 250,
      type: 'banner',
      width: 300,
    });
    gallerySlides.value = newSlides;
  });

  const handleEmailClick = () => {
    emailModalIsOpen.value = true;
  };

  const handleEmailModalClose = () => {
    emailModalIsOpen.value = false;
  };

  const handleSmsClick = () => {
    smsModalIsOpen.value = true;
  };

  const handleSmsClose = () => {
    smsModalIsOpen.value = false;
  };

  const getHasOverlay = (type: string) => {
    let hasOverlay = false;

    // Array.prototype.includes() won't work in TS when the argument type is broader than the invoking array.
    [MEDIA_SLIDE_TYPES.VR, MEDIA_SLIDE_TYPES.VIDEO].forEach((typeNext) => {
      if (type === typeNext) {
        hasOverlay = true;
      }
    });

    return hasOverlay;
  };

  const handleClose = () => {
    emit('close');
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        scrollToSlide(currentSlide.value - 1);
        break;
      case 'ArrowRight':
        e.preventDefault();
        scrollToSlide(currentSlide.value + 1);
        break;
      case 'ArrowUp':
      case 'ArrowDown':
        // prevent scrolling page
        e.preventDefault();
        break;
      case 'Escape':
        e.stopPropagation();
        handleClose();
        break;
      case 'Home':
        e.preventDefault();
        scrollToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        scrollToSlide(gallerySlides.value.length - 1);
        break;
      case 'Tab':
        break;
    }
  };

  const scrollToSlide = (slideIndex: number, scrollBehavior: ScrollBehavior = 'smooth') => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const slideToScrollTo = track.value?.children[slideIndex] as HTMLElement | undefined;

    if (!slideToScrollTo) {
      return;
    }

    track.value?.scrollTo({
      behavior: prefersReducedMotion ? 'auto' : scrollBehavior,
      left: slideToScrollTo?.offsetLeft,
      top: slideToScrollTo?.offsetTop,
    });
  };

  const scrollThumbIntoView = (slideIndex: number, scrollBehavior: ScrollBehavior = 'smooth') => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const thumbToScrollTo = navList.value?.children[slideIndex] as HTMLElement | undefined;

    if (!thumbToScrollTo) {
      return;
    }

    thumbToScrollTo.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : scrollBehavior,
      block: 'center',
      inline: 'center',
    });
  };

  const handlePrevClick = () => {
    scrollToSlide(currentSlide.value - 1);
  };

  const handleNextClick = () => {
    scrollToSlide(currentSlide.value + 1);
  };

  const handleThumbClick = (slideIndex: number) => {
    scrollToSlide(slideIndex);
  };

  const addOpenEventListeners = () => {
    document.addEventListener('keydown', handleKeyDown);
  };

  const removeOpenEventListeners = () => {
    document.removeEventListener('keydown', handleKeyDown);
  };

  // observe slide intersections with the track to keep track of the current slide
  const observeSlides = () => {
    const options = {
      root: track.value,
      rootMargin: '0px',
      threshold: 0.5,
    };

    observer.value = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const slideIndex = Array.from(track.value?.children ?? []).indexOf(entry.target);

          if (slideIndex !== -1) {
            currentSlide.value = slideIndex;
            scrollThumbIntoView(slideIndex);
          }
        }
      });
    }, options);
    Array.from(track.value?.children ?? []).forEach((child) => {
      if (observer.value) observer.value.observe(child);
    });
  };

  watch(
    () => contactActionsRef?.value,
    () => {
      contactOptionsOffset.value = `calc(${contactActionsRef?.value?.offsetHeight || 0}px + 2rem)`;
    }
  );

  watch(
    () => currentSlide.value,
    (value) => {
      scrollThumbIntoView(value);
    }
  );

  onMounted(() => {
    observeSlides();
    addOpenEventListeners();
    requestAnimationFrame(() => {
      scrollToSlide(props.initialSlide ?? 0, 'auto');
      scrollThumbIntoView(props.initialSlide ?? 0, 'auto');
    });
  });

  onUnmounted(() => {
    removeOpenEventListeners();
  });
</script>

<template>
  <Teleport to="body">
    <div
      ref="gallery"
      class="fullscreen-media-gallery tide-position-fixed tide-top-0 tide-left-0 tide-width-full h-full tide-display-flex tide-flex-column"
    >
      <header
        :class="
          viewportStore.isLarge ? 'tide-padding-top-4 tide-padding-x-2 tide-padding-bottom-2' : 'tide-position-absolute'
        "
        class="header tide-right-0 tide-display-flex tide-axis2-center tide-gap-1 tide-grow-none tide-margin-top-1 tide-margin-right-1 tide-font-white"
      >
        <div
          :class="viewportStore.isLarge ? '' : 'tide-display-hidden'"
          class="title"
        >
          <div class="tide-display-flex tide-axis2-center tide-font-600">
            <div class="tide-border-r tide-border-white tide-padding-right-1">
              <div class="tide-display-flex tide-axis2-center tide-gap-1/2">
                <BasicIcon :icon="ICON.CHECK" />

                <div>{{ sellerNameLocation }}</div>
              </div>

              <div class="tide-margin-top-1/4 tide-font-700 tide-font-20">{{ listingTitle }}</div>
            </div>

            <div class="tide-padding-left-1 tide-font-20 tide-font-700">{{ price }}</div>
          </div>
        </div>

        <div class="tide-margin-left-auto">
          <BasicButtonIcon
            :icon="ICON.CLOSE"
            :is-floating="true"
            :priority="PRIORITY.QUATERNARY"
            @click="handleClose"
          />
        </div>
      </header>
      <main
        :class="[
          viewportStore.isLarge && 'tide-gap-4 tide-padding-bottom-4 tide-padding-x-2',
          viewportStore.isLandscape && !viewportStore.isLarge && 'h-full',
        ]"
        class="main tide-display-flex tide-flex-grow shrink h-0"
      >
        <div
          :class="viewportStore.isLandscape && !viewportStore.isLarge ? 'row-reverse h-full' : ''"
          class="stage-and-nav-list tide-flex-grow shrink tide-display-flex tide-flex-column"
        >
          <div
            :class="viewportStore.isLandscape && !viewportStore.isLarge ? 'h-full' : 'h-0'"
            class="stage tide-display-flex tide-flex-grow shrink tide-axis2-center tide-gap-2"
          >
            <BasicButtonIcon
              :class="viewportStore.isLarge ? '' : 'tide-display-hidden'"
              :disabled="currentSlide === 0"
              :icon="ICON.CHEVRON_LEFT"
              :is-floating="true"
              :priority="PRIORITY.QUATERNARY"
              @click="handlePrevClick"
            />

            <div
              :class="[
                !viewportStore.isLandscape && !viewportStore.isLarge ? 'tide-gap-1/2' : 'tide-gap-1 tide-scroll-snap',
                viewportStore.isLarge ? 'tide-flex-row' : 'tide-flex-column',
              ]"
              ref="track"
              :style="{
                paddingBottom: !viewportStore.isLandscape && !viewportStore.isLarge && contactOptionsOffset,
              }"
              class="track tide-display-flex tide-width-full h-full scrollbar-none tide-xy-auto"
              tabindex="-1"
            >
              <template
                :key="slide.imageUrl"
                v-for="(slide, index) in gallerySlides"
              >
                <YoutubeVideo
                  :class="viewportStore.isLandscape && !viewportStore.isLarge ? 'h-full tide-padding-y-1' : ''"
                  :src="slide.videoUrl"
                  class="youtube slide tide-grow-none tide-shrink-none tide-width-full ratio-16/9 tide-object-scale-down tide-scroll-snap-start"
                  tab-index="0"
                  v-if="slide.type === MEDIA_SLIDE_TYPES.VIDEO"
                />
                <iframe
                  :class="viewportStore.isLandscape && !viewportStore.isLarge ? 'h-full tide-padding-y-1' : ''"
                  :src="slide.vrUrl"
                  class="youtube slide tide-grow-none tide-shrink-none tide-width-full ratio-16/9 tide-object-scale-down tide-scroll-snap-start"
                  tabIndex="0"
                  v-else-if="slide.type === MEDIA_SLIDE_TYPES.VR"
                />
                <div
                  :class="viewportStore.isLandscape && !viewportStore.isLarge ? 'h-full tide-padding-y-1' : ''"
                  class="tide-display-flex tide-axis1-center tide-axis2-center tide-grow-none tide-shrink-none tide-width-full h-full tide-object-scale-down tide-scroll-snap-start"
                  tabIndex="0"
                  v-else-if="slide.type === 'banner'"
                >
                  <AdPlaceholder
                    :height="`${slide.height}`"
                    :width="`${slide.width}`"
                  />
                </div>
                <img
                  :class="viewportStore.isLandscape && !viewportStore.isLarge ? 'h-full tide-padding-y-1' : ''"
                  :loading="index !== 0 ? 'lazy' : undefined"
                  :src="slide.imageUrl"
                  class="image slide tide-grow-none tide-shrink-none tide-width-full tide-object-scale-down tide-scroll-snap-start"
                  tabIndex="0"
                  v-else
                />
              </template>
            </div>

            <BasicButtonIcon
              :class="viewportStore.isLarge ? '' : 'tide-display-hidden'"
              :disabled="currentSlide === gallerySlides.length - 1"
              :icon="ICON.CHEVRON_RIGHT"
              :is-floating="true"
              :priority="PRIORITY.QUATERNARY"
              @click="handleNextClick"
            />
          </div>

          <div
            :class="[
              !viewportStore.isLandscape && !viewportStore.isLarge && 'tide-display-hidden',
              viewportStore.isLandscape && !viewportStore.isLarge
                ? 'tide-flex-column tide-padding-y-1 tide-padding-right-2 tide-padding-left-1'
                : 'tide-padding-top-2',
            ]"
            ref="navList"
            class="nav-list tide-display-flex tide-gap-1/2 tide-grow-none tide-shrink-none tide-xy-auto scrollbar-none"
            tabindex="-1"
          >
            <button
              :class="[
                { active: index === currentSlide },
                slide.type,
                index === 0 && 'tide-margin-left-auto',
                index === gallerySlides.length - 1 && 'tide-margin-right-auto',
              ]"
              :key="index"
              @click="handleThumbClick(index)"
              class="thumb-item tide-position-relative tide-display-flex tide-axis1-center tide-axis2-center tide-grow-none tide-shrink-none tide-radius-1/2 tide-xy-hidden"
              v-for="(slide, index) in gallerySlides"
            >
              <div
                :class="viewportStore.isLandscape && viewportStore.isExtraSmall ? 'thumb-item-img-small' : ''"
                class="thumb-bnr tide-display-flex tide-axis1-center tide-axis2-center tide-bg-gray-light tide-font-gray"
                v-if="slide.type === 'banner'"
              >
                Ad*
              </div>
              <img
                :class="viewportStore.isLandscape && viewportStore.isExtraSmall ? 'thumb-item-img-small' : ''"
                :src="slide.imageUrl"
                class="tide-object-cover"
                height="90"
                v-else
                width="90"
              />

              <div class="thumb-outline tide-position-absolute tide-top-0 tide-left-0 tide-width-full h-full" />

              <BasicIcon
                :icon="slide.type === MEDIA_SLIDE_TYPES.VR ? ICON.THREE_D_ROTATION : ICON.PLAY"
                class="tide-position-absolute tide-bg-white tide-radius-full tide-padding-1/2"
                v-if="getHasOverlay(slide.type)"
              />
            </button>
          </div>
        </div>

        <div
          :class="!viewportStore.isLandscape && !viewportStore.isLarge ? 'tide-position-absolute tide-width-full' : ''"
          class="contact tide-display-flex tide-flex-column tide-axis1-center tide-axis2-center tide-grow-none"
        >
          <form
            :class="viewportStore.isLarge ? '' : 'tide-display-hidden'"
            class="contact-form tide-display-flex tide-flex-column tide-grow-none tide-shrink-none tide-gap-1/2 h-full tide-padding-y-1 tide-radius-1 tide-font-gray-dark tide-y-auto"
            style="width: 320px; background-color: #f9f5f2"
          >
            <div
              class="tide-display-flex tide-axis2-center tide-gap-1/2 tide-padding-x-1 tide-font-14 tide-font-700"
              v-if="sellerPhoneNumber"
            >
              <BasicButtonIcon
                :icon="ICON.PLAY"
                href="tel:${sellerPhoneNumber}"
              />

              <a :href="`tel:${sellerPhoneNumber}`"> Call {{ sellerPhoneNumber }} </a>
            </div>

            <div
              class="tide-display-flex tide-axis2-center tide-gap-1/2 tide-padding-x-1 tide-font-14 tide-font-700"
              v-if="sellerPhoneNumber"
            >
              <BasicButtonIcon
                :icon="ICON.MESSAGE"
                :priority="PRIORITY.SECONDARY"
                href="tel:${sellerPhoneNumber}"
              />

              <a :href="`sms:${sellerTextNumber}`"> Text {{ sellerPhoneNumber }} </a>
            </div>

            <div class="tide-width-full tide-padding-top-1/4 tide-bg-white" />

            <div class="tide-display-flex tide-flex-column tide-gap-1/2 tide-padding-x-1">
              <div class="tide-font-20 tide-font-700 tide-margin-top-1">Email the seller</div>

              <BasicTextInput
                label="First name"
                name="first"
              />

              <BasicTextInput
                label="Last name"
                name="last"
              />

              <BasicTextInput
                label="Email"
                name="email"
              />

              <BasicTextInput
                label="Phone (recommended)"
                name="phone"
              />

              <BasicTextarea
                :value="comments"
                height="128px"
                label="Message"
                name="message"
              />
              <BasicButton
                label="Send email"
                type="submit"
              />
              <div class="tide-font-12">
                Stay safe. Read more about <a href="#">avoiding scams and protecting your money</a>. By using this site,
                you agree to our <a href="#">Terms of Use</a> & our <a href="#">Privacy Policy</a>.
              </div>
            </div>
          </form>

          <div
            :class="[
              !viewportStore.isLandscape &&
                !viewportStore.isLarge &&
                'tide-position-fixed tide-bottom-0 tide-flex-row tide-margin-bottom-1',
              viewportStore.isLandscape && !viewportStore.isLarge && 'tide-flex-column',
              viewportStore.isLarge && 'tide-display-hidden',
            ]"
            ref="contactActionsRef"
            class="contact-actions tide-display-flex tide-flex-column tide-gap-1/2 tide-margin-x-2 tide-padding-1 tide-font-12 tide-radius-1 tide-bg-white tide-font-gray-dark shadow-b-1"
          >
            <BasicButton
              :class="viewportStore.isLandscape && !viewportStore.isLarge ? 'tide-text-transform-lower' : ''"
              :href="phoneHref"
              :icon-leading="ICON.CALL"
              label="Call"
            />

            <BasicButton
              :class="viewportStore.isLandscape && !viewportStore.isLarge ? 'tide-text-transform-lower' : ''"
              :icon-leading="ICON.MESSAGE"
              @click="handleSmsClick"
              label="Text"
            />

            <BasicModal
              :is-open="smsModalIsOpen"
              @close="handleSmsClose"
              title="Text the seller"
              width="500px"
            >
              <SmsLeadForm />
            </BasicModal>

            <BasicButton
              :class="viewportStore.isLandscape && !viewportStore.isLarge ? 'tide-text-transform-lower' : ''"
              :icon-leading="ICON.MAIL"
              @click="handleEmailClick"
              label="Email"
            />

            <BasicModal
              :is-open="emailModalIsOpen"
              :modal-style="{
                paddingBottom: '2rem',
              }"
              @close="handleEmailModalClose"
              title="Email the seller"
            >
              <EmailSellerForm :vehicle="vehicle" />
            </BasicModal>
          </div>
        </div>
      </main>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
  .fullscreen-media-gallery {
    background: rgba(26, 48, 53, 0.95);
    backdrop-filter: blur(2px);
    animation: openGallery 125ms ease-out forwards;

    .nav-list > .thumb-item.active .thumb-outline {
      border: 3px solid #ffc261;
    }

    .thumb-item {
      transition: transform 50ms ease-out, filter 100ms ease-out;
    }

    .thumb-item .thumb-outline {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: inherit;
    }

    .track {
      overscroll-behavior: contain;
    }

    .thumb-bnr {
      height: 90px;
      width: 90px;
    }

    .thumb-item-img-small {
      width: 50px;
      height: 50px;
    }
  }
</style>
