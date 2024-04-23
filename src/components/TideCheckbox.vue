<script lang="ts" setup>
  import { computed, getCurrentInstance, onMounted, onUpdated, ref } from 'vue';

  import type { CheckboxField } from '../types/Field';

  import { CSS } from '../types/Styles';

  const input = ref<CheckboxField>();

  interface Props extends CheckboxField {
    inputId?: string;
  }

  // TODO: Implement markup for conditional error state based on requirement + value.

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    error: false, // TODO: Add markup to display "required" error message.
    indeterminate: false,
    inputId: undefined,
    label: undefined,
    required: false,
    value: false,
  });

  const instance = getCurrentInstance();
  const uid = instance?.uid ?? '';
  const uniqueInputId = computed(() => `${props.inputId ?? 'checkbox'}-${uid}`);

  const setIndeterminate = (isIndeterminate: boolean) => {
    if (input.value) {
      input.value.indeterminate = isIndeterminate;
    }
  };

  onMounted(() => {
    setIndeterminate(props.indeterminate);
  });

  onUpdated(() => {
    setIndeterminate(props.indeterminate);
  });
</script>

<template>
  <div :class="['tide-checkbox', CSS.FLEX, CSS.AXIS2_CENTER, CSS.GAP_1_2, CSS.FONT_14, disabled && 'disabled']">
    <input
      :checked="props.value || undefined"
      :class="[CSS.GROW_NONE, CSS.SHRINK_NONE, disabled ? CSS.CURSOR_NOT_ALLOWED : CSS.CURSOR_POINTER]"
      :disabled="props.disabled"
      :name="name"
      ref="input"
      :id="uniqueInputId"
      type="checkbox"
    />

    <label
      :class="[CSS.PL_1_2, disabled ? CSS.CURSOR_NOT_ALLOWED : CSS.CURSOR_POINTER]"
      :for="uniqueInputId"
      @click.stop
      v-if="label"
    >
      {{ label }}
    </label>
  </div>
</template>

<style scoped>
  .tide-checkbox input {
    accent-color: var(--ti-surface-foreground);
    height: 1.5rem;
    width: 1.5rem;
  }

  .tide-checkbox.disabled {
    opacity: 0.32;
  }
</style>
../types/StylesOld../types/StylesNew
