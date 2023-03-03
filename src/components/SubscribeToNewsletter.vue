<script lang="ts" setup>
  import SiteButton from '@/components/SiteButton.vue';
</script>

<template>
  <div class="flex column m-row axis1-center gap-2">
    <h2 class="m-pt-1">Subscribe to our newsletter</h2>

    <div class="flex column gap-1/2">
      <div class="flex axis2-center gap-1">
        <input
          class="border-1 border-gray p-1 w-full bg-white"
          placeholder="Enter your email"
          type="text"
        />

        <SiteButton
          class="px-2"
          is-primary
        >
          Submit
        </SiteButton>
      </div>

      <p class="font-12 font-600">
        <span>By using this site, you agree to our </span>
        <router-link
          class="font-700"
          to="#"
        >
          Terms of Use
        </router-link>
        <span> & our </span>
        <router-link
          class="font-700"
          to="#"
        >
          Privacy Policy.
        </router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
  @media (min-width: 992px) {
    .m-pt-1 {
      padding-top: 1rem;
    }
  }
</style>
