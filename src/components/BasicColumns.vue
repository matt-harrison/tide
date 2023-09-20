<script lang="ts" setup>
  type Props = {
    heading?: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    heading: '',
  });
</script>

<template>
  <section class="basic-columns">
    <h2 class="mb-1/2 font-16">{{ props.heading }}</h2>

    <ul class="flex wrap gap-2 list-none">
      <li class="basic-columns-column">
        <slot name="section1" />
      </li>

      <li class="basic-columns-column">
        <slot name="section2" />
      </li>

      <li class="basic-columns-column">
        <slot name="section3" />
      </li>

      <li class="basic-columns-column">
        <slot name="section4" />
      </li>
    </ul>
  </section>
</template>

<style>
  ul.flex.wrap > .basic-columns-column {
    width: 100%;
  }

  @media (min-width: 992px) {
    ul.flex.wrap > .basic-columns-column {
      width: calc((100% - 2rem) / 2);
    }
  }

  @media (min-width: 1232px) {
    ul.flex.wrap > .basic-columns-column {
      width: calc((100% - 6rem) / 4);
    }
  }
</style>
