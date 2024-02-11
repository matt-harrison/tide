<script lang="ts" setup>
  import type { ListingMedia } from '@/types/ListingMedia';
  import type { VehicleDetail } from '@/types/VehicleDetail';

  import BasicIcon from '@/components/BasicIcon.vue';
  import { ICON } from '@/types/Icon';
  import { MEDIA_SLIDE_TYPES } from '@/types/ListingMedia';

  type Emits = (e: 'click', value: number) => void;
  type Props = {
    slide: ListingMedia;
    vehicle: VehicleDetail;
    slideIndex: number;
  };

  const emit = defineEmits<Emits>();
  const props = defineProps<Props>();

  const imgAlt = 'A photo of [whatever]';
  const slideTitle = 'See more photos for this [whatever]';

  const handleClick = () => emit('click', props.slideIndex);
</script>

<template>
  <button
    :title="slideTitle"
    @click="handleClick"
    class="listing-media-slide tide-position-relative tide-display-flex tide-axis1-center tide-axis2-center tide-grow-none tide-shrink-none tide-width-full ratio-1 tide-scroll-snap-start"
    type="button"
  >
    <img
      :alt="imgAlt"
      :src="props.slide.imageUrl"
      class="tide-width-full h-full tide-object-cover"
    />

    <div
      class="tide-position-absolute tide-display-flex tide-axis1-center tide-axis2-center tide-pointer-events-none tide-bg-white tide-radius-full tide-padding-1"
      v-if="props.slide.type === MEDIA_SLIDE_TYPES.VIDEO || props.slide.type === MEDIA_SLIDE_TYPES.VR"
    >
      <BasicIcon
        :icon="props.slide.type === MEDIA_SLIDE_TYPES.VIDEO ? ICON.PLAY : ICON.THREE_D_ROTATION"
        class="tide-font-24"
      />
    </div>
  </button>
</template>
