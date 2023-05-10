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

const formatNumber = (input: number) => {
  return new Intl.NumberFormat().format(input);
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

const formatPrice = (price: number): string => {
  const number = formatNumber(price);

  return `$${number}`;
};

const formatTitleCase = (input: string): string => {
  return input
    .toLowerCase()
    .replace(/[\s_-]/g, ' ')
    .split(' ')
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(' ');
};

export { formatCamelCase, formatKebabCase, formatNumber, formatPascalCase, formatPhone, formatPrice, formatTitleCase };
