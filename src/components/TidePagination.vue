<script lang="ts" setup>
  import { computed } from 'vue';

  import TideButtonIcon from './TideButtonIcon.vue';
  import TideButtonPagination from './TideButtonPagination.vue';
  import { CSS } from '../types/Styles';
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
  <section
    :class="['tide-pagination', CSS.DISPLAY.FLEX, CSS.AXIS1.CENTER, CSS.AXIS2.CENTER, CSS.GAP.QUARTER, CSS.WIDTH.FULL]"
  >
    <TideButtonIcon
      :disabled="props.pageCurrent === 1"
      :icon="ICON.CHEVRON_LEFT"
      :priority="PRIORITY.QUATERNARY"
      @click="$emit('setPage', props.pageCurrent - 1)"
    />

    <ul :class="[CSS.DISPLAY.FLEX, CSS.AXIS2.CENTER, CSS.GAP.QUARTER, CSS.LIST_BULLETS.OFF]">
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
