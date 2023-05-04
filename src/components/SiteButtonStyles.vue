<script lang="ts" setup>
  import type { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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
  <div
    :class="[
      props.class,
      props.isRestyled ? '' : 'flex axis1-center axis2-center gap-1/2 border-2 radius-1/2 p-1 font-700',
      props.isPrimary ? 'primary' : '',
      props.isSecondary ? 'secondary' : '',
    ]"
    class="site-button-styles"
  >
    <FontAwesomeIcon
      :icon="[props.isSolid ? 'fa-solid' : 'fa-regular', `fa-${props.iconLeading}`]"
      v-if="props.iconLeading"
    />

    <slot />

    <FontAwesomeIcon
      :icon="[props.isSolid ? 'fa-solid' : 'fa-regular', `fa-${props.iconTrailing}`]"
      v-if="props.iconTrailing"
    />
  </div>
</template>

<style scoped>
  .primary,
  .secondary:hover {
    border-color: var(--primary);
    background-color: var(--primary);
    color: var(--white);
  }

  .secondary,
  .primary:hover {
    border-color: var(--primary);
    background-color: var(--white);
    color: var(--primary);
  }
</style>
