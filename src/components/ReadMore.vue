<script lang="ts" setup>
  import { onMounted, ref } from 'vue';

  import BasicLink from '@/components/BasicLink.vue';
  import { ELEMENT } from '@/types/Element';
  import { ICON } from '@/types/Icon';

  const props = defineProps({
    heightCollapsed: {
      default: '3rem',
      required: false,
      type: String,
    },
    labelCollapsed: {
      default: 'Read more',
      required: false,
      type: String,
    },
    labelExpanded: {
      default: 'Read less',
      required: false,
      type: String,
    },
  });

  const isExpanded = ref(false);

  let readMoreContent = ref();

  const toggleIsExpanded = () => {
    const element = readMoreContent.value as HTMLElement;

    isExpanded.value = !isExpanded.value;

    element.style.gridTemplateRows = isExpanded.value ? '1fr' : '0fr';
  };

  onMounted(() => {
    const element = readMoreContent.value as HTMLElement;

    element.style.gridTemplateRows = isExpanded.value ? '1fr' : '0fr';
  });
</script>

<template>
  <div class="read-more tide-display-flex tide-flex-column tide-gap-1">
    <div
      ref="readMoreContent"
      class="read-more-content tide-display-grid"
    >
      <div
        :style="{ minHeight: props.heightCollapsed }"
        class="tide-y-hidden"
      >
        <slot />
      </div>
    </div>

    <div>
      <BasicLink
        :element="ELEMENT.BUTTON"
        :icon-trailing="isExpanded ? ICON.EXPAND_LESS : ICON.EXPAND_MORE"
        :label="isExpanded ? props.labelExpanded : props.labelCollapsed"
        @click="toggleIsExpanded"
      />
    </div>
  </div>
</template>

<style scoped>
  .read-more-content {
    transition: grid-template-rows var(--animate);
  }
</style>
