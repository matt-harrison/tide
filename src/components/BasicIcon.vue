<script lang="ts" setup>
  import type { Component } from 'vue';
  import { defineAsyncComponent, markRaw, ref, watch } from 'vue';

  import type { Icon } from '../types/Icon';
  import { SIZE_ICON, type SizeIcon } from '../types/Size';

  import { formatPascalCase } from '../utilities/format';

  type Props = {
    class?: string;
    icon: Icon;
    size?: SizeIcon;
  };

  const props = withDefaults(defineProps<Props>(), {
    class: undefined,
    size: SIZE_ICON.MEDIUM,
  });

  const innerSVG = ref<Component>();

  watch(
    () => props.icon,
    () => {
      const id = props.icon as unknown;
      const name = formatPascalCase(id as string);
      const component = defineAsyncComponent(() => import(`../assets/svg/icons/Icon${name}.vue`));

      innerSVG.value = markRaw(component);
    },
    { immediate: true }
  );
</script>

<template>
  <div :class="['svg-icon', props.size]">
    <svg
      :class="props.class"
      :data-icon="icon"
      class="block"
      fill="currentColor"
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
