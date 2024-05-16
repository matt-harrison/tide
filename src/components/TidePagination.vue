<script lang="ts" setup>
  import { computed, ref } from 'vue';

  import TideButtonIcon from '@/components/TideButtonIcon.vue';
  import TideButtonPagination from '@/components/TideButtonPagination.vue';
  import { CSS } from '@/types/Styles';
  import { ICON } from '@/types/Icon';
  import { PRIORITY } from '@/types/Priority';

  type Props = {
    pageCurrent?: number;
    pageTotal?: number;
  };

  const props = withDefaults(defineProps<Props>(), {
    pageCurrent: 1,
    pageTotal: 1,
  });

  const emit = defineEmits(['change']);

  const pageCurrent = ref(props.pageCurrent);

  const paginationButtons = computed(() => new Array(props.pageTotal).fill('').map((empty, index) => index + 1));

  const handleClick = (event: Event, index: number) => {
    pageCurrent.value = index;

    emit('change', event, index);
  };
</script>

<template>
  <section
    :class="['tide-pagination', CSS.DISPLAY.FLEX, CSS.AXIS1.CENTER, CSS.AXIS2.CENTER, CSS.GAP.QUARTER, CSS.WIDTH.FULL]"
  >
    <TideButtonIcon
      :disabled="pageCurrent === 1"
      :icon="ICON.CHEVRON_LEFT"
      :priority="PRIORITY.QUATERNARY"
      @click="(event: Event) => handleClick(event, pageCurrent - 1)"
    />

    <ul :class="[CSS.DISPLAY.FLEX, CSS.AXIS2.CENTER, CSS.GAP.QUARTER, CSS.LIST_BULLETS.OFF]">
      <li
        :key="paginationButton"
        v-for="paginationButton in paginationButtons"
      >
        <TideButtonPagination
          :disabled="pageCurrent === paginationButton"
          :label="paginationButton"
          :priority="PRIORITY.QUATERNARY"
          @click="(event: Event) => handleClick(event, paginationButton)"
        />
      </li>
    </ul>

    <TideButtonIcon
      :disabled="pageCurrent === paginationButtons[paginationButtons.length - 1]"
      :icon="ICON.CHEVRON_RIGHT"
      :priority="PRIORITY.QUATERNARY"
      @click="(event: Event) => handleClick(event, pageCurrent + 1)"
    />
  </section>
</template>

<style scoped></style>
