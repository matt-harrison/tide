<script lang="ts" setup>
  import type { Element } from '@/types/Element';
  import type { Icon } from '@/types/Icon';
  import type { Priority } from '@/types/Priority';

  import TideIcon from '@/components/TideIcon.vue';
  import { CSS } from '@/types/Styles';
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
      props.element === ELEMENT.LINK ? [CSS.DISPLAY.INLINE_FLEX] : [CSS.DISPLAY.FLEX],
      [CSS.AXIS1.CENTER, CSS.AXIS2.CENTER, CSS.GAP.HALF, CSS.BORDER.RADIUS.HALF],
      props.element === ELEMENT.LINK ? CSS.UNDERLINE.OFF : '',
      CSS.PADDING.Y.ONE,
      CSS.PADDING.X.TWO,
      CSS.FONT.WEIGHT.SIX_HUNDRED,
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
