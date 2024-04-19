<script lang="ts" setup>
  import { getCurrentInstance, computed, ref, watch } from 'vue';

  import type { Icon } from '@/types/Icon';
  import type { SelectField } from '@/types/Field';

  import TideSvgIcon from '@/components/TideSvgIcon.vue';
  import { ICON } from '@/types/Icon';
  import { SIZE } from '@/types/Size';
  import { getFieldHasError, getSupportingText } from '@/utilities/forms';

  interface Props extends SelectField {
    iconLeading?: Icon;
    selectId?: string;
    suffix?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    error: false,
    iconLeading: undefined,
    label: undefined,
    placeholder: '',
    required: false,
    selectId: undefined,
    suffix: '',
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
  const uniqueSelectId = computed(() => `${props.selectId ?? 'select'}-${uid}`);

  watch(props, () => {
    value.value = props.value;
  });

  defineExpose({ error, required, value });
</script>

<template>
  <div
    :class="[
      'tide-select block-field tide-font-14 tide-font-surface-variant',
      disabled && 'disabled',
      hasError && 'error',
    ]"
  >
    <label
      :for="uniqueSelectId"
      class="tide-margin-bottom-1/4 tide-font-14 tide-font-700"
      v-if="label"
    >
      {{ formattedLabel }}
    </label>

    <div class="tide-position-relative tide-display-flex tide-axis2-center tide-width-full">
      <select
        :class="[
          'field',
          iconLeading && 'pl-2',
          'tide-radius-1-8 tide-padding-1/2',
          hasSuffix && 'pr-2',
          'tide-width-full tide-bg-surface-low',
          disabled && 'tide-cursor-not-allowed',
        ]"
        :disabled="disabled"
        :name="name"
        :required="required"
        :id="uniqueSelectId"
        v-model="value"
      >
        <option
          :selected="!value"
          disabled
          hidden
          v-if="placeholder"
          value=""
        >
          {{ placeholder }}
        </option>

        <option
          :key="option.value"
          :selected="value === option.value ? true : undefined"
          :value="option.value"
          v-for="option in options"
        >
          {{ option.label }}
        </option>
      </select>

      <TideSvgIcon
        :icon="iconLeading"
        :size="SIZE.SMALL"
        class="tide-position-absolute tide-left-0 tide-margin-left-1/2 tide-pointer-events-none"
        v-if="iconLeading"
      />

      <span
        class="tide-position-absolute tide-right-0 tide-margin-right-2 tide-font-14 tide-pointer-events-none"
        v-if="suffix"
      >
        {{ suffix }}
      </span>

      <TideSvgIcon
        :icon="ICON.EXPAND_MORE"
        :size="SIZE.SMALL"
        class="tide-position-absolute tide-right-0 tide-margin-right-1/2 tide-bg-surface-low tide-pointer-events-none"
      />
    </div>

    <div
      :class="['supporting-text tide-margin-top-1/4 tide-font-12']"
      v-if="hasError"
    >
      {{ supportingText }}
    </div>
  </div>
</template>

<style scoped src="@/assets/css/dynamic-inputs.css" />

<style scoped>
  select {
    appearance: none;
  }
</style>
