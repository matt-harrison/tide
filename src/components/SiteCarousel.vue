<script lang="ts" setup>
  import { onMounted, onUnmounted, onUpdated, ref } from 'vue';

  import SiteButtonIcon from '@/components/SiteButtonIcon.vue';

  type Props = {
    cardWidth: number;
    gap: number;
    isTouchscreen: boolean | undefined;
    offsetX?: number;
  };

  const props = withDefaults(defineProps<Props>(), {
    gap: 0,
    offsetX: 0,
  });

  let contentWidth = ref();
  let frameWidth = ref();
  let hasOverflow = ref();
  let lastPosition = ref();

  const contentRef = ref();
  const frameRef = ref();
  const showButtons = ref();
  const slideIncrement = props.cardWidth + props.gap;

  const measureDom = () => {
    contentWidth.value = contentRef.value.scrollWidth;
    frameWidth.value = frameRef.value.clientWidth;
    hasOverflow.value = contentWidth.value > frameWidth.value;
    lastPosition.value = frameRef.value.scrollWidth - frameRef.value.clientWidth;
    showButtons.value = hasOverflow.value && !props.isTouchscreen;
  };

  window.addEventListener('resize', measureDom);

  const showNextSlide = () => {
    if (frameRef.value.scrollLeft === lastPosition.value) {
      frameRef.value.scrollLeft = 0;
    } else {
      frameRef.value.scrollLeft += slideIncrement;
    }
  };

  const showPreviousSlide = () => {
    if (frameRef.value.scrollLeft === 0) {
      frameRef.value.scrollLeft = lastPosition.value + slideIncrement;
    } else {
      frameRef.value.scrollLeft -= slideIncrement;
    }
  };

  onMounted(() => {
    measureDom();
  });

  onUnmounted(() => {
    window.removeEventListener('resize', measureDom);
  });

  onUpdated(() => {
    measureDom();
  });
</script>

<template>
  <section
    ref="carouselRef"
    class="site-carousel relative flex axis2-center max-w-full"
  >
    <div
      ref="frameRef"
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
      <SiteButtonIcon
        @click="showPreviousSlide"
        class="site-carousel-button ml-1 border-2 border-gray-dark pointer-events"
        icon="chevron-left"
        is-secondary
        is-solid
      />

      <SiteButtonIcon
        @click="showNextSlide"
        class="site-carousel-button mr-1 border-2 border-gray-dark pointer-events"
        icon="chevron-right"
        is-secondary
        is-solid
      />
    </div>
  </section>
</template>

<style>
  .site-carousel-button {
    width: 36px;
  }
</style>
