<script lang="ts" setup>
  import { onMounted, ref } from 'vue';

  import type { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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

      <FontAwesomeIcon :icon="`fa-solid fa-${isExpanded ? 'chevron-up' : 'chevron-down'}`" />
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
