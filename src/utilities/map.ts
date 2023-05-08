import type { Formatted } from '@/types/Formatted';
import type { Raw } from '@/types/Raw';
import type { Vehicle } from '@/types/Vehicle';

import { formatCamelCase } from '@/utilities/format';

const jsonProperties = ['ad_attribs', 'ad_features', 'dealer_features'];

// Enforce types on Elasticsearch response object.
const mapResult = (resultRaw: any) => {
  const resultFormatted: Formatted = {
    adListingPosition: resultRaw.ad_listing_position,
  };

  // Flatten "raw" property of each key.
  Object.keys(resultRaw).forEach((keySnake: string) => {
    if (resultRaw[keySnake].raw) {
      const keyCamel = formatCamelCase(keySnake);

      // Parse and flatten nested values.
      resultFormatted[keyCamel] = jsonProperties.includes(keySnake)
        ? JSON.parse(resultRaw[keySnake].raw)
        : resultRaw[keySnake].raw;
    }
  });

  // Preserve additional data.
  if (resultRaw['_meta']) {
    Object.keys(resultRaw['_meta']).forEach((keySnake: string) => {
      const keyCamel = formatCamelCase(keySnake);

      if (!Object.keys(resultFormatted).includes(keyCamel)) {
        resultFormatted[keyCamel] = resultRaw[keySnake];
      }
    });
  }

  const vehicle = resultFormatted as unknown;

  return vehicle as Vehicle;
};

const mapResults = (resultsRaw: Raw[]) => {
  const resultsFormatted = resultsRaw.map((resultRaw) => mapResult(resultRaw));

  return resultsFormatted as Vehicle[];
};

export { mapResult, mapResults };
