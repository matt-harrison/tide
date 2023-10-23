<script lang="ts" setup>
  import { getCurrentInstance, computed, ref, watch } from 'vue';

  import type { Icon } from '@/types/Icon';
  import type { SelectField } from '@/types/Field';

  import SvgIcon from '@/components/SvgIcon.vue';
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
  <div :class="['basic-select block-field font-14 font-surface-variant', disabled && 'disabled', hasError && 'error']">
    <label
      :for="uniqueSelectId"
      class="mb-1/4 font-14 font-700"
      v-if="label"
    >
      {{ formattedLabel }}
    </label>

    <div class="relative flex axis2-center w-full">
      <select
        :class="[
          'field',
          iconLeading && 'pl-2',
          'radius-1-8 p-1/2',
          hasSuffix && 'pr-2',
          'w-full bg-surface-low',
          disabled && 'not-allowed',
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

      <SvgIcon
        :icon="iconLeading"
        :size="SIZE.SMALL"
        class="absolute left-0 ml-1/2 pointer-events-none"
        v-if="iconLeading"
      />

      <span
        class="absolute right-0 mr-2 font-14 pointer-events-none"
        v-if="suffix"
      >
        {{ suffix }}
      </span>

      <SvgIcon
        :icon="ICON.CHEVRON_DOWN"
        :size="SIZE.SMALL"
        class="absolute right-0 mr-1/2 bg-surface-low pointer-events-none"
      />
    </div>

    <div
      :class="['supporting-text mt-1/4 font-12']"
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
