<script lang="ts" setup>
  import { onMounted, ref, withDefaults } from 'vue';

  import { cdnDomain } from '@/config/rv.config';

  type Props = {
    alt?: string;
    isLazy?: boolean;
    offset?: number;
    src: string | undefined;
    assumeHorizontal?: boolean;
  };

  const props = withDefaults(defineProps<Props>(), {
    alt: '',
    assumeHorizontal: false,
    isLazy: false,
    offset: 0,
  });

  const siteImage = ref();

  const imageDefault = `https://${cdnDomain}/image-coming-soon-512.png`;

  const getIsInViewport = () => {
    let isInViewport = false;
    const rect = siteImage.value?.getBoundingClientRect();

    if (rect) {
      isInViewport = props.assumeHorizontal
        ? rect.top + props.offset >= 0 - rect.height &&
          rect.bottom - props.offset <= (window.innerHeight || document.documentElement.clientHeight) + rect.height
        : rect.top + props.offset >= 0 - rect.height &&
          rect.left + props.offset >= 0 - rect.width &&
          rect.bottom - props.offset <= (window.innerHeight || document.documentElement.clientHeight) + rect.height &&
          rect.right - props.offset <= (window.innerWidth || document.documentElement.clientWidth) + rect.width;
    }

    return isInViewport;
  };

  const checkLazyLoad = () => {
    const isInViewport = getIsInViewport();

    if (isInViewport) {
      window.removeEventListener('scroll', checkLazyLoad);
      loadImage();
    }
  };

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

  onMounted(() => {
    if (props.isLazy) {
      window.addEventListener('scroll', checkLazyLoad);
    } else {
      loadImage();
    }

    checkLazyLoad();
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
