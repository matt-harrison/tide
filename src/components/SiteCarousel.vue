<script lang="ts" setup>
  import { onMounted, onUnmounted, onUpdated, ref } from 'vue';

  import SiteButtonIcon from '@/components/SiteButtonIcon.vue';
  import { useBreakpointStore } from '@/stores/BreakpointStore';
  import { useUserAgentStore } from '@/stores/UserAgentStore';

  type Props = {
    cardWidth: number;
    gap: number;
    offsetX?: number;
  };

  const breakpointStore = useBreakpointStore();
  const userAgentStore = useUserAgentStore();

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
    showButtons.value = hasOverflow.value && !userAgentStore.isTouchscreen;
  };

  breakpointStore.addListener(measureDom);

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
    userAgentStore.initialize();
    measureDom();
  });

  onUnmounted(() => {
    breakpointStore.removeListener(measureDom);
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
      class="site-carousel-frame snap"
    >
      <ul
        :class="userAgentStore.isTouchscreen ? 'x-auto' : ''"
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

  .site-carousel-frame {
    overflow-x: scroll;
    scrollbar-width: none;
  }
</style>
