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
      class="accordion-head flex axis1-between py-1 pointer"
    >
      <div class="flex axis2-center gap-1/2 font-700">
        <span>{{ props.label }}</span>
        <div
          class="basic-accordion-item-active bg-gray-dark radius-full"
          v-if="props.isActive"
        />
      </div>

      <BasicIcon :icon="isExpanded ? ICON.CHEVRON_UP : ICON.CHEVRON_DOWN" />
    </div>

    <div
      ref="accordionBody"
      class="basic-accordion-body grid"
    >
      <div class="y-hidden">
        <div class="mb-1">
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
