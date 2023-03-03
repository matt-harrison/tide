<script lang="ts" setup>
  import { onMounted, ref } from 'vue';

  import SiteIcon from '@/components/SiteIcon.vue';

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

    element.style.height = 'auto';
    element.style.setProperty('--height-full', `${element.getBoundingClientRect().height}px`);
    element.style.height = '';
    element.style.animation = `${isExpanded.value ? 'expand' : 'collapse'} 300ms ease-in-out`;
    element.style.height = isExpanded.value ? 'auto' : '0';
  };

  onMounted(() => {
    const element = accordionBody.value as HTMLElement;

    element.style.height = isExpanded.value ? 'auto' : '0';
  });
</script>

<template>
  <div class="border-b border-gray">
    <div
      :class="classLabel"
      @click="toggleIsExpanded"
      class="accordion-head flex axis1-between pointer"
    >
      <span class="font-700">
        {{ props.label }}
      </span>

      <div
        :class="isExpanded ? 'up' : ''"
        class="chevron"
      >
        <SiteIcon
          icon="chevron-down"
          is-solid
        />
      </div>
    </div>

    <div
      ref="accordionBody"
      class="accordion-body y-hidden"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .chevron.up {
    rotate: 180deg;
  }
</style>

<style>
  :root {
    --height-full: 0;
  }

  @keyframes collapse {
    from {
      height: var(--height-full);
    }

    to {
      height: 0px;
    }
  }

  @keyframes expand {
    from {
      height: 0px;
    }

    to {
      height: var(--height-full);
    }
  }
</style>
