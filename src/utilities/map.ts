import type { Formatted } from '@/types/Formatted';
import type { Raw } from '@/types/Raw';
import type { Vehicle } from '@/types/Vehicle';

import { formatCamelCase } from '@/utilities/format';

const jsonProperties = ['ad_attribs', 'ad_features', 'dealer_features'];

// Enforce types on Elasticsearch response object.
const mapResult = (resultRaw: any): Vehicle => {
  const resultFormatted: Formatted = {};

  // Flatten "raw" property of each key.
  Object.keys(resultRaw).forEach((keySnake: string) => {
    const keyCamel = formatCamelCase(keySnake);

    if (jsonProperties.includes(keySnake)) {
      resultFormatted[keyCamel] = resultRaw[keySnake].raw
        ? JSON.parse(resultRaw[keySnake].raw)
        : JSON.parse(resultRaw[keySnake]);
    } else {
      resultFormatted[keyCamel] = resultRaw[keySnake].raw ? resultRaw[keySnake].raw : resultRaw[keySnake];
    }
  });

  const vehicle = resultFormatted as unknown;

  return vehicle as Vehicle;
};

const mapResults = (resultsRaw: Raw[]): Vehicle[] => {
  const resultsFormatted = resultsRaw ? resultsRaw.map((resultRaw) => mapResult(resultRaw)) : [];

  return resultsFormatted;
};

export { mapResult, mapResults };
