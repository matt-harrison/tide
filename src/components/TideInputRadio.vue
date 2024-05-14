<script lang="ts" setup>
  import { computed, getCurrentInstance, ref, watch } from 'vue';

  import { CSS } from '@/types/Styles';

  type Props = {
    checked?: boolean;
    dataTrack?: string;
    disabled?: boolean;
    inputId?: string;
    label: string;
    name: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    checked: false,
    dataTrack: '',
    disabled: false,
    inputId: undefined,
    label: undefined,
  });

  const checked = ref(props.checked);

  const uniqueId = computed(() => (props.inputId ? props.inputId : `text-input-${getCurrentInstance()?.uid || ''}`));

  watch(props, (newValue, oldValue) => {
    if (newValue.checked !== oldValue.checked || newValue.checked !== checked.value) {
      checked.value = props.checked;
    }
  });
</script>

<template>
  <div :class="['tide-input-radio', CSS.DISPLAY.FLEX, CSS.AXIS2.CENTER, CSS.GAP.HALF, props.disabled && 'disabled']">
    <input
      :checked="checked"
      :class="[CSS.DISPLAY.NONE]"
      :id="uniqueId"
      name=""
      type="radio"
      value=""
    />

    <div
      :class="[
        'tide-input-radio-custom',
        CSS.POSITION.RELATIVE,
        CSS.DISPLAY.FLEX,
        CSS.AXIS1.CENTER,
        CSS.AXIS2.CENTER,
        CSS.BORDER.FULL.ONE,
        checked ? CSS.BORDER.COLOR.HIGH : CSS.BORDER.COLOR.DEFAULT,
        CSS.BORDER.RADIUS.FULL,
        checked && 'checked',
      ]"
    >
      <div :class="['tide-input-radio-check', CSS.BORDER.RADIUS.FULL, props.checked && CSS.BG.SECONDARY]" />
    </div>

    <label
      :class="CSS.FONT.WEIGHT.FOUR_HUNDRED"
      :for="uniqueId"
    >
      {{ props.label }}
    </label>
  </div>
</template>

<style scoped>
  .tide-input-radio.disabled {
    opacity: var(--disabled);
  }

  .tide-input-radio-custom {
    width: var(--font-28);
    height: var(--font-28);
  }

  .tide-input-radio-check {
    width: 1rem;
    height: 1rem;
  }
</style>
