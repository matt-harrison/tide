<script lang="ts" setup>
  import BasicIcon from '@/components/BasicIcon.vue';
  import { ICON } from '@/types/Icon';

  type Props = {
    href: string;
    label: string;
  };

  const props = defineProps<Props>();
</script>

<template>
  <a
    :href="props.href"
    class="basic-chip-action secondary flex axis2-center gap-1/2 radius-full py-1/2 px-1 font-14 font-600 underline-none"
  >
    <BasicIcon :icon="ICON.MAGNIFYING_GLASS" />

    <span>{{ props.label }}</span>
  </a>
</template>

<style scoped src="@/assets/css/dynamic-buttons.css" />
