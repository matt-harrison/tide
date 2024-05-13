<script lang="ts" setup>
  import { computed, getCurrentInstance, ref, watch } from 'vue';

  import TideSvgIcon from '@/components/TideSvgIcon.vue';
  import { CSS } from '@/types/Styles';
  import { ICON } from '@/types/Icon';
  import { SIZE } from '@/types/Size';
  import { formatNumber } from '@/utilities/format';

  const input = ref<HTMLInputElement>();

  type Props = {
    checked?: boolean;
    dataTrack?: string;
    disabled?: boolean;
    indeterminate?: boolean;
    inputId?: string;
    label: string;
    name: string;
    number?: number | undefined;
  };

  const props = withDefaults(defineProps<Props>(), {
    checked: false,
    dataTrack: '',
    disabled: false,
    indeterminate: false,
    inputId: undefined,
    label: undefined,
    name: undefined,
    number: undefined,
  });

  const checked = ref(props.checked || props.indeterminate);
  const indeterminate = ref(props.indeterminate);

  const uniqueId = computed(() => (props.inputId ? props.inputId : `text-input-${getCurrentInstance()?.uid || ''}`));

  const handleClick = () => {
    checked.value = !checked.value;
  };

  watch(props, (newValue, oldValue) => {
    if (newValue.indeterminate !== oldValue.indeterminate || newValue.indeterminate !== indeterminate.value) {
      if (input.value) {
        indeterminate.value = props.indeterminate;
        input.value.indeterminate = indeterminate.value;

        if (indeterminate.value === true) {
          checked.value = true;
        }

        input.value.checked = checked.value;
      }
    } else if (newValue.checked !== oldValue.checked || newValue.checked !== checked.value) {
      checked.value = props.checked;
    }
  });

  defineExpose({ checked, indeterminate });
</script>

<template>
  <div
    :class="[
      'tide-input-checkbox',
      CSS.DISPLAY.FLEX,
      CSS.AXIS2.CENTER,
      CSS.GAP.HALF,
      CSS.FONT.SIZE.FOURTEEN,
      disabled && 'disabled',
      disabled ? CSS.CURSOR.NOT_ALLOWED : CSS.CURSOR.POINTER,
    ]"
  >
    <input
      :checked="checked"
      :class="[CSS.DISPLAY.NONE]"
      :disabled="props.disabled"
      :name="props.name"
      ref="input"
      :id="uniqueId"
      type="checkbox"
    />

    <div
      :class="[
        'tide-input-checkbox-custom',
        CSS.POSITION.RELATIVE,
        CSS.DISPLAY.FLEX,
        CSS.AXIS1.CENTER,
        CSS.AXIS2.CENTER,
        CSS.FLEX.SHRINK.OFF,
        CSS.BORDER.SIDE.FULL.ONE,
        checked ? [CSS.BORDER.COLOR.HIGH, CSS.BG.SECONDARY] : [CSS.BORDER.COLOR.DEFAULT, CSS.BG.SURFACE.DEFAULT],
        CSS.BORDER.RADIUS.QUARTER,
        checked && 'checked',
        disabled ? CSS.CURSOR.NOT_ALLOWED : CSS.CURSOR.POINTER,
      ]"
      @click="handleClick"
    >
      <TideSvgIcon
        :class="[CSS.FONT.COLOR.SECONDARY]"
        :icon="indeterminate ? ICON.REMOVE : ICON.CHECK"
        :size="SIZE.SMALL"
        v-if="checked || indeterminate"
      />
    </div>

    <label
      :class="[CSS.DISPLAY.FLEX, CSS.GAP.HALF, disabled ? CSS.CURSOR.NOT_ALLOWED : CSS.CURSOR.POINTER]"
      :for="uniqueId"
      @click.prevent="checked = !checked"
      v-if="label"
    >
      <span>{{ label }}</span>
      <span
        :class="[CSS.FONT.COLOR.SURFACE.VARIANT]"
        v-if="props.number"
      >
        ({{ formatNumber(props.number) }})
      </span>
    </label>
  </div>
</template>

<style scoped>
  .tide-input-checkbox.disabled {
    opacity: var(--disabled);
  }

  .tide-input-checkbox-custom {
    width: var(--font-28);
    height: var(--font-28);
  }
</style>
