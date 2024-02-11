<script lang="ts" setup>
  import { ref } from 'vue';

  import BasicTextInput from '@/components/BasicTextInput.vue';
  import { ICON } from '@/types/Icon';
  import { TEXT_INPUT_TYPE } from '@/types/TextInput';

  const emit = defineEmits<{
    input: [value: string];
  }>();

  type Props = {
    name: string;
  };

  defineProps<Props>();

  const inputValue = ref('');

  const handleInput = (value: string) => {
    inputValue.value = value;

    emit('input', value);
  };
</script>

<template>
  <BasicTextInput
    :icon-leading="ICON.SEARCH"
    :name="name"
    :type="TEXT_INPUT_TYPE.SEARCH"
    @input="handleInput"
  />
</template>
