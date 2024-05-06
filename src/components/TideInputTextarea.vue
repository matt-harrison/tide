<script lang="ts" setup>
  import { computed, getCurrentInstance, ref, watch } from 'vue';

  import type { TextareaField } from '@/types/Field';

  import TideSvgIcon from '@/components/TideSvgIcon.vue';
  import { CSS } from '@/types/Styles';
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
      'tide-textarea',
      CSS.DISPLAY.FLEX,
      CSS.FLEX.DIRECTION.COLUMN,
      CSS.AXIS2.START,
      CSS.FONT.SIZE.FOURTEEN,
      CSS.FONT.COLOR.SURFACE.VARIANT,
      disabled && 'disabled',
      hasError && 'error',
    ]"
  >
    <label
      :class="[CSS.MARGIN.BOTTOM.QUARTER, CSS.FONT.SIZE.FOURTEEN, CSS.FONT.WEIGHT.SEVEN_HUNDRED]"
      :for="uniqueTextareaId"
      v-if="label"
    >
      {{ formattedLabel }}
    </label>

    <textarea
      :class="['field', CSS.BG.SURFACE.DEFAULT, CSS.FONT.COLOR.SURFACE.VARIANT, CSS.PADDING.FULL.HALF]"
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
      :id="uniqueTextareaId"
      v-model="value"
    />

    <div
      :class="[
        'supporting-text',
        CSS.DISPLAY.FLEX,
        CSS.AXIS2.CENTER,
        CSS.GAP.HALF,
        CSS.MARGIN.TOP.QUARTER,
        CSS.BREAK_WORD.ON,
        CSS.FONT.SIZE.TWELVE,
      ]"
      v-if="hasError"
    >
      <TideSvgIcon
        :class="[CSS.ALIGN.Y.MIDDLE, CSS.FONT.SIZE.SIXTEEN, CSS.POINTER_EVENTS.OFF]"
        :icon="ICON.ERROR"
        :size="SIZE.SMALL"
        v-if="hasError"
      />
      <span :class="[CSS.ALIGN.Y.MIDDLE]">
        {{ supportingText }}
      </span>
    </div>
  </div>
</template>

<style scoped>
  textarea {
    resize: vertical;
  }
</style>
