<script lang="ts" setup>
  import type { Icon } from '@/types/Icon';

  import BasicIcon from '@/components/BasicIcon.vue';
  import { TARGET } from '@/types/Target';

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
</script>

<template>
  <a
    :href="props.href"
    :target="props.isNewTab ? TARGET.BLANK : TARGET.SELF"
    class="basic-link-with-icon inline-flex axis2-center gap-1/2 underline-none"
  >
    <BasicIcon
      :icon="props.iconLeading"
      v-if="props.iconLeading"
    />

    <div class="underline">{{ props.label }}</div>

    <BasicIcon
      :icon="props.iconTrailing"
      v-if="props.iconTrailing"
    />
  </a>
</template>
