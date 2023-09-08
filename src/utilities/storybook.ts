import type { StoryContext } from '@storybook/vue3';

import { formatKebabCase } from '@/utilities/format';
import { BOOLEAN_UNREQUIRED } from '@/types/Storybook';
import { ICON } from '@/types/Icon';

export const click = {
  control: 'text',
  description: 'JS function to execute on click',
  table: {
    defaultValue: { summary: 'None' },
    type: { summary: 'function' },
  },
};

export const formatSnippet = (code: string, context: StoryContext) => {
  const tag = context.component?.__name;
  const { args, argTypes } = context;

  let classNames: string[] = [];

  let attributes = Object.entries(args).map((arg: any) => {
    const key = arg[0];
    let value = arg[1];

    // TODO: TypeScript doesn't believe the implict shapes of Storybook's native types.
    const componentProps = context.component as any;
    const condition = argTypes[key].if as any;
    const conditionKey = condition?.arg;
    const conditionValue = condition?.eq;

    // If arg is conditional, hide when conditional is not met.
    const isClick = key === 'click';
    const isConditionMet = condition ? args[conditionKey] == conditionValue : true;
    const isConstant = Object.keys(argTypes).includes(key) && !!argTypes[key].constant;
    let isDefault = value === componentProps.props[key]?.default;

    // Default for type BOOLEAN_UNREQUIRED is undefined, not false.
    if (argTypes[key].options === BOOLEAN_UNREQUIRED) {
      isDefault = value === undefined;
    }

    if (argTypes[key].isCss) {
      classNames.push(value);
    }

    if (isConstant && value !== 'None') {
      Object.entries(argTypes[key].options).forEach(([optionKey, optionValue]) => {
        if (value === optionValue) {
          value = `${argTypes[key].constant}.${optionKey}`;
        }
      });
    }

    if (isConditionMet && !isDefault && !isClick) {
      return `${isConstant || typeof value === 'boolean' ? ':' : ''}${formatKebabCase(key)}="${value}"`;
    }

    if (isClick && (!args.element || args.element === 'button')) {
      return `@click="${value}"`;
    }
  });

  classNames = classNames.filter((className) => !!className);

  if (classNames.length > 0) attributes.push(`class="${classNames.join(' ')}"`);

  attributes = attributes.filter((attribute) => !!attribute).sort();

  // TODO: return with implementation of JS Beautify dev dependency.
  return args.default
    ? `<${tag}\n\t${attributes.join(' \n\t')}\n>${args.default}</${tag}>`
    : `<${tag}\n\t${attributes.join(' \n\t')}\n/>`;
};

export const formatSnippetMinimal = (code: string) => {
  return code.replace(/<[/]*template>/g, '');
};

// Invert key/value pairs bc Storybook control option format is unintuitive.
export const getLabelsFromOptions = (options: any) => {
  const labels: { [key: string]: string } = {};

  Object.entries(options).forEach(([key, value]) => {
    labels[`${value}`] = key;
  });

  return labels;
};

export const getVariableName = (input: any) => {
  return Object.keys(input)[0];
};

export const icon = {
  constant: getVariableName({ ICON }),
  control: 'select',
  description: 'Icon',
  options: ICON,
  table: {
    defaultValue: { summary: 'None' },
    type: { summary: 'Icon' },
  },
};

export const iconWithNone = {
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

export const parameters = {
  docs: {
    source: {
      format: false,
      language: 'html',
      transform: formatSnippet,
    },
  },
};
