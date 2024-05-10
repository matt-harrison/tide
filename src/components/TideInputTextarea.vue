<script lang="ts" setup>
  import { computed, getCurrentInstance, ref, watch } from 'vue';

  import { CSS } from '@/types/Styles';

  type Props = {
    dataTrack?: string;
    inputId?: string;
    label?: string;
    maxlength?: number;
    minlength?: number;
    name?: string;
    required?: boolean;
    rows?: number;
    supportingText?: string;
    value?: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    dataTrack: '',
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

  const hasFocus = ref(false);
  const input = ref<HTMLInputElement | null>(null);
  const value = ref(props.value);

  const formattedLabel = computed(() => (props.required ? `${props.label} *` : props.label));
  const hasMinilabel = computed(() => hasFocus.value || !isEmpty.value);
  const isEmpty = computed(() => value.value === '');
  const uniqueId = computed(() => (props.inputId ? props.inputId : `text-input-${getCurrentInstance()?.uid || ''}`));

  const handleFocus = () => {
    hasFocus.value = true;
  };

  const handleFocusOut = () => {
    hasFocus.value = false;
  };

  watch(props, (newValue, oldValue) => {
    if (newValue.value !== oldValue.value || newValue.value !== value.value) {
      value.value = props.value;
    }
  });

  defineExpose({ value });
</script>

<template>
  <div :class="['tide-input-textarea', CSS.DISPLAY.FLEX, CSS.FLEX.DIRECTION.COLUMN, CSS.GAP.QUARTER]">
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
          CSS.FONT.COLOR.SURFACE.VARIANT,
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
        @focus="handleFocus"
        @focusout="handleFocusOut"
        :id="uniqueId"
        v-model="value"
      />
    </div>

    <div
      :class="[CSS.FONT.SIZE.TWELVE, CSS.FONT.WEIGHT.FIVE_HUNDRED]"
      v-if="props.supportingText"
    >
      {{ props.supportingText }}
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
    transition: font-size var(--animate), transform var(--animate);
  }

  .tide-input-textarea:focus-within .tide-input-textarea-field {
    --input-outline-width: var(--border-width-2);
    outline-color: var(--surface-border-high);
  }

  .tide-input-textarea textarea {
    outline: none;
  }

  .tide-input-textarea-field {
    --input-outline-width: var(--border-width-1);
    outline: var(--input-outline-width) solid var(--border);
    outline-offset: calc(var(--input-outline-width) * -1);
    color: var(--surface-foreground);
  }
</style>
