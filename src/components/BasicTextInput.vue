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
      validators: [checkLength(props.minlength, props.maxlength), ...(props.validators || [])],
      value,
    });

  watch(props, () => {
    value.value = props.value;

    handleValidation();
  });

  defineExpose({ error, required, value });
</script>

<template>
  <div
    :class="['basic-text-input block-field font-14 font-surface-variant', disabled && 'disabled', hasError && 'error']"
  >
    <label
      :for="uniqueInputId"
      class="mb-1/4 font-14 font-700"
      v-if="label"
    >
      {{ formattedLabel }}
    </label>

    <div class="relative flex axis2-center w-full">
      <input
        :class="[
          'field radius-1/4 p-1/2 w-full bg-surface-low',
          hasError ? 'pr-2' : '',
          iconLeading && 'pl-2',
          disabled && 'not-allowed',
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
        class="absolute right-0 mr-2 font-14 pointer-events-none"
        v-if="hasSuffix"
      >
        {{ suffix }}
      </span>

      <SvgIcon
        :icon="ICON.CIRCLE_EXCLAMATION"
        :size="SIZE.SMALL"
        class="absolute right-0 mr-1/2 pointer-events-none"
        v-if="hasError"
      />
    </div>

    <div
      class="font-12"
      v-if="hasError"
    >
      {{ supportingText }}
    </div>
  </div>
</template>

<style scoped src="@/assets/css/dynamic-inputs.css" />
