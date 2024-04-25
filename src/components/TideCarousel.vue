<script lang="ts" setup>
  import { onMounted, onUnmounted, onUpdated, ref, watch } from 'vue';

  import TideButtonIcon from './TideButtonIcon.vue';
  import { CSS } from '../types/Styles';
  import { ICON } from '../types/Icon';
  import { PRIORITY } from '../types/Priority';

  type Props = {
    isTouchscreen?: boolean;
    offsetX?: number;
  };

  const props = withDefaults(defineProps<Props>(), {
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

  const gap = 16;

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
    :class="['tide-carousel', CSS.POSITION.RELATIVE, CSS.DISPLAY.FLEX, CSS.AXIS2.CENTER, CSS.WIDTH.FULL]"
    ref="carouselRef"
  >
    <div
      :class="[CSS.SCROLLBAR.OFF, CSS.SNAP.ON, CSS.OVERFLOW.X.SCROLL]"
      ref="frameRef"
      @scroll="handleScroll"
    >
      <ul
        :class="[props.isTouchscreen ? [CSS.OVERFLOW.X.AUTO] : '', CSS.DISPLAY.FLEX, CSS.GAP.ONE, CSS.LIST_BULLETS.OFF]"
        ref="contentRef"
      >
        <li
          :class="[CSS.FLEX.SHRINK.OFF, CSS.SNAP_ALIGN.START]"
          :style="{ width: `${props.offsetX - gap}px` }"
          v-if="props.offsetX"
        />

        <slot />

        <li
          :class="[CSS.FLEX.SHRINK.OFF, CSS.SNAP_ALIGN.START]"
          :style="{ width: `${props.offsetX - gap}px` }"
          v-if="props.offsetX"
        />
      </ul>
    </div>

    <div
      :class="[
        CSS.POSITION.ABSOLUTE,
        CSS.DISPLAY.FLEX,
        CSS.AXIS1.BETWEEN,
        CSS.AXIS2.CENTER,
        CSS.WIDTH.FULL,
        CSS.HEIGHT.FULL,
        CSS.POINTER_EVENTS.OFF,
      ]"
      v-if="showButtons"
    >
      <TideButtonIcon
        :class="[CSS.MARGIN.LEFT.ONE, CSS.POINTER_EVENTS.ON]"
        :icon="ICON.CHEVRON_LEFT"
        :priority="PRIORITY.QUATERNARY"
        @click="showPreviousSlide"
      />

      <TideButtonIcon
        :class="[CSS.MARGIN.RIGHT.ONE, CSS.POINTER_EVENTS.ON]"
        :icon="ICON.CHEVRON_RIGHT"
        :priority="PRIORITY.QUATERNARY"
        @click="showNextSlide"
      />
    </div>
  </section>
</template>
