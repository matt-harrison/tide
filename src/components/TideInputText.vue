<script lang="ts" setup>
  import { computed, getCurrentInstance, ref, watch } from 'vue';

  import type { FormValueTransformer } from '@/types/Form';
  import type { Icon } from '@/types/Icon';
  import type { TextInputType } from '@/types/TextInput';
  import type { ValidationError, Validator } from '@/types/Validation';

  import TideButtonIcon from './TideButtonIcon.vue';
  import TideSvgIcon from '@/components/TideSvgIcon.vue';
  import { CSS } from '@/types/Styles';
  import { ICON } from '@/types/Icon';
  import { PRIORITY } from '@/types/Priority';
  import { SIZE } from '@/types/Size';
  import { TEXT_INPUT_TYPE } from '@/types/TextInput';
  import { getErrorMessage, getFieldHasError, handleFieldValidation } from '@/utilities/forms';
  import { getFieldLengthIsValid } from '@/utilities/validation';

  type Props = {
    autocomplete?: boolean;
    dataTrack?: string;
    disabled?: boolean;
    error?: ValidationError;
    iconLeading?: Icon;
    inputId?: string;
    label: string;
    maxlength?: number | undefined;
    minlength?: number | undefined;
    name: string;
    prefix?: string;
    required?: boolean;
    suffix?: string;
    supportingText?: string;
    transformValue?: FormValueTransformer;
    type?: TextInputType;
    validators?: Validator[];
    value?: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    autocomplete: false,
    dataTrack: '',
    disabled: false,
    error: false,
    iconLeading: undefined,
    inputId: undefined,
    label: undefined,
    maxlength: undefined,
    minlength: undefined,
    prefix: undefined,
    required: false,
    suffix: undefined,
    supportingText: undefined,
    transformValue: undefined,
    type: TEXT_INPUT_TYPE.TEXT,
    validators: undefined,
    value: '',
  });

  const error = ref(props.error);
  const hasFocus = ref(false);
  const input = ref<HTMLInputElement | null>(null);
  const required = ref(props.required);
  const value = ref(props.value);

  const errorMessage = computed(() => getErrorMessage(props.error, error.value));
  const formattedLabel = computed(() => (props.required && props.label ? `${props.label} *` : props.label));
  const hasError = computed(() => (props.required && !value.value) || getFieldHasError(error.value, props.error));
  const hasMinilabel = computed(() => hasFocus.value || !isEmpty.value || props.prefix);
  const isEmpty = computed(() => value.value === '');
  const uniqueInputId = computed(() => `${props.inputId ?? 'text-input'}-${uid}`);

  const instance = getCurrentInstance();
  const uid = instance?.uid ?? '';

  const handleFocus = () => {
    hasFocus.value = true;
  };

  const handleFocusOut = () => {
    hasFocus.value = false;
    handleValidation();
  };

  const handleInput = () => {
    if (props.transformValue) {
      const digits = value.value.match(/\d/g)?.join('') || undefined;

      value.value = digits ? props.transformValue(digits) : '';
    }
  };

  const handleValidation = () =>
    handleFieldValidation({
      error,
      errorFromProps: props.error,
      validators: props.validators,
      value,
    });

  const updateValue = (newValue: string) => {
    value.value = newValue;
  };

  watch(
    props,
    (newValue, oldValue) => {
      if (
        (newValue.value !== oldValue.value || newValue.value !== value.value) &&
        getFieldLengthIsValid({
          maxlength: props.maxlength,
          minlength: props.minlength,
          value: props.value,
        })
      ) {
        value.value = props.value;
      }

      handleValidation();
    },
    { deep: true }
  );

  defineExpose({ error, required, updateValue, value });
</script>

<template>
  <div
    :class="[
      'tide-text-input',
      CSS.DISPLAY.FLEX,
      CSS.FLEX.DIRECTION.COLUMN,
      CSS.GAP.QUARTER,
      disabled && 'disabled',
      hasError && 'error',
    ]"
  >
    <div
      :class="[
        'tide-text-input-field',
        CSS.DISPLAY.FLEX,
        CSS.AXIS2.CENTER,
        CSS.GAP.HALF,
        CSS.POSITION.RELATIVE,
        CSS.BORDER.RADIUS.QUARTER,
        CSS.PADDING.Y.HALF,
        CSS.PADDING.X.ONE,
        props.disabled ? CSS.CURSOR.NOT_ALLOWED : CSS.CURSOR.TEXT,
      ]"
    >
      <TideSvgIcon
        :icon="props.iconLeading"
        :size="SIZE.SMALL"
        v-if="props.iconLeading"
      />

      <div
        :class="[CSS.DISPLAY.FLEX, CSS.FLEX.DIRECTION.COLUMN, CSS.WIDTH.FULL]"
        @click.prevent="input?.focus()"
      >
        <label
          :class="[
            hasMinilabel ? ['minilabel', CSS.FONT.SIZE.TWELVE] : CSS.FONT.SIZE.SIXTEEN,
            CSS.FONT.WEIGHT.FIVE_HUNDRED,
            CSS.CURSOR.TEXT,
          ]"
          :for="uniqueInputId"
          ref="label"
          v-if="label"
        >
          {{ formattedLabel }}
        </label>

        <div :class="[CSS.DISPLAY.FLEX, CSS.GAP.QUARTER]">
          <div v-if="props.prefix">{{ props.prefix }}</div>

          <input
            :autocomplete="autocomplete ? 'on' : 'off'"
            :class="[CSS.WIDTH.FULL, disabled && CSS.CURSOR.NOT_ALLOWED]"
            :data-track="dataTrack"
            :disabled="disabled"
            :maxlength="maxlength"
            :minlength="minlength"
            :name="name"
            ref="input"
            :required="required"
            :type="type"
            @focus="handleFocus"
            @focusout="handleFocusOut"
            @input="handleInput"
            @keyup="handleValidation"
            :id="uniqueInputId"
            v-model="value"
          />

          <div v-if="props.suffix">{{ props.suffix }}</div>
        </div>
      </div>

      <TideButtonIcon
        :icon="ICON.CLOSE"
        :priority="PRIORITY.QUATERNARY"
        :size="SIZE.SMALL"
        @click.stop="value = ''"
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
  label {
    height: 1.1875rem;
    transition: font-size var(--animate), transform var(--animate);
  }

  label:not(.minilabel) {
    transform: translate(0, calc(9.5 / 16 * 1rem));
  }

  .tide-text-input.disabled {
    opacity: 0.333;
  }

  .tide-text-input.error {
    color: var(--error-on-surface);
  }

  .tide-text-input.error .tide-text-input-field {
    outline-color: var(--error-border);
    background-color: var(--error-surface);
  }

  .tide-text-input.error:focus-within .tide-text-input-field {
    outline-color: var(--error-border);
  }

  .tide-text-input:focus-within .tide-text-input-field {
    --input-outline-width: var(--border-width-2);
    outline-color: var(--surface-border-high);
  }

  .tide-text-input-field {
    --input-outline-width: var(--border-width-1);
    outline: var(--input-outline-width) solid var(--border);
    outline-offset: calc(var(--input-outline-width) * -1);
    color: var(--surface-foreground);
  }

  .tide-text-input input {
    outline: none;
  }
</style>
