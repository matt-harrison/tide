<script lang="ts" setup>
  import { realm } from '@/config/main.config';
</script>

<template>
  <p class="site-disclaimer font-12">
    <b>{{ realm.label.singular }} Trader disclaimer:</b>
    The information provided for each listing is supplied by the seller and/or other third parties.
    {{ realm.label.singular }}Trader.com is not responsible for the accuracy of the information. Please refer to the
    <a
      class="font-600"
      href="#"
    >
      {{ realm.label.singular }} Trader Terms of Use
    </a>
    for further information.
  </p>
</template>
