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
    isSolid: {
      default: false,
      required: false,
      type: Boolean,
    },
    target: {
      default: '_self',
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
    class="site-link-with-icon inline-block underline-none"
  >
    <SiteButtonStyles
      :class="props.class"
      :icon-leading="props.iconLeading"
      :icon-trailing="props.iconTrailing"
      :is-solid="props.isSolid"
      class="flex axis2-center gap-1/2"
      is-restyled
    >
      <div class="site-button-content">
        <slot />
      </div>
    </SiteButtonStyles>
  </router-link>
</template>

<style scoped>
  .site-link-with-icon .site-button-content {
    text-decoration: underline;
  }
</style>
