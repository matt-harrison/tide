<script lang="ts" setup>
  import { onMounted, onUnmounted, ref, watch } from 'vue';
  import { useRoute } from 'vue-router';

  import { useBreakpointStore } from '@/stores/BreakpointStore';
  import { useUserAgentStore } from '@/stores/UserAgentStore';

  import SiteFooter from '@/components/SiteFooter.vue';
  import SiteHeader from '@/components/SiteHeader.vue';

  const route = useRoute();

  const breakpointStore = useBreakpointStore();
  const userAgentStore = useUserAgentStore();

  let isHomepage = ref(false);

  onMounted(() => {
    breakpointStore.initialize();
    userAgentStore.initialize();
  });

  onUnmounted(() => {
    breakpointStore.cleanup();
  });

  watch(
    () => route.name,
    () => {
      isHomepage.value = route.name === 'home';
    }
  );
</script>

<template>
  <div class="site-wrapper flex column">
    <SiteHeader :show-searchbar="!isHomepage" />

    <section class="site-body">
      <router-view />
    </section>

    <SiteFooter />
  </div>
</template>

<style scoped>
  .site-wrapper {
    min-height: 100vh;
  }
</style>
