<script lang="ts" setup>
  import { CSS } from '@/types/Styles';

  type Props = {
    heading?: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    heading: '',
  });
</script>

<template>
  <section class="tide-columns">
    <h2 :class="[CSS.MARGIN.BOTTOM.HALF, CSS.FONT.SIZE.SIXTEEN]">{{ props.heading }}</h2>

    <ul :class="[CSS.DISPLAY.FLEX, CSS.FLEX.WRAP, CSS.GAP.TWO, CSS.LIST_BULLETS.OFF]">
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

<style scoped>
  .tide-columns-column {
    width: 100%;
  }

  @media (min-width: 992px) {
    .tide-columns-column {
      width: calc((100% - 2rem) / 2);
    }
  }

  @media (min-width: 1232px) {
    .tide-columns-column {
      width: calc((100% - 6rem) / 4);
    }
  }
</style>
