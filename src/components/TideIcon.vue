<script lang="ts" setup>
  import { defineAsyncComponent, markRaw, ref, watch } from 'vue';

  import type { Component } from 'vue';
  import type { Icon } from '../types/Icon';
  import type { Size } from '../types/Size';

  import { CSS } from '../types/Styles';
  import { SIZE } from '../types/Size';
  import { formatPascalCase } from '../utilities/format';

  type Props = {
    icon: Icon;
    size?: Size;
  };

  const props = withDefaults(defineProps<Props>(), {
    size: SIZE.SMALL,
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
  <div :class="['tide-icon', props.size]">
    <svg
      :class="[CSS.DISPLAY.BLOCK]"
      :data-icon="icon"
      fill="currentColor"
      viewBox="0 0 24 24"
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
  .tide-icon svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .tide-icon.small svg {
    width: 1.25rem;
    height: 1.25rem;
  }
</style>
