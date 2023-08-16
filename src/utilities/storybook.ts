import type { StoryContext } from '@storybook/vue3';

import { formatKebabCase } from '@/utilities/format';
import { ICON, ICON_COLOR } from '@/types/Icon';

const formatSnippet = (code: string, context: StoryContext) => {
  const tag = context.component?.__name;
  const { args, argTypes } = context;

  let classNames: string[] = [];

  let attributes = Object.entries(args).map((arg: any) => {
    const key = arg[0];
    let value = arg[1];

    const isConstant = Object.keys(argTypes).includes(key) && !!argTypes[key].constant;

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

      if (value && value !== 'None') {
        return `${isConstant ? ':' : ''}${formatKebabCase(key)}="${value}"`;
      }
    }
  });

  classNames = classNames.filter((className) => !!className);

  if (classNames.length > 0) attributes.push(`class="${classNames.join(' ')}"`);

  attributes = attributes.filter((attribute) => !!attribute).sort();

  return `<${tag}\n\t${attributes.join(' \n\t')}\n/>`;
};

const getVariableName = (input: any) => {
  return Object.keys(input)[0];
};

const iconControl = {
  constant: getVariableName({ ICON }),
  control: 'select',
  options: {
    None: undefined,
    ...ICON,
  },
};

const iconColorControl = {
  constant: getVariableName({ ICON_COLOR }),
  control: 'select',
  isCss: true,
  options: {
    None: undefined,
    ...ICON_COLOR,
  },
};

export { formatSnippet, getVariableName, iconColorControl, iconControl };
