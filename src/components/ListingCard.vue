<script lang="ts" setup>
  import { ref } from 'vue';

  import type { VehicleRaw } from '@/types/Vehicle';

  import SiteButtonIcon from '@/components/SiteButtonIcon.vue';
  import SiteIcon from '@/components/SiteIcon.vue';
  import SiteIconToggle from '@/components/SiteIconToggle.vue';
  import { formatPhone, formatPrice, formatCamelCase } from '@/utilities/format';
  import { useFavoriteStore } from '@/stores/FavoriteStore';

  type Props = {
    vehicle: VehicleRaw;
  };

  const favoriteStore = useFavoriteStore();

  const showPhone = ref(false);

  const props = defineProps<Props>();

  let adType: string | undefined = undefined;

  if (props.vehicle.is_premium?.raw === '1') {
    adType = 'Premium';
  }

  let isFavorite = ref(favoriteStore.isFavorite(props.vehicle.id.raw));

  const hasHiddenPhone = Math.floor(Math.random() * 2);

  const label: string | undefined = props.vehicle.ad_attribs?.raw
    ? JSON.parse(props.vehicle.ad_attribs.raw).tagLineValu
    : undefined;
  const milesAway = Math.floor(Math.random() * 5);

  const thumbnail: string | null = props.vehicle.photo_ids.raw[0]
    ? `https://media.traderonline.com/vLatest/media/${props.vehicle.photo_ids.raw[0]}.jpg?width=245&height=151&quality=60&bestfit=true&upsize=true&blurBackground=true&blurValue=100`
    : null;

  const setShowPhone = (showPhoneValue: boolean) => {
    showPhone.value = showPhoneValue;
  };

  const toggleIsFavorite = () => {
    favoriteStore.toggleFavorite(props.vehicle.id.raw);

    isFavorite.value = favoriteStore.isFavorite(props.vehicle.id.raw);
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
          <img
            :src="thumbnail"
            class="w-full bg-gray ratio-3/2"
            v-if="thumbnail"
          />

          <div class="flex column gap-1/4">
            <div class="font-12">
              {{ props.vehicle.condition.raw }} {{ props.vehicle.year.raw }} {{ props.vehicle.make_name?.raw[0] || '' }}
            </div>

            <div class="font-14 font-600">{{ props.vehicle.model_name?.raw[0] || '' }}</div>

            <div class="font-12">
              <span>{{ adType }}</span>
              <span> ad by </span>
              <span>{{ props.vehicle.dealer_group_name?.raw || '' }}</span>
            </div>

            <div class="font-12">
              <span>
                {{ props.vehicle.city?.raw ? formatCamelCase(props.vehicle.city.raw) : '' }},
                {{ props.vehicle.state_code.raw }}
              </span>
              <span> · </span>
              <span>{{ milesAway }} miles away</span>
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
                v-if="!showPhone && hasHiddenPhone"
              >
                Show phone number
              </button>

              <a
                @click.stop
                class="font-700"
                href="tel:+{{ props.vehicle.phone }}"
                v-if="showPhone || !hasHiddenPhone"
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
        v-if="label"
      >
        <SiteIcon icon="bookmark" />
        <span class="font-12 font-600">{{ label }}</span>
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
