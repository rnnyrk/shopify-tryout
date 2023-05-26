import type { CartLineInput } from '@shopify/hydrogen-react/storefront-api-types';

import {
  AddDiscountCodesMutation,
  AddLinesMutation,
  CreateCartMutation,
  GetCartQuery,
  RemoveLinesMutation,
  UpdateLinesMutation,
} from './queries';
import { graphQLQuery } from '../';
import { formatCart } from './format';

export const createCart = async () => {
  return graphQLQuery(CreateCartMutation, {})
    .then((data) => {
      const cart = data?.cartCreate?.cart;

      if (cart) {
        return formatCart(cart);
      }

      return null;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const addToCart = async (cartId: string, lines: CartLineInput[]) => {
  const variables = {
    cartId,
    lines,
  };

  return graphQLQuery(AddLinesMutation, variables)
    .then((data) => {
      const cart = data?.cartLinesAdd?.cart;
      if (cart) {
        return formatCart(cart);
      }

      return null;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getCart = async (cartId: string) => {
  const variables = {
    cartId,
  };

  return graphQLQuery(GetCartQuery, variables)
    .then((data) => {
      const { cart } = data;
      if (cart) {
        return formatCart(cart);
      }

      return null;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const removeLines = async (cartId: string, lineIds: string[]) => {
  const variables = {
    cartId,
    lineIds,
  };

  return graphQLQuery(RemoveLinesMutation, variables)
    .then((data) => {
      const cart = data?.cartLinesRemove?.cart;
      if (cart) {
        return formatCart(cart);
      }

      return null;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const updateLines = async (cartId: string, lines: Partial<CartLineInput>[]) => {
  const variables = {
    cartId,
    lines,
  };

  return graphQLQuery(UpdateLinesMutation, variables)
    .then((data) => {
      const cart = data?.cartLinesUpdate?.cart;
      if (cart) {
        return formatCart(cart);
      }

      return null;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const addDiscountCode = async (cartId: string, discountCodes: string[]) => {
  const variables = {
    cartId,
    discountCodes,
  };

  return graphQLQuery(AddDiscountCodesMutation, variables)
    .then((data) => {
      const cart = data?.cartDiscountCodesUpdate?.cart;
      if (cart) {
        return formatCart(cart);
      }

      return null;
    })
    .catch((error) => {
      console.error(error);
    });
};
