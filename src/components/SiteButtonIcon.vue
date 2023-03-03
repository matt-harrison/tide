<script lang="ts" setup>
  import SiteButtonStyles from '@/components/SiteButton.vue';
  import SiteIcon from '@/components/SiteIcon.vue';

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
  <SiteButtonStyles
    :class="props.classButton"
    :is-primary="props.isPrimary"
    :is-secondary="props.isSecondary"
    class="flex axis1-center axis2-center radius-full ratio-1/1 underline-none"
    is-restyled
  >
    <SiteIcon
      :class="props.classIcon"
      :icon="icon"
      :is-solid="props.isSolid"
    />
  </SiteButtonStyles>
</template>

<style scoped></style>
