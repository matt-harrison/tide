<script lang="ts" setup>
  import { getCurrentInstance, computed, ref, watch } from 'vue';

  import type { Icon } from '../types/Icon';
  import type { SelectField } from '../types/Field';

  import TideSvgIcon from './TideSvgIcon.vue';
  import { CSS } from '../types/Styles';
  import { ICON } from '../types/Icon';
  import { SIZE } from '../types/Size';
  import { getFieldHasError, getSupportingText } from '../utilities/forms';

  interface Props extends SelectField {
    iconLeading?: Icon;
    selectId?: string;
    suffix?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    error: false,
    iconLeading: undefined,
    label: undefined,
    placeholder: '',
    required: false,
    selectId: undefined,
    suffix: '',
    value: '',
  });

  const error = ref(props.error);
  const required = ref(props.required);
  const value = ref(props.value);

  const instance = getCurrentInstance();
  const uid = instance?.uid ?? '';

  const formattedLabel = computed(() => (props.required ? `${props.label} *` : props.label));
  const hasError = computed(() => (props.required && !value.value) || getFieldHasError(error.value, props.error));
  const hasSuffix = computed(() => props.suffix && props.suffix.length > 0);
  const supportingText = computed(() => getSupportingText(props.error, error.value));
  const uniqueSelectId = computed(() => `${props.selectId ?? 'select'}-${uid}`);

  watch(props, () => {
    value.value = props.value;
  });

  defineExpose({ error, required, value });
</script>

<template>
  <div
    :class="[
      'tide-select',
      'block-field',
      'tide-font-surface-variant',
      CSS.FONT.SIZE.FOURTEEN,
      disabled && 'disabled',
      hasError && 'error',
    ]"
  >
    <label
      :class="[CSS.MARGIN.BOTTOM.QUARTER, CSS.FONT.SIZE.FOURTEEN, CSS.FONT.WEIGHT.SEVEN_HUNDRED]"
      :for="uniqueSelectId"
      v-if="label"
    >
      {{ formattedLabel }}
    </label>

    <div :class="[CSS.POSITION.RELATIVE, CSS.DISPLAY.FLEX, CSS.AXIS2.CENTER, CSS.WIDTH.FULL]">
      <select
        :class="[
          'field',
          'tide-bg-surface-low',
          iconLeading && [CSS.PADDING.LEFT.TWO],
          [CSS.BORDER.RADIUS.QUARTER, CSS.PADDING.FULL.HALF],
          hasSuffix && [CSS.PADDING.RIGHT.TWO],
          'tide-width-full ',
          [CSS.WIDTH.FULL],
          disabled && [CSS.CURSOR.NOT_ALLOWED],
        ]"
        :disabled="disabled"
        :name="name"
        :required="required"
        :id="uniqueSelectId"
        v-model="value"
      >
        <option
          :selected="!value"
          disabled
          hidden
          v-if="placeholder"
          value=""
        >
          {{ placeholder }}
        </option>

        <option
          :key="option.value"
          :selected="value === option.value ? true : undefined"
          :value="option.value"
          v-for="option in options"
        >
          {{ option.label }}
        </option>
      </select>

      <TideSvgIcon
        :class="[CSS.POSITION.ABSOLUTE, CSS.POSITIONING.LEFT_0, CSS.MARGIN.LEFT.HALF, CSS.POINTER_EVENTS.OFF]"
        :icon="iconLeading"
        :size="SIZE.SMALL"
        v-if="iconLeading"
      />

      <span
        :class="[
          CSS.POSITION.ABSOLUTE,
          CSS.POSITIONING.RIGHT_0,
          CSS.MARGIN.RIGHT.TWO,
          CSS.FONT.SIZE.FOURTEEN,
          CSS.POINTER_EVENTS.OFF,
        ]"
        v-if="suffix"
      >
        {{ suffix }}
      </span>

      <TideSvgIcon
        :class="[
          'tide-bg-surface-low',
          CSS.POSITION.ABSOLUTE,
          CSS.POSITIONING.RIGHT_0,
          CSS.MARGIN.RIGHT.HALF,
          CSS.POINTER_EVENTS.OFF,
        ]"
        :icon="ICON.EXPAND_MORE"
        :size="SIZE.SMALL"
      />
    </div>

    <div
      :class="['supporting-text tide-margin-top-1/4 tide-font-12']"
      v-if="hasError"
    >
      {{ supportingText }}
    </div>
  </div>
</template>

<style scoped src="../assets/css/dynamic-inputs.css" />

<style scoped>
  select {
    appearance: none;
  }
</style>