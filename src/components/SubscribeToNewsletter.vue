<script lang="ts" setup>
  import { storeToRefs } from 'pinia';

  import BasicButton from '@/components/BasicButton.vue';
  import { PRIORITY } from '@/types/Priority';
  import { SIZE_BUTTON } from '@/types/Size';
  import { TIER } from '@/types/Tier';
  import { useViewportStore } from '@/stores/ViewportStore';

  const viewportStore = useViewportStore();

  const { isExtraSmall, isSmall } = storeToRefs(viewportStore);
</script>

<template>
  <div
    :class="[
      'subscribe-to-newsletter flex',
      isExtraSmall || isSmall ? 'column axis2-center' : 'row',
      'axis1-center gap-2',
    ]"
  >
    <h2 :class="isExtraSmall || isSmall ? 'font-20' : 'pt-1/2'">Subscribe to our newsletter</h2>

    <div class="flex column gap-1/2">
      <div class="flex axis2-center gap-1">
        <input
          class="border-1 border-gray p-1 w-full bg-white"
          placeholder="Enter your email"
          type="text"
        />

        <BasicButton
          :priority="PRIORITY.PRIMARY"
          :size="SIZE_BUTTON.LARGE"
          :tier="TIER.TIER_1"
        >
          Submit
        </BasicButton>
      </div>

      <p class="font-12 font-600">
        <span>By using this site, you agree to our </span>
        <RouterLink
          class="font-700"
          to="#"
        >
          Terms of Use
        </RouterLink>
        <span> & our </span>
        <RouterLink
          class="font-700"
          to="#"
        >
          Privacy Policy.
        </RouterLink>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
