import type { ArgTypes } from '@storybook/vue3';

import { BOOLEAN_UNREQUIRED } from '@/types/Storybook';
import { CSS } from '@/types/Styles';
import { ELEMENT, ELEMENT_TEXT_AS_ICON } from '@/types/Element';

// Extensible object of key/value pairs
type KeyValue = { [key: string]: any };

// Object with a retrievable key and an extensible object of key/value pairs as the value
type KeyValueNamed = {
  [key: string]: KeyValue;
};

import type { StoryContext } from '@storybook/vue3';

import { formatKebabCase } from '@/utilities/format';
import { NoneAsEmpty, NoneAsUndefined } from '@/types/Storybook';

export const lineBreak = '\r';
export const tab = '  ';

export const argTypeBooleanUnrequired = {
  control: 'select',
  description: 'True, False, or undefined<br />(for demonstration purposes)',
  options: BOOLEAN_UNREQUIRED,
  table: {
    defaultValue: { summary: 'None' },
    type: { summary: 'boolean' },
  },
};

export const argTypeDimension = {
  control: {
    max: 500,
    min: 100,
    step: 100,
    type: 'number',
  },
  table: {
    defaultValue: { summary: 'None' },
    type: { summary: 'number (px)' },
  },
};

export const change = {
  control: 'text',
  description: 'JS code or function to execute on change event',
  isEmit: true,
  name: 'change',
  table: {
    defaultValue: { summary: 'None' },
    type: { summary: '(event: Event) => void' },
  },
};

export const click = {
  control: 'text',
  description: 'JS code or function to execute on click event',
  table: {
    defaultValue: { summary: 'None' },
    type: { summary: '(event: Event) => void' },
  },
};

export const dataTrack = {
  control: 'text',
  description: 'Data attribute for external tracking',
  table: {
    defaultValue: { summary: 'None' },
    type: { summary: 'string' },
  },
};

export const disabledArgType = {
  table: {
    disable: true,
  },
};

export const doSomething = () => {
  alert('Did something.');
};

// Accept a KeyValue as the value of an object with a retrievable key as a Storybook argType.
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

export const formatArgTypeCheck = (collection: KeyValueNamed) => {
  const constant = getKey(collection);
  const keyValues: KeyValue = collection[constant];

  return {
    constant,
    control: 'check',
    options: {
      ...keyValues,
    },
    table: {
      defaultValue: { summary: 'None' },
      type: { summary: constant },
    },
  };
};

export const formatValueAsConstant = (keyValue: KeyValue, argTypes: ArgTypes) => {
  const [key, value] = Object.entries(keyValue)[0];
  let constant;

  const arg: ArgTypes = argTypes[key];

  Object.entries(arg.options).forEach(([optionKey, optionValue]) => {
    if (value === optionValue) {
      constant = `${argTypes[key].constant}.${optionKey}`;
    }
  });

  return constant;
};

