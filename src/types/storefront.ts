import { VariantId, CartId, LineItemId, CartLineItem, VariantQuantity, Attribute } from 'types';

export type StorefrontCart = {
  id: CartId,
  checkoutUrl: string,
  createdAt: string,
  discountCodes: {
    code: string,
  }[],
  lines: {
    edges: {
      node: StorefrontLineItem,
    }[],
  },
  estimatedCost: {
    totalAmount: {
      amount: string,
      currencyCode: string,
    },
    subtotalAmount: {
      amount: string,
      currencyCode: string,
    },
  },
};

export type StorefrontLineItem = {
  id: LineItemId,
  quantity: VariantQuantity,
  merchandise: StorefrontProductVariant,
  estimatedCost: {
    totalAmount: {
      amount: number,
      currencyCode: string,
    },
  },
  attributes: Attribute[],
}

export type StorefrontProductVariant = {
  id: VariantId,
  title: string,
  product: {
    title: string,
    sellingPlanGroups?: {
      edges: {
        node: {
          sellingPlans: {
            edges: {
              node: SellingPlan,
            }[],
          },
        },
      }[],
    },
  },
};

export type SellingPlan = {
  id: string,
  name: string,
  options: {
    name: string,
    value: string,
  }[],
  priceAdjustments: {
    adjustmentValue: {
      __typename: string,
      price: {
        amount: number,
        currencyCode: string,
      },
    },
  }[]
}

export type StorefrontCartInput = {
  attributes?: Attribute[],
  lines: StorefrontLineItem[],
}

export type StorefrontCompoundProduct = {
  id: string,
  handle: string,
  lineItems: CartLineItem[],
}
