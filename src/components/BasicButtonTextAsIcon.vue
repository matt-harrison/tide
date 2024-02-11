<script lang="ts" setup>
  import type { ElementTextAsIcon } from '@/types/Element';
  import type { Priority } from '@/types/Priority';

  import { ELEMENT_TEXT_AS_ICON } from '@/types/Element';
  import { PRIORITY } from '@/types/Priority';
  import { TARGET } from '@/types/Target';

  type Props = {
    disabled?: boolean;
    element?: ElementTextAsIcon;
    href?: string;
    isNewTab?: boolean;
    label: string | number;
    priority?: Priority;
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
      props.priority && props.priority,
      'tide-display-inline-block tide-radius-full tide-padding-1/2',
      props.element === ELEMENT_TEXT_AS_ICON.LINK ? 'tide-underline-none' : '',
      props.element === ELEMENT_TEXT_AS_ICON.DIV ? 'cursor' : '',
      'tide-font-700 select-none',
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

<style scoped src="@/assets/css/dynamic-buttons.css" />
<style>
  .basic-button-icon .label,
  .basic-link-as-button-icon .label {
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
