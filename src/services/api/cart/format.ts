import * as i from 'types';
import type { Cart } from '@shopify/hydrogen-react/storefront-api-types';

const extractLineItems = (cart: Cart): i.ClientCartLineItem[] => {
  const lineItems = cart.lines.edges.map((edge) => {
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
      product: { title: productTitle, featuredImage },
    } = merchandise;

    return {
      id,
      attributes,
      quantity,
      merchandiseId,
      title,
      price,
      productTitle,
      featuredImage,
    };
  });

  return lineItems;
};

export const formatCart = (cart: Cart) => {
  const { id, checkoutUrl, createdAt, cost, discountCodes } = cart;

  console.log({ cart });

  const {
    totalAmount: { amount: totalAmount },
    subtotalAmount: { amount: subtotalAmount },
    totalTaxAmount,
  } = cost;

  const discountCodesArray = discountCodes.map((discountCode) => discountCode.code);

  const priceBeforeDiscount = totalAmount !== subtotalAmount ? subtotalAmount : undefined;
  const lineItems = extractLineItems(cart);

  return {
    id,
    checkoutUrl,
    createdAt,
    lineItems,
    totalAmount,
    subtotalAmount,
    totalTaxAmount,
    priceBeforeDiscount,
    discountCodes: discountCodesArray,
  } as unknown as i.ClientCart;
};
