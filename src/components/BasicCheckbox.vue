<script lang="ts" setup>
  import { computed, getCurrentInstance, ref, watch } from 'vue';

  import type { CheckboxField } from '@/types/Field';

  import { getCssUtils } from '@/utilities/styles';

  const UTILS = getCssUtils();

  type Props = CheckboxField & {
    checkboxClass?: string;
    inputId?: string;
    labelClass?: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    checkboxClass: undefined,
    checked: false,
    disabled: false,
    error: false,
    indeterminate: false,
    inputId: undefined,
    label: undefined,
    labelClass: undefined,
    required: false,
    transformValue: undefined,
    value: false,
  });

  const uniqueInputId = computed(() => `${props.inputId ?? 'checkbox'}-${uid}`);

  const required = ref(props.required);

  const instance = getCurrentInstance();
  const uid = instance?.uid ?? '';
  const value = ref(props.value ?? '');

  watch(props, () => {
    if (props.value) {
      value.value = props.value;
    }
  });

  defineExpose({ required, value });
</script>

<template>
  <div :class="['basic-checkbox', UTILS.FLEX, UTILS.AXIS2_CENTER, UTILS.FONT_14, disabled && 'disabled']">
    <input
      :class="[checkboxClass, UTILS.GROW_NONE, UTILS.SHRINK_NONE, disabled ? UTILS.NOT_ALLOWED : UTILS.POINTER]"
      :disabled="props.disabled"
      :name="name"
      :id="uniqueInputId"
      type="checkbox"
      v-model="value"
    />
    <label
      :class="[labelClass, UTILS.PL_1_2, disabled ? UTILS.NOT_ALLOWED : UTILS.POINTER]"
      :for="uniqueInputId"
      v-if="label"
    >
      {{ label }}
    </label>
  </div>
</template>

<style lang="scss" scoped>
  .basic-checkbox {
    input {
      accent-color: var(--ti-surface-foreground);
      height: 1.5rem;
      width: 1.5rem;
    }

    &.disabled {
      opacity: 0.32;
    }
  }
</style>
