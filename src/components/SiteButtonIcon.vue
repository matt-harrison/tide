<script lang="ts" setup>
  import { computed } from 'vue';

  import type { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  import SiteButtonStyles from '@/components/SiteButton.vue';

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
    isBrand: {
      default: false,
      required: false,
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

  const iconSet = computed(() => (props.isBrand ? 'brands' : props.isSolid ? 'solid' : 'regular'));
</script>

<template>
  <SiteButtonStyles
    :class="props.classButton"
    :is-primary="props.isPrimary"
    :is-secondary="props.isSecondary"
    class="flex axis1-center axis2-center radius-full ratio-1/1 underline-none"
    is-restyled
  >
    <FontAwesomeIcon
      :class="props.classIcon"
      :icon="[`fa-${iconSet}`, `fa-${props.icon}`]"
    />
  </SiteButtonStyles>
</template>

<style scoped></style>
