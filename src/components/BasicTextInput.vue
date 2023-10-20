<script lang="ts" setup>
  import { computed, getCurrentInstance, ref, watch } from 'vue';

  import type { Icon } from '@/types/Icon';
  import type { TextField } from '@/types/Field';

  import SvgIcon from '@/components/SvgIcon.vue';
  import { ICON } from '@/types/Icon';
  import { SIZE } from '@/types/Size';
  import { TEXT_INPUT_TYPE } from '@/types/TextInput';
  import { getFieldHasError, getSupportingText, handleFieldValidation } from '@/utilities/forms';
  import { getFieldLengthIsValid } from '@/utilities/validation';

  // TODO: Implement proper theme colors (& dark mode colors) once they're ready.

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

  const error = ref(props.error);
  const required = ref(props.required);
  const value = ref(props.value);

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
  <div :class="['basic-text-input', disabled && 'disabled', hasError && 'error', 'font-14']">
    <label
      :class="['mb-1/4 font-12 font-700', hasError ? 'font-red' : 'font-gray-dark']"
      :for="uniqueInputId"
      v-if="label"
    >
      {{ formattedLabel }}
    </label>

    <div
      :class="[
        'basic-text-input-container relative flex axis2-center border-1',
        hasError ? 'border-red' : 'border-gray',
        'radius-1/2 w-full bg-white',
      ]"
    >
      <input
        :class="[
          'field p-1/2 w-full',
          hasError ? (hasSuffix ? 'pr-4' : 'pr-2') : '',
          iconLeading && 'pl-2',
          disabled && 'not-allowed',
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

      <SvgIcon
        :icon="iconLeading"
        :size="SIZE.SMALL"
        class="absolute left-0 ml-1/2 pointer-events-none"
        v-if="iconLeading"
      />

      <span
        :class="['absolute right-0 ', hasError ? 'mr-2' : 'mr-1/2', 'px-1/2 font-14 pointer-events-none']"
        v-if="suffix"
      >
        {{ suffix }}
      </span>

      <SvgIcon
        :icon="ICON.CIRCLE_EXCLAMATION"
        :size="SIZE.SMALL"
        class="absolute right-0 mr-1/2 font-red pointer-events-none"
        v-if="hasError"
      />
    </div>

    <div
      class="supporting-text font-12 font-red"
      v-if="hasError"
    >
      {{ supportingText }}
    </div>
  </div>
</template>

<style scoped>
  .basic-text-input-container:focus:not(.error) {
    border-color: var(--gray-dark);
  }

  .basic-text-input-container:focus-within {
    border-width: var(--border-2);
  }

  .basic-text-input-container input:focus {
    outline: 0;
  }

  .basic-text-input.disabled {
    opacity: 0.33;
  }
</style>
