<script lang="ts" setup>
  import type { ElementTextAsIcon } from '@/types/Element';
  import type { Priority } from '@/types/Priority';
  import type { SizeIcon } from '@/types/Size';
  import type { Tier } from '@/types/Tier';

  import { ELEMENT_TEXT_AS_ICON } from '@/types/Element';
  import { PRIORITY } from '@/types/Priority';
  import { SIZE_ICON } from '@/types/Size';
  import { TARGET } from '@/types/Target';
  import { TIER } from '@/types/Tier';

  type Props = {
    disabled?: boolean;
    element?: ElementTextAsIcon;
    href?: string;
    isNewTab?: boolean;
    label: string | number;
    priority?: Priority;
    size?: SizeIcon;
    tier?: Tier;
  };

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    element: ELEMENT_TEXT_AS_ICON.BUTTON,
    href: undefined,
    isNewTab: false,
    label: undefined,
    priority: PRIORITY.PRIMARY,
    size: SIZE_ICON.SMALL,
    tier: TIER.TIER_1,
  });
</script>

<template>
  <component
    :class="[
      props.element === ELEMENT_TEXT_AS_ICON.LINK ? 'basic-link-as-button-icon' : 'basic-button-icon',
      props.size === SIZE_ICON.MEDIUM ? 'medium' : 'small',
      props.priority && props.priority,
      props.priority === PRIORITY.PRIMARY && props.tier && props.tier,
      props.priority === PRIORITY.PRIMARY && !props.tier && 'tier-1',
      'inline-block radius-full p-1/2',
      props.element === ELEMENT_TEXT_AS_ICON.LINK ? 'underline-none' : '',
      props.element === ELEMENT_TEXT_AS_ICON.DIV ? 'cursor' : '',
      'font-700 select-none',
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
    <span class="label flex axis1-center axis2-center">{{ props.label }}</span>
  </component>
</template>

<style scoped src="@/assets/css/dynamic-buttons.css" />
<style>
  .basic-button-icon.medium .label,
  .basic-link-as-button-icon.medium .label {
    width: 1.5rem;
    height: 1.5rem;
  }

  .basic-button-icon.small .label,
  .basic-link-as-button-icon.small .label {
    width: 1rem;
    height: 1rem;
  }
</style>
