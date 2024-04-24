<script lang="ts" setup>
  import { computed } from 'vue';

  import type { Element } from '../types/Element';
  import type { Icon } from '../types/Icon';

  import TideIcon from './TideIcon.vue';
  import { CSS } from '../types/Styles';
  import { ELEMENT } from '../types/Element';
  import { TARGET } from '../types/Target';

  type Props = {
    element?: Element;
    href?: string;
    iconLeading?: Icon;
    iconTrailing?: Icon;
    isNewTab?: boolean;
    label: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    element: ELEMENT.LINK,
    href: undefined,
    iconLeading: undefined,
    iconTrailing: undefined,
    isNewTab: false,
    label: undefined,
  });

  const hasIcon = computed(() => props.iconLeading || props.iconTrailing);
</script>

<template>
  <component
    :class="[
      props.element === ELEMENT.LINK ? 'tide-button-as-link' : 'tide-link',
      hasIcon
        ? [CSS.DISPLAY.INLINE_FLEX, CSS.AXIS2.CENTER, CSS.GAP.HALF]
        : [CSS.FONT.WEIGHT.SEVEN_HUNDRED, CSS.UNDERLINE],
    ]"
    :href="props.href"
    :target="props.isNewTab ? TARGET.BLANK : TARGET.SELF"
    :is="props.element === ELEMENT.LINK ? ELEMENT.LINK : ELEMENT.BUTTON"
  >
    <TideIcon
      :icon="props.iconLeading"
      v-if="props.iconLeading"
    />

    <div
      :class="[CSS.FONT.WEIGHT.SEVEN_HUNDRED, CSS.UNDERLINE]"
      v-if="hasIcon"
    >
      {{ props.label }}
    </div>

    <template v-else>
      {{ props.label }}
    </template>

    <TideIcon
      :icon="props.iconTrailing"
      v-if="props.iconTrailing"
    />
  </component>
</template>
