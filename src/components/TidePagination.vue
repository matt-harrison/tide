<script lang="ts" setup>
  import { computed } from 'vue';

  import TideButtonIcon from './TideButtonIcon.vue';
  import TideButtonPagination from './TideButtonPagination.vue';
  import { ICON } from '../types/Icon';
  import { PRIORITY } from '../types/Priority';

  type Props = {
    pageCurrent?: number;
    pageTotal?: number;
  };

  const props = withDefaults(defineProps<Props>(), {
    pageCurrent: 1,
    pageTotal: 1,
  });

  defineEmits(['setPage']);

  const paginationButtons = computed(() => new Array(props.pageTotal).fill('').map((empty, index) => index + 1));
</script>

<template>
  <section class="tide-display-flex tide-axis1-center tide-axis2-center tide-gap-1 tide-width-full">
    <TideButtonIcon
      :disabled="props.pageCurrent === 1"
      :icon="ICON.CHEVRON_LEFT"
      :priority="PRIORITY.QUATERNARY"
      @click="$emit('setPage', props.pageCurrent - 1)"
    />

    <ul class="tide-display-flex tide-axis2-center tide-gap-1/4 tide-margin-x-2 tide-list-none">
      <li
        :key="paginationButton"
        v-for="paginationButton in paginationButtons"
      >
        <TideButtonPagination
          :disabled="props.pageCurrent === paginationButton"
          :label="paginationButton"
          :priority="PRIORITY.QUATERNARY"
          @click="$emit('setPage', paginationButton)"
        />
      </li>
    </ul>

    <TideButtonIcon
      :disabled="props.pageCurrent === paginationButtons[paginationButtons.length - 1]"
      :icon="ICON.CHEVRON_RIGHT"
      :priority="PRIORITY.QUATERNARY"
      @click="$emit('setPage', props.pageCurrent + 1)"
    />
  </section>
</template>

<style scoped></style>
