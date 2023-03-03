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
  });
</script>

<template>
  <button class="site-button">
    <SiteButtonStyles
      :class="props.class"
      :icon-leading="props.iconLeading"
      :icon-trailing="props.iconTrailing"
      :is-primary="props.isPrimary"
      :is-restyled="props.isRestyled"
      :is-secondary="props.isSecondary"
      :is-solid="props.isSolid"
    >
      <slot />
    </SiteButtonStyles>
  </button>
</template>

<style>
  .site-button[disabled] .site-button-styles {
    border-color: var(--gray);
    background-color: var(--gray);
    color: var(--gray-dark);
  }

  .site-button:hover .link-label {
    text-decoration: underline;
  }
</style>
