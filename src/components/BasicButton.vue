<script lang="ts" setup>
  import type { Element } from '@/types/Element';
  import type { Icon } from '@/types/Icon';
  import type { Priority } from '@/types/Priority';
  import type { Size } from '@/types/Size';

  import BasicIcon from '@/components/BasicIcon.vue';
  import { ELEMENT } from '@/types/Element';
  import { PRIORITY } from '@/types/Priority';
  import { SIZE } from '@/types/Size';
  import { TARGET } from '@/types/Target';

  type Props = {
    disabled?: boolean;
    element?: Element;
    href?: string;
    iconLeading?: Icon;
    iconTrailing?: Icon;
    label: string;
    priority?: Priority;
    size?: Size;
    isNewTab?: boolean;
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
    size: SIZE.MEDIUM,
  });
</script>

<template>
  <component
    :class="[
      props.element === ELEMENT.LINK ? 'basic-link-as-button' : 'basic-button',
      props.priority && props.priority,
      props.element === ELEMENT.LINK ? 'inline-flex' : 'flex',
      'axis1-center axis2-center gap-1/2 radius-1/4',
      props.size === SIZE.SMALL && 'py-1/4 px-1/2 font-14',
      props.size === SIZE.MEDIUM && 'py-1/2 px-1',
      props.element === ELEMENT.LINK ? 'underline-none' : '',
      'font-700',
    ]"
    :disabled="props.element === ELEMENT.BUTTON && props.disabled"
    :href="props.element === ELEMENT.LINK && props.href ? props.href : undefined"
    :target="props.element === ELEMENT.LINK && props.isNewTab ? TARGET.BLANK : TARGET.SELF"
    :is="props.element === ELEMENT.LINK ? 'a' : 'button'"
  >
    <BasicIcon
      :icon="props.iconLeading"
      v-if="props.iconLeading"
    />

    {{ props.label }}

    <BasicIcon
      :icon="props.iconTrailing"
      v-if="props.iconTrailing"
    />
  </component>
</template>

<style scoped src="@/assets/css/dynamic-buttons.css" />
