<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import { storeToRefs } from 'pinia';

  import BasicButton from '@/components/BasicButton.vue';
  import { ICON } from '@/types/Icon';
  import { PRIORITY } from '@/types/Priority';
  import { TIER } from '@/types/Tier';
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
      isStickyContact && 'fixed bottom-0',
      'flex gap-1/2 py-2 px-1 w-full bg-white',
      isStickyContact && 'shadow-box',
    ]"
    ref="stickableFooterRef"
  >
    <BasicButton
      :icon-leading="ICON.MESSAGE"
      :priority="PRIORITY.SECONDARY"
      class="vehicle-detail-text-cta"
      to="sms:+7575551234"
    >
      <span class="font-12 font-600">text</span>
    </BasicButton>

    <BasicButton
      :icon-leading="ICON.PHONE"
      :priority="PRIORITY.PRIMARY"
      :tier="TIER.TIER_1"
      :to="phoneHref"
      class="vehicle-detail-call-cta"
    >
      <span class="font-12 font-600">call</span>
    </BasicButton>

    <BasicButton
      :icon-leading="ICON.ENVELOPE"
      :priority="PRIORITY.PRIMARY"
      :tier="TIER.TIER_2"
      class="vehicle-detail-email-cta"
    >
      <span class="font-12 font-600">email</span>
    </BasicButton>

    <BasicButton
      :icon-leading="ICON.COMMENTS"
      :priority="PRIORITY.SECONDARY"
      class="vehicle-detail-chat-cta"
    >
      <span class="font-12 font-600">chat</span>
    </BasicButton>
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