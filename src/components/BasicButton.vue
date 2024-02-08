<script lang="ts" setup>
  import { RouterLink } from 'vue-router';

  import type { Element } from '@/types/Element';
  import type { Icon } from '@/types/Icon';
  import type { Priority } from '@/types/Priority';
  import type { SizeButton } from '@/types/Size';
  import type { Tier } from '@/types/Tier';

  import BasicIcon from '@/components/BasicIcon.vue';
  import { ELEMENT } from '@/types/Element';
  import { PRIORITY } from '@/types/Priority';
  import { SIZE_BUTTON } from '@/types/Size';
  import { TARGET } from '@/types/Target';
  import { TIER } from '@/types/Tier';
  import { isSinglePageApp } from '@/config/main.config';

  type Props = {
    disabled?: boolean;
    element?: Element;
    href?: string;
    iconLeading?: Icon;
    iconTrailing?: Icon;
    isNewTab?: boolean;
    label: string;
    priority?: Priority;
    size?: SizeButton;
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

  const linkElement = isSinglePageApp && props.isNewTab === false ? RouterLink : 'a';
</script>

<template>
  <component
    :class="[
      props.element === ELEMENT.LINK ? 'basic-link-as-button' : 'basic-button',
      props.priority && props.priority,
      props.priority === PRIORITY.PRIMARY && props.tier && props.tier,
      props.element === ELEMENT.LINK ? 'tide-display-inline-flex' : 'tide-display-flex',
      'tide-axis1-center tide-axis2-center tide-gap-1/2 tide-radius-1/4',
      props.size === SIZE_BUTTON.SMALL && 'tide-padding-y-1/4 tide-padding-x-3/4 tide-font-14',
      props.size === SIZE_BUTTON.MEDIUM && 'tide-padding-y-1/2 tide-padding-x-1',
      props.size === SIZE_BUTTON.LARGE && 'tide-padding-y-3/4 tide-padding-x-3/2',
      props.element === ELEMENT.LINK ? 'tide-underline-none' : '',
      'tide-font-700',
    ]"
    :disabled="props.element === ELEMENT.BUTTON && props.disabled"
    :href="props.element === ELEMENT.LINK && props.href ? props.href : undefined"
    :target="props.element === ELEMENT.LINK && props.isNewTab ? TARGET.BLANK : TARGET.SELF"
    :is="props.element === ELEMENT.LINK ? linkElement : 'button'"
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
