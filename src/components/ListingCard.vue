<script lang="ts" setup>
  import { ref } from 'vue';

  import type { VehicleRaw } from '@/types/Vehicle';

  import SiteButtonIcon from '@/components/SiteButtonIcon.vue';
  import SiteIcon from '@/components/SiteIcon.vue';
  import SiteIconToggle from '@/components/SiteIconToggle.vue';
  import SiteImage from '@/components/SiteImage.vue';
  import { cdnDomain, cdnVersion } from '@/config/rv.config';
  import { formatPhone, formatPrice, formatTitleCase } from '@/utilities/format';
  import { useFavoriteStore } from '@/stores/FavoriteStore';

  type Props = {
    vehicle: VehicleRaw;
  };

  const favoriteStore = useFavoriteStore();

  const props = defineProps<Props>();

  const isFavorite = ref(favoriteStore.isFavorite(props.vehicle.ad_id.raw));
  const showPhone = ref(false);

  // TODO: Replace upon determining a method for retrieving live Elasticsearch data.
  const dummy = {
    address: '123 Main St',
    hasHiddenPhone: Math.floor(Math.random() * 2),
    label: Math.floor(Math.random() * 10) === 0 ? 'Delivery Available' : undefined,
    milesAway: 21,
    stockNumber: '326303',
    zip: '12345',
  };

  const adType: string | undefined = props.vehicle.is_premium?.raw === '1' ? 'Premium' : undefined;
  const cityState = props.vehicle
    ? `${formatTitleCase(props.vehicle.city.raw)}, ${props.vehicle.state_code.raw}`
    : null;

  const thumbnail: string = `https://${cdnDomain}/${cdnVersion}/media/${props.vehicle.photo_ids.raw[0]}.jpg?width=245&height=151&quality=60&bestfit=true&upsize=true&blurBackground=true&blurValue=100`;

  const setShowPhone = (showPhoneValue: boolean) => {
    showPhone.value = showPhoneValue;
  };

  const toggleIsFavorite = () => {
    favoriteStore.toggleFavorite(props.vehicle.ad_id.raw);

    isFavorite.value = favoriteStore.isFavorite(props.vehicle.ad_id.raw);
  };
</script>

<template>
  <li class="listing-card p-1/4 w-full xy-hidden">
    <router-link
      class="relative block h-full bg-white shadow-box underline-none"
      to="/listing"
    >
      <div class="flex column axis1-between gap-1/2 p-1/2 h-full">
        <div class="flex column gap-1/2">
          <SiteImage
            :offset="200"
            :src="thumbnail"
            assume-horizontal
            class="site-carousel-card-img mb-1/2 w-full"
            is-lazy-load
          />

          <div class="flex column gap-1/4">
            <div class="font-12">
              {{ props.vehicle.condition.raw }} {{ props.vehicle.year.raw }} {{ props.vehicle.make_name?.raw[0] || '' }}
            </div>

            <div class="font-14 font-600">{{ props.vehicle.model_name?.raw[0] || '' }}</div>

            <div class="font-12">
              <span v-if="adType">{{ adType }} ad by </span>
              <span>{{ props.vehicle.dealer_group_name?.raw || '' }}</span>
            </div>

            <div class="font-12">
              <span v-if="cityState">{{ cityState }} . </span>
              <span>{{ dummy.milesAway }} miles away</span>
            </div>
          </div>
        </div>

        <div class="flex wrap axis1-between axis2-center gap-1/4 font-12">
          <span class="font-700">
            {{ props.vehicle.price?.raw ? formatPrice(props.vehicle.price.raw) : '' }}
          </span>

          <div
            class="flex wrap axis1-end axis2-center gap-1/2 grow"
            v-if="props.vehicle.phone.raw"
          >
            <div class="flex axis2-center gap-1/4">
              <SiteButtonIcon
                class="p-1/2"
                icon="phone"
                is-secondary
                is-solid
              />

              <button
                @click.stop.prevent="setShowPhone(true)"
                class="font-700 underline"
                v-if="!showPhone && dummy.hasHiddenPhone"
              >
                Show phone number
              </button>

              <a
                @click.stop
                class="font-700"
                href="tel:+{{ props.vehicle.phone }}"
                v-if="showPhone || !dummy.hasHiddenPhone"
              >
                Call {{ formatPhone(parseInt(props.vehicle.phone.raw)) }}
              </a>
            </div>

            <SiteButtonIcon
              class="p-1/2"
              icon="envelope"
              is-primary
              is-solid
            />
          </div>
        </div>
      </div>

      <div
        class="absolute top-0 flex gap-1/2 mt-1 p-1/2 bg-white"
        v-if="dummy.label"
      >
        <SiteIcon icon="bookmark" />
        <span class="font-12 font-600">{{ dummy.label }}</span>
      </div>

      <div class="absolute top-0 right-0 mt-1 mr-1">
        <SiteIconToggle
          :is-active="isFavorite"
          :is-solid="isFavorite"
          @click.prevent="toggleIsFavorite"
          class-button="p-1/2 font-18"
          icon="heart"
          is-restyled
          is-secondary
        />
      </div>
    </router-link>
  </li>
</template>

<style scoped>
  .listing-card {
    max-width: calc(33.3333% - (2rem / 3));
  }
</style>
