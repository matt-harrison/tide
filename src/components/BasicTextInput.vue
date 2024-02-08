<script lang="ts" setup>
  import { computed, getCurrentInstance, ref, watch } from 'vue';

  import type { Icon } from '@/types/Icon';
  import type { TextField } from '@/types/Field';

  import SvgIcon from '@/components/SvgIcon.vue';
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
      'basic-text-input block-field tide-font-14 tide-font-surface-variant',
      disabled && 'disabled',
      hasError && 'error',
    ]"
  >
    <label
      :for="uniqueInputId"
      class="tide-margin-bottom-1/4 tide-font-14 tide-font-700"
      v-if="label"
    >
      {{ formattedLabel }}
    </label>

    <div class="tide-position-relative tide-display-flex tide-axis2-center tide-width-full">
      <input
        :class="[
          'field tide-radius-1/4 tide-padding-1/2 tide-width-full tide-bg-surface-low',
          hasError ? 'tide-padding-right-2' : '',
          iconLeading && 'tide-padding-left-2',
          disabled && 'tide-cursor-not-allowed',
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

      <SvgIcon
        :icon="iconLeading"
        :size="SIZE.SMALL"
        class="tide-position-absolute tide-left-0 tide-margin-left-1/2 tide-pointer-events-none"
        v-if="iconLeading"
      />

      <span
        :class="hasError ? 'tide-margin-right-2' : 'tide-margin-right-1/2'"
        class="tide-position-absolute tide-right-0 tide-font-14 tide-pointer-events-none"
        v-if="hasSuffix"
      >
        {{ suffix }}
      </span>

      <SvgIcon
        :icon="ICON.CIRCLE_EXCLAMATION"
        :size="SIZE.SMALL"
        class="tide-position-absolute tide-right-0 tide-margin-right-1/2 tide-pointer-events-none"
        v-if="hasError"
      />
    </div>

    <div
      class="supporting-text tide-font-12"
      v-if="hasError"
    >
      {{ supportingText }}
    </div>
  </div>
</template>

<style scoped src="@/assets/css/dynamic-inputs.css" />
