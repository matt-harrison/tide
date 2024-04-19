<script lang="ts" setup>
  import type { Link } from '../types/Link';

  import { TARGET } from '../types/Target';

  type Props = {
    heading?: string;
    links: Link[];
  };

  const props = withDefaults(defineProps<Props>(), {
    heading: '',
  });
</script>

<template>
  <section class="tide-responsive-columns">
    <h2 class="tide-margin-bottom-1/2 tide-font-16">{{ props.heading }}</h2>

    <ul class="tide-display-flex tide-flex-wrap tide-gap-2 tide-list-none">
      <li
        :key="link.label"
        class="tide-display-flex tide-flex-column tide-gap-1/4 tide-width-1/4 tide-font-14"
        v-for="link in props.links"
      >
        <a
          :href="link.url"
          :target="link.isNewTab ? TARGET.BLANK : TARGET.SELF"
          class="tide-underline-none"
        >
          {{ link.label }}
        </a>
      </li>
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
