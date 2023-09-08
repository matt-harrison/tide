<script lang="ts" setup>
  import { computed } from 'vue';
  import { RouterLink } from 'vue-router';

  import type { Icon } from '@/types/Icon';

  import BasicIcon from '@/components/BasicIcon.vue';
  import { TARGET } from '@/types/Target';
  import { isSinglePageApp } from '@/config/main.config';

  type Props = {
    href: string;
    iconLeading?: Icon;
    iconTrailing?: Icon;
    isNewTab?: boolean;
    label: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    href: undefined,
    iconLeading: undefined,
    iconTrailing: undefined,
    isNewTab: false,
    label: undefined,
  });

  const hasIcon = computed(() => props.iconLeading || props.iconTrailing);

  // Once the SPA is released, we can simplify this logic to use "router-link" for internal links (isNewTab = false) and "a" for external links (isNewTab = true).
  const component = isSinglePageApp && props.isNewTab === false ? RouterLink : 'a';
</script>

<template>
  <component
    :class="hasIcon ? 'basic-link-with-icon inline-flex axis2-center gap-1/2 underline-none' : 'basic-link'"
    :href="isSinglePageApp ? undefined : props.href"
    :target="props.isNewTab ? TARGET.BLANK : TARGET.SELF"
    :to="isSinglePageApp ? props.href : undefined"
    :is="component"
  >
    <BasicIcon
      :icon="props.iconLeading"
      v-if="props.iconLeading"
    />

    <div
      class="underline"
      v-if="hasIcon"
    >
      {{ props.label }}
    </div>

    <template v-else>
      {{ props.label }}
    </template>

    <BasicIcon
      :icon="props.iconTrailing"
      v-if="props.iconTrailing"
    />
  </component>
</template>
