<script lang="ts" setup>
  import { ref } from 'vue';

  import type { Tab } from '@/types/Tab';

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
    class="basic-tabs tide-display-flex tide-gap-1/4 tide-border-1 tide-border-gray tide-radius-1/4 tide-padding-1/4 tide-bg-gray-light"
  >
    <button
      :class="index === activeTab ? 'tide-bg-white' : 'tide-border-gray-light tide-bg-gray-light'"
      :key="tab.label"
      @click="(event: Event) => handleTabClick(event, index)"
      class="basic-tabs-tab tide-border-1 tide-border-gray tide-radius-1/4 tide-padding-y-1/2 tide-padding-x-2 tide-width-full tide-font-14 tide-font-600 tide-whitespace-nowrap"
      v-for="(tab, index) in props.tabs"
    >
      <span>{{ tab.label }} </span>
      <span v-if="tab.count && tab.count > 0">({{ tab.count }})</span>
    </button>
  </div>
</template>

<style scoped>
  .basic-tabs-tab {
    flex: 1;
    transition: background-color var(--animate), border-color var(--animate);
  }
</style>
