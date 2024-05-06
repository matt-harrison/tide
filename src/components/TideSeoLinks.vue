<script lang="ts" setup>
  import type { Link } from '@/types/Link';

  import { CSS } from '@/types/Styles';
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
  <section class="tide-seo-links">
    <h2 :class="[CSS.MARGIN.BOTTOM.HALF, CSS.FONT.SIZE.SIXTEEN]">
      {{ props.heading }}
    </h2>

    <ul :class="[CSS.DISPLAY.FLEX, CSS.FLEX.WRAP, CSS.GAP.TWO, CSS.LIST_BULLETS.OFF]">
      <li
        :class="['tide-seo-link', CSS.DISPLAY.FLEX, CSS.FLEX.DIRECTION.COLUMN, CSS.GAP.QUARTER, CSS.FONT.SIZE.FOURTEEN]"
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

<style scoped>
  /* TODO: Refactor to accept breakpoint prop in order to accomplish this with neither custom breakpoints nor dependency on ViewportStore. */
  .tide-seo-link {
    width: 100%;
  }

  @media (min-width: 992px) {
    .tide-seo-link {
      width: calc((100% - 2rem) / 2);
    }
  }

  @media (min-width: 1232px) {
    .tide-seo-link {
      width: calc((100% - 6rem) / 4);
    }
  }
</style>
