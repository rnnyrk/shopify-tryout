import * as i from 'types';

import { GetShopQuery } from './queries';
import { graphQLQuery } from '..';

export const getShop = async (): Promise<i.Shop | null> => {
  return graphQLQuery(GetShopQuery, {})
    .then((data) => {
      return data.shop;
    })
    .catch((error) => {
      console.error(error);
    });
};
