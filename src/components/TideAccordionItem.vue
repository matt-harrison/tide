<script lang="ts" setup>
  import { onMounted, ref } from 'vue';

  import TideDivider from './TideDivider.vue';
  import TideIcon from './TideIcon.vue';
  import TideIndicator from './TideIndicator.vue';
  import { ICON } from '../types/Icon';
  import { CSS } from '@/types/Styles';

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
      :class="['accordion-head', CSS.DISPLAY.FLEX, CSS.AXIS1.BETWEEN, CSS.PADDING.Y.ONE, CSS.CURSOR.POINTER]"
      @click="toggleIsExpanded"
    >
      <div :class="['tide-display-flex', CSS.AXIS2.CENTER, CSS.GAP.HALF, CSS.FONT.WEIGHT.SEVEN_HUNDRED]">
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
      :class="['tide-accordion-body', CSS.DISPLAY.GRID]"
      ref="accordionBody"
    >
      <div :class="[CSS.OVERFLOW.Y.HIDDEN]">
        <div :class="[CSS.MARGIN.BOTTOM.ONE, CSS.FONT.WEIGHT.FOUR_HUNDRED, 'tide-font-on-surface']">
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
