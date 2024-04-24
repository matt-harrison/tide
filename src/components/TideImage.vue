<script lang="ts" setup>
  import { onMounted, onBeforeUnmount, ref } from 'vue';

  import { CSS } from '../types/Styles';
  import { getCdn } from '../utilities/format';
  import { realm } from '../config/main.config';

  type Props = {
    alt?: string;
    isLazy?: boolean;
    offset?: number;
    src?: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    alt: '',
    isLazy: true,
    offset: 0,
    src: undefined,
  });

  const tideImage = ref();

  const cdn = getCdn(realm);
  const imageDefault = `${cdn}/image-coming-soon-512.png`;

  const loadImage = () => {
    if (props.src) {
      const imageLoader = new Image();

      imageLoader.onload = setImageFromSrc;
      imageLoader.onerror = setImageFromDefault;
      imageLoader.src = props.src;
    }
  };

  const setImageFromDefault = () => {
    tideImage.value.src = imageDefault;
  };

  const setImageFromSrc = () => {
    tideImage.value.src = props.src;
  };

  defineExpose(tideImage.value);

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(
      (entry) => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: `${props.offset}px`,
      }
    );
  });

  onMounted(() => {
    if (props.isLazy) {
      observer.observe(tideImage.value);
    } else {
      loadImage();
    }
  });

  onBeforeUnmount(() => {
    observer.unobserve(tideImage.value);
  });
</script>

<template>
  <img
    :alt="alt"
    :class="['tide-image', CSS.OBJECT.CENTER, CSS.OBJECT.COVER]"
    ref="tideImage"
    :src="isLazy && src ? src : imageDefault"
  />
</template>

<style scoped></style>
