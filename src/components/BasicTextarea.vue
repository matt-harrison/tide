<script lang="ts" setup>
  import { getCurrentInstance, ref, computed } from 'vue';
  import SvgIcon from '@/components/SvgIcon.vue';
  import { SIZE_ICON } from '@/types/Size';

  const emit = defineEmits<{
    input: [value: string];
  }>();

  type Props = {
    disabled?: boolean;
    error?: string | boolean;
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
  const supportingText = computed(() =>
    typeof props.error === 'string' && props.error.length > 0 ? props.error : 'Please enter a valid value'
  );
  const showSupportingText = computed(() => props.error !== false);
  const hasError = computed(() => props.error !== false);

  const handleInput = (event: Event) => {
    const target = event.target as HTMLTextAreaElement;
    emit('input', target.value);
  };
</script>

<template>
  <div :class="['basic-textarea flex column axis2-start', disabled && 'disabled', hasError && 'error']">
    <label
      :class="[
        labelClass,
        !disabled && !hasError && 'font-gray-dark',
        !disabled && hasError && 'font-red',
        disabled && hasError && 'font-red',
        disabled && !hasError && 'font-gray-dark',
      ]"
      :for="uniqueInputId"
      class="font-14 pb-1/4 font-surface-variant"
      v-if="label"
    >
      {{ label }}
    </label>
    <textarea
      :class="[
        textareaClass,
        disabled && 'not-allowed',
        !disabled && !hasError && 'border-1 border-gray',
        !disabled && hasError && 'border-1 border-red',
        disabled && hasError && 'border-1 border-red',
        disabled && !hasError && 'border-1 border-gray',
      ]"
      :disabled="props.disabled"
      :name="name"
      :style="{ '--height': props.height }"
      @input="handleInput"
      class="w-full p-3/4 font-14 radius-1/8"
      :id="uniqueInputId"
      v-model="value"
    />
    <div
      :class="[
        !disabled && !hasError && '',
        !disabled && hasError && 'font-red',
        disabled && hasError && 'font-red',
        disabled && !hasError && '',
      ]"
      class="font-12 pt-1/4 break-word"
      v-if="showSupportingText"
    >
      <SvgIcon
        :icon="'circle-exclamation'"
        :size="SIZE_ICON.SMALL"
        class="inline-block align-middle font-red font-16 mr-1/2 pointer-events-none"
        v-if="hasError"
      />
      <span class="align-middle">{{ supportingText }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .basic-textarea {
    textarea {
      resize: vertical;
      height: var(--height, 182px);
      outline-offset: -1px;
      background: rgba(255, 255, 255, 0.16);

      &:enabled {
        &:hover {
          outline: var(--border-1);
        }

        &:focus {
          outline: var(--border-2);
          outline-offset: -2px;
        }
      }
    }

    &.error {
      // we currently only have one red. This is a TODO reminder to update once we have the full color palette.
      --color-error-hover: var(--blue);
      textarea {
        caret-color: var(--red);
        &:enabled {
          outline-color: var(--red);
          &:hover {
            outline-color: var(--color-error-hover);
          }
        }
      }
    }

    &.disabled {
      opacity: 0.333;
    }
    :not(.theme-dark &).basic-textarea {
      textarea {
        background: #fff;
      }
    }
  }
</style>
