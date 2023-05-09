<script lang="ts" setup>
  import type { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  const props = defineProps({
    showSearchbar: {
      required: true,
      type: Boolean,
    },
  });
</script>

<template>
  <header class="flex axis1-between gap-1 border-b border-gray py-1 px-2 bg-white font-14 whitespace-nowrap">
    <nav class="flex axis2-center x-hidden">
      <router-link
        class="site-header-link shrink-none mr-1 underline-none"
        to="/"
      >
        <div class="flex axis2-center">
          <div class="site-header-logo mr-1/4 radius-1/2 bg-gray-dark" />
          <span class="font-32 font-700">RV Trader</span>
        </div>
      </router-link>

      <router-link
        class="site-header-link p-1 font-700 underline-none"
        to="/"
      >
        Find RVs
      </router-link>

      <router-link
        class="site-header-link p-1 font-700 underline-none"
        to="/"
      >
        Sell
      </router-link>

      <router-link
        class="site-header-link p-1 font-700 underline-none"
        to="/"
      >
        Value
      </router-link>

      <router-link
        class="site-header-link p-1 font-700 underline-none"
        to="/"
      >
        RV Reviews
      </router-link>

      <router-link
        class="site-header-link p-1 font-700 underline-none"
        to="/"
      >
        Research
      </router-link>

      <router-link
        class="site-header-link p-1 font-700 underline-none"
        to="/"
      >
        RV Dealers
      </router-link>

      <router-link
        class="site-header-link p-1 font-700 underline-none"
        to="/"
      >
        Parts
      </router-link>

      <router-link
        class="site-header-link p-1 font-700 underline-none"
        to="/"
      >
        RV Parks
      </router-link>

      <router-link
        class="site-header-link p-1 font-700 underline-none"
        to="/"
      >
        Blog
      </router-link>
    </nav>

    <div class="flex axis2-center gap-1">
      <div
        class="site-header-search-bar relative"
        v-if="props.showSearchbar"
      >
        <input
          class="border-1 border-gray radius-full py-1/2 pr-4 pl-1 w-full bg-white"
          placeholder="Search for an RV"
          type="text"
        />

        <router-link
          class="site-header-search-icon absolute flex axis1-center axis2-center radius-full p-1/2 bg-gray-light"
          to="/rvs-for-sale"
        >
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </router-link>
      </div>

      <router-link
        class="flex axis2-center gap-1/4 underline-none"
        to="/style-guide"
      >
        <FontAwesomeIcon icon="user" />
        <span class="font-12 font-500">Sign In</span>
      </router-link>
    </div>
  </header>
</template>

<style scoped>
  .site-header-search-bar {
    width: 200px;
  }

  .site-header-logo {
    width: 30px;
    height: 30px;
  }

  .site-header-search-icon {
    top: 3px;
    right: 3px;
  }
</style>
