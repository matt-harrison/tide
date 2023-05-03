<script lang="ts" setup>
  import { onMounted, ref, withDefaults } from 'vue';

  type Props = {
    alt?: string;
    isLazyLoad?: boolean;
    offset?: number;
    src: string;
    assumeHorizontal?: boolean;
  };

  import { cdnDomain } from '@/config/rv.config';

  const props = withDefaults(defineProps<Props>(), {
    alt: '',
    assumeHorizontal: false,
    isLazyLoad: false,
    offset: 0,
  });

  const siteImage = ref();

  const getIsInViewport = () => {
    const rect = siteImage.value.getBoundingClientRect();

    const isInViewport = props.assumeHorizontal
      ? rect.top + props.offset >= 0 - rect.height &&
        rect.bottom - props.offset <= (window.innerHeight || document.documentElement.clientHeight) + rect.height
      : rect.top + props.offset >= 0 - rect.height &&
        rect.left + props.offset >= 0 - rect.width &&
        rect.bottom - props.offset <= (window.innerHeight || document.documentElement.clientHeight) + rect.height &&
        rect.right - props.offset <= (window.innerWidth || document.documentElement.clientWidth) + rect.width;

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
    const imageLoader = new Image();

    imageLoader.onload = setImageFromSrc;
    imageLoader.onerror = setImageFromDefault;
    imageLoader.src = props.src;
  };

  const setImageFromDefault = () => {
    siteImage.value.src = `https://${cdnDomain}/image-coming-soon-512.png`;
  };

  const setImageFromSrc = () => {
    siteImage.value.src = props.src;
  };

  defineExpose(siteImage);

  onMounted(() => {
    if (props.isLazyLoad) {
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
    :src="props.isLazyLoad ? props.src : undefined"
    class="site-image object-center object-cover"
  />
</template>

<style scoped></style>
