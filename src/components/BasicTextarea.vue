<script lang="ts" setup>
  import { computed, getCurrentInstance, ref, watch } from 'vue';

  import type { TextareaField } from '@/types/Field';

  import SvgIcon from '@/components/SvgIcon.vue';
  import { SIZE } from '@/types/Size';
  import { getCssUtils } from '@/utilities/styles';
  import { getFieldHasError, getSupportingText, handleFieldValidation } from '@/utilities/forms';
  import { getFieldLengthIsValid } from '@/utilities/validation';

  const UTILS = getCssUtils();

  type Props = TextareaField & {
    labelClass?: string;
    rows?: number;
    textareaClass?: string;
    textareaId?: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    error: false,
    label: undefined,
    labelClass: undefined,
    maxlength: undefined,
    minlength: undefined,
    placeholder: undefined,
    required: false,
    rows: 8,
    textareaClass: undefined,
    textareaId: undefined,
    transformValue: undefined,
    validators: undefined,
    value: '',
  });

  const hasError = computed(() => getFieldHasError(error.value, props.error));
  const supportingText = computed(() => getSupportingText(props.error, error.value));
  const uniqueTextareaId = computed(() => `${props.textareaId ?? 'textarea'}-${uid}`);

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

  watch(props, () => {
    if (
      getFieldLengthIsValid({
        maxlength: props.maxlength,
        minlength: props.minlength,
        value: props.value,
      })
    ) {
      value.value = props.value;
    }
  });

  defineExpose({ error, required, value });
</script>

<template>
  <div
    :class="[
      'basic-textarea',
      'block-field',
      UTILS.FLEX,
      UTILS.COLUMN,
      UTILS.AXIS2_START,
      UTILS.FONT_14,
      UTILS.FONT_SURFACE_VARIANT,
      disabled && 'disabled',
      hasError && 'error',
    ]"
  >
    <label
      :class="[labelClass, UTILS.FONT_14, UTILS.PB_1_4]"
      :for="uniqueTextareaId"
      v-if="label"
    >
      {{ label }}
    </label>
    <textarea
      :class="[
        textareaClass,
        'field',
        UTILS.W_FULL,
        UTILS.P_3_4,
        UTILS.RADIUS_1_8,
        UTILS.FONT_14,
        UTILS.BG_SURFACE_LOW,
        disabled && UTILS.NOT_ALLOWED,
      ]"
      :disabled="disabled"
      :maxlength="maxlength"
      :minlength="minlength"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :rows="rows"
      @focusout="handleValidation"
      @input="handleInput"
      :id="uniqueTextareaId"
      v-model="value"
    />

    <div
      :class="['supporting-text', UTILS.FONT_12, UTILS.MT_1_4, UTILS.BREAK_WORD]"
      v-if="hasError"
    >
      <SvgIcon
        :class="[UTILS.INLINE_BLOCK, UTILS.ALIGN_MIDDLE, UTILS.FONT_16, UTILS.MR_1_2, UTILS.POINTER_EVENTS_NONE]"
        :icon="'circle-exclamation'"
        :size="SIZE.SMALL"
        v-if="hasError"
      />
      <span :class="UTILS.ALIGN_MIDDLE">{{ supportingText }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  textarea {
    resize: vertical;
  }
</style>
