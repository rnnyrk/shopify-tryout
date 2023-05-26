import { gql } from 'graphql-request';

export const CartDetails = gql`
  id
  checkoutUrl
  createdAt
  lines(first:20) {
    edges {
      node {
        id
        quantity
        estimatedCost {
          totalAmount {
            amount
            currencyCode
          }
        }
        attributes {
          key
          value
        }
        merchandise {
          ... on ProductVariant {
            id
            title
            product {
              title
            }
          }
        }
      }
    }
  }
  cost {
    subtotalAmount {
      amount
      currencyCode
    }
    totalTaxAmount {
      amount
      currencyCode
    }
    totalAmount {
      amount
      currencyCode
    }
  }
  discountCodes {
    code
  }
`;

export const CreateCartMutation = gql`
  mutation createCart($cartInput: CartInput) {
    cartCreate(input: $cartInput) {
      cart {
        ${CartDetails}
      }
    }
  }
`;

export const AddLinesMutation = gql`
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ${CartDetails}
      }
    }
  }
`;

export const UpdateLinesMutation = gql`
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ${CartDetails}
      }
    }
  }
`;

export const RemoveLinesMutation = gql`
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ${CartDetails}
      }
    }
  }
`;

export const GetCartQuery = gql`
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      ${CartDetails}
    }
  }
`;

export const AddDiscountCodesMutation = gql`
  mutation AddDiscountCodesMutation($cartId: ID!, $discountCodes: [String!]) {
    cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
      cart {
        ${CartDetails}
      }
    }
  }
`;
