import type { StoryContext } from '@storybook/vue3';

import TideCard from '@/components/TideCard.vue';
import TideCarousel from '@/components/TideCarousel.vue';
import { argTypeBooleanUnrequired } from '@/utilities/storybook';

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;

  const argsWithValues: string[] = [];

  if (args.isTouchscreen !== undefined) argsWithValues.push(`:is-touchscreen="${args.isTouchscreen}"`);
  if (args.offsetX) argsWithValues.push(`:offset-x="${args.offsetX}"`);

  return `<TideCarousel ${argsWithValues.join(
    ' '
  )}>\r\t<li v-for="(_child, index) in new Array(12)" :class="tide-shrink-none${
    args.hasPadding ? ' tide-padding-y-1' : ''
  }">\r\t\t<TideCard class="tide-padding-1">Card {{ index + 1 }}</TideCard>\r\t</li>\r</TideCarousel>`;
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

const render = (args: any) => ({
  components: { TideCard, TideCarousel },
  setup: () => ({ args }),
  template: `<TideCarousel v-bind="args"><li v-for="(_child, index) in new Array(12)" :class="['tide-shrink-none', args.hasPadding ? ' tide-padding-y-1' : '']"><TideCard class="tide-padding-1">Card {{ index + 1 }}</TideCard></li></TideCarousel>`,
});

export default {
  argTypes: {
    default: {
      table: {
        disable: true,
      },
    },
    // TODO: adapt via formatSnippet
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
  component: TideCarousel,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideCarousel',
};

export const Demo = {};
