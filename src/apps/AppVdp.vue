<script lang="ts" setup>
  import { onMounted, onUnmounted } from 'vue';

  import SiteHeader from '@/components/SiteHeader.vue';
  import SiteFooter from '@/components/SiteFooter.vue';
  import VehicleDetailPage from '@/pages/VehicleDetailPage.vue';
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
  <SiteHeader :show-search-bar="true" />

  <div class="page-layout">
    <VehicleDetailPage />
  </div>

  <SiteFooter />
</template>
