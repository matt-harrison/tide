<script lang="ts" setup>
  import { CSS } from '@/types/Styles';

  const props = defineProps({
    disabled: {
      default: false,
      required: false,
      type: Boolean,
    },
    isActive: {
      required: true,
      type: Boolean,
    },
  });
</script>

<template>
  <button
    :class="[
      'tide-toggle',
      CSS.DISPLAY.FLEX,
      CSS.AXIS2.CENTER,
      CSS.BORDER.RADIUS.FULL,
      CSS.OVERFLOW.XY.HIDDEN,
      props.isActive ? CSS.BG.SECONDARY : CSS.BG.SURFACE.VARIANT,
    ]"
    :disabled="props.disabled"
  >
    <div
      :class="[
        'tide-toggle-indicator',
        CSS.BG.SURFACE.DEFAULT,
        props.isActive ? 'active' : '',
        CSS.POSITION.RELATIVE,
        CSS.BORDER.RADIUS.FULL,
        CSS.SHADOW.BOTTOM,
      ]"
    />
  </button>
</template>

<style scoped>
  .tide-toggle {
    width: 64px;
    height: 32px;
    transition: background-color var(--tide-animate);
  }

  .tide-toggle:disabled {
    opacity: 0.32;
  }

  .tide-toggle-indicator {
    left: 4px;
    width: 24px;
    height: 24px;
    transition: left var(--tide-animate);
  }

  .active {
    left: 36px;
  }
</style>
