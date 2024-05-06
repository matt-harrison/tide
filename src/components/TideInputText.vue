<script lang="ts" setup>
  import { computed, getCurrentInstance, ref, watch } from 'vue';

  import type { Icon } from '@/types/Icon';
  import type { TextField } from '@/types/Field';

  import TideSvgIcon from '@/components/TideSvgIcon.vue';
  import { CSS } from '@/types/Styles';
  import { ICON } from '@/types/Icon';
  import { SIZE } from '@/types/Size';
  import { TEXT_INPUT_TYPE } from '@/types/TextInput';
  import { checkLength } from '@/utilities/validation';
  import { getFieldHasError, getSupportingText, handleFieldValidation } from '@/utilities/forms';

  interface Props extends TextField {
    inputId?: string;
    iconLeading?: Icon;
    suffix?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    error: false,
    iconLeading: undefined,
    inputId: undefined,
    label: undefined,
    maxlength: undefined,
    minlength: undefined,
    placeholder: '',
    required: false,
    suffix: '',
    transformValue: undefined,
    type: TEXT_INPUT_TYPE.TEXT,
    validators: undefined,
    value: '',
  });

  const formatValue = (input: string) => {
    return props.transformValue ? props.transformValue(input) : input;
  };

  const error = ref(props.error);
  const required = ref(props.required);
  const value = ref(formatValue(props.value));

  const instance = getCurrentInstance();
  const uid = instance?.uid ?? '';

  const formattedLabel = computed(() => (props.required ? `${props.label} *` : props.label));
  const hasError = computed(() => (props.required && !value.value) || getFieldHasError(error.value, props.error));
  const hasSuffix = computed(() => props.suffix && props.suffix.length > 0);
  const supportingText = computed(() => getSupportingText(props.error, error.value));
  const uniqueInputId = computed(() => `${props.inputId ?? 'text-input'}-${uid}`);

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
      validators: [checkLength(props.minlength, props.maxlength), ...(props.validators || [])],
      value,
    });

  watch(props, () => {
    value.value = formatValue(props.value);
    handleValidation();
  });

  defineExpose({ error, required, value });
</script>

<template>
  <div
    :class="[
      'tide-text-input',
      'block-field',
      CSS.FONT.COLOR.SURFACE.VARIANT,
      CSS.FONT.SIZE.FOURTEEN,
      disabled && 'disabled',
      hasError && 'error',
    ]"
  >
    <label
      :class="[CSS.MARGIN.BOTTOM.QUARTER, CSS.FONT.SIZE.FOURTEEN, CSS.FONT.WEIGHT.SEVEN_HUNDRED]"
      :for="uniqueInputId"
      v-if="label"
    >
      {{ formattedLabel }}
    </label>

    <div :class="[CSS.POSITION.RELATIVE, CSS.DISPLAY.FLEX, CSS.AXIS2.CENTER, CSS.WIDTH.FULL]">
      <input
        :class="[
          CSS.BORDER.RADIUS.QUARTER,
          CSS.PADDING.FULL.HALF,
          CSS.WIDTH.FULL,
          CSS.BG.SURFACE.DEFAULT,
          hasError ? CSS.PADDING.RIGHT.TWO : '',
          iconLeading && CSS.PADDING.LEFT.TWO,
          disabled && CSS.CURSOR.NOT_ALLOWED,
        ]"
        :disabled="disabled"
        :maxlength="maxlength"
        :minlength="minlength"
        :name="name"
        :placeholder="placeholder"
        :required="required"
        :type="type"
        @focusout="handleValidation"
        @input="handleInput"
        @keyup="handleValidation"
        :id="uniqueInputId"
        v-model="value"
      />

      <TideSvgIcon
        :class="[CSS.POSITION.ABSOLUTE, CSS.POSITIONING.LEFT_0, CSS.MARGIN.LEFT.HALF, CSS.POINTER_EVENTS.OFF]"
        :icon="iconLeading"
        :size="SIZE.SMALL"
        v-if="iconLeading"
      />

      <span
        :class="[
          hasError ? [CSS.MARGIN.RIGHT.TWO] : [CSS.MARGIN.RIGHT.HALF],
          CSS.POSITION.ABSOLUTE,
          CSS.POSITIONING.RIGHT_0,
          CSS.FONT.SIZE.FOURTEEN,
          CSS.POINTER_EVENTS.OFF,
        ]"
        v-if="hasSuffix"
      >
        {{ suffix }}
      </span>

      <TideSvgIcon
        :class="[CSS.POSITION.ABSOLUTE, CSS.POSITIONING.RIGHT_0, CSS.MARGIN.RIGHT.HALF, CSS.POINTER_EVENTS.OFF]"
        :icon="ICON.ERROR"
        :size="SIZE.SMALL"
        v-if="hasError"
      />
    </div>

    <div
      :class="['supporting-text', CSS.FONT.SIZE.TWELVE]"
      v-if="hasError"
    >
      {{ supportingText }}
    </div>
  </div>
</template>
