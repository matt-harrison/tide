// Extensible object of key/value pairs
type KeyValue = { [key: string]: string | undefined };

// Object with a retrievable key and an extensible object of key/value pairs as the value
type KeyValueNamed = {
  [key: string]: KeyValue;
};

import type { StoryContext } from '@storybook/vue3';

import { formatKebabCase } from '@/utilities/format';
import { NoneAsEmpty, NoneAsUndefined } from '@/types/Storybook';

export const click = {
  control: 'text',
  description: 'JS function to execute on click',
  table: {
    defaultValue: { summary: 'None' },
    type: { summary: 'function' },
  },
};

// Accept a KeyValue as the value of an object with a retrievable key as a Storybook argType
export const formatArgType = (collection: KeyValueNamed) => {
  const constant = getKey(collection);
  const keyValues: KeyValue = collection[constant];

  return {
    constant,
    control: 'select',
    options: {
      ...keyValues,
    },
    table: {
      defaultValue: { summary: 'None' },
      type: { summary: constant },
    },
  };
};

export const formatSnippet = (code: string, context: StoryContext) => {
  const tag = context.component?.__name;
  const { args, argTypes } = context;

  let classNames: string[] = [];

  let attributes = Object.entries(args).map((arg: any) => {
    const key = arg[0];
    let value = arg[1];

    // TODO: TypeScript doesn't believe the implict shapes of Storybook's native types.
    const condition = argTypes[key].if as any;
    const conditionKey = condition?.arg;
    const conditionValue = condition?.eq;

    // If arg is conditional, hide when conditional is not met.
    const isClick = key === 'click';
    const isConditionMet = condition ? args[conditionKey] == conditionValue : true;
    const isConstant = Object.keys(argTypes).includes(key) && !!argTypes[key].constant;
    const isDynamic = isConstant || typeof value === 'boolean';
    const isDefault = value === undefined;

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
      return `${isDynamic ? ':' : ''}${formatKebabCase(key)}="${value}"`;
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

export const getKey = (input: any) => Object.keys(input)[0];

// Invert key/value pairs bc Storybook control option format is unintuitive.
export const getLabelsFromOptions = (options: any) => {
  const labels: { [key: string]: string } = {};

  Object.entries(options).forEach(([key, value]) => {
    labels[`${value}`] = key;
  });

  return labels;
};

// Prepend a key/value pair to a constant.
export const prependKeyValue = (collection: KeyValue, keyValue: KeyValue) => ({
  ...keyValue,
  ...collection,
});

export const prependNoneAsUndefined = (collection: KeyValue) => prependKeyValue(collection, NoneAsUndefined);

export const prependNoneAsEmpty = (collection: KeyValue) => prependKeyValue(collection, NoneAsEmpty);

export const parameters = {
  docs: {
    source: {
      format: false,
      language: 'html',
      transform: formatSnippet,
    },
  },
};
