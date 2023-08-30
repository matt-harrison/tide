<script lang="ts" setup>
  import type { Icon } from '@/types/Icon';

  import BasicIcon from '@/components/BasicIcon.vue';

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
      v-if="props.iconLeading"
    />

    <div class="underline">
      <slot />
    </div>

    <BasicIcon
      :icon="props.iconTrailing"
      v-if="props.iconTrailing"
    />
  </button>
</template>
