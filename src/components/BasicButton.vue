<script lang="ts" setup>
  import type { Element } from '@/types/Element';
  import type { Icon } from '@/types/Icon';
  import type { Priority } from '@/types/Priority';
  import type { SizeButton } from '@/types/Size';
  import type { Tier } from '@/types/Tier';

  import BasicIcon from '@/components/BasicIcon.vue';
  import { ELEMENT } from '@/types/Element';
  import { PRIORITY } from '@/types/Priority';
  import { SIZE_BUTTON, SIZE_ICON } from '@/types/Size';
  import { TARGET } from '@/types/Target';
  import { TIER } from '@/types/Tier';

  type Props = {
    disabled?: boolean;
    element?: Element;
    href: string;
    iconLeading?: Icon;
    iconTrailing?: Icon;
    label: string;
    priority?: Priority;
    size?: SizeButton;
    isNewTab?: boolean;
    tier?: Tier;
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
    size: SIZE_BUTTON.MEDIUM,
    tier: TIER.TIER_1,
  });
</script>

<template>
  <component
    :class="[
      props.element === ELEMENT.ANCHOR ? 'basic-link-as-button' : 'basic-button',
      props.priority && props.priority,
      props.priority === PRIORITY.PRIMARY && props.tier && props.tier,
      props.priority === PRIORITY.PRIMARY && !props.tier && 'tier-1',
      props.element === ELEMENT.ANCHOR ? 'inline-flex' : 'flex',
      'axis1-center axis2-center gap-1/2 radius-1/4',
      props.size === SIZE_BUTTON.SMALL && 'py-1/4 px-1/2 font-14',
      (SIZE_BUTTON.MEDIUM || !props.size) && 'py-1/2 px-1',
      props.size === SIZE_BUTTON.LARGE && 'py-1 px-2',
      props.element === ELEMENT.ANCHOR ? 'underline-none' : '',
      'font-700',
    ]"
    :disabled="props.element === ELEMENT.BUTTON && props.disabled"
    :href="props.element === ELEMENT.ANCHOR && props.href ? props.href : undefined"
    :target="props.element === ELEMENT.ANCHOR && props.isNewTab ? TARGET.BLANK : TARGET.SELF"
    :is="props.element === ELEMENT.ANCHOR ? 'a' : 'button'"
  >
    <BasicIcon
      :icon="props.iconLeading"
      :size="SIZE_ICON.SMALL"
      v-if="props.iconLeading"
    />

    {{ props.label }}

    <BasicIcon
      :icon="props.iconTrailing"
      :size="SIZE_ICON.SMALL"
      v-if="props.iconTrailing"
    />
  </component>
</template>

<style scoped src="@/assets/css/dynamic-buttons.css" />
