<script lang="ts" setup>
  import { ref } from 'vue';

  import type { Vehicle } from '@/types/Vehicle';

  import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
  import BasicCard from '@/components/BasicCard.vue';
  import BasicImage from '@/components/BasicImage.vue';
  import { ELEMENT } from '@/types/Element';
  import { ICON } from '@/types/Icon';
  import { PRIORITY } from '@/types/Priority';
  import { formatPhone, formatPrice, formatTitleCase, getCdnMediaRoot } from '@/utilities/format';
  import { realm } from '@/config/main.config';

  type Props = {
    isFavorite: boolean;
    vehicle: Vehicle;
  };

  const emit = defineEmits(['favoriteClick']);

  const props = defineProps<Props>();

  const showPhone = ref(false);

  // TODO: Replace upon determining a method for retrieving live Elasticsearch data.
  const dummy = {
    address: '123 Main St',
    hasHiddenPhone: Math.floor(Math.random() * 2),
    milesAway: 21,
    stockNumber: '326303',
    zip: '12345',
  };

  const isPremium = props.vehicle.isPremium === '1';
  const adType: string | undefined = isPremium ? 'Premium' : undefined;
  const cityState = props.vehicle ? `${formatTitleCase(props.vehicle.city)}, ${props.vehicle.stateCode}` : null;

  // TODO: Raw object is accidentally preserved if raw value is empty!
  const phone = typeof props.vehicle.phone === 'object' ? '7571234567' : props.vehicle.phone;

  const cdn = getCdnMediaRoot(realm);
  const thumbnail: string | undefined =
    props.vehicle.photoIds.length > 0
      ? `${cdn}/${props.vehicle.photoIds[0]}.jpg?width=245&height=151&quality=60&bestfit=true&upsize=true&blurBackground=true&blurValue=100`
      : undefined;

  const setShowPhone = (showPhoneValue: boolean) => {
    showPhone.value = showPhoneValue;
  };

  const handleFavoriteClick = () => {
    emit('favoriteClick', props.vehicle.adId);
  };
</script>

<template>
  <li class="card-listing w-full">
    <a
      :href="`/listing?realm=${realm.id}`"
      class="block h-full underline-none"
    >
      <BasicCard class="relative">
        <div class="flex column axis1-between gap-1/2 p-1/2 h-full">
          <div class="flex column gap-1/2">
            <div class="mb-1/2 border-overlay radius-1/4">
              <BasicImage
                :offset="200"
                :src="thumbnail"
                assume-horizontal
                class="w-full"
                is-lazy-load
              />
            </div>

            <div class="flex column gap-1/4">
              <div class="font-12">
                {{ props.vehicle.condition }} {{ props.vehicle.year }} {{ props.vehicle.makeName[0] || '' }}
              </div>

              <div class="font-14 font-600">{{ props.vehicle.modelName[0] || '' }}</div>

              <div class="font-12">
                <span v-if="adType">{{ adType }} ad by </span>
                <span>{{ props.vehicle.dealerGroupName || '' }}</span>
              </div>

              <div class="font-12">
                <span v-if="cityState">{{ cityState }} . </span>
                <span>{{ dummy.milesAway }} miles away</span>
              </div>
            </div>
          </div>

          <div class="flex wrap axis1-between axis2-center gap-1/4 font-12">
            <span class="font-700">
              {{ props.vehicle.price ? formatPrice(props.vehicle.price) : '' }}
            </span>

            <div class="flex wrap axis1-end axis2-center gap-1 grow">
              <div
                class="flex axis2-center gap-1/4"
                v-if="phone"
              >
                <BasicButtonIcon
                  :element="ELEMENT.LINK"
                  :icon="ICON.PHONE"
                  :priority="PRIORITY.TERTIARY"
                  href="/listing"
                />

                <button
                  @click.stop.prevent="setShowPhone(true)"
                  class="font-700 underline"
                  v-if="!showPhone && dummy.hasHiddenPhone"
                >
                  Show number
                </button>

                <a
                  :href="`tel:+${phone}`"
                  @click.stop
                  class="font-700"
                  v-if="showPhone || !dummy.hasHiddenPhone"
                >
                  {{ formatPhone(parseInt(phone, 10)) }}
                </a>
              </div>

              <BasicButtonIcon :icon="ICON.ENVELOPE" />
            </div>
          </div>
        </div>

        <div
          class="card-listing-label absolute top-0 flex mt-1"
          v-if="isPremium"
        >
          <div class="flex gap-1/2 p-1/2 bg-white">
            <BasicIcon :icon="ICON.BOOKMARK" />
            <span class="font-12 font-600">Premium</span>
          </div>

          <div class="card-listing-label-flag" />
        </div>

        <div class="absolute top-0 right-0 mt-1 mr-1">
          <BasicButtonIcon
            :icon="isFavorite ? ICON.HEART : ICON.HEART_OPEN"
            :priority="PRIORITY.TERTIARY"
            @click.prevent="handleFavoriteClick"
            class="box-shadow"
          />
        </div>
      </BasicCard>
    </a>
  </li>
</template>

<style scoped>
  .card-listing-label {
    filter: drop-shadow(var(--shadow));
  }

  .card-listing-label-flag {
    border-top: 16px solid white;
    border-right: 8px solid transparent;
    border-bottom: 16px solid transparent;
    border-left: 8px solid white;
  }

  @media (min-width: 992px) {
    .card-listing {
      max-width: calc(33.3333% - (2rem / 3));
    }
  }
</style>
