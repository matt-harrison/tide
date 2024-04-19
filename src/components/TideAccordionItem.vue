<script lang="ts" setup>
  import { onMounted, ref } from 'vue';

  import TideDivider from '@/components/TideDivider.vue';
  import TideIcon from '@/components/TideIcon.vue';
  import TideIndicator from '@/components/TideIndicator.vue';
  import { ICON } from '@/types/Icon';

  const props = defineProps({
    hasBottomDivider: {
      default: false,
      required: false,
      type: Boolean,
    },
    hasTopDivider: {
      default: false,
      required: false,
      type: Boolean,
    },
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
    isOptional: {
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
  <div class="tide-accordion-item">
    <TideDivider v-if="props.hasTopDivider" />

    <div
      @click="toggleIsExpanded"
      class="accordion-head tide-display-flex tide-axis1-between tide-padding-y-1 tide-cursor-pointer"
    >
      <div class="tide-display-flex tide-axis2-center tide-gap-1/2 tide-font-700">
        <span>{{ props.label }}</span>

        <span
          class="tide-font-on-surface-variant"
          v-if="props.isOptional"
        >
          (optional)
        </span>

        <TideIndicator v-if="props.isActive" />
      </div>

      <TideIcon :icon="isExpanded ? ICON.EXPAND_LESS : ICON.EXPAND_MORE" />
    </div>

    <div
      ref="accordionBody"
      class="tide-accordion-body tide-display-grid"
    >
      <div class="tide-y-hidden">
        <div class="tide-margin-bottom-1 tide-font-400 tide-font-on-surface">
          <slot />
        </div>
      </div>
    </div>

    <TideDivider v-if="props.hasBottomDivider" />
  </div>
</template>

<style scoped>
  .tide-accordion-body {
    transition: grid-template-rows var(--animate);
  }
</style>
