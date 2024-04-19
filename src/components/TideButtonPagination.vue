<script lang="ts" setup>
  import type { ElementTextAsIcon } from '../types/Element';

  import { ELEMENT_TEXT_AS_ICON } from '../types/Element';

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
      'tide-display-inline-block tide-radius-full tide-padding-1/2',
      props.element === ELEMENT_TEXT_AS_ICON.LINK ? 'tide-underline-none' : '',
      props.element === ELEMENT_TEXT_AS_ICON.DIV ? 'cursor' : '',
      'tide-font-700',
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
    <span class="label tide-display-flex tide-axis1-center tide-axis2-center">{{ props.label }}</span>
  </component>
</template>

<style scoped>
  .tide-button-icon,
  .tide-link-as-button-icon {
    border: 1px solid var(--white);
    background: var(--white);
    color: var(--secondary);
  }

  .tide-button-icon:not(:disabled):hover,
  .tide-link-as-button-icon:not(:disabled):hover {
    border: 1px solid var(--surface-variant);
    background: var(--surface-variant);
  }

  .tide-button-icon:disabled,
  .tide-link-as-button-icon:disabled {
    border: 1px solid var(--border-high);
  }

  .tide-button-icon .label,
  .tide-link-as-button-icon .label {
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
