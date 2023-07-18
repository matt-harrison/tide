<script lang="ts" setup>
  import { getCurrentInstance, ref, computed } from 'vue';

  import type { Icon } from '@/types/Icon';
  import type { TextInputType } from '@/types/Form';

  import SvgIcon from '@/components/SvgIcon.vue';
  import { SIZE_ICON } from '@/types/Size';
  import { TEXT_INPUT_TYPE } from '@/types/Form';

  // TODO: add number formatting. Or should there be a special BasicNumberInput (BasicPriceInput?)?
  // TODO: implement proper theme colors (& dark mode colors) once they're ready

  const emit = defineEmits<{
    input: [value: string];
  }>();

  type Props = {
    label?: string;
    disabled?: boolean;
    error?: string | boolean;
    value?: string;
    inputId?: string;
    inputClass?: string;
    labelClass?: string;
    name: string;
    type?: TextInputType;
    leadingIcon?: Icon;
    placeholder?: string;
    suffix?: string;
    required?: boolean;
  };

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    error: false,
    inputClass: undefined,
    inputId: undefined,
    label: undefined,
    labelClass: undefined,
    leadingIcon: undefined,
    placeholder: '',
    suffix: '',
    type: TEXT_INPUT_TYPE.TEXT,
    value: '',
  });

  const instance = getCurrentInstance();
  const uid = instance?.uid ?? '';
  const value = ref(props.value ?? '');
  const uniqueInputId = computed(() => `${props.inputId ?? 'text-input'}-${uid}`);
  const supportingText = computed(() =>
    typeof props.error === 'string' && props.error.length > 0 ? props.error : 'Please enter a valid value'
  );
  const formattedLabel = computed(() => (props.required ? `${props.label} *` : props.label));
  const showSupportingText = computed(() => props.error !== false);
  const hasError = computed(() => props.error !== false);
  const hasSuffix = computed(() => props.suffix && props.suffix.length > 0);

  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('input', target.value);
  };
</script>

<template>
  <div :class="['basic-text-input flex axis2-start column font-14', disabled && 'disabled', hasError && 'error']">
    <label
      :class="[
        labelClass,
        !disabled && !hasError && '',
        !disabled && hasError && 'font-red',
        disabled && hasError && 'font-red',
        disabled && !hasError && '',
      ]"
      :for="uniqueInputId"
      class="font-14 pb-1/4 font-surface-variant"
      v-if="label"
    >
      {{ formattedLabel }}
    </label>
    <div class="relative w-full">
      <SvgIcon
        :icon="leadingIcon"
        :size="SIZE_ICON.SMALL"
        class="absolute top-1/2 left-0 -translate-y-1/2 ml-3/4 pointer-events-none"
        v-if="leadingIcon"
      />
      <input
        :class="[
          inputClass,
          disabled && 'not-allowed',
          leadingIcon && 'pl-2',
          hasError ? (hasSuffix ? 'pr-4' : 'pr-2') : null,
          !disabled && !hasError && 'border-1 border-gray',
          !disabled && hasError && 'border-1 border-red',
          disabled && hasError && 'border-1 border-red',
          disabled && !hasError && 'border-1 border-gray',
        ]"
        :disabled="disabled"
        :name="name"
        :placeholder="placeholder"
        :required="required"
        :type="type"
        @input="handleInput"
        class="w-full p-3/4 bg-white radius-1/8"
        :id="uniqueInputId"
        v-model="value"
      />
      <span
        :class="[hasError ? 'mr-2' : 'mr-3/4']"
        class="absolute top-1/2 right-0 -translate-y-1/2 px-1/2 font-14 font-gray-dark pointer-events-none"
        v-if="suffix"
      >
        {{ suffix }}
      </span>
      <slot name="trailing-icon">
        <SvgIcon
          :icon="'circle-exclamation'"
          :size="SIZE_ICON.SMALL"
          class="font-red absolute top-1/2 right-0 -translate-y-1/2 mr-3/4 pointer-events-none"
          v-if="hasError"
        />
      </slot>
    </div>
    <div
      :class="[
        !disabled && !hasError && 'font-gray-dark',
        !disabled && hasError && 'font-red',
        disabled && hasError && 'font-red',
        disabled && !hasError && 'font-gray-dark',
      ]"
      class="font-12 mt-1/4"
      v-if="showSupportingText"
    >
      {{ supportingText }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .basic-text-input {
    input {
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
      input {
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
    :not(.theme-dark &).basic-text-input {
      input {
        background: #fff;
      }
    }
  }
</style>
