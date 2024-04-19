<script lang="ts" setup>
  import { computed } from 'vue';

  import type { Element } from '@/types/Element';
  import type { Icon } from '@/types/Icon';

  import TideIcon from '@/components/TideIcon.vue';
  import { ELEMENT } from '@/types/Element';
  import { TARGET } from '@/types/Target';
  import { isSinglePageApp } from '@/config/main.config';

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
      hasIcon ? 'tide-display-inline-flex tide-axis2-center tide-gap-1/2' : 'tide-font-700 tide-underline',
    ]"
    :href="isSinglePageApp ? undefined : props.href"
    :target="props.isNewTab ? TARGET.BLANK : TARGET.SELF"
    :to="isSinglePageApp ? props.href : undefined"
    :is="props.element === ELEMENT.LINK ? ELEMENT.LINK : ELEMENT.BUTTON"
  >
    <TideIcon
      :icon="props.iconLeading"
      v-if="props.iconLeading"
    />

    <div
      class="tide-font-700 tide-underline"
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
