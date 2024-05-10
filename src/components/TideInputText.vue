<script lang="ts" setup>
  import { computed, getCurrentInstance, ref, watch } from 'vue';

  import type { FormValueTransformer } from '@/types/Form';
  import type { Icon } from '@/types/Icon';
  import type { TextInputType } from '@/types/TextInput';
  import type { ValidationError, Validator } from '@/types/Validation';

  import TideSvgIcon from '@/components/TideSvgIcon.vue';
  import { CSS } from '@/types/Styles';
  import { ICON } from '@/types/Icon';
  import { SIZE } from '@/types/Size';
  import { TEXT_INPUT_TYPE } from '@/types/TextInput';
  import { getErrorMessage, getFieldHasError, handleFieldValidation } from '@/utilities/forms';
  import { getFieldLengthIsValid } from '@/utilities/validation';

  type Props = {
    autocomplete?: boolean;
    dataTrack?: string;
    disabled?: boolean;
    error?: ValidationError;
    hasClose?: boolean;
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
    hasClose: false,
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
  const showPassword = ref(false);
  const value = ref(props.value);

  const errorMessage = computed(() => getErrorMessage(props.error, error.value));
  const formattedLabel = computed(() => (props.required && props.label ? `${props.label} *` : props.label));
  const hasClose = computed(() => props.hasClose && value.value);
  const hasError = computed(() => (props.required && !value.value) || getFieldHasError(error.value, props.error));
  const hasMinilabel = computed(() => hasFocus.value || !isEmpty.value);
  const isEmpty = computed(() => value.value === '');
  const type = computed(() =>
    props.type === TEXT_INPUT_TYPE.PASSWORD && showPassword.value === true ? TEXT_INPUT_TYPE.TEXT : props.type
  );
  const uniqueId = computed(() => (props.inputId ? props.inputId : `text-input-${getCurrentInstance()?.uid || ''}`));

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

  defineExpose({ error, updateValue, value });
</script>

<template>
  <div
    :class="[
      'tide-input-text',
      CSS.DISPLAY.FLEX,
      CSS.FLEX.DIRECTION.COLUMN,
      CSS.GAP.QUARTER,
      disabled && 'disabled',
      hasError && 'error',
    ]"
  >
    <div
      :class="[
        'tide-input-text-field',
        CSS.DISPLAY.FLEX,
        CSS.AXIS2.CENTER,
        CSS.GAP.HALF,
        CSS.POSITION.RELATIVE,
        CSS.BORDER.RADIUS.HALF,
        hasClose ? [CSS.PADDING.RIGHT.HALF, CSS.PADDING.LEFT.ONE] : [CSS.PADDING.X.ONE],
        CSS.PADDING.Y.HALF,
        props.disabled ? CSS.CURSOR.NOT_ALLOWED : CSS.CURSOR.TEXT,
      ]"
    >
      <TideSvgIcon
        :icon="props.iconLeading"
        :size="SIZE.SMALL"
        v-if="props.iconLeading"
      />

      <div :class="[CSS.DISPLAY.FLEX, CSS.AXIS2.CENTER, CSS.GAP.QUARTER, CSS.WIDTH.FULL]">
        <div
          :class="['tide-input-text-prefix', !hasError && CSS.FONT.COLOR.SURFACE.VARIANT, hasMinilabel ? '' : 'offset']"
          v-if="props.prefix"
        >
          {{ props.prefix }}
        </div>

        <div
          :class="[CSS.DISPLAY.FLEX, CSS.FLEX.DIRECTION.COLUMN, CSS.WIDTH.FULL]"
          @click.prevent="input?.focus()"
        >
          <label
            :class="[
              hasMinilabel ? ['minilabel', CSS.FONT.SIZE.TWELVE] : CSS.FONT.SIZE.SIXTEEN,
              !hasError && CSS.FONT.COLOR.SURFACE.VARIANT,
              CSS.FONT.WEIGHT.FIVE_HUNDRED,
              CSS.CURSOR.TEXT,
            ]"
            :for="uniqueId"
            v-if="label"
          >
            {{ formattedLabel }}
          </label>

          <input
            :autocomplete="autocomplete ? 'on' : 'off'"
            :class="[CSS.WIDTH.FULL, disabled && CSS.CURSOR.NOT_ALLOWED]"
            :data-track="props.dataTrack"
            :disabled="props.disabled"
            :maxlength="props.maxlength"
            :minlength="props.minlength"
            :name="props.name"
            ref="input"
            :required="props.required"
            :type="type"
            @change="handleValidation"
            @focus="handleFocus"
            @focusout="handleFocusOut"
            @input="handleInput"
            :id="uniqueId"
            v-model="value"
          />
        </div>

        <div
          :class="['tide-input-text-suffix', !hasError && CSS.FONT.COLOR.SURFACE.VARIANT, hasMinilabel ? '' : 'offset']"
          v-if="props.suffix"
        >
          {{ props.suffix }}
        </div>
      </div>

      <TideSvgIcon
        :class="[CSS.PADDING.Y.HALF, CSS.PADDING.FULL.HALF, CSS.CURSOR.POINTER]"
        :icon="ICON.CLOSE"
        :size="SIZE.SMALL"
        @click="value = ''"
        v-if="hasClose && props.type !== TEXT_INPUT_TYPE.PASSWORD"
      />

      <TideSvgIcon
        :class="[CSS.PADDING.Y.HALF, CSS.PADDING.FULL.HALF, CSS.CURSOR.POINTER]"
        :icon="ICON.VISIBILITY"
        :size="SIZE.SMALL"
        @click="
          showPassword = !showPassword;
          console.log(props.type === TEXT_INPUT_TYPE.PASSWORD, showPassword === true, type);
        "
        v-if="props.type === TEXT_INPUT_TYPE.PASSWORD"
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

  label:not(.minilabel),
  .tide-input-text-prefix:not(.offset),
  .tide-input-text-suffix:not(.offset) {
    transform: translate(0, calc(9 / 16 * 1rem));
  }

  .tide-input-text-prefix,
  .tide-input-text-suffix {
    transition: transform var(--animate);
  }

  .tide-input-text.disabled {
    opacity: 0.333;
  }

  .tide-input-text.error {
    color: var(--error-on-surface);
  }

  .tide-input-text.error .tide-input-text-field {
    outline-color: var(--error-border);
    background-color: var(--error-surface);
  }

  .tide-input-text.error:focus-within .tide-input-text-field {
    outline-color: var(--error-border);
  }

  .tide-input-text:focus-within .tide-input-text-field {
    --input-outline-width: var(--border-width-2);
    outline-color: var(--surface-border-high);
  }

  .tide-input-text input {
    outline: none;
  }

  .tide-input-text-field {
    --input-outline-width: var(--border-width-1);
    outline: var(--input-outline-width) solid var(--border);
    outline-offset: calc(var(--input-outline-width) * -1);
    color: var(--surface-foreground);
  }
</style>
