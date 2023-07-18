<script lang="ts" setup>
  import type { Icon } from '@/types/Icon';
  import type { Priority } from '@/types/Priority';
  import type { SizeButton } from '@/types/Size';
  import type { Tier } from '@/types/Tier';

  import SvgIcon from '@/components/SvgIcon.vue';
  import { PRIORITY } from '@/types/Priority';
  import { SIZE_BUTTON, SIZE_ICON } from '@/types/Size';

  type Props = {
    href?: string;
    iconLeading?: Icon;
    iconTrailing?: Icon;
    priority?: Priority;
    size?: SizeButton;
    target?: string;
    tier?: Tier;
  };

  const props = withDefaults(defineProps<Props>(), {
    href: undefined,
    iconLeading: undefined,
    iconTrailing: undefined,
    priority: undefined,
    size: SIZE_BUTTON.MEDIUM,
    target: undefined,
    tier: undefined,
  });

  let padding = '';

  switch (props.size) {
    case SIZE_BUTTON.LARGE:
      padding = 'py-3/4 px-3/2';
      break;
    case SIZE_BUTTON.MEDIUM:
      padding = 'py-1/2 px-1';
      break;
    case SIZE_BUTTON.SMALL:
      padding = 'py-1/2 px-3/4';
      break;
  }
</script>

<template>
  <component
    :class="[
      props.href ? 'basic-link-as-button' : 'basic-button',
      props.priority && props.priority,
      props.priority === PRIORITY.PRIMARY && props.tier && props.tier,
      props.priority === PRIORITY.PRIMARY && !props.tier && 'tier-1',
      'flex axis1-center axis2-center gap-1/2 radius-1/4',
      padding,
      props.size === SIZE_BUTTON.SMALL && 'font-14',
      props.href ? 'underline-none' : '',
      'font-700',
    ]"
    :href="props.href"
    :target="props.href && props.target ? props.target : undefined"
    :is="props.href ? 'a' : 'button'"
  >
    <SvgIcon
      :icon="props.iconLeading"
      :size="SIZE_ICON.SMALL"
      v-if="props.iconLeading"
    />

    <slot />

    <SvgIcon
      :icon="props.iconTrailing"
      :size="SIZE_ICON.SMALL"
      v-if="props.iconTrailing"
    />
  </component>
</template>

<style scoped src="@/assets/css/dynamic-buttons.css" />
