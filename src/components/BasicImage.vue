<script lang="ts" setup>
  import { onMounted, onBeforeUnmount, ref } from 'vue';

  import { realm } from '@/config/main.config';
  import { getCdn } from '@/utilities/format';

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

  const basicImage = ref();

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
    basicImage.value.src = imageDefault;
  };

  const setImageFromSrc = () => {
    basicImage.value.src = props.src;
  };

  defineExpose(basicImage.value);

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
      observer.observe(basicImage.value);
    } else {
      loadImage();
    }
  });

  onBeforeUnmount(() => {
    observer.unobserve(basicImage.value);
  });
</script>

<template>
  <img
    :alt="alt"
    ref="basicImage"
    :src="isLazy && src ? src : imageDefault"
    class="basic-image object-center object-cover"
  />
</template>

<style scoped></style>
