import type { RealmConfig } from '@/types/RealmConfig';

const formatCamelCase = (input: string): string => {
  return input && typeof input === 'string'
    ? input
        .replace(/^[\s_-]/, '')
        .replace(/([a-z]{1})([A-Z]{1})/g, '$1 $2')
        .replace(/[\s_-]/g, ' ')
        .toLowerCase()
        .split(' ')
        .map((word, index) => (index === 0 ? word : word.slice(0, 1).toUpperCase() + word.slice(1)))
        .join('')
    : input;
};

const formatKebabCase = (input: string): string => {
  return input && typeof input === 'string'
    ? input
        .replace(/([a-z]{1})([A-Z]{1})/g, '$1 $2')
        .toLowerCase()
        .replace(/[\s_-]/g, '-')
    : input;
};

const formatNumber = (input: number): string => {
  return input && typeof input === 'number' ? new Intl.NumberFormat().format(input) : String(input || '');
};

const formatPascalCase = (input: string): string => {
  return input && typeof input === 'string'
    ? input
        .replace(/([a-z]{1})([A-Z]{1})/g, '$1 $2')
        .replace(/[\s_-]/g, ' ')
        .toLowerCase()
        .split(' ')
        .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
        .join('')
    : input;
};

const formatPhone = (input: number): string => {
  let output = input && typeof input === 'number' ? String(input) : String(input || '');

  if (input && typeof input === 'number') {
    const digits = String(input);

    output = digits;

    if (digits) {
      switch (digits.length) {
        case 7:
          output = `${digits.slice(0, 3)}-${digits.slice(3)}`;
          break;
        case 10:
          output = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
          break;
        case 11:
          output = `${digits.slice(0, 1)}-${digits.slice(1, 4)}-${digits.slice(4, 7)}-${digits.slice(7)}`;
          break;
        default:
          break;
      }
    }
  }

  return output;
};

const formatPrice = (input: number): string => {
  const output = input && typeof input === 'number' ? formatNumber(input) : String(input || '--');

  return `$${output}`;
};

const formatSentenceCase = (input: string): string => {
  let sentenceCase = input;

  if (input && typeof input === 'string') {
    const lowerCase = input
      .replace(/([a-z]{1})([A-Z]{1})/g, '$1 $2')
      .toLowerCase()
      .replace(/[\s_-]/g, ' ');

    sentenceCase = lowerCase.slice(0, 1).toUpperCase() + lowerCase.slice(1);
  }

  return sentenceCase;
};

const formatSnakeCase = (input: string): string => {
  return input && typeof input === 'string'
    ? input
        .replace(/([a-z]{1})([A-Z]{1})/g, '$1 $2')
        .toLowerCase()
        .replace(/[\s_-]/g, '_')
    : input;
};

const formatTitleCase = (input: string): string => {
  return input && typeof input === 'string'
    ? input
        .replace(/([a-z]{1})([A-Z]{1})/g, '$1 $2')
        .toLowerCase()
        .replace(/[\s_-]/g, ' ')
        .split(' ')
        .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
        .join(' ')
    : input;
};

const getArticle = (noun: string, isPlural = false, isDefinite = false) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const isVowelLeading = vowels.includes(noun.charAt(0));

  return isDefinite ? 'the' : isPlural ? 'some' : isVowelLeading ? 'an' : 'a';
};

const getCdn = (realm: RealmConfig) => {
  return `https://cdn.${realm.cdn.domain}.com`;
};

const getCdnMediaRoot = (realm: RealmConfig) => {
  return `https://cdn.${realm.cdn.domain}.com/${realm.cdn.version}/media`;
};

const removeMarkup = (markup: string) => {
  return markup.replace(/<[^>]*>/g, '');
};

export {
  formatCamelCase,
  formatKebabCase,
  formatNumber,
  formatPascalCase,
  formatPhone,
  formatPrice,
  formatSentenceCase,
  formatSnakeCase,
  formatTitleCase,
  getArticle,
  getCdn,
  getCdnMediaRoot,
  removeMarkup,
};
