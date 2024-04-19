import type { RealmConfig } from '../types/RealmConfig';

import { REALM } from '../types/Realm';

const realm: RealmConfig = {
  cdn: {
    domain: 'rvtrader',
    version: 'vLatest',
  },
  id: REALM.RV,
  label: {
    plural: 'RVs',
    singular: 'RV',
    singularWithArticle: 'an RV',
  },
};

export { realm };
