<script lang="ts" setup>
  import type { ListingMedia } from '@/types/ListingMedia';

  import type { Icon } from '@/types/Icon';

  import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
  import { ICON } from '@/types/Icon';
  import { MEDIA_SLIDE_TYPES } from '@/types/ListingMedia';
  import { PRIORITY } from '@/types/Priority';
  import { SIZE_ICON } from '@/types/Size';

  type Emits = (e: 'click', value: number) => void;
  type Props = {
    isLastTool: boolean;
    slide: ListingMedia;
    slideCount: number;
    slideIndex: number;
    showAll: boolean;
  };

  const emit = defineEmits<Emits>();
  const props = defineProps<Props>();

  let altText: string | undefined = undefined;
  let icon: Icon;

  switch (props.slide.type) {
    case MEDIA_SLIDE_TYPES.IMAGE.IMAGE:
      altText = 'View more photos of [whatever]';
      break;
    case MEDIA_SLIDE_TYPES.IMAGE.FLOORPLAN:
      altText = 'View the floorplan for [whatever]';
      break;
    case MEDIA_SLIDE_TYPES.VIDEO:
      altText = 'Watch a video of [whatever]';
      icon = ICON.PLAY;
      break;
    case MEDIA_SLIDE_TYPES.VR:
      altText = 'Take a 3D tour of [whatever]';
      icon = ICON.TOUR;
      break;
  }

  const handleClick = () => {
    const slideToOpenTo = props.showAll ? 0 : props.slideIndex;

    emit('click', slideToOpenTo);
  };

  const getHasOverlay = () => {
    let hasOverlay = false;

    // Array.prototype.includes() won't work in TS when the argument type is broader than the invoking array.
    [MEDIA_SLIDE_TYPES.VR, MEDIA_SLIDE_TYPES.VIDEO].forEach((type) => {
      if (type === props.slide.type) {
        hasOverlay = true;
      }
    });

    return hasOverlay;
  };
</script>

<template>
  <button
    :class="[
      'listing-media-tool',
      showAll && 'show-all',
      'relative flex axis1-center axis2-center w-1/4 ratio-3/2 border-overlay xy-hidden',
    ]"
    :data-photo-count="props.slideCount"
    @click="handleClick"
  >
    <img
      :alt="altText"
      :src="slide.imageUrl"
      class="w-full h-full object-cover"
    />

    <div
      class="contents"
      v-if="getHasOverlay()"
    >
      <div class="overlay absolute w-full h-full" />

      <BasicButtonIcon
        :icon="icon"
        :priority="PRIORITY.TERTIARY"
        :size="SIZE_ICON.SMALL"
        class="absolute shadow-box"
      />
    </div>
  </button>
</template>

<style lang="scss" scoped>
  .listing-media-tool {
    .overlay {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25));
    }
  }
</style>
