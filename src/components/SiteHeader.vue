<script lang="ts" setup>
  import { ref } from 'vue';

  import type { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { storeToRefs } from 'pinia';

  import SiteButtonIcon from '@/components/SiteButtonIcon.vue';
  import { useBreakpointStore } from '@/stores/BreakpointStore';
  import SiteLinkAsButton from '@/components/SiteLinkAsButton.vue';
  import { useModalStore } from '@/stores/ModalStore';

  const breakpointStore = useBreakpointStore();
  const modalStore = useModalStore();

  const { isExtraSmall } = storeToRefs(breakpointStore);

  let showMobileMenu = ref(false);

  const toggleShowMobileMenu = () => {
    showMobileMenu.value = !showMobileMenu.value;

    modalStore.setIsScrollLocked(showMobileMenu.value);
  };

  const props = defineProps({
    showSearchbar: {
      required: true,
      type: Boolean,
    },
  });
</script>

<template>
  <header
    class="flex axis1-between axis2-center gap-1 border-b border-gray py-1 px-2 bg-white font-14 whitespace-nowrap"
  >
    <div class="flex axis2-center x-hidden">
      <router-link
        class="site-header-link shrink-none mr-1 underline-none"
        to="/"
      >
        <div class="flex axis2-center">
          <div class="site-header-logo mr-1/4 radius-1/2 bg-gray-dark" />
          <span class="font-32 font-700">RV Trader</span>
        </div>
      </router-link>

      <nav
        :class="[
          isExtraSmall
            ? 'site-header-links absolute column top-0 pt-4 px-1 pb-1 w-full h-full bg-gray-dark font-white'
            : 'row scrollbar-none snap x-auto',
          isExtraSmall && showMobileMenu ? 'left-0' : 'offscreen',
        ]"
        class="flex"
      >
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

        <SiteButtonIcon
          @click="toggleShowMobileMenu"
          class-button="site-header-icon absolute top-0 right-0 mt-1 mr-1 font-20"
          icon="xmark"
          is-solid
          v-if="isExtraSmall"
        />
      </nav>
    </div>

    <div class="flex axis2-center gap-1/4">
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

      <div
        class="flex gap-1/4"
        v-if="isExtraSmall"
      >
        <SiteButtonIcon
          class="site-header-icon"
          icon="magnifying-glass"
          is-secondary
          is-solid
        />

        <SiteButtonIcon
          @click="toggleShowMobileMenu"
          class="site-header-icon"
          icon="bars"
          is-secondary
          is-solid
        />
      </div>

      <SiteLinkAsButton
        :class="
          isExtraSmall
            ? 'site-header-icon flex axis1-center axis2-center radius-full ratio-1/1'
            : 'flex axis2-center gap-1/4 underline-none'
        "
        :is-secondary="isExtraSmall"
        icon-leading="user"
        is-restyled
        is-solid
        to="/style-guide"
      >
        <span
          class="font-12 font-600"
          v-if="!isExtraSmall"
        >
          Sign In
        </span>
      </SiteLinkAsButton>
    </div>
  </header>
</template>

<style scoped>
  .site-header-links {
    transition: left var(--animate);
  }

  .site-header-links.offscreen {
    left: 100%;
  }

  .site-header-search-bar {
    width: 200px;
  }

  .site-header-logo {
    width: 30px;
    height: 30px;
  }

  .site-header-search-icon {
    top: 3px;
    left: 3px;
  }
</style>

<style>
  .site-header-icon {
    width: 2rem;
  }
</style>
