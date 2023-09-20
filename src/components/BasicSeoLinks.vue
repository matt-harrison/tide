<script lang="ts" setup>
  import type { Link } from '@/types/Link';

  import { TARGET } from '@/types/Target';

  type Props = {
    heading?: string;
    links: Link[];
  };

  const props = withDefaults(defineProps<Props>(), {
    heading: '',
  });
</script>

<template>
  <section class="basic-responsive-columns">
    <h2 class="mb-1/2 font-16">{{ props.heading }}</h2>

    <ul class="flex wrap gap-2 list-none">
      <li
        :key="link.label"
        class="flex column gap-1/4 w-1/4 font-14"
        v-for="link in props.links"
      >
        <a
          :href="link.url"
          :target="link.isNewTab ? TARGET.BLANK : TARGET.SELF"
          class="underline-none"
        >
          {{ link.label }}
        </a>
      </li>
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
