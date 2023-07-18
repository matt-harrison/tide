import { describe, expect, it } from 'vitest';

import type { Raw } from '../src/types/Raw';
import type { Vehicle } from '../src/types/Vehicle';

import { mapResult, mapResults } from '../src/utilities/map';

const vehicleRaw = {
  _meta: {
    engine: 'abc',
    id: '12345',
    score: 12.123456,
  },
  ad_attribs: {
    raw: '{"itemUrl":"abc"}',
  },
  ad_features: {
    raw: '{"buyNow":true}',
  },
  ad_id: {
    raw: 123,
  },
  ad_listing_position: 1,
  category_name: {
    raw: ['category1', 'category2', 'category3'],
  },
  city: {
    raw: 'Norfolk',
  },
  dealer_features: {
    raw: '{"hasHideTaglines":true}',
  },
};

const vehicleFormatted = {
  adAttribs: {
    itemUrl: 'abc',
  },
  adFeatures: {
    buyNow: true,
  },
  adId: 123,
  adListingPosition: 1,
  categoryName: ['category1', 'category2', 'category3'],
  city: 'Norfolk',
  dealerFeatures: {
    hasHideTaglines: true,
  },
  meta: {
    engine: 'abc',
    id: '12345',
    score: 12.123456,
  },
} as Vehicle;

describe('@/src/utilities/map.ts', () => {
  describe('mapResult', () => {
    it('returns a formatted object when passed a raw object', () => {
      expect(mapResult(vehicleRaw)).toEqual(vehicleFormatted);
    });

    it('returns a formatted object when passed a raw object', () => {
      const input: Raw = {
        ad_id: {
          raw: 123,
        },
        category_name: {
          raw: ['category1', 'category2', 'category3'],
        },
        city: {
          raw: 'Norfolk',
        },
      };

      const output = {
        adId: 123,
        categoryName: ['category1', 'category2', 'category3'],
        city: 'Norfolk',
      } as Vehicle;

      expect(mapResult(input)).toEqual(output);
    });

    it('returns an empty object when passed an empty string', () => {
      const input = '';
      const output = {};

      expect(mapResult(input)).toEqual(output);
    });

    it('returns an empty object when passed an empty object', () => {
      const input = {};
      const output = {};

      expect(mapResult(input)).toEqual(output);
    });
  });

  describe('mapResults', () => {
    it('returns an array of formatted objects when passed an array of raw objects', () => {
      const input = [vehicleRaw, vehicleRaw];

      const output = [vehicleFormatted, vehicleFormatted] as Vehicle[];

      expect(mapResults(input)).toEqual(output);
    });

    it('returns an empty array when passed an empty array', () => {
      const input = [];
      const output = [];

      expect(mapResults(input)).toEqual(output);
    });
  });
});
