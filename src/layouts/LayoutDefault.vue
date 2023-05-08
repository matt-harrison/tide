<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';

  import SiteFooter from '@/components/SiteFooter.vue';
  import SiteHeader from '@/components/SiteHeader.vue';

  const route = useRoute();

  let isHomepage = ref(false);

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
