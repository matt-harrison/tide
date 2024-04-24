<script lang="ts" setup>
  import type { Link } from '../types/Link';

  import { CSS } from '../types/Styles';
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
    <h2 :class="[CSS.MARGIN.BOTTOM.HALF, CSS.FONT.SIZE.SIXTEEN]">
      {{ props.heading }}
    </h2>

    <ul :class="[CSS.DISPLAY.FLEX, CSS.FLEX.WRAP, CSS.GAP.TWO, CSS.LIST_BULLETS.OFF]">
      <li
        :class="[CSS.DISPLAY.FLEX, CSS.FLEX.DIRECTION.COLUMN, CSS.GAP.QUARTER, 'tide-width-1/', CSS.FONT.SIZE.FOURTEEN]"
        :key="link.label"
        v-for="link in props.links"
      >
        <a
          :class="[CSS.UNDERLINE.OFF]"
          :href="link.url"
          :target="link.isNewTab ? TARGET.BLANK : TARGET.SELF"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>
  </section>
</template>

<style>
  /* TODO: Refactor to accept breakpoint prop in order to accomplish this with neither custom breakpoints nor dependency on ViewportStore. */
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
