<script lang="ts" setup>
  import { onMounted, onUnmounted } from 'vue';

  import { useBreakpointStore } from '@/stores/BreakpointStore';
  import { useUserAgentStore } from '@/stores/UserAgentStore';

  import SearchResultsPage from '@/pages/SearchResultsPage.vue';

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
