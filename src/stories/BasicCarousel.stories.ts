import type { StoryContext } from '@storybook/vue3';

import BasicCard from '@/components/BasicCard.vue';
import BasicCarousel from '@/components/BasicCarousel.vue';
import { argTypeBooleanUnrequired } from '@/utilities/storybook';

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;
  const argsWithValues: string[] = [];

  if (args.isTouchscreen !== undefined) argsWithValues.push(`:is-touchscreen="${args.isTouchscreen}"`);
  if (args.offsetX !== 0) argsWithValues.push(`:offset-x="${args.offsetX}"`);

  return `<BasicCarousel ${argsWithValues.join(' ')}>...</BasicCarousel>`;
};

const parameters = {
  docs: {
    source: {
      format: false,
      language: 'html',
      transform: formatSnippet,
    },
  },
};

const getHasPadding = (hasPadding: boolean) => {
  const output = hasPadding ? ' py-1' : '';

  console.log(hasPadding, output);

  return output;
};

const render = (args: any) => ({
  components: { BasicCard, BasicCarousel },
  methods: {
    getHasPadding,
  },
  setup: () => ({ args }),
  template: `<BasicCarousel :key="args.hasPadding" v-bind="args"><li :key="index + args.hasPadding" v-for="(_child, index) in new Array(12)" :class="['shrink-none', args.hasPadding ? ' py-1' : '']"><BasicCard class="p-1">Card {{ index + 1 }}</BasicCard></li></BasicCarousel>`,
});

export default {
  argTypes: {
    default: {
      table: {
        disable: true,
      },
    },
    hasPadding: {
      control: 'boolean',
      description: 'Demonstrates the box shadow',
      name: 'Has Padding',
      table: {
        defaultValue: { summary: 'False' },
        type: { summary: 'boolean' },
      },
    },
    isTouchscreen: {
      ...argTypeBooleanUnrequired,
      description: 'Determines button and/or swipe control scheme<br />(Use reference to ViewportStore)',
      table: {
        defaultValue: { summary: 'None' },
      },
    },
    offsetX: {
      control: {
        max: 72,
        min: 0,
        step: 24,
        type: 'number',
      },
      description: 'Determines horizontal spacing around Carousel content',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'number (px)' },
      },
    },
    slideChange: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    hasPadding: false,
    isTouchscreen: undefined,
    offsetX: 0,
  },
  component: BasicCarousel,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicCarousel',
};

export const Demo = {};
