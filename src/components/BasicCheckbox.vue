<script lang="ts" setup>
  import { getCurrentInstance, ref, computed } from 'vue';

  const emit = defineEmits<{
    change: [value: string];
  }>();

  type Props = {
    disabled?: boolean;
    height?: string;
    inputId?: string;
    label?: string;
    labelClass?: string;
    name: string;
    textareaClass?: string;
    value?: string;
  };

  const props = defineProps<Props>();
  const instance = getCurrentInstance();
  const uid = instance?.uid ?? '';
  const uniqueInputId = computed(() => `${props.inputId ?? 'text-input'}-${uid}`);
  const value = ref(props.value ?? '');

  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('change', target.value);
  };
</script>

<template>
  <div :class="['basic-checkbox flex axis2-center gap-1/2 font-14', disabled && 'disabled']">
    <input
      :class="[textareaClass, 'grow-none shrink-none', disabled && 'not-allowed']"
      :disabled="props.disabled"
      :name="name"
      @change="handleChange"
      :id="uniqueInputId"
      type="checkbox"
      v-model="value"
    />
    <label
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
      height: 1.5rem;
      width: 1.5rem;
      accent-color: #1a3035;
    }

    .disabled {
      input {
        opacity: 0.32;
      }
    }
  }
</style>
