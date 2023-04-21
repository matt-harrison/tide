<script lang="ts" setup>
  import { ref } from 'vue';

  import type { Vehicle } from '@/types/Vehicle';

  import SiteButtonIcon from '@/components/SiteButtonIcon.vue';
  import SiteIcon from '@/components/SiteIcon.vue';
  import SiteIconToggle from '@/components/SiteIconToggle.vue';
  import { formatPhone, formatPrice } from '@/utilities/format';
  import { useFavoriteStore } from '@/stores/FavoriteStore';

  type Props = {
    vehicle: Vehicle;
  };

  const favoriteStore = useFavoriteStore();

  const showPhone = ref(false);

  const props = defineProps<Props>();

  let isFavorite = ref(favoriteStore.isFavorite(props.vehicle.id));

  const setShowPhone = (showPhoneValue: boolean) => {
    showPhone.value = showPhoneValue;
  };

  const toggleIsFavorite = () => {
    favoriteStore.toggleFavorite(props.vehicle.id);

    isFavorite.value = favoriteStore.isFavorite(props.vehicle.id);
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
          <div class="w-full bg-gray ratio-3/2" />

          <div class="flex column gap-1/4">
            <div class="font-12">
              {{ props.vehicle.isUsed ? 'Used' : 'New' }} {{ props.vehicle.year }} {{ props.vehicle.make }}
            </div>

            <div class="font-14 font-600">{{ props.vehicle.model }}</div>

            <div class="font-12">
              <span>{{ props.vehicle.adType }}</span>
              <span> ad by </span>
              <span>{{ props.vehicle.dealer }}</span>
            </div>

            <div class="font-12">
              <span>{{ props.vehicle.location }}</span>
              <span> · </span>
              <span>{{ props.vehicle.milesAway }} miles away</span>
            </div>
          </div>
        </div>

        <div class="flex wrap axis1-between axis2-center gap-1/4 font-12">
          <span class="font-700">
            {{ formatPrice(props.vehicle.price) }}
          </span>

          <div class="flex wrap axis1-end axis2-center gap-1/2 grow">
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
                v-if="!showPhone && props.vehicle.hasHiddenPhone"
              >
                Show phone number
              </button>

              <a
                @click.stop
                class="font-700"
                href="tel:+{{ props.vehicle.phone }}"
                v-if="showPhone || !props.vehicle.hasHiddenPhone"
              >
                Call {{ formatPhone(props.vehicle.phone) }}
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
        v-if="props.vehicle.label"
      >
        <SiteIcon icon="bookmark" />
        <span class="font-12 font-600">{{ props.vehicle.label }}</span>
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
