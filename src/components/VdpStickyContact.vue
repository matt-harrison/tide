<script setup lang="ts">
  import { onBeforeUnmount, onMounted, ref } from 'vue';
  import { storeToRefs } from 'pinia';

  import BasicButton from '@/components/BasicButton.vue';
  import { ICON } from '@/types/Icon';
  import { PRIORITY } from '@/types/Priority';
  import { getVehiclePhoneHref } from '@/utilities/vehicle';
  import { useVehicleDetailStore } from '@/stores/VehicleDetailStore';

  const isStickyContact = ref(false);
  const stickyContactRef = ref();
  const stickableFooterRef = ref();

  const vehicleDetailStore = useVehicleDetailStore();
  const { vehicle } = storeToRefs(vehicleDetailStore);
  const phoneHref = getVehiclePhoneHref(vehicle.value);

  const getIsStickyContact = () => {
    if (stickyContactRef.value) {
      const stickyFooterRect = stickyContactRef.value.getBoundingClientRect();
      const stickableFooterRect = stickableFooterRef.value.getBoundingClientRect();

      isStickyContact.value = stickyFooterRect.y + stickableFooterRect.height <= screen.height;
    }
  };

  onMounted(() => {
    window.addEventListener('resize', getIsStickyContact);
    window.addEventListener('scroll', getIsStickyContact);
    getIsStickyContact();
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', getIsStickyContact);
    window.removeEventListener('scroll', getIsStickyContact);
  });
</script>

<template>
  <div
    :class="[
      'sticky-footer',
      isStickyContact && 'tide-position-fixed tide-bottom-0',
      'tide-display-flex tide-gap-1/2 tide-padding-y-2 tide-padding-x-1 tide-width-full tide-bg-white',
      isStickyContact && 'shadow-b-1',
    ]"
    ref="stickableFooterRef"
  >
    <BasicButton
      :icon-leading="ICON.MESSAGE"
      :priority="PRIORITY.SECONDARY"
      class="vehicle-detail-text-cta tide-font-12 tide-font-600"
      href="sms:+7575551234"
      label="text"
    />

    <BasicButton
      :href="phoneHref"
      :icon-leading="ICON.CALL"
      class="vehicle-detail-call-cta tide-font-12 tide-font-600"
      label="call"
    />
    <BasicButton
      :icon-leading="ICON.MAIL"
      class="vehicle-detail-email-cta tide-font-12 tide-font-600"
      label="email"
    />

    <BasicButton
      :icon-leading="ICON.FORUM"
      :priority="PRIORITY.SECONDARY"
      class="vehicle-detail-chat-cta tide-font-12 tide-font-600"
      label="chat"
    />
  </div>
</template>

<style>
  .sticky-footer .vehicle-detail-call-cta {
    flex: 3;
  }

  .sticky-footer .vehicle-detail-chat-cta,
  .sticky-footer .vehicle-detail-text-cta {
    flex: 1;
  }

  .sticky-footer .vehicle-detail-email-cta {
    flex: 2;
  }
</style>
