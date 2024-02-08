<script lang="ts" setup>
  import { ref, watch, defineAsyncComponent } from 'vue';

  import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
  import { ELEMENT } from '@/types/Element';
  import { ICON } from '@/types/Icon';
  import { PRIORITY } from '@/types/Priority';
  import { REALM } from '@/types/Realm';
  import { formatPascalCase } from '@/utilities/format';
  import { realm } from '@/config/main.config';
  import { useViewportStore } from '@/stores/ViewportStore';

  const viewportStore = useViewportStore();

  type Props = {
    showSearchBar?: boolean;
  };

  const props = withDefaults(defineProps<Props>(), {
    showSearchBar: true,
  });

  const logosTall: string[] = [REALM.BOATLINE, REALM.EQUIP, REALM.TRUCK];
  const realmLogo = defineAsyncComponent(() => import(`@/assets/svg/logos/${formatPascalCase(realm.id)}Logo.vue`));

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
      'site-header tide-display-flex',
      viewportStore.isLarge ? '' : 'tide-flex-wrap',
      'tide-axis1-between tide-axis2-center tide-gap-2 tide-border-bottom tide-border-gray-light tide-padding-1',
    ]"
  >
    <a
      :class="[viewportStore.isExtraSmall ? '' : 's', logosTall.includes(realm.id) ? 'tall' : '']"
      :href="`/?realm=${realm.id}`"
      class="realm-logo tide-display-flex tide-axis2-center tide-gap-1/2"
    >
      <component :is="realmLogo" />
    </a>

    <nav
      :class="viewportStore.isLarge ? '' : 'tide-axis1-end order-1 tide-width-full'"
      class="tide-display-flex tide-axis2-center tide-gap-1 tide-font-14 tide-font-600"
    >
      <ul
        :class="viewportStore.isLarge ? '' : 'tide-top-0 tide-left-0 tide-axis1-around tide-width-full'"
        class="tide-display-flex tide-gap-1 tide-list-none"
      >
        <li
          :key="item.href"
          v-for="item in navItemsPriority"
        >
          <a
            :href="item.href"
            class="tide-underline-hover"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <div
        :class="[
          !viewportStore.isLarge && isNavOpen ? 'open' : 'tide-pointer-events-none',
          !viewportStore.isLarge && !isNavOpen && 'tide-display-hidden',
          viewportStore.isLarge
            ? ''
            : 'tide-position-absolute tide-top-0 tide-left-0 tide-display-flex tide-axis1-end tide-width-full h-full z-1',
        ]"
      >
        <div
          :class="isNavOpen ? 'tide-pointer-events' : ''"
          @click="handleNavMenuClick"
          class="overlay tide-position-absolute tide-top-0 tide-left-0 tide-width-full h-full"
        />

        <nav
          :class="[
            !viewportStore.isLarge && isNavOpen && 'tide-position-relative tide-left-0',
            !viewportStore.isLarge && !isNavOpen && 'tide-position-relative left-full',
            viewportStore.isLarge
              ? ''
              : 'tide-position-absolute tide-top-0 tide-padding-top-4 tide-padding-x-2 h-full tide-bg-gray-dark',
          ]"
          class="nav-menu h-full tide-pointer-events"
        >
          <BasicButtonIcon
            :icon="ICON.XMARK"
            :priority="PRIORITY.TERTIARY"
            @click="handleNavMenuClose"
            aria-label="Close menu"
            class="tide-position-absolute tide-top-0 tide-right-0 tide-margin-top-1 tide-margin-right-1 tide-margin-left-auto"
            v-if="!viewportStore.isLarge"
          />

          <ul
            :class="viewportStore.isLarge ? '' : 'tide-flex-column tide-font-white'"
            class="tide-display-flex tide-gap-1 tide-list-none"
          >
            <li
              :key="item.href"
              v-for="item in navItems"
            >
              <a
                :href="item.href"
                class="tide-underline-hover"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </nav>

    <div class="tide-display-flex tide-gap-1/2 tide-margin-left-auto">
      <BasicButtonIcon
        :icon="ICON.MAGNIFYING_GLASS"
        :priority="PRIORITY.TERTIARY"
        @click="handleSearchBarTriggerClick"
        aria-label="Search"
        v-if="props.showSearchBar"
      />

      <BasicButtonIcon
        :element="ELEMENT.LINK"
        :href="`/style-guide?realm=${realm.id}`"
        :icon="ICON.USER"
        :priority="PRIORITY.TERTIARY"
        aria-label="Sign in"
      />

      <BasicButtonIcon
        :icon="ICON.BARS"
        :priority="PRIORITY.TERTIARY"
        @click="handleBurgerClick"
        aria-label="Menu"
        v-if="!viewportStore.isLarge"
      />
    </div>

    <div
      :class="{ open: isSearchOpen }"
      class="top-search tide-position-absolute tide-top-0 tide-left-0 tide-width-full h-full tide-font-white tide-pointer-events-none z-1"
      v-if="props.showSearchBar && isSearchOpen"
    >
      <div
        :class="isSearchOpen ? 'tide-pointer-events' : ''"
        @click="handleTopSearchClick"
        class="overlay tide-position-absolute tide-top-0 tide-left-0 tide-width-full h-full"
      />

      <form
        :class="
          viewportStore.isExtraSmall
            ? 'radius-bottom-1/2 tide-width-full'
            : 'tide-margin-top-1 tide-margin-right-1 tide-radius-1/2 width-475'
        "
        ref="searchBarForm"
        class="search-form tide-position-absolute tide-top-0 tide-right-0 tide-padding-2 tide-bg-gray-dark tide-pointer-events shadow-b-1"
      >
        <div class="search-bar tide-position-relative tide-margin-bottom-2">
          <input
            :placeholder="`Search for ${realm.label.singularWithArticle}`"
            ref="searchInput"
            class="search-bar-input tide-border-2 tide-border-white tide-radius-full tide-padding-y-1 tide-padding-right-2 tide-padding-left-1 tide-width-full"
            type="search"
          />

          <BasicButtonIcon
            :icon="ICON.MAGNIFYING_GLASS"
            @click="handleSearchBarTriggerClick"
            aria-label="Search"
            class="tide-position-absolute tide-top-0 tide-right-0 tide-margin-top-1/2 tide-margin-right-1/2 tide-padding-1/2"
          />
        </div>

        <div class="suggestions">
          <div class="tide-margin-bottom-1 tide-font-700">Recent searches</div>

          <ul class="tide-display-flex tide-flex-column tide-list-none">
            <li class="tide-margin-bottom-1 tide-border-bottom tide-border-gray tide-padding-bottom-1">
              Travel trailer
            </li>

            <li class="tide-margin-bottom-1 tide-border-bottom tide-border-gray tide-padding-bottom-1">
              Toy hauler travel trailer
            </li>

            <li class="tide-margin-bottom-1 tide-border-bottom tide-border-gray tide-padding-bottom-1">
              Fifth wheel livestock trailer
            </li>

            <li class="tide-margin-bottom-1 tide-border-bottom tide-border-gray tide-padding-bottom-1">Bunkhouse</li>
            <li class="tide-margin-bottom-1 tide-border-bottom tide-border-gray tide-padding-bottom-1">
              Dutchmen Aspen Trail
            </li>

            <li class="tide-margin-bottom-1 tide-border-bottom tide-border-gray tide-padding-bottom-1">
              Heartland North Trail
            </li>
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

  .width-475 {
    width: 475px;
  }

  .z-1 {
    z-index: 1;
  }

  .site-header {
    :deep(.realm-logo .realm-logo-icon) {
      width: auto;
      height: 32px;
    }

    :deep(.realm-logo .realm-logo-name) {
      width: auto;
      height: 20px;
    }

    :deep(.realm-logo.tall .realm-logo-name) {
      width: auto;
      height: 32px;
    }

    :deep(.s.realm-logo .realm-logo-icon) {
      width: auto;
      height: 38px;
    }

    :deep(.s.tall.realm-logo .realm-logo-name) {
      width: auto;
      height: 38px;
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
