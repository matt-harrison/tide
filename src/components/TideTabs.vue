<script lang="ts" setup>
  import { ref } from 'vue';

  import type { Tab } from '../types/Tab';

  import { CSS } from '../types/Styles';

  type Props = {
    activeTabInitial?: number;
    tabs: Tab[];
  };

  const props = withDefaults(defineProps<Props>(), {
    activeTabInitial: 0,
  });

  const activeTab = ref(props.activeTabInitial);

  const handleTabClick = (event: Event, index: number) => {
    activeTab.value = index;

    props.tabs[index]?.callback(event);
  };
</script>

<template>
  <div
    :class="[
      'tide-tabs',
      'tide-bg-surface-variant',
      CSS.DISPLAY.FLEX,
      CSS.GAP.QUARTER,
      CSS.BORDER.RADIUS.HALF,
      CSS.PADDING.FULL.QUARTER,
      CSS.OVERFLOW.XY.HIDDEN,
      CSS.WIDTH.FULL,
    ]"
  >
    <button
      :class="[
        'tide-tabs-tab',
        index === activeTab
          ? ['tide-bg-surface', 'tide-font-on-surface', CSS.SHADOW.BOTTOM]
          : ['tide-font-on-surface-variant'],
        CSS.FLEX.GROW.ON,
        CSS.BORDER.RADIUS.QUARTER,
        CSS.PADDING.Y.QUARTER,
        CSS.WIDTH.FULL,
        CSS.FONT.WEIGHT.SIX_HUNDRED,
        CSS.WHITESPACE_WRAP.OFF,
      ]"
      :key="tab.label"
      @click="(event: Event) => handleTabClick(event, index)"
      v-for="(tab, index) in props.tabs"
    >
      <span :class="[CSS.FONT.WEIGHT.SIX_HUNDRED]">
        {{ tab.label }}
      </span>
      <span
        :class="[CSS.FONT.WEIGHT.SIX_HUNDRED]"
        v-if="tab.count && tab.count > 0"
      >
        ({{ tab.count }})
      </span>
    </button>
  </div>
</template>

<style scoped>
  .tide-tabs {
    max-width: 23.3rem;
  }

  .tide-tabs-tab {
    flex: 1;
    transition: background-color var(--animate);
  }
</style>
