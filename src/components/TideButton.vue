<script lang="ts" setup>
  import type { Element } from '../types/Element';
  import type { Icon } from '../types/Icon';
  import type { Priority } from '../types/Priority';

  import TideIcon from './TideIcon.vue';
  import { ELEMENT } from '../types/Element';
  import { PRIORITY } from '../types/Priority';
  import { SIZE } from '../types/Size';
  import { TARGET } from '../types/Target';

  type Props = {
    disabled?: boolean;
    element?: Element;
    href?: string;
    iconLeading?: Icon;
    iconTrailing?: Icon;
    isNewTab?: boolean;
    label: string;
    priority?: Priority;
  };

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    element: ELEMENT.BUTTON,
    href: undefined,
    iconLeading: undefined,
    iconTrailing: undefined,
    isNewTab: false,
    label: undefined,
    priority: PRIORITY.PRIMARY,
  });
</script>

<template>
  <component
    :class="[
      props.element === ELEMENT.LINK ? 'tide-link-as-button' : 'tide-button',
      props.priority && props.priority,
      props.element === ELEMENT.LINK ? 'tide-display-inline-flex' : 'tide-display-flex',
      'tide-axis1-center tide-axis2-center tide-gap-1/2 tide-radius-1/2',
      props.element === ELEMENT.LINK ? 'tide-underline-none' : '',
      'tide-padding-y-1 tide-padding-x-2 tide-font-600',
    ]"
    :disabled="props.element === ELEMENT.BUTTON && props.disabled"
    :href="props.element === ELEMENT.LINK && props.href ? props.href : undefined"
    :target="props.element === ELEMENT.LINK && props.isNewTab ? TARGET.BLANK : TARGET.SELF"
    :is="props.element === ELEMENT.LINK ? ELEMENT.LINK : ELEMENT.BUTTON"
  >
    <TideIcon
      :icon="props.iconLeading"
      :size="SIZE.LARGE"
      v-if="props.iconLeading"
    />

    {{ props.label }}

    <TideIcon
      :icon="props.iconTrailing"
      :size="SIZE.LARGE"
      v-if="props.iconTrailing"
    />
  </component>
</template>

<style scoped src="../assets/css/dynamic-buttons.css" />
