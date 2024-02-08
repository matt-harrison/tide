<script lang="ts" setup>
  import { ref } from 'vue';

  import type { Vehicle } from '@/types/Vehicle';

  import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
  import BasicCard from '@/components/BasicCard.vue';
  import BasicIcon from '@/components/BasicIcon.vue';
  import BasicImage from '@/components/BasicImage.vue';
  import { ICON } from '@/types/Icon';
  import { PRIORITY } from '@/types/Priority';
  import { formatPhone, formatPrice, formatTitleCase, getCdnMediaRoot, removeMarkup } from '@/utilities/format';
  import { realm } from '@/config/main.config';
  import { useViewportStore } from '@/stores/ViewportStore';

  type Props = {
    isFavorite: boolean;
    vehicle: Vehicle;
  };

  const viewportStore = useViewportStore();

  const emit = defineEmits(['favoriteClick']);

  const props = defineProps<Props>();

  const showPhone = ref(false);

  const getThumbnail = (photoId: string) => {
    return photoId
      ? `${cdn}/${props.vehicle.photoIds[0]}.jpg?width=245&height=151&quality=60&bestfit=true&upsize=true&blurBackground=true&blurValue=100`
      : undefined;
  };

  const handleFavoriteClick = () => {
    emit('favoriteClick', props.vehicle.adId);
  };

  const setShowPhone = (showPhoneValue: boolean) => {
    showPhone.value = showPhoneValue;
  };

  // TODO: Replace upon determining a method for retrieving live Elasticsearch data.
  const dummy = {
    address: '123 Main St',
    hasHiddenPhone: Math.floor(Math.random() * 2),
    milesAway: 21,
    stockNumber: '326303',
    zip: '12345',
  };

  const cityState = props.vehicle ? `${formatTitleCase(props.vehicle.city)}, ${props.vehicle.stateCode}` : null;

  // TODO: Raw object is accidentally preserved if raw value is empty!
  const phone = typeof props.vehicle.phone === 'object' ? '7571234567' : props.vehicle.phone;

  const cdn = getCdnMediaRoot(realm);
  const thumbnailLarge: string | undefined = getThumbnail(props.vehicle.photoIds[0]);
  const thumbnailSmall1: string | undefined = getThumbnail(props.vehicle.photoIds[1]);
  const thumbnailSmall2: string | undefined = getThumbnail(props.vehicle.photoIds[2]);

  const details = [props.vehicle.dealerGroupName, cityState, dummy.milesAway].filter((detail) => detail !== undefined);
</script>

<template>
  <section class="card-listing-premium-select tide-width-full">
    <a
      :href="`/listing?realm=${realm.id}`"
      class="tide-display-block h-full tide-underline-none"
    >
      <BasicCard class="tide-position-relative">
        <div class="tide-display-flex tide-flex-column tide-axis1-between tide-gap-1/2 tide-padding-1/2 h-full">
          <div
            :class="viewportStore.isLarge ? 'tide-flex-row' : 'tide-flex-column'"
            class="tide-display-flex tide-gap-1/2"
          >
            <div
              :class="viewportStore.isLarge ? 'tide-width-1/2' : 'tide-width-full'"
              class="border-overlay tide-radius-1/8 tide-xy-hidden"
            >
              <BasicImage
                :offset="200"
                :src="thumbnailLarge"
                assume-horizontal
                class="tide-width-full h-full"
                is-lazy-load
              />
            </div>

            <div :class="viewportStore.isLarge ? 'tide-width-1/2' : 'tide-width-full'">
              <div class="tide-display-flex tide-flex-column tide-margin-bottom-1">
                <div class="tide-display-flex tide-gap-1/2 tide-margin-bottom-1">
                  <div class="border-overlay tide-radius-1/8 tide-xy-hidden">
                    <BasicImage
                      :src="thumbnailSmall1"
                      class="tide-width-full"
                    />
                  </div>

                  <div class="border-overlay tide-radius-1/8 tide-xy-hidden">
                    <BasicImage
                      :src="thumbnailSmall2"
                      class="tide-width-full"
                    />
                  </div>
                </div>

                <div class="tide-margin-bottom-1/4 tide-font-14">
                  {{ props.vehicle.condition }} {{ props.vehicle.year }} {{ props.vehicle.makeName[0] || '' }}
                </div>

                <div class="tide-margin-bottom-1/2 tide-font-14 tide-font-700">
                  {{ props.vehicle.modelName[0] || '' }}
                </div>

                <div class="tide-margin-bottom-1/4 tide-font-14">
                  <span
                    :key="index"
                    v-for="(detail, index) in details"
                  >
                    <span>{{ detail }}</span>
                    <span v-if="index !== details.length - 1"> • </span>
                  </span>
                </div>

                <div class="card-listing-premium-select-description tide-font-14 tide-xy-hidden">
                  <BasicIcon
                    :icon="ICON.BOOKMARK"
                    class="tide-margin-right-1/4 float-left"
                  />
                  <span>{{ removeMarkup(props.vehicle.description) }}</span>
                </div>
              </div>

              <div
                class="tide-display-flex tide-flex-wrap tide-axis1-between tide-axis2-center tide-gap-1/4 tide-font-12"
              >
                <span class="tide-font-700">
                  {{ props.vehicle.price ? formatPrice(props.vehicle.price) : '' }}
                </span>

                <div
                  class="tide-display-flex tide-flex-wrap tide-axis1-end tide-axis2-center tide-gap-1 tide-flex-grow"
                >
                  <div
                    class="tide-display-flex tide-axis2-center tide-gap-1/4"
                    v-if="phone"
                  >
                    <BasicButtonIcon
                      :icon="ICON.PHONE"
                      :priority="PRIORITY.TERTIARY"
                      href="/listing"
                    />

                    <button
                      @click.stop.prevent="setShowPhone(true)"
                      class="tide-font-700 tide-underline"
                      v-if="!showPhone && dummy.hasHiddenPhone"
                    >
                      Show number
                    </button>

                    <a
                      @click.stop
                      class="tide-font-700"
                      href="tel:+{{ phone }}"
                      v-if="showPhone || !dummy.hasHiddenPhone"
                    >
                      {{ formatPhone(parseInt(phone, 10)) }}
                    </a>
                  </div>

                  <BasicButtonIcon :icon="ICON.ENVELOPE" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="card-listing-premium-select-label tide-position-absolute tide-top-0 tide-display-flex tide-margin-top-1"
        >
          <div class="tide-display-flex tide-gap-1/2 tide-padding-1/2 tide-bg-white">
            <BasicIcon :icon="ICON.BOOKMARK" />
            <span class="tide-font-12 tide-font-600">Premium SELECT</span>
          </div>

          <div class="card-listing-premium-select-label-flag" />
        </div>

        <div class="tide-position-absolute tide-top-0 tide-right-0 tide-margin-top-1 tide-margin-right-1">
          <BasicButtonIcon
            :icon="isFavorite ? ICON.HEART : ICON.HEART_OPEN"
            :priority="PRIORITY.FLOATING"
            @click.prevent="handleFavoriteClick"
          />
        </div>
      </BasicCard>
    </a>
  </section>
</template>

<style scoped>
  .card-listing-premium-select-description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .card-listing-premium-select-label {
    filter: drop-shadow(var(--shadow));
  }

  .card-listing-premium-select-label-flag {
    border-top: 16px solid white;
    border-right: 8px solid transparent;
    border-bottom: 16px solid transparent;
    border-left: 8px solid white;
  }

  .float-left {
    float: left;
  }
</style>
