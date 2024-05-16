<script lang="ts" setup>
  import { onMounted, ref } from 'vue';

  import TideDivider from '@/components/TideDivider.vue';
  import TideIcon from '@/components/TideIcon.vue';
  import TideIndicator from '@/components/TideIndicator.vue';
  import { ICON } from '@/types/Icon';
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
      :class="['tide-accordion-head', CSS.DISPLAY.FLEX, CSS.AXIS1.BETWEEN, CSS.PADDING.Y.HALF, CSS.CURSOR.POINTER]"
      @click="toggleIsExpanded"
    >
      <div :class="[CSS.DISPLAY.FLEX, CSS.AXIS2.CENTER, CSS.GAP.HALF, CSS.FONT.WEIGHT.SEVEN_HUNDRED]">
        <span>{{ props.label }}</span>

        <span
          :class="[CSS.FONT.COLOR.SURFACE.VARIANT]"
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
        <div :class="[CSS.MARGIN.Y.ONE, CSS.FONT.WEIGHT.FOUR_HUNDRED, CSS.FONT.COLOR.SURFACE.DEFAULT]">
          <slot />
        </div>
      </div>
    </div>

    <TideDivider v-if="props.hasBottomDivider" />
  </div>
</template>

<style scoped>
  .tide-accordion-body {
    transition: grid-template-rows var(--tide-animate);
  }
</style>
