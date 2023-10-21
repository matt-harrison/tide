<script lang="ts" setup>
  import { computed, getCurrentInstance } from 'vue';

  import type { CheckboxField } from '@/types/Field';

  import { getCssUtils } from '@/utilities/styles';

  const UTILS = getCssUtils();

  interface Props extends CheckboxField {
    checkboxClass?: string;
    inputId?: string;
    labelClass?: string;
  }

  // TODO: Implement markup for conditional error state based on requirement + value.

  const props = withDefaults(defineProps<Props>(), {
    checkboxClass: undefined,
    disabled: false,
    error: false, // TODO: Add markup to display "required" error message.
    indeterminate: false, // TODO: Implement indeterminate state [-]
    inputId: undefined,
    label: undefined,
    labelClass: undefined,
    required: false,
    value: false,
  });

  const instance = getCurrentInstance();
  const uid = instance?.uid ?? '';
  const uniqueInputId = computed(() => `${props.inputId ?? 'checkbox'}-${uid}`);
</script>

<template>
  <div
    :class="['basic-checkbox', UTILS.FLEX, UTILS.AXIS2_CENTER, UTILS.GAP_1_2, UTILS.FONT_14, disabled && 'disabled']"
  >
    <input
      :checked="props.value || undefined"
      :class="[checkboxClass, UTILS.GROW_NONE, UTILS.SHRINK_NONE, disabled ? UTILS.NOT_ALLOWED : UTILS.POINTER]"
      :disabled="props.disabled"
      :name="name"
      :id="uniqueInputId"
      type="checkbox"
    />

    <label
      :class="[labelClass, UTILS.PL_1_2, disabled ? UTILS.NOT_ALLOWED : UTILS.POINTER]"
      :for="uniqueInputId"
      @click.stop
      v-if="label"
    >
      {{ label }}
    </label>
  </div>
</template>

<style scoped>
  .basic-checkbox input {
    accent-color: var(--ti-surface-foreground);
    height: 1.5rem;
    width: 1.5rem;
  }

  .basic-checkbox.disabled {
    opacity: 0.32;
  }
</style>
