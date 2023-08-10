<script lang="ts" setup>
  import type { Icon } from '@/types/Icon';
  import type { Priority } from '@/types/Priority';
  import type { SizeIcon } from '@/types/Size';
  import type { Tier } from '@/types/Tier';

  import BasicIcon from '@/components/BasicIcon.vue';
  import { PRIORITY } from '@/types/Priority';

  type Props = {
    href?: string;
    icon?: Icon;
    priority?: Priority;
    size?: SizeIcon;
    target?: string;
    tier?: Tier;
  };

  const props = defineProps<Props>();
</script>

<template>
  <component
    :class="[
      props.href ? 'basic-link-as-button-icon' : 'basic-button-icon',
      props.priority && props.priority,
      props.priority === PRIORITY.PRIMARY && props.tier && props.tier,
      props.priority === PRIORITY.PRIMARY && !props.tier && 'tier-1',
      'flex axis1-center axis2-center radius-full p-1/2',
    ]"
    :href="props.href"
    :target="props.href && props.target ? props.target : undefined"
    :is="props.href ? 'a' : 'button'"
  >
    <BasicIcon
      :icon="props.icon"
      :size="props.size"
      v-if="props.icon"
    />
    <slot />
  </component>
</template>

<style scoped src="@/assets/css/dynamic-buttons.css" />
