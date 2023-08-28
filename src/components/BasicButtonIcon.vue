<script lang="ts" setup>
  import type { Element } from '@/types/Element';
  import type { Icon } from '@/types/Icon';
  import type { Priority } from '@/types/Priority';
  import type { SizeIcon } from '@/types/Size';
  import type { Tier } from '@/types/Tier';

  import BasicIcon from '@/components/BasicIcon.vue';
  import { ELEMENT } from '@/types/Element';
  import { PRIORITY } from '@/types/Priority';
  import { SIZE_ICON } from '@/types/Size';
  import { TARGET } from '@/types/Target';
  import { TIER } from '@/types/Tier';

  type Props = {
    element?: Element;
    href?: string;
    icon?: Icon;
    isNewTab?: boolean;
    priority?: Priority;
    size?: SizeIcon;
    tier?: Tier;
  };

  const props = withDefaults(defineProps<Props>(), {
    element: ELEMENT.BUTTON,
    href: undefined,
    icon: undefined,
    isNewTab: false,
    priority: undefined,
    size: SIZE_ICON.SMALL,
    tier: TIER.TIER_1,
  });
</script>

<template>
  <component
    :class="[
      props.element === ELEMENT.ANCHOR ? 'basic-link-as-button-icon' : 'basic-button-icon',
      props.size === SIZE_ICON.MEDIUM ? 'medium' : 'small',
      props.priority && props.priority,
      props.priority === PRIORITY.PRIMARY && props.tier && props.tier,
      props.priority === PRIORITY.PRIMARY && !props.tier && 'tier-1',
      'flex axis1-center axis2-center radius-full p-1/2',
      props.element === ELEMENT.ANCHOR ? 'underline-none' : '',
    ]"
    :href="props.element === ELEMENT.ANCHOR && props.href ? props.href : undefined"
    :target="props.element === ELEMENT.ANCHOR && props.isNewTab ? TARGET.BLANK : TARGET.SELF"
    :is="props.element === ELEMENT.ANCHOR ? 'a' : 'button'"
  >
    <BasicIcon
      :icon="props.icon"
      :size="props.size"
      v-if="props.icon"
    />
  </component>
</template>

<style scoped src="@/assets/css/dynamic-buttons.css" />
