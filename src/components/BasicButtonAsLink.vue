<script lang="ts" setup>
  import type { Icon } from '@/types/Icon';

  import BasicIcon from '@/components/BasicIcon.vue';
  import { SIZE_ICON } from '@/types/Size';

  type Props = {
    iconLeading?: Icon;
    iconTrailing?: Icon;
    isPrimary?: boolean;
  };

  const props = defineProps<Props>();
</script>

<template>
  <button class="basic-button-as-link flex axis1-center axis2-center gap-1/2">
    <BasicIcon
      :icon="props.iconLeading"
      :size="SIZE_ICON.SMALL"
      v-if="props.iconLeading"
    />

    <div class="underline">
      <slot />
    </div>

    <BasicIcon
      :icon="props.iconTrailing"
      :size="SIZE_ICON.SMALL"
      v-if="props.iconTrailing"
    />
  </button>
</template>
