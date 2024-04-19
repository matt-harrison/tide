<script lang="ts" setup>
  type Props = {
    heading?: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    heading: '',
  });
</script>

<template>
  <section class="tide-columns">
    <h2 class="tide-margin-bottom-1/2 tide-font-16">{{ props.heading }}</h2>

    <ul class="tide-display-flex tide-flex-wrap tide-gap-2 tide-list-none">
      <li class="tide-columns-column">
        <slot name="section1" />
      </li>

      <li class="tide-columns-column">
        <slot name="section2" />
      </li>

      <li class="tide-columns-column">
        <slot name="section3" />
      </li>

      <li class="tide-columns-column">
        <slot name="section4" />
      </li>
    </ul>
  </section>
</template>

<style>
  ul.tide-display-flex.tide-flex-wrap > .tide-columns-column {
    width: 100%;
  }

  @media (min-width: 992px) {
    ul.tide-display-flex.tide-flex-wrap > .tide-columns-column {
      width: calc((100% - 2rem) / 2);
    }
  }

  @media (min-width: 1232px) {
    ul.tide-display-flex.tide-flex-wrap > .tide-columns-column {
      width: calc((100% - 6rem) / 4);
    }
  }
</style>
