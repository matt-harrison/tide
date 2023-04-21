<script lang="ts" setup>
  import SiteButtonIcon from '@/components/SiteButtonIcon.vue';

  const props = defineProps({
    classButton: {
      default: '',
      required: false,
      type: String,
    },
    classIcon: {
      default: '',
      required: false,
      type: String,
    },
    icon: {
      required: true,
      type: String,
    },
    isActive: {
      default: false,
      required: true,
      type: Boolean,
    },
    isPrimary: {
      default: false,
      required: false,
      type: Boolean,
    },
    isRestyled: {
      default: false,
      required: false,
      type: Boolean,
    },
    isSecondary: {
      default: false,
      required: false,
      type: Boolean,
    },
    isSolid: {
      default: false,
      required: false,
      type: Boolean,
    },
  });
</script>

<template>
  <SiteButtonIcon
    :class-button="props.classButton"
    :class-icon="props.classIcon"
    :icon="icon"
    :is-primary="props.isPrimary"
    :is-secondary="props.isSecondary"
    :is-solid="props.isSolid"
    is-restyled
  />
</template>

<style scoped></style>
