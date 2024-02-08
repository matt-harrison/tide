<script lang="ts" setup>
  import { onMounted, ref } from 'vue';

  import BasicIcon from '@/components/BasicIcon.vue';
  import { ICON } from '@/types/Icon';

  const props = defineProps({
    isActive: {
      default: false,
      required: false,
      type: Boolean,
    },
    isExpandedInitial: {
      default: false,
      required: false,
      type: Boolean,
    },
    label: {
      default: '',
      required: true,
      type: String,
    },
  });

  const isExpanded = ref(props.isExpandedInitial);

  let accordionBody = ref();

  const toggleIsExpanded = () => {
    const element = accordionBody.value as HTMLElement;

    isExpanded.value = !isExpanded.value;

    element.style.gridTemplateRows = isExpanded.value ? '1fr' : '0fr';
  };

  onMounted(() => {
    const element = accordionBody.value as HTMLElement;

    element.style.gridTemplateRows = isExpanded.value ? '1fr' : '0fr';
  });
</script>

<template>
  <div class="basic-accordion-item">
    <div
      @click="toggleIsExpanded"
      class="accordion-head tide-display-flex tide-axis1-between tide-padding-y-1 tide-cursor-pointer"
    >
      <div class="tide-display-flex tide-axis2-center tide-gap-1/2 tide-font-700">
        <span>{{ props.label }}</span>
        <div
          class="basic-accordion-item-active tide-bg-gray-dark tide-radius-full"
          v-if="props.isActive"
        />
      </div>

      <BasicIcon :icon="isExpanded ? ICON.CHEVRON_UP : ICON.CHEVRON_DOWN" />
    </div>

    <div
      ref="accordionBody"
      class="basic-accordion-body tide-display-grid"
    >
      <div class="tide-y-hidden">
        <div class="tide-margin-bottom-1">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .basic-accordion-body {
    transition: grid-template-rows var(--animate);
  }

  .basic-accordion-item-active {
    width: 0.5rem;
    height: 0.5rem;
  }
</style>
