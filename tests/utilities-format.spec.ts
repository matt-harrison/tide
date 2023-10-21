import { describe, expect, it } from 'vitest';

import {
  formatCamelCase,
  formatKebabCase,
  formatNumber,
  formatPascalCase,
  formatPhone,
  formatPrice,
  formatSentenceCase,
  formatSnakeCase,
  formatTitleCase,
} from '../src/utilities/format';

describe('@/src/utilities/format.ts', () => {
  const camelCase = 'theQuickBrownFoxJumpsOverTheLazyDog';
  const kebabCase = 'the-quick-brown-fox-jumps-over-the-lazy-dog';
  const lowerCase = 'the quick brown fox jumps over the lazy dog';
  const pascalCase = 'TheQuickBrownFoxJumpsOverTheLazyDog';
  const sentenceCase = 'The quick brown fox jumps over the lazy dog';
  const snakeCase = 'the_quick_brown_fox_jumps_over_the_lazy_dog';
  const titleCase = 'The Quick Brown Fox Jumps Over The Lazy Dog';
  const upperCase = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG';

  describe('formatCamelCase', () => {
    it('converts camelCase to camelCase.', () => {
      expect(formatCamelCase(camelCase)).toEqual(camelCase);
    });

    it('converts kebab-case to camelCase.', () => {
      expect(formatCamelCase(kebabCase)).toEqual(camelCase);
    });

    it('converts PascalCase to camelCase.', () => {
      expect(formatCamelCase(pascalCase)).toEqual(camelCase);
    });

    it('converts lower case to camelCase.', () => {
      expect(formatCamelCase(lowerCase)).toEqual(camelCase);
    });

    it('converts "Sentence case" to camelCase.', () => {
      expect(formatCamelCase(sentenceCase)).toEqual(camelCase);
    });

    it('converts snake_case to camelCase.', () => {
      expect(formatCamelCase(snakeCase)).toEqual(camelCase);
    });

    it('converts "Title Case" to camelCase.', () => {
      expect(formatCamelCase(titleCase)).toEqual(camelCase);
    });

    it('converts UPPER CASE to camelCase.', () => {
      expect(formatCamelCase(upperCase)).toEqual(camelCase);
    });

    it('ignores an empty string.', () => {
      const input = '';
      const output = '';

      expect(formatCamelCase(input)).toEqual(output);
    });
  });

  describe('formatKebabCase', () => {
    it('converts camelCase to kebab-case.', () => {
      expect(formatKebabCase(camelCase)).toEqual(kebabCase);
    });

    it('converts kebab-case to kebab-case.', () => {
      expect(formatKebabCase(kebabCase)).toEqual(kebabCase);
    });

    it('converts PascalCase to kebab-case.', () => {
      expect(formatKebabCase(pascalCase)).toEqual(kebabCase);
    });

    it('converts lower case to kebab-case.', () => {
      expect(formatKebabCase(lowerCase)).toEqual(kebabCase);
    });

    it('converts "Sentence case" to kebab-case.', () => {
      expect(formatKebabCase(sentenceCase)).toEqual(kebabCase);
    });

    it('converts snake_case to kebab-case.', () => {
      expect(formatKebabCase(snakeCase)).toEqual(kebabCase);
    });

    it('converts "Title Case" to kebab-case.', () => {
      expect(formatKebabCase(titleCase)).toEqual(kebabCase);
    });

    it('converts UPPER CASE to kebab-case.', () => {
      expect(formatKebabCase(upperCase)).toEqual(kebabCase);
    });

    it('ignores an empty string.', () => {
      const input = '';
      const output = '';

      expect(formatKebabCase(input)).toEqual(output);
    });
  });

  describe('formatNumber', () => {
    it('formats a 1 digit number.', () => {
      const input = 1;
      const output = '1';

      expect(formatNumber(input)).toEqual(output);
    });

    it('formats a 2 digit number.', () => {
      const input = 22;
      const output = '22';

      expect(formatNumber(input)).toEqual(output);
    });

    it('formats a 3 digit number.', () => {
      const input = 333;
      const output = '333';

      expect(formatNumber(input)).toEqual(output);
    });

    it('formats a 4 digit number.', () => {
      const input = 4444;
      const output = '4,444';

      expect(formatNumber(input)).toEqual(output);
    });

    it('formats a 5 digit number.', () => {
      const input = 55555;
      const output = '55,555';

      expect(formatNumber(input)).toEqual(output);
    });

    it('formats a 6 digit number.', () => {
      const input = 666666;
      const output = '666,666';

      expect(formatNumber(input)).toEqual(output);
    });

    it('formats a 7 digit number.', () => {
      const input = 7777777;
      const output = '7,777,777';

      expect(formatNumber(input)).toEqual(output);
    });

    it('ignores an empty string.', () => {
      const input = '';
      const output = '';

      expect(formatNumber(input)).toEqual(output);
    });
  });

  describe('formatPascalCase', () => {
    it('converts camelCase to PascalCase.', () => {
      expect(formatPascalCase(camelCase)).toEqual(pascalCase);
    });

    it('converts kebab-case to PascalCase.', () => {
      expect(formatPascalCase(kebabCase)).toEqual(pascalCase);
    });

    it('converts PascalCase to PascalCase.', () => {
      expect(formatPascalCase(pascalCase)).toEqual(pascalCase);
    });

    it('converts lower case to PascalCase.', () => {
      expect(formatPascalCase(lowerCase)).toEqual(pascalCase);
    });

    it('converts "Sentence case" to PascalCase.', () => {
      expect(formatPascalCase(sentenceCase)).toEqual(pascalCase);
    });

    it('converts snake_case to PascalCase.', () => {
      expect(formatPascalCase(snakeCase)).toEqual(pascalCase);
    });

    it('converts "Title Case" to PascalCase.', () => {
      expect(formatPascalCase(titleCase)).toEqual(pascalCase);
    });

    it('converts UPPER CASE to PascalCase.', () => {
      expect(formatPascalCase(upperCase)).toEqual(pascalCase);
    });

    it('ignores an empty string.', () => {
      const input = '';
      const output = '';

      expect(formatPascalCase(input)).toEqual(output);
    });
  });

  describe('formatPhone', () => {
    it('formats a 7 digit price.', () => {
      const input = 1234567;
      const output = '123-4567';

      expect(formatPhone(input)).toEqual(output);
    });

    it('formats a 10 digit phone number.', () => {
      const input = 1234567890;
      const output = '123-456-7890';

      expect(formatPhone(input)).toEqual(output);
    });

    it('formats a 11 digit phone number.', () => {
      const input = 12345678900;
      const output = '1-234-567-8900';

      expect(formatPhone(input)).toEqual(output);
    });

    it('ignores a phone number of less than 7 digits.', () => {
      const input = 123456;
      const output = '123456';

      expect(formatPhone(input)).toEqual(output);
    });

    it('ignores a phone number of more than 11 digits.', () => {
      const input = 123456789000;
      const output = '123456789000';

      expect(formatPhone(input)).toEqual(output);
    });

    it('ignores an empty string.', () => {
      const input = '';
      const output = '';

      expect(formatPhone(input)).toEqual(output);
    });
  });

  describe('formatPrice', () => {
    it('formats a 1 digit price.', () => {
      const input = 1;
      const output = '$1';

      expect(formatPrice(input)).toEqual(output);
    });

    it('formats a 2 digit price.', () => {
      const input = 12;
      const output = '$12';

      expect(formatPrice(input)).toEqual(output);
    });

    it('formats a 3 digit price.', () => {
      const input = 123;
      const output = '$123';

      expect(formatPrice(input)).toEqual(output);
    });

    it('formats a 4 digit price.', () => {
      const input = 1234;
      const output = '$1,234';

      expect(formatPrice(input)).toEqual(output);
    });

    it('formats a 5 digit price.', () => {
      const input = 12345;
      const output = '$12,345';

      expect(formatPrice(input)).toEqual(output);
    });

    it('formats a 6 digit price.', () => {
      const input = 123456;
      const output = '$123,456';

      expect(formatPrice(input)).toEqual(output);
    });

    it('formats a 7 digit price.', () => {
      const input = 1234567;
      const output = '$1,234,567';

      expect(formatPrice(input)).toEqual(output);
    });

    it('ignores an empty string.', () => {
      const input = '';
      const output = '$--';

      expect(formatPrice(input)).toEqual(output);
    });
  });

  describe('formatSentenceCase', () => {
    it('converts camelCase to "Sentence case".', () => {
      expect(formatSentenceCase(camelCase)).toEqual(sentenceCase);
    });

    it('converts kebab-case to "Sentence case".', () => {
      expect(formatSentenceCase(kebabCase)).toEqual(sentenceCase);
    });

    it('converts PascalCase to "Sentence case".', () => {
      expect(formatSentenceCase(pascalCase)).toEqual(sentenceCase);
    });

    it('converts lower case to "Sentence case".', () => {
      expect(formatSentenceCase(lowerCase)).toEqual(sentenceCase);
    });

    it('converts "Sentence case" to "Sentence case".', () => {
      expect(formatSentenceCase(sentenceCase)).toEqual(sentenceCase);
    });

    it('converts snake_case to "Sentence case".', () => {
      expect(formatSentenceCase(snakeCase)).toEqual(sentenceCase);
    });

    it('converts "Title Case" to "Sentence case".', () => {
      expect(formatSentenceCase(titleCase)).toEqual(sentenceCase);
    });

    it('converts UPPER CASE to "Sentence case".', () => {
      expect(formatSentenceCase(upperCase)).toEqual(sentenceCase);
    });

    it('ignores an empty string.', () => {
      const input = '';
      const output = '';

      expect(formatSentenceCase(input)).toEqual(output);
    });
  });

  describe('formatSnakeCase', () => {
    it('converts camelCase to snake_case.', () => {
      expect(formatSnakeCase(camelCase)).toEqual(snakeCase);
    });

    it('converts kebab-case to snake_case.', () => {
      expect(formatSnakeCase(kebabCase)).toEqual(snakeCase);
    });

    it('converts PascalCase to snake_case.', () => {
      expect(formatSnakeCase(pascalCase)).toEqual(snakeCase);
    });

    it('converts lower case to snake_case.', () => {
      expect(formatSnakeCase(lowerCase)).toEqual(snakeCase);
    });

    it('converts "Sentence case" to snake_case.', () => {
      expect(formatSnakeCase(sentenceCase)).toEqual(snakeCase);
    });

    it('converts snake_case to snake_case.', () => {
      expect(formatSnakeCase(snakeCase)).toEqual(snakeCase);
    });

    it('converts "Title Case" to snake_case.', () => {
      expect(formatSnakeCase(titleCase)).toEqual(snakeCase);
    });

    it('converts UPPER CASE to snake_case.', () => {
      expect(formatSnakeCase(upperCase)).toEqual(snakeCase);
    });

    it('ignores an empty string.', () => {
      const input = '';
      const output = '';

      expect(formatSnakeCase(input)).toEqual(output);
    });
  });

  describe('formatTitleCase', () => {
    it('converts camelCase to "Title Case".', () => {
      expect(formatTitleCase(camelCase)).toEqual(titleCase);
    });

    it('converts kebab-case to "Title Case".', () => {
      expect(formatTitleCase(kebabCase)).toEqual(titleCase);
    });

    it('converts PascalCase to "Title Case".', () => {
      expect(formatTitleCase(pascalCase)).toEqual(titleCase);
    });

    it('converts lower case to "Title Case".', () => {
      expect(formatTitleCase(lowerCase)).toEqual(titleCase);
    });

    it('converts "Sentence case" to "Title Case".', () => {
      expect(formatTitleCase(sentenceCase)).toEqual(titleCase);
    });

    it('converts snake_case to "Title Case".', () => {
      expect(formatTitleCase(snakeCase)).toEqual(titleCase);
    });

    it('converts "Title Case" to "Title Case".', () => {
      expect(formatTitleCase(titleCase)).toEqual(titleCase);
    });

    it('converts UPPER CASE to "Title Case".', () => {
      expect(formatTitleCase(upperCase)).toEqual(titleCase);
    });

    it('ignores an empty string.', () => {
      const input = '';
      const output = '';

      expect(formatTitleCase(input)).toEqual(output);
    });
  });
});
