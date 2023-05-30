import type { Localization } from '@shopify/hydrogen-react/storefront-api-types';

import { GetLocalesQuery } from './queries';
import { graphQLQuery } from '../';

export const getLocales = async () => {
  return graphQLQuery(GetLocalesQuery, {})
    .then((data) => {
      const localization = data.localization as Localization;
      return localization.availableLanguages;
    })
    .catch((error) => {
      console.error(error);
    });
};
