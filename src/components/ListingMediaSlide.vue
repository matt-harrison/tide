<script lang="ts" setup>
  import type { ListingMedia } from '@/types/ListingMedia';
  import type { VehicleDetail } from '@/types/VehicleDetail';

  import BasicIcon from '@/components/BasicIcon.vue';
  import { ICON } from '@/types/Icon';
  import { MEDIA_SLIDE_TYPES } from '@/types/ListingMedia';
  import { SIZE_ICON } from '@/types/Size';

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
    class="listing-media-slide relative flex axis1-center axis2-center grow-none shrink-none w-full ratio-1 snap-start"
    type="button"
  >
    <img
      :alt="imgAlt"
      :src="props.slide.imageUrl"
      class="w-full h-full object-cover"
    />

    <div
      class="absolute flex axis1-center axis2-center pointer-events-none bg-white radius-full p-1"
      v-if="props.slide.type === MEDIA_SLIDE_TYPES.VIDEO || props.slide.type === MEDIA_SLIDE_TYPES.VR"
    >
      <BasicIcon
        :icon="props.slide.type === MEDIA_SLIDE_TYPES.VIDEO ? ICON.PLAY : ICON.TOUR"
        :size="SIZE_ICON.SMALL"
        class="font-24"
      />
    </div>
  </button>
</template>
