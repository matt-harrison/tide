<script lang="ts" setup>
  import type { ElementTextAsIcon } from '@/types/Element';

  import { CSS } from '@/types/Styles';
  import { ELEMENT_TEXT_AS_ICON } from '@/types/Element';

  type Props = {
    disabled?: boolean;
    element?: ElementTextAsIcon;
    href?: string;
    label: string | number;
  };

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    element: ELEMENT_TEXT_AS_ICON.BUTTON,
    href: undefined,
    label: undefined,
  });
</script>

<template>
  <component
    :class="[
      props.element === ELEMENT_TEXT_AS_ICON.LINK ? 'tide-link-as-button-icon' : 'tide-button-icon',
      [CSS.DISPLAY.INLINE_BLOCK, CSS.BORDER.RADIUS.FULL, CSS.PADDING.FULL.HALF],
      props.element === ELEMENT_TEXT_AS_ICON.LINK ? [CSS.UNDERLINE.OFF] : '',
      props.element === ELEMENT_TEXT_AS_ICON.DIV ? [CSS.CURSOR.POINTER] : '',
      [CSS.FONT.WEIGHT.SEVEN_HUNDRED],
    ]"
    :disabled="props.element === ELEMENT_TEXT_AS_ICON.BUTTON && props.disabled"
    :href="props.element === ELEMENT_TEXT_AS_ICON.LINK && props.href ? props.href : undefined"
    :is="
      props.element === ELEMENT_TEXT_AS_ICON.LINK
        ? 'a'
        : props.element === ELEMENT_TEXT_AS_ICON.BUTTON
        ? 'button'
        : 'div'
    "
  >
    <span :class="['label', CSS.DISPLAY.FLEX, CSS.AXIS1.CENTER, CSS.AXIS2.CENTER]">
      {{ props.label }}
    </span>
  </component>
</template>

<style scoped>
  .tide-button-icon,
  .tide-link-as-button-icon {
    border: 1px solid var(--tide-white);
    background: var(--tide-white);
    color: var(--tide-secondary);
  }

  .tide-button-icon:not(:disabled):hover,
  .tide-link-as-button-icon:not(:disabled):hover {
    border: 1px solid var(--tide-surface-variant);
    background: var(--tide-surface-variant);
  }

  .tide-button-icon:disabled,
  .tide-link-as-button-icon:disabled {
    border: 1px solid var(--tide-border-high);
  }

  .tide-button-icon .label,
  .tide-link-as-button-icon .label {
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
