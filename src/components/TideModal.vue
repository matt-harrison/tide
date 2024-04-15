<script lang="ts" setup>
  import { onMounted, ref, watch, type CSSProperties } from 'vue';

  import TideIcon from '@/components/TideIcon.vue';
  import { ICON } from '@/types/Icon';

  // TODO: replace body scroll lock with a global mixin

  type Props = {
    isOpen: boolean;
    modalStyle?: CSSProperties;
    style?: CSSProperties;
    title?: string;
    width?: string;
  };

  const props = defineProps<Props>();

  const emit = defineEmits(['close']);

  const savedScrollPosition = ref<number | null>(null);

  const handleClose = () => {
    emit('close');
  };

  const updateScrollLock = () => {
    if (props.isOpen) {
      savedScrollPosition.value = window.scrollY;
      document.body.style.overflow = 'hidden';
      savedScrollPosition.value && window.scrollTo(0, savedScrollPosition.value);
    } else {
      document.body.style.overflow = '';
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      handleClose();
    }
  };

  const addOpenListeners = () => {
    window.addEventListener('keydown', handleKeyDown);
  };

  const removeOpenListeners = () => {
    window.removeEventListener('keydown', handleKeyDown);
  };

  onMounted(() => {
    updateScrollLock();
  });

  watch(
    () => props.isOpen,
    (isOpen) => {
      updateScrollLock();
      if (isOpen) {
        addOpenListeners();
      } else {
        removeOpenListeners();
      }
    }
  );
</script>

<template>
  <Teleport to="body">
    <Transition>
      <div
        :class="{ open: props.isOpen }"
        :style="{ '--modal-width': props.width, ...style }"
        @click.self="handleClose"
        class="basic-modal tide-position-fixed tide-display-flex tide-axis1-center tide-axis2-center tide-top-0 tide-left-0 tide-width-full h-full"
        v-show="props.isOpen"
      >
        <div
          :style="{ ...modalStyle }"
          class="modal-body tide-display-flex tide-flex-column tide-radius-1/2 tide-bg-surface tide-font-surface tide-xy-hidden"
        >
          <header class="modal-header tide-position-relative tide-display-flex tide-axis2-center tide-padding-x-2">
            <div
              class="tide-flex-grow tide-font-20 text-center tide-margin-x-2 tide-font-700"
              v-if="title"
            >
              {{ title }}
            </div>

            <button
              @click="handleClose"
              class="tide-position-absolute tide-right-0 tide-margin-right-2"
              title="Close"
            >
              <TideIcon :icon="ICON.CLOSE" />
            </button>
          </header>

          <div class="modal-content tide-y-auto">
            <slot />
          </div>

          <template v-if="$slots.footer">
            <footer
              class="sticky tide-left-0 tide-bottom-0 tide-display-flex tide-axis1-end tide-gap-1 tide-padding-x-2 tide-padding-y-1/2 tide-bg-surface"
            >
              <slot name="footer" />
            </footer>
          </template>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
  .basic-modal {
    transition: backdrop-filter 0.3s ease, background-color 0.3s ease;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(4px);
  }

  .modal-body {
    width: var(--modal-width);
    max-width: calc(100% - 2rem);
    max-height: calc(100% - 2rem);
    box-shadow: 0px 10px 25px 0px rgba(18, 43, 58, 0.2);
    animation: modalOpen 300ms ease;
  }

  .modal-header {
    min-height: 5rem;
  }

  .modal-content {
    display: grid;
    grid-template-columns: 2rem 1fr 2rem;

    &:deep(> *) {
      grid-column: 2;
    }
  }

  .v-enter-from,
  .v-leave-to {
    backdrop-filter: blur(0px);
    background-color: rgba(255, 255, 255, 0);

    & .modal-body {
      transform: translateY(100vh);
    }
  }

  .v-enter-active,
  .v-leave-active {
    transition: backdrop-filter var(--animate), background-color var(--animate);

    & .modal-body {
      transition: transform var(--animate);
    }
  }

  .v-enter-to,
  .v-leave-from {
    backdrop-filter: blur(4px);
    background-color: rgba(255, 255, 255, 0.3);

    & .modal-body {
      transform: translateY(0);
    }
  }
</style>
