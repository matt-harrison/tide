<script lang="ts" setup>
  import { ref, watch, defineAsyncComponent } from 'vue';

  import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
  import { ICON } from '@/types/Icon';
  import { PRIORITY } from '@/types/Priority';
  import { SIZE_ICON } from '@/types/Size';
  import { TIER } from '@/types/Tier';
  import { realm } from '@/config/main.config';
  import { useViewportStore } from '@/stores/ViewportStore';

  const viewportStore = useViewportStore();

  type Props = {
    showSearchBar?: boolean;
  };

  const props = withDefaults(defineProps<Props>(), {
    showSearchBar: true,
  });

  const realmLogo = defineAsyncComponent(() => import('@/assets/logos/RvLogo.vue'));
  // const realmLogo = defineAsyncComponent(() => import(`@/assets/logos/${formatPascalCase(realm.id)}Logo.vue`));

  const navItems = [
    { href: '#', label: 'Reviews' },
    { href: '#', label: 'Research' },
    { href: '#', label: 'Dealers' },
    { href: '#', label: 'Parts' },
    { href: '#', label: 'Parks' },
    { href: '#', label: 'Blog' },
  ];

  const navItemsPriority = [
    { href: '#', label: `Find ${realm.label.plural}` },
    { href: '#', label: 'Sell' },
    { href: '#', label: 'Value' },
  ];

  const isNavOpen = ref(false);
  const isSearchOpen = ref(false);
  const searchBarForm = ref<HTMLFormElement | null>(null);
  const searchInput = ref<HTMLInputElement | null>(null);

  const handleBurgerClick = () => {
    isNavOpen.value = true;
  };

  const handleNavMenuClose = () => {
    isNavOpen.value = false;
  };

  const handleNavMenuClick = (e: MouseEvent) => {
    if (e.target !== e.currentTarget) return;
    isNavOpen.value = false;
  };

  const handleTopSearchClick = (e: MouseEvent) => {
    if (!searchBarForm.value?.contains(e.target as Node)) {
      isSearchOpen.value = false;
    }
  };

  const handleSearchBarTriggerClick = () => {
    isSearchOpen.value = true;
  };

  const handleNavMenuKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      isNavOpen.value = false;
    }
  };

  watch(isNavOpen, (isOpen) => {
    if (isOpen) {
      document.body.addEventListener('keydown', handleNavMenuKeydown);
    } else {
      document.body.removeEventListener('keydown', handleNavMenuKeydown);
    }
  });

  const handleSearchBarKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      isSearchOpen.value = false;
    }
  };

  watch(isSearchOpen, (isOpen) => {
    if (isOpen) {
      document.body.addEventListener('keydown', handleSearchBarKeydown);
      requestAnimationFrame(() => {
        searchInput.value?.focus();
      });
    } else {
      document.body.removeEventListener('keydown', handleSearchBarKeydown);
    }
  });
</script>

