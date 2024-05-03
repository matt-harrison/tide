<script lang="ts" setup>
  import { computed, getCurrentInstance, onMounted, onUpdated, ref } from 'vue';

  import type { CheckboxField } from '@/types/Field';

  import { CSS } from '@/types/Styles';

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
  <div
    :class="[
      'tide-checkbox',
      CSS.DISPLAY.FLEX,
      CSS.AXIS2.CENTER,
      CSS.GAP.HALF,
      CSS.FONT.SIZE.FOURTEEN,
      disabled && 'disabled',
    ]"
  >
    <input
      :checked="props.value || undefined"
      :class="[CSS.FLEX.GROW.OFF, CSS.FLEX.SHRINK.OFF, disabled ? CSS.CURSOR.NOT_ALLOWED : CSS.CURSOR.POINTER]"
      :disabled="props.disabled"
      :name="name"
      ref="input"
      :id="uniqueInputId"
      type="checkbox"
    />

    <label
      :class="[CSS.PADDING.LEFT.HALF, disabled ? CSS.CURSOR.NOT_ALLOWED : CSS.CURSOR.POINTER]"
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
