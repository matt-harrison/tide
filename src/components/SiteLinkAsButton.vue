<script lang="ts" setup>
  import SiteButtonStyles from '@/components/SiteButtonStyles.vue';

  const props = defineProps({
    class: {
      default: '',
      required: false,
      type: String,
    },
    iconLeading: {
      default: undefined,
      required: false,
      type: String,
    },
    iconTrailing: {
      default: undefined,
      required: false,
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
    target: {
      default: undefined,
      required: false,
      type: String,
    },
    to: {
      required: true,
      type: String,
    },
  });
</script>

<template>
  <router-link
    :target="props.target"
    :to="props.to"
    class="site-link-as-button underline-none"
  >
    <SiteButtonStyles
      :class="props.class"
      :icon-leading="props.iconLeading"
      :icon-trailing="props.iconTrailing"
      :is-primary="props.isPrimary"
      :is-restyled="props.isRestyled"
      :is-secondary="props.isSecondary"
      :is-solid="props.isSolid"
      class="site-button"
    >
      <slot />
    </SiteButtonStyles>
  </router-link>
</template>

<style scoped></style>
