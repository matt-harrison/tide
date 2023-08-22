<script lang="ts" setup>
  import { onMounted, onUnmounted, onUpdated, ref, watch } from 'vue';

  import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
  import { ICON } from '@/types/Icon';
  import { PRIORITY } from '@/types/Priority';
  import { SIZE_ICON } from '@/types/Size';

  type Props = {
    gap: number;
    isTouchscreen?: boolean;
    offsetX?: number;
  };

  const props = withDefaults(defineProps<Props>(), {
    gap: 0,
    offsetX: 0,
  });

  const emit = defineEmits(['slideChange']);

  let contentWidth = ref();
  let frameWidth = ref();
  let hasOverflow = ref();
  let lastPosition = ref();

  const contentRef = ref();
  const frameRef = ref();
  const showButtons = ref();
  const currentSlide = ref(0);

  /**
   * Measure the current slide based on the scroll
   * position of the frame. The current slide is
   * the slide that is closest to the left edge of
   * the frame.
   */
  const measureCurrentSlide = () => {
    // get left offsets of each slide
    const slideOffsets = Array.from(contentRef.value.children).map((slide: any) => slide.offsetLeft);

    if (slideOffsets.length === 0) return;

    // get value closest to current scroll position
    const closestSlideOffset = slideOffsets.reduce((prev, curr) => {
      return Math.abs(curr - frameRef.value.scrollLeft) < Math.abs(prev - frameRef.value.scrollLeft) ? curr : prev;
    });

    // set current slide to index of closest slide
    currentSlide.value = slideOffsets.indexOf(closestSlideOffset);
  };

  const measureDom = () => {
    contentWidth.value = contentRef.value.scrollWidth;
    frameWidth.value = frameRef.value.clientWidth;
    hasOverflow.value = contentWidth.value > frameWidth.value;
    lastPosition.value = frameRef.value.scrollWidth - frameRef.value.clientWidth;
    showButtons.value = hasOverflow.value && !props.isTouchscreen;

    measureCurrentSlide();
  };

  // TODO: debounce this
  const handleScroll = () => {
    measureDom();
  };

  /**
   * Scrolls to the slide at the given index, or
   * to the first or last slide if the given index
   * is out of bounds.
   * @param slideIndex The index of the slide to scroll to
   */
  const scrollToSlide = (slideIndex: number) => {
    frameRef.value.scrollTo({
      behavior: 'smooth',
      left: contentRef.value.children[slideIndex].offsetLeft,
    });
  };

  const showNextSlide = () => {
    const contentWidth = contentRef.value.scrollWidth;
    const contentRightEdge = frameRef.value.scrollLeft + frameRef.value.clientWidth;

    if (contentRightEdge > contentWidth) {
      frameRef.value.scrollTo({
        behavior: 'smooth',
        left: contentWidth,
      });
    } else {
      const isFirstSlideWithOffset = props.offsetX && currentSlide.value === 0;
      const isLastSlide = contentRightEdge === contentWidth;
      const nextSlide = isLastSlide ? 0 : isFirstSlideWithOffset ? 2 : currentSlide.value + 1;

      scrollToSlide(nextSlide);
    }
  };

  const showPreviousSlide = () => {
    const firstSlide = props.offsetX ? 1 : 0;
    const isFirstSlide = currentSlide.value - 1 === firstSlide;
    const isSecondSlide = currentSlide.value <= firstSlide;
    const previousSlide = isSecondSlide
      ? contentRef.value.children.length - 1
      : isFirstSlide
      ? 0
      : currentSlide.value - 1;

    scrollToSlide(previousSlide);
  };

  window.addEventListener('resize', measureDom);

  onMounted(() => {
    measureDom();
  });

  onUnmounted(() => {
    window.removeEventListener('resize', measureDom);
  });

  onUpdated(() => {
    measureDom();
  });

  watch(currentSlide, () => {
    emit('slideChange', currentSlide.value);
  });
</script>

<template>
  <section
    ref="carouselRef"
    class="basic-carousel relative flex axis2-center max-w-full"
  >
    <div
      ref="frameRef"
      @scroll="handleScroll"
      class="scrollbar-none snap x-scroll"
    >
      <ul
        :class="props.isTouchscreen ? 'x-auto' : ''"
        ref="contentRef"
        class="flex gap-1 list-none"
      >
        <li
          :style="{ width: `${props.offsetX - props.gap}px` }"
          class="shrink-none snap-start"
          v-if="props.offsetX"
        />

        <slot />

        <li
          :style="{ width: `${props.offsetX - props.gap}px` }"
          class="shrink-none snap-start"
          v-if="props.offsetX"
        />
      </ul>
    </div>

    <div
      class="absolute flex axis1-between axis2-center w-full h-full pointer-events-none"
      v-if="showButtons"
    >
      <BasicButtonIcon
        :icon="ICON.CHEVRON_LEFT"
        :priority="PRIORITY.TERTIARY"
        :size="SIZE_ICON.SMALL"
        @click="showPreviousSlide"
        class="ml-1 pointer-events box-shadow"
      />

      <BasicButtonIcon
        :icon="ICON.CHEVRON_RIGHT"
        :priority="PRIORITY.TERTIARY"
        :size="SIZE_ICON.SMALL"
        @click="showNextSlide"
        class="mr-1 pointer-events box-shadow"
      />
    </div>
  </section>
</template>
