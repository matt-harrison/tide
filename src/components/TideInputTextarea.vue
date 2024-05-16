<script lang="ts" setup>
  import { computed, getCurrentInstance, ref, watch } from 'vue';

  import type { ValidationError } from '@/types/Validation';

  import TideSvgIcon from '@/components/TideSvgIcon.vue';
  import { CSS } from '@/types/Styles';
  import { ICON } from '@/types/Icon';
  import { SIZE } from '@/types/Size';
  import { getErrorMessage, getFieldHasError, handleFieldValidation } from '@/utilities/validation';

  type Props = {
    dataTrack?: string;
    error?: ValidationError;
    inputId?: string;
    label?: string;
    maxlength?: number | undefined;
    minlength?: number | undefined;
    name?: string;
    required?: boolean;
    rows?: number;
    supportingText?: string;
    value?: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    dataTrack: '',
    error: false,
    inputId: undefined,
    label: undefined,
    maxlength: undefined,
    minlength: undefined,
    name: undefined,
    required: false,
    rows: 8,
    supportingText: undefined,
    value: '',
  });

  const error = ref(props.error);
  const hasFocus = ref(false);
  const input = ref<HTMLInputElement | null>(null);
  const value = ref(props.value);

  const errorMessage = computed(() => getErrorMessage(props.error, error.value));
  const formattedLabel = computed(() => (props.required ? `${props.label} *` : props.label));
  const hasError = computed(() => (props.required && !value.value) || getFieldHasError(error.value, props.error));
  const hasMinilabel = computed(() => hasFocus.value || !isEmpty.value);
  const isEmpty = computed(() => value.value === '');
  const uniqueId = computed(() => (props.inputId ? props.inputId : `text-input-${getCurrentInstance()?.uid || ''}`));

  const handleFocus = () => {
    hasFocus.value = true;
  };

  const handleFocusOut = () => {
    hasFocus.value = false;
  };

  const handleValidation = () => {
    return handleFieldValidation({
      error,
      errorFromProps: props.error,
      maxlength: props.maxlength,
      minlength: props.minlength,
      value,
    });
  };

  watch(props, (newValue, oldValue) => {
    if (newValue.value !== oldValue.value || newValue.value !== value.value) {
      value.value = props.value;
    }
  });

  defineExpose({ error, value });
</script>

<template>
  <div
    :class="['tide-input-textarea', CSS.DISPLAY.FLEX, CSS.FLEX.DIRECTION.COLUMN, CSS.GAP.QUARTER, hasError && 'error']"
  >
    <div
      :class="[
        'tide-input-textarea-field',
        CSS.GAP.HALF,
        CSS.POSITION.RELATIVE,
        CSS.BORDER.RADIUS.HALF,
        CSS.PADDING.LEFT.ONE,
        CSS.PADDING.TOP.HALF,
        CSS.OVERFLOW.XY.HIDDEN,
      ]"
    >
      <label
        :class="[
          hasMinilabel ? ['minilabel', CSS.FONT.SIZE.TWELVE] : CSS.FONT.SIZE.SIXTEEN,
          !hasError && CSS.FONT.COLOR.SURFACE.VARIANT,
          CSS.FONT.WEIGHT.FIVE_HUNDRED,
          CSS.CURSOR.TEXT,
        ]"
        :for="uniqueId"
        ref="label"
        v-if="label"
      >
        {{ formattedLabel }}
      </label>

      <textarea
        :class="[CSS.WIDTH.FULL]"
        :data-track="props.dataTrack"
        :maxlength="props.maxlength"
        :minlength="props.minlength"
        :name="props.name"
        ref="input"
        :required="props.required"
        :rows="props.rows"
        @change="handleValidation"
        @focus="handleFocus"
        @focusout="handleFocusOut"
        :id="uniqueId"
        v-model="value"
      />
    </div>

    <div
      :class="[CSS.DISPLAY.FLEX, CSS.AXIS2.CENTER, CSS.GAP.QUARTER, CSS.MARGIN.LEFT.ONE]"
      v-if="props.supportingText || hasError"
    >
      <TideSvgIcon
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
  textarea {
    resize: vertical;
  }
</style>

<style scoped>
  label {
    height: 1.1875rem;
    transition: font-size var(--tide-animate), transform var(--tide-animate);
  }

  label:not(.minilabel),
  .tide-input-textarea-prefix:not(.offset),
  .tide-input-textarea-suffix:not(.offset) {
    transform: translate(0, calc(9 / 16 * 1rem));
  }

  .tide-input-textarea-prefix,
  .tide-input-textarea-suffix {
    transition: transform var(--tide-animate);
  }

  .tide-input-textarea.error {
    color: var(--tide-error-on-surface);
  }

  .tide-input-textarea.error .tide-input-textarea-field {
    outline-color: var(--tide-error-border);
    background-color: var(--tide-error-surface);
  }

  .tide-input-textarea.error:focus-within .tide-input-textarea-field {
    outline-color: var(--tide-error-border);
  }

  .tide-input-textarea:focus-within .tide-input-textarea-field {
    --tide-input-outline-width: var(--tide-border-width-2);
    outline-color: var(--tide-surface-border-high);
  }

  .tide-input-textarea textarea {
    outline: none;
  }

  .tide-input-textarea-field {
    --tide-input-outline-width: var(--tide-border-width-1);
    outline: var(--tide-input-outline-width) solid var(--tide-border);
    outline-offset: calc(var(--tide-input-outline-width) * -1);
    color: var(--tide-surface-foreground);
  }
</style>
