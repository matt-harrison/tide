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
    icon: Icon;
    isNewTab?: boolean;
    priority?: Priority;
  };

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    element: ELEMENT.BUTTON,
    href: undefined,
    icon: undefined,
    isNewTab: false,
    priority: PRIORITY.PRIMARY,
  });
</script>

<template>
  <component
    :class="[
      props.element === ELEMENT.LINK ? 'tide-link-as-button-icon' : 'tide-button-icon',
      props.priority && props.priority,
      'tide-display-flex tide-axis1-center tide-axis2-center tide-radius-full tide-padding-1/2',
      props.element === ELEMENT.LINK ? 'tide-underline-none' : '',
    ]"
    :disabled="props.element === ELEMENT.BUTTON && props.disabled"
    :href="props.element === ELEMENT.LINK && props.href ? props.href : undefined"
    :target="props.element === ELEMENT.LINK && props.isNewTab ? TARGET.BLANK : TARGET.SELF"
    :is="props.element === ELEMENT.LINK ? 'a' : 'button'"
  >
    <TideIcon
      :icon="props.icon"
      :size="SIZE.LARGE"
      v-if="props.icon"
    />
  </component>
</template>

<style scoped src="../assets/css/dynamic-buttons.css" />