<template>
  <header
    :class="[
      'site-header flex',
      viewportStore.isLarge ? '' : 'wrap',
      'axis1-between axis2-center gap-2 border-b border-gray-light p-1',
    ]"
  >
    <a
      :class="viewportStore.isExtraSmall ? '' : 's'"
      class="realm-logo flex axis2-center gap-1/2"
      href="/"
    >
      <component :is="realmLogo" />
    </a>

    <nav
      :class="viewportStore.isLarge ? '' : 'axis1-end order-1 w-full'"
      class="flex axis2-center gap-1 font-14 font-600"
    >
      <ul
        :class="viewportStore.isLarge ? '' : 'top-0 left-0 axis1-around w-full'"
        class="flex gap-1 list-none"
      >
        <li
          :key="item.href"
          v-for="item in navItemsPriority"
        >
          <a
            :href="item.href"
            class="underline-hover"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <div
        :class="[
          !viewportStore.isLarge && isNavOpen ? 'open' : 'pointer-events-none',
          !viewportStore.isLarge && !isNavOpen && 'hidden',
          viewportStore.isLarge ? '' : 'absolute top-0 left-0 flex axis1-end w-full h-full z-1',
        ]"
      >
        <div
          :class="isNavOpen ? 'pointer-events' : ''"
          @click="handleNavMenuClick"
          class="overlay absolute top-0 left-0 w-full h-full"
        />

        <nav
          :class="[
            !viewportStore.isLarge && isNavOpen && 'relative left-0',
            !viewportStore.isLarge && !isNavOpen && 'relative left-full',
            viewportStore.isLarge ? '' : 'absolute top-0 pt-4 px-2 h-full bg-gray-dark',
          ]"
          class="nav-menu h-full pointer-events"
        >
          <BasicButtonIcon
            :icon="ICON.XMARK"
            :priority="PRIORITY.TERTIARY"
            :size="SIZE_ICON.SMALL"
            @click="handleNavMenuClose"
            aria-label="Close menu"
            class="absolute top-0 right-0 mt-1 mr-1 ml-auto"
            v-if="!viewportStore.isLarge"
          />

          <ul
            :class="viewportStore.isLarge ? '' : 'column font-white'"
            class="flex gap-1 list-none"
          >
            <li
              :key="item.href"
              v-for="item in navItems"
            >
              <a
                :href="item.href"
                class="underline-hover"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </nav>

    <div class="flex gap-1/2 ml-auto">
      <BasicButtonIcon
        :icon="ICON.MAGNIFYING_GLASS"
        :priority="PRIORITY.TERTIARY"
        :size="SIZE_ICON.SMALL"
        @click="handleSearchBarTriggerClick"
        class="font-20"
        title="Search"
        v-if="props.showSearchBar"
      />

      <BasicButtonIcon
        :icon="ICON.USER"
        :priority="PRIORITY.TERTIARY"
        :size="SIZE_ICON.SMALL"
        class="font-20"
        href="/style-guide"
        title="Sign in"
      />

      <BasicButtonIcon
        :icon="ICON.BARS"
        :priority="PRIORITY.TERTIARY"
        :size="SIZE_ICON.SMALL"
        @click="handleBurgerClick"
        class="font-20"
        title="Menu"
        v-if="!viewportStore.isLarge"
      />
    </div>

    <div
      :class="{ open: isSearchOpen }"
      class="top-search absolute top-0 left-0 w-full h-full font-white pointer-events-none z-1"
      v-if="props.showSearchBar && isSearchOpen"
    >
      <div
        :class="isSearchOpen ? 'pointer-events' : ''"
        @click="handleTopSearchClick"
        class="overlay absolute top-0 left-0 w-full h-full"
      />

      <form
        :class="viewportStore.isExtraSmall ? 'radius-bottom-1/2 w-full' : 'mt-1 mr-1 radius-1/2 w-475'"
        ref="searchBarForm"
        class="search-form absolute top-0 right-0 p-2 bg-gray-dark pointer-events shadow-box"
      >
        <div class="search-bar relative mb-2">
          <input
            ref="searchInput"
            class="search-bar-input border-2 border-white radius-full py-1 pr-2 pl-1 w-full"
            placeholder="Search for {{ realm.label.singularWithArticle }}"
            type="search"
          />

          <BasicButtonIcon
            :icon="ICON.MAGNIFYING_GLASS"
            :priority="PRIORITY.PRIMARY"
            :size="SIZE_ICON.SMALL"
            :tier="TIER.TIER_1"
            @click="handleSearchBarTriggerClick"
            aria-label="Search"
            class="search-bar-submit absolute top-0 right-0 mt-1/2 mr-1/2 p-1/2"
            title="Search"
          />
        </div>

        <div class="suggestions">
          <div class="mb-1 font-700">Recent searches</div>

          <ul class="flex column list-none">
            <li class="mb-1 border-b border-gray pb-1">Travel trailer</li>
            <li class="mb-1 border-b border-gray pb-1">Toy hauler travel trailer</li>
            <li class="mb-1 border-b border-gray pb-1">Fifth wheel livestock trailer</li>
            <li class="mb-1 border-b border-gray pb-1">Bunkhouse</li>
            <li class="mb-1 border-b border-gray pb-1">Dutchmen Aspen Trail</li>
            <li class="mb-1 border-b border-gray pb-1">Heartland North Trail</li>
            <li>Dutchmen Aspen Trail 17bh</li>
          </ul>
        </div>
      </form>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .left-full {
    left: 100%;
  }

  .order-1 {
    order: 1;
  }

  .radius-bottom-1\/2 {
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  .w-475 {
    width: 475px;
  }

  .z-1 {
    z-index: 1;
  }

  .site-header {
    :deep(.realm-logo .realm-logo-icon) {
      width: 32px;
      height: 32px;
    }

    :deep(.realm-logo .realm-logo-name) {
      width: 132px;
      height: auto;
    }

    :deep(.realm-logo.s .realm-logo-icon) {
      width: 38px;
      height: 38px;
    }

    :deep(.realm-logo.s .realm-logo-name) {
      width: 154px;
      height: auto;
    }

    .nav-menu {
      width: 275px;
    }

    .open {
      .overlay {
        animation: 500ms blurAndDarken ease forwards;
      }

      .nav-menu {
        animation: slideInRight 350ms ease forwards;
      }

      .search-form {
        animation: fadeIn 350ms ease forwards;
      }
    }

    .search-bar-input {
      height: 52px;
    }
  }

  // TODO: smooth animation on the way out
  @keyframes blurAndDarken {
    from {
      background-color: rgba(26, 48, 53, 0);
      backdrop-filter: blur(0px);
    }

    to {
      background-color: rgba(26, 48, 53, 0.37);
      backdrop-filter: blur(var(--blur-radius, 4px));
    }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translate(0);
    }
  }

  @keyframes fadeIn {
    from {
      backdrop-filter: blur(0px);
      opacity: 0;
    }

    to {
      backdrop-filter: blur(var(--blur-radius, 4px));
      opacity: 1;
    }
  }
</style>
