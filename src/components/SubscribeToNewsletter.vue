<script lang="ts" setup>
  import { storeToRefs } from 'pinia';

  import BasicButton from '@/components/BasicButton.vue';
  import { useViewportStore } from '@/stores/ViewportStore';

  const viewportStore = useViewportStore();

  const { isExtraSmall, isSmall } = storeToRefs(viewportStore);
</script>

<template>
  <div
    :class="[
      'subscribe-to-newsletter tide-display-flex',
      isExtraSmall || isSmall ? 'tide-flex-column tide-axis2-center' : 'tide-flex-row',
      'tide-axis1-center tide-gap-2',
    ]"
  >
    <h2 :class="isExtraSmall || isSmall ? 'tide-font-20' : 'tide-padding-top-1/2'">Subscribe to our newsletter</h2>

    <div class="tide-display-flex tide-flex-column tide-gap-1/2">
      <div class="tide-display-flex tide-axis2-center tide-gap-1">
        <input
          class="tide-border-1 tide-border-gray tide-padding-1 tide-width-full tide-bg-white"
          placeholder="Enter your email"
          type="text"
        />

        <BasicButton label="Submit" />
      </div>

      <p class="tide-font-12 tide-font-600">
        <span>By using this site, you agree to our </span>
        <a
          class="tide-font-700"
          href="#"
        >
          Terms of Use
        </a>
        <span> & our </span>
        <a
          class="tide-font-700"
          href="#"
        >
          Privacy Policy.
        </a>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
