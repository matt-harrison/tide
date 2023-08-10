<script lang="ts" setup>
  import { onBeforeMount, onMounted, onUnmounted, ref, watch } from 'vue';

  import type { ListingMedia } from '@/types/ListingMedia';

  import AdPlaceholder from './AdPlaceholder.vue';
  import BasicButton from '@/components/BasicButton.vue';
  import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
  import BasicModal from '@/components/BasicModal.vue';
  import BasicTextInput from './BasicTextInput.vue';
  import BasicTextarea from './BasicTextarea.vue';
  import EmailSellerForm from '@/components/EmailSellerForm.vue';
  import SmsLeadForm from './SmsLeadForm.vue';
  import BasicIcon from '@/components/BasicIcon.vue';
  import YoutubeVideo from './YoutubeVideo.vue';
  import { ICON } from '@/types/Icon';
  import { MEDIA_SLIDE_TYPES } from '@/types/ListingMedia';
  import { PRIORITY } from '@/types/Priority';
  import { SIZE_ICON } from '@/types/Size';
  import { TIER } from '@/types/Tier';
  import { SIZE_BUTTON } from '@/types/Size';
  import { formatPhone } from '@/utilities/format';
  import { useViewportStore } from '@/stores/ViewportStore';
  import {
    getSellerNameLocation,
    getVehiclePhone,
    getVehiclePhoneHref,
    getVehiclePrice,
    getVehicleTitle,
  } from '@/utilities/vehicle';
  import { useVehicleDetailStore } from '@/stores/VehicleDetailStore';
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
      class="fullscreen-media-gallery fixed top-0 left-0 w-full h-full flex column"
    >
      <header
        :class="viewportStore.isLarge ? 'pt-4 px-2 pb-2' : 'absolute'"
        class="header right-0 flex axis2-center gap-1 grow-none mt-1 mr-1 font-white"
      >
        <div
          :class="viewportStore.isLarge ? '' : 'hidden'"
          class="title"
        >
          <div class="flex axis2-center font-600">
            <div class="border-r border-white pr-1">
              <div class="flex axis2-center gap-1/2">
                <BasicIcon
                  :icon="ICON.CIRCLE_CHECK"
                  :size="SIZE_ICON.SMALL"
                />

                <div>{{ sellerNameLocation }}</div>
              </div>

              <div class="mt-1/4 font-700 font-20">{{ listingTitle }}</div>
            </div>

            <div class="pl-1 font-20 font-700">{{ price }}</div>
          </div>
        </div>

        <div class="ml-auto">
          <BasicButtonIcon
            :icon="ICON.XMARK"
            :priority="PRIORITY.TERTIARY"
            :size="SIZE_ICON.SMALL"
            @click="handleClose"
            class="shadow-box"
          />
        </div>
      </header>
      <main
        :class="[
          viewportStore.isLarge && 'gap-4 pb-4 px-2',
          viewportStore.isLandscape && !viewportStore.isLarge && 'h-full',
        ]"
        class="main flex grow shrink h-0"
      >
        <div
          :class="viewportStore.isLandscape && !viewportStore.isLarge ? 'row-reverse h-full' : ''"
          class="stage-and-nav-list grow shrink flex column"
        >
          <div
            :class="viewportStore.isLandscape && !viewportStore.isLarge ? 'h-full' : 'h-0'"
            class="stage flex grow shrink axis2-center gap-2"
          >
            <BasicButtonIcon
              :class="viewportStore.isLarge ? '' : 'hidden'"
              :disabled="currentSlide === 0"
              :icon="ICON.CHEVRON_LEFT"
              :priority="PRIORITY.TERTIARY"
              :size="SIZE_ICON.SMALL"
              @click="handlePrevClick"
              class="shadow-box"
            />

            <div
              :class="[
                !viewportStore.isLandscape && !viewportStore.isLarge ? 'gap-1/2' : 'gap-1 snap',
                viewportStore.isLarge ? 'row' : 'column',
              ]"
              ref="track"
              :style="{
                paddingBottom: !viewportStore.isLandscape && !viewportStore.isLarge && contactOptionsOffset,
              }"
              class="track flex w-full h-full scrollbar-none xy-auto"
              tabindex="-1"
            >
              <template
                :key="slide.imageUrl"
                v-for="(slide, index) in gallerySlides"
              >
                <YoutubeVideo
                  :class="viewportStore.isLandscape && !viewportStore.isLarge ? 'h-full py-1' : ''"
                  :src="slide.videoUrl"
                  class="youtube slide grow-none shrink-none w-full ratio-16/9 object-scale-down snap-start"
                  tab-index="0"
                  v-if="slide.type === MEDIA_SLIDE_TYPES.VIDEO"
                />
                <iframe
                  :class="viewportStore.isLandscape && !viewportStore.isLarge ? 'h-full py-1' : ''"
                  :src="slide.vrUrl"
                  class="youtube slide grow-none shrink-none w-full ratio-16/9 object-scale-down snap-start"
                  tabIndex="0"
                  v-else-if="slide.type === MEDIA_SLIDE_TYPES.VR"
                />
                <div
                  :class="viewportStore.isLandscape && !viewportStore.isLarge ? 'h-full py-1' : ''"
                  class="flex axis1-center axis2-center grow-none shrink-none w-full h-full object-scale-down snap-start"
                  tabIndex="0"
                  v-else-if="slide.type === 'banner'"
                >
                  <AdPlaceholder
                    :height="`${slide.height}`"
                    :width="`${slide.width}`"
                  />
                </div>
                <img
                  :class="viewportStore.isLandscape && !viewportStore.isLarge ? 'h-full py-1' : ''"
                  :loading="index !== 0 ? 'lazy' : undefined"
                  :src="slide.imageUrl"
                  class="image slide grow-none shrink-none w-full object-scale-down snap-start"
                  tabIndex="0"
                  v-else
                />
              </template>
            </div>

            <BasicButtonIcon
              :class="viewportStore.isLarge ? '' : 'hidden'"
              :disabled="currentSlide === gallerySlides.length - 1"
              :icon="ICON.CHEVRON_RIGHT"
              :priority="PRIORITY.TERTIARY"
              :size="SIZE_ICON.SMALL"
              @click="handleNextClick"
              class="shadow-box"
            />
          </div>

          <div
            :class="[
              !viewportStore.isLandscape && !viewportStore.isLarge && 'hidden',
              viewportStore.isLandscape && !viewportStore.isLarge ? 'column py-1 pr-2 pl-1' : 'pt-2',
            ]"
            ref="navList"
            class="nav-list flex gap-1/2 grow-none shrink-none xy-auto scrollbar-none"
            tabindex="-1"
          >
            <button
              :class="[
                { active: index === currentSlide },
                slide.type,
                index === 0 && 'ml-auto mt-auto',
                index === gallerySlides.length - 1 && 'mr-auto mb-auto',
              ]"
              :key="index"
              @click="handleThumbClick(index)"
              class="thumb-item relative flex axis1-center axis2-center grow-none shrink-none radius-1/2 xy-hidden"
              v-for="(slide, index) in gallerySlides"
            >
              <div
                :class="viewportStore.isLandscape && viewportStore.isExtraSmall ? 'thumb-item-img-small' : ''"
                class="thumb-bnr flex axis1-center axis2-center bg-gray-light font-gray"
                v-if="slide.type === 'banner'"
              >
                Ad*
              </div>
              <img
                :class="viewportStore.isLandscape && viewportStore.isExtraSmall ? 'thumb-item-img-small' : ''"
                :src="slide.imageUrl"
                class="object-cover"
                height="90"
                v-else
                width="90"
              />

              <div class="thumb-outline absolute top-0 left-0 w-full h-full" />

              <BasicIcon
                :icon="slide.type === MEDIA_SLIDE_TYPES.VR ? ICON.TOUR : ICON.PLAY"
                :size="SIZE_ICON.SMALL"
                class="absolute bg-white radius-full p-1/2"
                v-if="getHasOverlay(slide.type)"
              />
            </button>
          </div>
        </div>

        <div
          :class="!viewportStore.isLandscape && !viewportStore.isLarge ? 'absolute w-full' : ''"
          class="contact flex column axis1-center axis2-center grow-none"
        >
          <form
            :class="viewportStore.isLarge ? '' : 'hidden'"
            class="contact-form flex column grow-none shrink-none gap-1/2 h-full py-1 radius-1 font-gray-dark y-auto"
            style="width: 320px; background-color: #f9f5f2"
          >
            <div
              class="flex axis2-center gap-1/2 px-1 font-14 font-700"
              v-if="sellerPhoneNumber"
            >
              <BasicButtonIcon
                :icon="ICON.PLAY"
                :priority="PRIORITY.PRIMARY"
                :size="SIZE_ICON.SMALL"
                :tier="TIER.TIER_2"
                href="tel:${sellerPhoneNumber}"
              />

              <a :href="`tel:${sellerPhoneNumber}`"> Call {{ sellerPhoneNumber }} </a>
            </div>

            <div
              class="flex axis2-center gap-1/2 px-1 font-14 font-700"
              v-if="sellerPhoneNumber"
            >
              <BasicButtonIcon
                :icon="ICON.MESSAGE"
                :priority="PRIORITY.SECONDARY"
                :size="SIZE_ICON.SMALL"
                href="tel:${sellerPhoneNumber}"
              />

              <a :href="`sms:${sellerTextNumber}`"> Text {{ sellerPhoneNumber }} </a>
            </div>

            <div class="w-full pt-1/4 bg-white" />

            <div class="flex column gap-3/4 px-1">
              <div class="font-20 font-700 mt-1">Email the seller</div>

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
                :priority="PRIORITY.PRIMARY"
                :size="SIZE_BUTTON.LARGE"
                :tier="TIER.TIER_1"
                label="Send email"
                type="submit"
              />
              <div class="font-12">
                Stay safe. Read more about <a href="#">avoiding scams and protecting your money</a>. By using this site,
                you agree to our <a href="#">Terms of Use</a> & our <a href="#">Privacy Policy</a>.
              </div>
            </div>
          </form>

          <div
            :class="[
              !viewportStore.isLandscape && !viewportStore.isLarge && 'fixed bottom-0 row mb-1',
              viewportStore.isLandscape && !viewportStore.isLarge && 'column',
              viewportStore.isLarge && 'hidden',
            ]"
            ref="contactActionsRef"
            class="contact-actions flex column gap-1/2 mx-2 p-1 font-12 radius-1 bg-white font-gray-dark shadow-box"
          >
            <BasicButton
              :class="viewportStore.isLandscape && !viewportStore.isLarge ? 'lower' : ''"
              :href="phoneHref"
              :icon-leading="ICON.PHONE"
              :priority="PRIORITY.PRIMARY"
              :tier="TIER.TIER_1"
              label="Call"
            />

            <BasicButton
              :class="viewportStore.isLandscape && !viewportStore.isLarge ? 'lower' : ''"
              :icon-leading="ICON.MESSAGE"
              :priority="PRIORITY.PRIMARY"
              :tier="TIER.TIER_2"
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
              :class="viewportStore.isLandscape && !viewportStore.isLarge ? 'lower' : ''"
              :icon-leading="ICON.ENVELOPE"
              :priority="PRIORITY.PRIMARY"
              :tier="TIER.TIER_2"
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
