<script lang="ts" setup>
  import { onMounted, onUnmounted } from 'vue';

  import StyleGuidePage from '@/pages/StyleGuidePage.vue';
  import { useUserAgentStore } from '@/stores/UserAgentStore';
  import { useViewportStore } from '@/stores/ViewportStore';

  const userAgentStore = useUserAgentStore();
  const viewportStore = useViewportStore();

  onMounted(() => {
    userAgentStore.initialize();
    viewportStore.initialize();
  });

  onUnmounted(() => {
    viewportStore.cleanup();
  });
</script>

<template>
  <StyleGuidePage />
</template>
