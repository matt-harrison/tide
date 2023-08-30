<script lang="ts" setup>
  import { defineAsyncComponent, markRaw, ref, watch } from 'vue';

  import type { Component } from 'vue';
  import type { Icon } from '@/types/Icon';
  import type { SizeIcon } from '@/types/Size';

  import { SIZE_ICON } from '@/types/Size';
  import { formatPascalCase } from '@/utilities/format';

  type Props = {
    fill?: string;
    icon: Icon;
    size?: SizeIcon;
  };

  const props = withDefaults(defineProps<Props>(), {
    fill: 'currentColor',
    size: SIZE_ICON.SMALL,
  });

  const innerSVG = ref<Component>();

  watch(
    () => props.icon,
    () => {
      const id = props.icon as unknown;
      const name = formatPascalCase(id as string);
      const component = defineAsyncComponent(() => import(`@/assets/svg/icons/Icon${name}.vue`));

      innerSVG.value = markRaw(component);
    },
    { immediate: true }
  );
</script>

<template>
  <div :class="['svg-icon', props.size]">
    <svg
      :data-icon="icon"
      :fill="props.fill"
      class="block"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Component
        :is="innerSVG"
        v-if="innerSVG"
      />
    </svg>
  </div>
</template>

<style scoped>
  .svg-icon svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .svg-icon.small svg {
    width: 1rem;
    height: 1rem;
  }
</style>