export const formatSnippet = (code: string, context: StoryContext) => {
  const tag = context.component?.__name;
  const { args, argTypes } = context;

  let classNames: string[] = [];

  let attributes = Object.entries(args).map((arg: any) => {
    const key = arg[0];
    let value = arg[1];
    const argType: ArgTypes = argTypes[key];
    const conditionKey = argType.if?.arg;
    const conditionValue = argType.if?.eq;

    // TODO: TypeScript doesn't seem to believe the implict shapes of Storybook's native types?
    const controlType = argType?.control?.type as any;

    // If arg is conditional, hide when conditional is not met.
    const isClick = key === 'click';
    const isConditionMet = argType.if ? args[conditionKey] === conditionValue : true;
    const isConstant = Object.keys(argTypes).includes(key) && !!argType.constant && controlType === 'select';
    const isConstants = Object.keys(argTypes).includes(key) && !!argType.constant && controlType === 'check';
    const isCustom = argType.isCustom;
    const isDynamic = argType.isDynamic || isConstant || isConstants || typeof value === 'boolean';
    const isEmpty = !isDynamic && value === '';
    const isExcluded = value === undefined || (Array.isArray(value) && !value.length);
    const isEmit = argType.isEmit;
    const isSlot = key === 'default';

    if (argType.isCss) {
      classNames.push(value);
    }

    if (isConstant && value !== 'None') {
      const arg: ArgTypes = argType;

      Object.entries(arg.options).forEach(([optionKey, optionValue]) => {
        if (value === optionValue) {
          value = `${argType.constant}.${optionKey}`;
        }
      });
    }

    if (isConstants && value.length) {
      const constantSlots: string[] = [];

      Object.entries(argType.options).forEach(([optionKey, optionValue]) => {
        value.forEach((valueSlot: any) => {
          if (valueSlot === optionValue) {
            constantSlots.push(`${argTypes[key].constant}.${optionKey}`);
          }
        });
      });

      value = `[${constantSlots.join(', ')}]`;
    }

    if (isCustom) {
      return `:${formatKebabCase(key)}="${key}"`;
    }

    if (
      isClick &&
      value &&
      (!args.element || args.element === ELEMENT.BUTTON || args.element === ELEMENT_TEXT_AS_ICON.BUTTON)
    ) {
      return `@click="${value}"`;
    }

    if (isEmit) {
      if (value) {
        return `@change="${value}"`;
      }
    }

    if (isConditionMet && !isClick && !isCustom && !isEmpty && !isExcluded && !isSlot) {
      return `${isDynamic ? ':' : ''}${formatKebabCase(key)}="${value}"`;
    }
  });

  classNames = classNames.filter((className) => !!className);

  if (classNames.length > 0) attributes.push(`class="${classNames.join(' ')}"`);

  attributes = attributes.filter((attribute) => !!attribute).sort();

  if (attributes) attributes.unshift('');

  return args.default
    ? `<${tag}${attributes.join(' ')}>${lineBreak}${tab}${args.default}${lineBreak}</${tag}>`
    : `<${tag}${attributes.join(' ')} />`;
};

export const formatSnippetMinimal = (code: string) => {
  return code.replace(/<[/]*template>/g, '');
};

export const getConstantByValue = (value: string) => {
  const compareRecursively = (basis: string, shape: string | object, depth: number = 0): string | void => {
    let output;

    Object.entries(shape).forEach((entry: string[]) => {
      const key = entry[0];
      const value = entry[1];
      const type = typeof value;

      if (type === 'string' && basis === value) {
        output = key;
        return;
      } else if (type === 'object') {
        const match = compareRecursively(basis, value, depth + 1);

        if (match) {
          output = `${key}.${match}`;
          return;
        }
      }
    });

    return output;
  };

  const constant = compareRecursively(value, CSS);

  return constant ? `CSS.${constant}` : undefined;
};

export const getConstantsByValues = (classNames: string[]) =>
  classNames.map((className) => getConstantByValue(className));

export const getKey = (input: any) => Object.keys(input)[0];

// Invert key/value pairs bc Storybook control option format is unintuitive.
export const getLabelsFromOptions = (options: any) => {
  const labels: { [key: string]: string } = {};

  Object.entries(options).forEach(([key, value]) => {
    labels[`${value}`] = key;
  });

  return labels;
};

export const parameters = {
  docs: {
    source: {
      format: 'vue',
      language: 'html',
      transform: formatSnippet,
    },
  },
};

// Prepend a key/value pair to a constant.
export const prependKeyValue = (collection: KeyValue, keyValue: KeyValue) => ({
  ...keyValue,
  ...collection,
});

export const prependNoneAsUndefined = (collection: KeyValue) => prependKeyValue(collection, NoneAsUndefined);

export const prependNoneAsEmpty = (collection: KeyValue) => prependKeyValue(collection, NoneAsEmpty);
