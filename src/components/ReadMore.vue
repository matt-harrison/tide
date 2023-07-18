<script lang="ts" setup>
  import { onMounted, ref } from 'vue';

  import BasicButtonAsLink from '@/components/BasicButtonAsLink.vue';
  import { ICON } from '@/types/Icon';

  const props = defineProps({
    classLabel: {
      default: undefined,
      required: false,
      type: String,
    },
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
  <div class="read-more flex column gap-1">
    <div
      ref="readMoreContent"
      class="read-more-content grid"
    >
      <div
        :style="{ minHeight: props.heightCollapsed }"
        class="y-hidden"
      >
        <slot />
      </div>
    </div>

    <div>
      <BasicButtonAsLink
        :icon-trailing="isExpanded ? ICON.CHEVRON_UP : ICON.CHEVRON_DOWN"
        @click="toggleIsExpanded"
      >
        {{ isExpanded ? props.labelExpanded : props.labelCollapsed }}
      </BasicButtonAsLink>
    </div>
  </div>
</template>

<style scoped>
  .read-more-content {
    transition: grid-template-rows var(--animate);
  }
</style>
