<script lang="ts" setup>
  import { onMounted, onUnmounted } from 'vue';

  import StyleGuidePage from '@/pages/StyleGuidePage.vue';
  import { useBreakpointStore } from '@/stores/BreakpointStore';
  import { useUserAgentStore } from '@/stores/UserAgentStore';

  const breakpointStore = useBreakpointStore();
  const userAgentStore = useUserAgentStore();

  onMounted(() => {
    breakpointStore.initialize();
    userAgentStore.initialize();
  });

  onUnmounted(() => {
    breakpointStore.cleanup();
  });
</script>

<template>
  <StyleGuidePage />
</template>
