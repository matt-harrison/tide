<script lang="ts" setup>
  import { onMounted, onBeforeUnmount, ref, withDefaults } from 'vue';

  import { cdnDomain } from '@/config/rv.config';

  type Props = {
    alt?: string;
    isLazy?: boolean;
    offset?: number;
    src: string | undefined;
  };

  const props = withDefaults(defineProps<Props>(), {
    alt: '',
    isLazy: true,
    offset: 0,
  });

  const siteImage = ref();

  const imageDefault = `https://${cdnDomain}/image-coming-soon-512.png`;

  const loadImage = () => {
    if (props.src) {
      const imageLoader = new Image();

      imageLoader.onload = setImageFromSrc;
      imageLoader.onerror = setImageFromDefault;
      imageLoader.src = props.src;
    }
  };

  const setImageFromDefault = () => {
    siteImage.value.src = imageDefault;
  };

  const setImageFromSrc = () => {
    siteImage.value.src = props.src;
  };

  defineExpose(siteImage);

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
      observer.observe(siteImage.value);
    } else {
      loadImage();
    }
  });

  onBeforeUnmount(() => {
    observer.unobserve(siteImage.value);
  });
</script>

<template>
  <img
    :alt="props.alt"
    ref="siteImage"
    :src="props.isLazy && props.src ? props.src : imageDefault"
    class="site-image object-center object-cover"
  />
</template>

<style scoped></style>
