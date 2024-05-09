const capitalizeFirst = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

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

const formatLabel = (value: string) => {
  const labelMap: { [key: string]: string } = {
    false: 'No',
    true: 'Yes',
  };
  return Object.hasOwn(labelMap, value) ? labelMap[value] : value;
};

const formatNumber = (input: number | string): string => {
  let output = input && typeof input === 'number' ? new Intl.NumberFormat().format(input) : String(input || '');
  let digits = output;

  if (input && typeof input === 'string') {
    digits = digits.replace(/\D/g, '');
    if (Number(digits)) {
      output = new Intl.NumberFormat().format(Number(digits));
    } else {
      output = '0';
    }
  }

  return output;
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

const formatPhone = (input: number | string): string => {
  let output = input && typeof input === 'number' ? String(input) : String(input || '');
  let digits = output;
  digits = digits.replace(/\D/g, '');

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
      output = digits;
      break;
  }

  return output;
};

const formatPrice = (input: number | string): string => {
  const output = input ? formatNumber(input) : String(input || '0');
  return `$${output}`;
};

const formatQuotes = (value: string) => {
  if (value.startsWith('"') && value.endsWith('"')) {
    return value.slice(1, -1);
  } else {
    return value;
  }
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

const formatUrlFromRoot = (url: string) => {
  const urlFormatted = url.split('.com/');

  return urlFormatted.length > 1 ? `/${urlFormatted[1]}` : url;
};

const formatWeight = (input: number | string): string => {
  const output = input ? formatNumber(input) : String(input || '0');
  return `${output} lbs`;
};

const getArticle = (noun: string, isPlural = false, isDefinite = false) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const isVowelLeading = vowels.includes(noun.charAt(0));

  return isDefinite ? 'the' : isPlural ? 'some' : isVowelLeading ? 'an' : 'a';
};

const priceToNumber = (value: string) => {
  if (Number.isNaN(Number(value))) {
    value = value.replace('$', '');
    value = value.replace(/,/g, '');
  }
  return parseInt(value, 10);
};

const unformatPrice = (input: string): string => {
  const output = input.replace(/\$/g, '').replace(/,/g, '');
  return `${output}`;
};

export {
  capitalizeFirst,
  formatCamelCase,
  formatKebabCase,
  formatLabel,
  formatNumber,
  formatPascalCase,
  formatPhone,
  formatPrice,
  formatQuotes,
  formatSentenceCase,
  formatSnakeCase,
  formatTitleCase,
  formatUrlFromRoot,
  formatWeight,
  getArticle,
  priceToNumber,
  unformatPrice,
};
