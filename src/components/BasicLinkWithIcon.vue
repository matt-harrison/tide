<script lang="ts" setup>
  import type { Icon } from '@/types/Icon';

  import SvgIcon from '@/components/SvgIcon.vue';
  import { SIZE_ICON } from '@/types/Size';

  type Props = {
    classIcon?: string;
    iconLeading?: Icon;
    iconTrailing?: Icon;
    target?: string;
    to: string;
  };

  const props = defineProps<Props>();
</script>

<template>
  <a
    :href="props.to"
    :target="props.target"
    class="basic-link-with-icon inline-flex axis2-center gap-1/2 underline-none"
  >
    <SvgIcon
      :class="classIcon"
      :icon="props.iconLeading"
      :size="SIZE_ICON.SMALL"
      v-if="props.iconLeading"
    />

    <div class="underline">
      <slot />
    </div>

    <SvgIcon
      :class="classIcon"
      :icon="props.iconTrailing"
      :size="SIZE_ICON.SMALL"
      v-if="props.iconTrailing"
    />
  </a>
</template>
