<script lang="ts" setup>
  import { getCurrentInstance, computed, ref, watch } from 'vue';

  import type { SelectField } from '@/types/Field';

  import TideSvgIcon from '@/components/TideSvgIcon.vue';
  import { CSS } from '@/types/Styles';
  import { ICON } from '@/types/Icon';
  import { SIZE } from '@/types/Size';
  import { getFieldHasError, getErrorMessage } from '@/utilities/validation';

  interface Props extends SelectField {
    inputId?: string;
    supportingText?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    error: false,
    inputId: undefined,
    label: undefined,
    required: false,
    supportingText: undefined,
    value: '',
  });

  const error = ref(props.error);
  const hasFocus = ref(false);
  const input = ref<HTMLSelectElement | null>(null);
  const required = ref(props.required);
  const value = ref(props.value);

  const errorMessage = computed(() => getErrorMessage(props.error, error.value));
  const formattedLabel = computed(() => (props.required ? `${props.label} *` : props.label));
  const hasError = computed(() => (props.required && !value.value) || getFieldHasError(error.value, props.error));
  const hasMinilabel = computed(() => hasFocus.value || !isEmpty.value);
  const isEmpty = computed(() => value.value === '');

  const uniqueId = computed(() => (props.inputId ? props.inputId : `text-input-${getCurrentInstance()?.uid || ''}`));

  const expandOptions = () => {
    console.log(input.value);
    const event = new MouseEvent('mousedown');
    input?.value?.dispatchEvent(event);
  };

  const handleFocus = () => {
    hasFocus.value = true;
  };

  const handleFocusOut = () => {
    hasFocus.value = false;
  };

  watch(props, (newValue, oldValue) => {
    if (newValue.value !== oldValue.value || newValue.value !== value.value) {
      value.value = props.value;
    }
  });

  defineExpose({ error, required, value });
</script>

<template>
  <div
    :class="[
      'tide-input-select',
      CSS.DISPLAY.FLEX,
      CSS.FLEX.DIRECTION.COLUMN,
      CSS.GAP.QUARTER,
      disabled && 'disabled',
      hasError && 'error',
    ]"
  >
    <div
      :class="[
        'tide-input-border',
        CSS.POSITION.RELATIVE,
        CSS.DISPLAY.FLEX,
        CSS.AXIS2.CENTER,
        CSS.GAP.HALF,
        CSS.BORDER.RADIUS.HALF,
        props.disabled ? CSS.CURSOR.NOT_ALLOWED : '',
        CSS.OVERFLOW.XY.HIDDEN,
      ]"
      @click="expandOptions"
    >
      <div :class="[CSS.DISPLAY.FLEX, CSS.FLEX.DIRECTION.COLUMN, CSS.WIDTH.FULL]">
        <label
          :class="[
            hasMinilabel ? ['minilabel', CSS.FONT.SIZE.TWELVE] : CSS.FONT.SIZE.SIXTEEN,
            CSS.POSITION.ABSOLUTE,
            CSS.POSITIONING.LEFT_0,
            CSS.MARGIN.TOP.HALF,
            CSS.MARGIN.LEFT.ONE,
            !hasError && CSS.FONT.COLOR.SURFACE.VARIANT,
            CSS.FONT.WEIGHT.FIVE_HUNDRED,
          ]"
          :for="uniqueId"
          v-if="label"
        >
          {{ formattedLabel }}
        </label>

        <select
          :class="[CSS.PADDING.BOTTOM.HALF, CSS.PADDING.X.ONE, CSS.WIDTH.FULL, disabled && CSS.CURSOR.NOT_ALLOWED]"
          :disabled="disabled"
          :name="name"
          ref="input"
          :required="required"
          @focus="handleFocus"
          @focusout="handleFocusOut"
          :id="uniqueId"
          v-model="value"
        >
          <option
            :class="[CSS.WIDTH.FULL, CSS.BG.SURFACE.DEFAULT]"
            :key="option.value"
            :selected="value === option.value ? true : undefined"
            :value="option.value"
            v-for="option in options"
          >
            {{ option.label }}
          </option>
        </select>
      </div>

      <TideSvgIcon
        :class="[CSS.POSITION.ABSOLUTE, CSS.POSITIONING.RIGHT_0, CSS.MARGIN.RIGHT.ONE, CSS.POINTER_EVENTS.OFF]"
        :icon="ICON.EXPAND_MORE"
        :size="SIZE.SMALL"
      />
    </div>

    <div
      :class="[CSS.DISPLAY.FLEX, CSS.AXIS2.CENTER, CSS.GAP.QUARTER, CSS.MARGIN.LEFT.ONE]"
      v-if="props.supportingText || hasError"
    >
      <TideSvgIcon
        :class="[]"
        :icon="ICON.ERROR"
        :size="SIZE.SMALL"
        v-if="hasError"
      />

      <div :class="[CSS.FONT.SIZE.TWELVE, CSS.FONT.WEIGHT.FIVE_HUNDRED]">
        {{ hasError ? errorMessage : props.supportingText }}
      </div>
    </div>
  </div>
</template>

<style scoped>
  select {
    appearance: none;
  }

  label {
    height: 1.1875rem;
    transition: font-size var(--animate), transform var(--animate);
  }

  label:not(.minilabel) {
    transform: translate(0, calc(9 / 16 * 1rem));
  }

  .tide-input-select.disabled {
    opacity: 0.333;
  }

  .tide-input-select.error .tide-input-border {
    outline-color: var(--error-border);
    background-color: var(--error-surface);
  }

  .tide-input-select.error:focus-within .tide-input-border {
    outline-color: var(--error-border);
  }

  .tide-input-select:focus-within .tide-input-border {
    --input-outline-width: var(--border-width-2);
    outline-color: var(--surface-border-high);
  }

  .tide-input-border {
    --input-outline-width: var(--border-width-1);
    outline: var(--input-outline-width) solid var(--border);
    outline-offset: calc(var(--input-outline-width) * -1);
  }

  .tide-input-select.error {
    color: var(--error-on-surface);
  }

  .tide-input-select.error option {
    color: var(--on-surface);
  }

  select {
    padding-top: 27px;
  }
</style>
