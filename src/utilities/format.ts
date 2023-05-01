type Raw = {
  [key: string]: {
    raw: string | string[] | number;
  };
};

type Formatted = {
  [key: string]: string | string[] | number;
};

const formatCamelCase = (input: string): string => {
  return input
    .toLowerCase()
    .replace(/[\s_-]/g, ' ')
    .split(' ')
    .map((word, index) => (index === 0 ? word : word.slice(0, 1).toUpperCase() + word.slice(1)))
    .join('');
};

const formatKebabCase = (input: string): string => {
  return input.toLowerCase().replace(/[\s_-]/g, '-');
};

const formatNumber = (input: Number) => {
  const digits = input.toString();
  const remainder = digits.length % 3;
  const digitsInitial = digits.slice(0, remainder);
  const digitsRemaining: string[] = digits.slice(remainder).match(/\d{3}/g) || [];

  if (digitsInitial) {
    digitsRemaining.unshift(digitsInitial);
  }

  return digitsRemaining.join(',');
};

const formatPascalCase = (input: string): string => {
  return input
    .toLowerCase()
    .replace(/[\s_-]/g, ' ')
    .split(' ')
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(' ');
};

const formatPhone = (input: number) => {
  const digits = String(input);
  let output = digits;

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

  return output;
};

const formatPrice = (price: Number): string => {
  const number = formatNumber(price);

  return `$${number}`;
};

const formatResult = (resultRaw: Raw) => {
  const resultFormatted: Formatted = {};

  Object.keys(resultRaw).forEach((key: string) => {
    resultFormatted[key] = resultRaw[key].raw;
  });

  return resultFormatted as unknown;
};

const formatResults = (resultsRaw: Raw[]) => {
  return resultsRaw.map((resultRaw) => formatResult(resultRaw));
};

const formatTitleCase = (input: string): string => {
  return input
    .toLowerCase()
    .replace(/[\s_-]/g, ' ')
    .split(' ')
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(' ');
};

export {
  formatCamelCase,
  formatKebabCase,
  formatNumber,
  formatPascalCase,
  formatPhone,
  formatPrice,
  formatResult,
  formatResults,
  formatTitleCase,
};
