<script lang="ts" setup>
  import { onMounted, ref, watch, type CSSProperties } from 'vue';

  import BasicIcon from '@/components/BasicIcon.vue';
  import { ICON } from '@/types/Icon';

  // TODO: replace body scroll lock with a global mixin

  type Props = {
    isOpen: boolean;
    title?: string;
    onClose: () => void;
    width?: string;
    style?: CSSProperties;
    modalStyle?: CSSProperties;
  };

  const props = defineProps<Props>();

  const emit = defineEmits(['close']);

  const savedScrollPosition = ref<number | null>(null);

  const handleClose = () => {
    if (props.onClose) props.onClose();
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

  onMounted(() => {
    updateScrollLock();
  });
</script>

<template>
  <Teleport to="body">
    <Transition>
      <div
        :class="{ open: props.isOpen }"
        :style="{ '--modal-width': props.width, ...style }"
        @click.self="handleClose"
        class="basic-modal fixed flex axis1-center axis2-center top-0 left-0 w-full h-full"
        v-show="props.isOpen"
      >
        <div
          :style="{ ...modalStyle }"
          class="modal-body theme-dark flex column radius-1/2 bg-surface font-surface xy-hidden"
        >
          <header class="modal-header relative flex axis2-center px-2">
            <div
              class="grow font-20 text-center mx-2 font-700"
              v-if="title"
            >
              {{ title }}
            </div>

            <button
              @click="handleClose"
              class="absolute right-0 mr-2"
              title="Close"
            >
              <BasicIcon :icon="ICON.XMARK" />
            </button>
          </header>

          <div class="modal-content y-auto">
            <slot />
          </div>

          <template v-if="$slots.footer">
            <footer class="sticky left-0 bottom-0 flex axis1-end gap-1 px-2 py-1/2 bg-surface">
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
