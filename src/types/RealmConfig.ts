import type { Realm } from './Realm';

export type RealmConfig = {
  cdn: {
    domain: string;
    version: string;
  };
  id: Realm;
  label: {
    plural: string;
    singular: string;
    singularWithArticle: string;
  };
};
