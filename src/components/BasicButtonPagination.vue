<script lang="ts" setup>
  import type { ElementPagination } from '@/types/Element';
  import type { Priority } from '@/types/Priority';
  import type { SizeIcon } from '@/types/Size';
  import type { Tier } from '@/types/Tier';

  import { ELEMENT_PAGINATION } from '@/types/Element';
  import { PRIORITY } from '@/types/Priority';
  import { SIZE_ICON } from '@/types/Size';
  import { TIER } from '@/types/Tier';

  type Props = {
    element?: ElementPagination;
    href?: string;
    label: string | number;
    priority?: Priority;
    size?: SizeIcon;
    target?: string;
    tier?: Tier;
  };

  const props = withDefaults(defineProps<Props>(), {
    element: ELEMENT_PAGINATION.BUTTON,
    href: undefined,
    label: undefined,
    priority: undefined,
    size: SIZE_ICON.SMALL,
    target: undefined,
    tier: TIER.TIER_1,
  });
</script>

<template>
  <component
    :class="[
      props.element === ELEMENT_PAGINATION.ANCHOR ? 'basic-link-as-button-icon' : 'basic-button-icon',
      props.size === SIZE_ICON.MEDIUM ? 'medium' : 'small',
      props.priority && props.priority,
      props.priority === PRIORITY.PRIMARY && props.tier && props.tier,
      props.priority === PRIORITY.PRIMARY && !props.tier && 'tier-1',
      'inline-block radius-full p-1/2',
      props.element === ELEMENT_PAGINATION.ANCHOR ? 'underline-none' : '',
      props.element === ELEMENT_PAGINATION.DIV ? 'cursor' : '',
      'font-700 select-none',
    ]"
    :href="props.element === ELEMENT_PAGINATION.ANCHOR && props.href ? props.href : undefined"
    :target="props.element === ELEMENT_PAGINATION.ANCHOR && props.target ? props.target : undefined"
    :is="
      props.element === ELEMENT_PAGINATION.ANCHOR ? 'a' : props.element === ELEMENT_PAGINATION.BUTTON ? 'button' : 'div'
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
