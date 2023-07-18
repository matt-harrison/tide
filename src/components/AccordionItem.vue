<script lang="ts" setup>
  import { onMounted, ref } from 'vue';

  import SvgIcon from '@/components/SvgIcon.vue';
  import { ICON } from '@/types/Icon';
  import { SIZE_ICON } from '@/types/Size';

  const props = defineProps({
    classLabel: {
      default: undefined,
      required: false,
      type: String,
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
  <div class="accordion-item border-b border-gray">
    <div
      :class="classLabel"
      @click="toggleIsExpanded"
      class="accordion-head flex axis1-between pointer"
    >
      <span class="font-700">
        {{ props.label }}
      </span>

      <SvgIcon
        :icon="isExpanded ? ICON.CHEVRON_UP : ICON.CHEVRON_DOWN"
        :size="SIZE_ICON.SMALL"
      />
    </div>

    <div
      ref="accordionBody"
      class="accordion-body grid"
    >
      <div class="y-hidden">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .accordion-body {
    transition: grid-template-rows var(--animate);
  }
</style>
