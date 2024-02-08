<script lang="ts" setup>
  const props = defineProps({
    heading: {
      default: '',
      required: false,
      type: String,
    },
  });
</script>

<template>
  <section class="seo-content">
    <h2 class="tide-margin-bottom-1/2 tide-font-16">{{ props.heading }}</h2>

    <ul class="tide-display-flex tide-flex-wrap tide-gap-2 tide-list-none">
      <slot />
    </ul>
  </section>
</template>

<style>
  ul.tide-display-flex.tide-flex-wrap > .tide-width-1\/4 {
    width: 100%;
  }

  @media (min-width: 992px) {
    ul.tide-display-flex.tide-flex-wrap > .tide-width-1\/4 {
      width: calc((100% - 2rem) / 2);
    }
  }

  @media (min-width: 1232px) {
    ul.tide-display-flex.tide-flex-wrap > .tide-width-1\/4 {
      width: calc((100% - 6rem) / 4);
    }
  }
</style>
