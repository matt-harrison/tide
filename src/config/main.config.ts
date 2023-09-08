import type { RealmConfig } from '@/types/RealmConfig';
import type { Realm } from '@/types/Realm';

import { REALM } from '@/types/Realm';

/* eslint-disable @typescript-eslint/no-unused-vars */
import * as aero from './aero.config';
import * as atv from './atv.config';
import * as boatline from './boatline.config';
import * as cycle from './cycle.config';
import * as equip from './equip.config';

import * as pwc from './pwc.config';
import * as rv from './rv.config';
import * as snow from './snow.config';
import * as truck from './truck.config';

// TIDE: Override Realm selection based on querystring param for DEMO purposes only.
const params = new URLSearchParams(window.location.search);
const paramRealm = params.get('realm');
const realms = {
  aero,
  atv,
  boatline,
  cycle,
  equip,
  pwc,
  rv,
  snow,
  truck,
};

const realmCode: Realm = paramRealm && Object.keys(realms).includes(paramRealm) ? (paramRealm as Realm) : REALM.RV;

// Once the SPA is released, we can purge all refernces to this structure.
export const isSinglePageApp = false;

export const realm: RealmConfig = realms[realmCode]?.realm;
