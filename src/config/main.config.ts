import type { RealmConfig } from '@/types/RealmConfig';
import type { Realm } from '@/types/Realm';

import { REALM } from '@/types/Realm';

/* eslint-disable @typescript-eslint/no-unused-vars */
import * as aero from '@/config/aero.config';
import * as atv from '@/config/atv.config';
import * as cycle from '@/config/cycle.config';
import * as equip from '@/config/equip.config';
import * as pwc from '@/config/pwc.config';
import * as rv from '@/config/rv.config';
import * as snow from '@/config/snow.config';
import * as truck from '@/config/truck.config';

// TIDE: Override Realm selection based on querystring param for DEMO purposes only.
const params = new URLSearchParams(window.location.search);
const paramRealm = params.get('realm');
const realms = {
  aero,
  atv,
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
