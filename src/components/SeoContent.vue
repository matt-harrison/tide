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
    <h2 class="mb-1/2 font-16">{{ props.heading }}</h2>

    <ul class="flex wrap gap-2 list-none">
      <slot />
    </ul>
  </section>
</template>

<style>
  ul.flex.wrap > .w-1\/4 {
    width: 100%;
  }

  @media (min-width: 992px) {
    ul.flex.wrap > .w-1\/4 {
      width: calc((100% - 2rem) / 2);
    }
  }

  @media (min-width: 1232px) {
    ul.flex.wrap > .w-1\/4 {
      width: calc((100% - 6rem) / 4);
    }
  }
</style>
