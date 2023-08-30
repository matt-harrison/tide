<script lang="ts" setup>
  import { computed } from 'vue';

  import { getIdFromYoutubeUrl } from '@/utilities/media';

  type Props = {
    title?: string;
    src: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    title: 'YouTube video player',
  });

  const iframeSrc = computed(() => `https://www.youtube.com/embed/${getIdFromYoutubeUrl(props.src)}`);
</script>

<template>
  <iframe
    :src="iframeSrc"
    :title="title"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    frameborder="0"
  />
</template>
