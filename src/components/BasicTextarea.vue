<script lang="ts" setup>
  import { computed, getCurrentInstance, ref, watch } from 'vue';

  import type { TextareaField } from '@/types/Field';

  import SvgIcon from '@/components/SvgIcon.vue';
  import { ICON } from '@/types/Icon';
  import { SIZE } from '@/types/Size';
  import { getFieldHasError, getSupportingText, handleFieldValidation } from '@/utilities/forms';
  import { checkLength } from '@/utilities/validation';

  interface Props extends TextareaField {
    rows?: number;
    textareaId?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    error: false,
    label: undefined,
    maxlength: undefined,
    minlength: undefined,
    placeholder: undefined,
    required: false,
    rows: 8,
    textareaId: undefined,
    transformValue: undefined,
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
  const supportingText = computed(() => getSupportingText(props.error, error.value));
  const uniqueTextareaId = computed(() => `${props.textareaId ?? 'textarea'}-${uid}`);

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
      'basic-textarea block-field flex column axis2-start font-14 font-surface-variant',
      disabled && 'disabled',
      hasError && 'error',
    ]"
  >
    <label
      :for="uniqueTextareaId"
      class="mb-1/4 font-14 font-700"
      v-if="label"
    >
      {{ formattedLabel }}
    </label>

    <textarea
      :disabled="disabled"
      :maxlength="maxlength"
      :minlength="minlength"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :rows="rows"
      @focusout="handleValidation"
      @input="handleInput"
      @keyup="handleValidation"
      class="p-1 font-surface-variant"
      :id="uniqueTextareaId"
      v-model="value"
    />

    <div
      class="supporting-text flex axis2-center gap-1/2 mt-1/4 break-word font-12"
      v-if="hasError"
    >
      <SvgIcon
        :icon="ICON.CIRCLE_EXCLAMATION"
        :size="SIZE.SMALL"
        class="align-middle font-16 pointer-events-none"
        v-if="hasError"
      />
      <span class="align-middle">{{ supportingText }}</span>
    </div>
  </div>
</template>

<style scoped src="@/assets/css/dynamic-inputs.css" />

<style scoped>
  textarea {
    resize: vertical;
  }
</style>
