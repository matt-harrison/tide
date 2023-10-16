<script lang="ts" setup>
  import { computed, getCurrentInstance, ref, watch } from 'vue';

  import type { Icon } from '@/types/Icon';
  import type { TextField } from '@/types/Field';

  import SvgIcon from '@/components/SvgIcon.vue';
  import { ICON } from '@/types/Icon';
  import { SIZE } from '@/types/Size';
  import { TEXT_INPUT_TYPE } from '@/types/TextInput';
  import { getCssUtils } from '@/utilities/styles';
  import { getFieldHasError, getSupportingText, handleFieldValidation } from '@/utilities/forms';
  import { getFieldLengthIsValid } from '@/utilities/validation';

  // TODO: add number formatting. Or should there be a special BasicNumberInput (BasicPriceInput?)?
  // TODO: implement proper theme colors (& dark mode colors) once they're ready

  const UTILS = getCssUtils();

  type Props = TextField & {
    inputClass?: string;
    inputId?: string;
    labelClass?: string;
    leadingIcon?: Icon;
    suffix?: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    error: false,
    inputClass: undefined,
    inputId: undefined,
    label: undefined,
    labelClass: undefined,
    leadingIcon: undefined,
    maxLength: undefined,
    minLength: undefined,
    placeholder: '',
    required: false,
    suffix: '',
    transformValue: undefined,
    type: TEXT_INPUT_TYPE.TEXT,
    validators: undefined,
    value: '',
  });

  const formattedLabel = computed(() => (props.required ? `${props.label} *` : props.label));
  const hasError = computed(() => getFieldHasError(error.value, props.error));
  const hasSuffix = computed(() => props.suffix && props.suffix.length > 0);
  const supportingText = computed(() => getSupportingText(props.error, error.value));
  const uniqueInputId = computed(() => `${props.inputId ?? 'text-input'}-${uid}`);

  const error = ref(props.error);
  const required = ref(props.required);
  const value = ref(props.value);

  const instance = getCurrentInstance();
  const uid = instance?.uid ?? '';

  const handleInput = () => {
    if (props.transformValue) {
      value.value = props.transformValue(value.value);
    }
  };

  const handleValidation = () =>
    handleFieldValidation({
      error,
      errorFromProps: props.error,
      validators: props.validators,
      value,
    });

  watch(props, (newValue, oldValue) => {
    if (
      newValue.value !== oldValue.value &&
      getFieldLengthIsValid({
        maxLength: props.maxLength,
        minLength: props.minLength,
        value: props.value,
      })
    ) {
      value.value = props.value;
    }
    handleValidation();
  });

  defineExpose({ error, required, value });
</script>

<template>
  <div
    :class="[
      'basic-text-input',
      'block-field',
      UTILS.FLEX,
      UTILS.AXIS2_START,
      UTILS.COLUMN,
      UTILS.FONT_14,
      UTILS.FONT_SURFACE_VARIANT,
      disabled && 'disabled',
      hasError && 'error',
    ]"
  >
    <label
      :class="[labelClass, UTILS.FONT_14, UTILS.PB_1_4]"
      :for="uniqueInputId"
      v-if="label"
    >
      {{ formattedLabel }}
    </label>
    <div :class="[UTILS.RELATIVE, UTILS.W_FULL]">
      <SvgIcon
        :class="[
          UTILS.ABSOLUTE,
          UTILS.TOP_50,
          UTILS.LEFT_0,
          '-translate-y-1/2',
          UTILS.ML_3_4,
          UTILS.POINTER_EVENTS_NONE,
        ]"
        :icon="leadingIcon"
        :size="SIZE.SMALL"
        v-if="leadingIcon"
      />
      <input
        :class="[
          inputClass,
          'field',
          UTILS.W_FULL,
          UTILS.P_3_4,
          UTILS.RADIUS_1_8,
          UTILS.BG_SURFACE_LOW,
          disabled && UTILS.NOT_ALLOWED,
          leadingIcon && UTILS.PL_2,
          hasError ? (hasSuffix ? UTILS.PR_4 : UTILS.PR_2) : null,
        ]"
        :disabled="disabled"
        :maxlength="maxLength"
        :minlength="minLength"
        :name="name"
        :placeholder="placeholder"
        :required="required"
        :type="type"
        @focusout="handleValidation"
        @input="handleInput"
        :id="uniqueInputId"
        v-model="value"
      />
      <span
        :class="[
          UTILS.ABSOLUTE,
          UTILS.TOP_50,
          UTILS.RIGHT_0,
          '-translate-y-1/2',
          UTILS.PX_1_2,
          UTILS.FONT_14,
          UTILS.POINTER_EVENTS_NONE,
          hasError ? UTILS.MR_2 : UTILS.MR_3_4,
        ]"
        v-if="suffix"
      >
        {{ suffix }}
      </span>
      <slot name="trailing-icon">
        <SvgIcon
          :class="[
            '-translate-y-1/2',
            UTILS.ABSOLUTE,
            UTILS.TOP_50,
            UTILS.RIGHT_0,
            UTILS.MR_3_4,
            UTILS.POINTER_EVENTS_NONE,
          ]"
          :icon="ICON.CIRCLE_EXCLAMATION"
          :size="SIZE.SMALL"
          v-if="hasError"
        />
      </slot>
    </div>
    <div
      :class="['supporting-text', UTILS.FONT_12, UTILS.MT_1_4]"
      v-if="hasError"
    >
      {{ supportingText }}
    </div>
  </div>
</template>
