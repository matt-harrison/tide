<script lang="ts" setup>
  import type { ElementTextAsIcon } from '@/types/Element';

  import { ELEMENT_TEXT_AS_ICON } from '@/types/Element';
  import { PRIORITY } from '@/types/Priority';
  import { TARGET } from '@/types/Target';

  type Props = {
    disabled?: boolean;
    element?: ElementTextAsIcon;
    href?: string;
    isNewTab?: boolean;
    label: string | number;
  };

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    element: ELEMENT_TEXT_AS_ICON.BUTTON,
    href: undefined,
    isNewTab: false,
    label: undefined,
    priority: PRIORITY.PRIMARY,
  });
</script>

<template>
  <component
    :class="[
      props.element === ELEMENT_TEXT_AS_ICON.LINK ? 'basic-link-as-button-icon' : 'basic-button-icon',
      'quaternary tide-display-inline-block tide-radius-full tide-padding-1/2',
      props.element === ELEMENT_TEXT_AS_ICON.LINK ? 'tide-underline-none' : '',
      props.element === ELEMENT_TEXT_AS_ICON.DIV ? 'cursor' : '',
      'tide-font-700',
    ]"
    :disabled="props.element === ELEMENT_TEXT_AS_ICON.BUTTON && props.disabled"
    :href="props.element === ELEMENT_TEXT_AS_ICON.LINK && props.href ? props.href : undefined"
    :target="props.element === ELEMENT_TEXT_AS_ICON.LINK && props.isNewTab ? TARGET.BLANK : TARGET.SELF"
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
  .basic-button-icon,
  .basic-link-as-button-icon {
    background: var(--white);
    border: 1px solid var(--white);
    color: var(--secondary);
  }

  .basic-button-icon:not(:disabled):hover,
  .basic-link-as-button-icon:not(:disabled):hover {
    background: var(--surface-variant);
  }

  .basic-button-icon:disabled,
  .basic-link-as-button-icon:disabled {
    border: 1px solid var(--border-high);
  }

  .basic-button-icon .label,
  .basic-link-as-button-icon .label {
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
