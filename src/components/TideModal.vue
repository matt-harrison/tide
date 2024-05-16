<script lang="ts" setup>
  import { onMounted, ref, watch, type CSSProperties } from 'vue';

  import TideIcon from '@/components/TideIcon.vue';
  import { CSS } from '@/types/Styles';
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

  const isOpen = ref(props.isOpen);
  const savedScrollPosition = ref<number | null>(null);

  const handleClose = (event: Event) => {
    isOpen.value = false;

    updateModalDisplay();
    emit('close', event);
  };

  const updateModalDisplay = () => {
    if (isOpen.value) {
      savedScrollPosition.value = window.scrollY;
      document.body.style.overflow = 'hidden';
      savedScrollPosition.value && window.scrollTo(0, savedScrollPosition.value);

      addOpenListeners();
    } else {
      document.body.style.overflow = '';

      removeOpenListeners();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.stopPropagation();
      handleClose(event);
    }
  };

  const addOpenListeners = () => {
    window.addEventListener('keydown', handleKeyDown);
  };

  const removeOpenListeners = () => {
    window.removeEventListener('keydown', handleKeyDown);
  };

  onMounted(() => {
    updateModalDisplay();
  });

  watch(props, (newValue) => {
    isOpen.value = newValue.isOpen;

    updateModalDisplay();
  });
</script>

<template>
  <Teleport to="body">
    <Transition>
      <div
        :class="[
          'tide-modal-wrapper',
          CSS.POSITION.ABSOLUTE,
          CSS.DISPLAY.FLEX,
          CSS.AXIS1.CENTER,
          CSS.AXIS2.CENTER,
          CSS.POSITIONING.TOP_0,
          CSS.POSITIONING.LEFT_0,
          CSS.WIDTH.FULL,
          CSS.HEIGHT.FULL,
        ]"
        v-show="isOpen"
      >
        <div
          :class="['tide-modal-bg', CSS.POSITION.ABSOLUTE, CSS.WIDTH.FULL, CSS.HEIGHT.FULL]"
          :style="{ '--tide-modal-width': props.width, ...style }"
          @click.self="handleClose"
        />
        <div
          :class="[
            'tide-modal',
            CSS.BG.SURFACE.FLOATING,
            CSS.FONT.COLOR.SURFACE.DEFAULT,
            CSS.POSITION.ABSOLUTE,
            CSS.DISPLAY.FLEX,
            CSS.FLEX.DIRECTION.COLUMN,
            CSS.BORDER.RADIUS.HALF,
            CSS.OVERFLOW.XY.HIDDEN,
          ]"
          :style="{ ...modalStyle }"
        >
          <header
            :class="['modal-header', CSS.POSITION.RELATIVE, CSS.DISPLAY.FLEX, CSS.AXIS2.CENTER, CSS.PADDING.X.TWO]"
          >
            <div
              :class="[CSS.FLEX.GROW.ON, CSS.FONT.SIZE.TWENTY, CSS.ALIGN.X.CENTER, CSS.FONT.WEIGHT.SEVEN_HUNDRED]"
              v-if="title"
            >
              {{ title }}
            </div>

            <button
              :class="[CSS.POSITION.ABSOLUTE, CSS.POSITIONING.RIGHT_0, CSS.MARGIN.RIGHT.TWO]"
              @click="handleClose"
              title="Close"
            >
              <TideIcon :icon="ICON.CLOSE" />
            </button>
          </header>

          <div :class="['model-content', CSS.OVERFLOW.Y.AUTO]">
            <slot />
          </div>

          <template v-if="$slots.footer">
            <footer
              :class="[
                'tide-bg-surface',
                CSS.POSITION.STICKY,
                CSS.POSITIONING.LEFT_0,
                CSS.POSITIONING.BOTTOM_0,
                CSS.DISPLAY.FLEX,
                CSS.AXIS1.END,
                CSS.GAP.ONE,
                CSS.PADDING.X.TWO,
                CSS.PADDING.Y.HALF,
              ]"
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
  .tide-modal-bg {
    transition: backdrop-filter 0.3s ease, background-color 0.3s ease;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(4px);
  }

  .tide-modal {
    width: var(--tide-modal-width);
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

    & .tide-modal {
      transform: translateY(100vh);
    }
  }

  .v-enter-active,
  .v-leave-active {
    transition: backdrop-filter var(--tide-animate), background-color var(--tide-animate);

    & .tide-modal {
      transition: transform var(--tide-animate);
    }
  }

  .v-enter-to,
  .v-leave-from {
    backdrop-filter: blur(4px);
    background-color: rgba(255, 255, 255, 0.3);

    & .tide-modal {
      transform: translateY(0);
    }
  }
</style>
