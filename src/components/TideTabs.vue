<script lang="ts" setup>
  import { ref } from 'vue';

  import type { Tab } from '@/types/Tab';

  import { CSS } from '@/types/Styles';

  type Props = {
    activeTabInitial?: number;
    tabs: Tab[];
  };

  const props = withDefaults(defineProps<Props>(), {
    activeTabInitial: 0,
  });

  const emit = defineEmits(['change']);

  const activeTab = ref(props.activeTabInitial);

  const handleClick = (event: Event, index: number) => {
    activeTab.value = index;

    emit('change', event, index);
  };
</script>

<template>
  <div
    :class="[
      'tide-tabs',
      CSS.BG.SURFACE.VARIANT,
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
          ? [CSS.BG.SURFACE.DEFAULT, CSS.FONT.COLOR.SURFACE.DEFAULT, CSS.SHADOW.BOTTOM]
          : [CSS.FONT.COLOR.SURFACE.VARIANT],
        CSS.FLEX.GROW.ON,
        CSS.BORDER.RADIUS.QUARTER,
        CSS.PADDING.Y.QUARTER,
        CSS.WIDTH.FULL,
        CSS.FONT.WEIGHT.SIX_HUNDRED,
        CSS.WHITESPACE_WRAP.OFF,
      ]"
      :data-track="tab.dataTrack || undefined"
      :key="tab.label"
      @click="(event: Event) => handleClick(event, index)"
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
    transition: background-color var(--tide-animate);
  }
</style>
