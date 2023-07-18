<script lang="ts" setup>
  import { onMounted, onUnmounted } from 'vue';

  import { useUserAgentStore } from '@/stores/UserAgentStore';
  import { useViewportStore } from '@/stores/ViewportStore';

  import SearchResultsPage from '@/pages/SearchResultsPage.vue';

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
  <div class="site-wrapper flex column">
    <section class="site-body">
      <SearchResultsPage />
    </section>
  </div>
</template>

<style scoped>
  .site-wrapper {
    min-height: 100vh;
  }
</style>
