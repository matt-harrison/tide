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

  const handleTabClick = (index: number) => {
    activeTab.value = index;

    props.tabs[index]?.callback();
  };
</script>

<template>
  <div class="basic-tabs flex gap-1/4 border-1 border-gray radius-1/4 p-1/4 bg-gray-light">
    <button
      :class="index === activeTab ? 'bg-white' : 'border-gray-light bg-gray-light'"
      :key="tab.label"
      @click="handleTabClick(index)"
      class="basic-tabs-tab border-1 border-gray radius-1/4 py-1/2 px-2 w-full font-14 font-600 whitespace-nowrap"
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
