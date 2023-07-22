<script lang="ts" setup>
  import { onMounted, onUnmounted } from 'vue';

  import LayoutDefault from '@/layouts/LayoutDefault.vue';
  import { useUserAgentStore } from '@/stores/UserAgentStore';
  import { useViewportStore } from '@/stores/ViewportStore';

  import { realm } from '@/config/main.config';

  import(`@/assets/css/realm/${realm.id}.css`);

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
  <LayoutDefault />
</template>
