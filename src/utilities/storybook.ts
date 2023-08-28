import type { StoryContext } from '@storybook/vue3';

import { formatKebabCase } from '@/utilities/format';
import { ICON } from '@/types/Icon';

const formatSnippet = (code: string, context: StoryContext) => {
  const tag = context.component?.__name;
  const { args, argTypes } = context;

  let classNames: string[] = [];

  let attributes = Object.entries(args).map((arg: any) => {
    const key = arg[0];
    let value = arg[1];

    const isConstant = Object.keys(argTypes).includes(key) && !!argTypes[key].constant;

    // TODO: remove conditional attributes whose conditions aren't met!

    if (argTypes[key].isCss) {
      classNames.push(value);
    } else {
      if (isConstant && value !== 'None') {
        Object.entries(argTypes[key].options).forEach(([optionKey, optionValue]) => {
          if (value === optionValue) {
            value = `${argTypes[key].constant}.${optionKey}`;
          }
        });
      }

      if (!!value && value !== 'None') {
        return `${isConstant || typeof value === 'boolean' ? ':' : ''}${formatKebabCase(key)}="${value}"`;
      }
    }
  });

  classNames = classNames.filter((className) => !!className);

  if (classNames.length > 0) attributes.push(`class="${classNames.join(' ')}"`);

  attributes = attributes.filter((attribute) => !!attribute).sort();

  return args.default
    ? `<${tag}\n\t${attributes.join(' \n\t')}\n>${args.default}</${tag}>`
    : `<${tag}\n\t${attributes.join(' \n\t')}\n/>`;
};

// Invert key/value pairs bc Storybook control option format is unintuitive.
const getLabelsFromOptions = (options: any) => {
  const labels: { [key: string]: string } = {};

  Object.entries(options).forEach(([key, value]) => {
    labels[`${value}`] = key;
  });

  return labels;
};

const getVariableName = (input: any) => {
  return Object.keys(input)[0];
};

const iconControl = {
  constant: getVariableName({ ICON }),
  control: 'select',
  options: ICON,
  table: {
    defaultValue: { summary: 'None' },
    type: { summary: 'Icon' },
  },
};

const iconControlWithNone = {
  constant: getVariableName({ ICON }),
  control: 'select',
  options: {
    None: undefined,
    ...ICON,
  },
  table: {
    defaultValue: { summary: 'None' },
    type: { summary: 'Icon' },
  },
};

export { formatSnippet, getLabelsFromOptions, getVariableName, iconControl, iconControlWithNone };
