import * as i from 'types';
import type { Cart } from '@shopify/hydrogen-react/storefront-api-types';

const extractLineItems = (cart: Cart) => {
  const lineItems = cart.lines.edges.map((edge) => {
    if (edge?.node) {
      const {
        id,
        attributes,
        quantity,
        merchandise,
        estimatedCost: {
          totalAmount: { amount: price },
        },
      } = edge.node;

      const {
        id: merchandiseId,
        title,
        product: { title: productTitle },
      } = merchandise;

      return {
        id,
        attributes,
        quantity,
        merchandiseId,
        title,
        price,
        productTitle,
      };
    }

    return null;
  });

  return lineItems;
};

export const formatCart = (cart: Cart) => {
  const { id, checkoutUrl, createdAt, cost, discountCodes } = cart;

  const {
    totalAmount: { amount: totalAmount },
    subtotalAmount: { amount: subtotalAmount },
  } = cost;

  const discountCodesArray = discountCodes.map((discountCode) => discountCode.code);

  const priceBeforeDiscount = totalAmount !== subtotalAmount ? subtotalAmount : undefined;
  const lineItems = extractLineItems(cart);

  return {
    id,
    checkoutUrl,
    createdAt,
    lineItems,
    priceBeforeDiscount,
    totalPrice: totalAmount,
    discountCodes: discountCodesArray,
  } as unknown as i.ClientCart;
};
