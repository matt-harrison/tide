<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';

  import SiteFooter from '@/components/SiteFooter.vue';
  import SiteHeader from '@/components/SiteHeader.vue';
  import { realm } from '@/config/main.config';

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
  <div :class="realm.id">
    <SiteHeader />

    <div class="page-layout">
      <router-view />
    </div>

    <SiteFooter />
  </div>
</template>
