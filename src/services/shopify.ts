import { gql, GraphQLClient } from 'graphql-request';

const endpoint = process.env.SHOPIFY_STORE_ENDPOINT!;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
  },
});

export async function getProducts() {
  const getAllProductsQuery = gql`
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
            featuredImage {
              altText
              url
            }
            variants(first: 10) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const data = (await graphQLClient.request(getAllProductsQuery)) as any;
    const products = data.products.edges;

    return products.map((item) => ({
      ...item.node,
      variants: item.node.variants.edges.map((variant) => variant.node),
    }));
  } catch (error) {
    console.error(error);
  }
}

export const getProduct = async (id: string) => {
  const productQuery = gql`
    query getProduct($id: ID!) {
      product(id: $id) {
        id
        handle
        title
        description
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        featuredImage {
          url
          altText
        }
        variants(first: 10) {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  `;

  const variables = {
    id,
  };

  try {
    const data = (await graphQLClient.request(productQuery, variables)) as any;
    return data.product;
  } catch (error) {
    console.error(error);
  }
};

export const CartDetails = `
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
  estimatedCost {
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

export async function addToCart(itemId: string, quantity: number) {
  const createCartMutation = gql`
    mutation createCart($cartInput: CartInput) {
      cartCreate(input: $cartInput) {
        cart {
          ${CartDetails}
        }
      }
    }
  `;

  const variables = {
    cartInput: {
      lines: [
        {
          quantity,
          merchandiseId: itemId,
        },
      ],
    },
  };

  try {
    const card = await graphQLClient.request(createCartMutation, variables);
    console.log({ addToCartCard: card });
    return card;
  } catch (error) {
    console.error(error);
  }
}

export async function getCart(cartId: string) {
  const cartQuery = gql`
    query getCart($cartId: ID!) {
      cart(id: $cartId) {
        ${CartDetails}
      }
    }
  `;

  const variables = {
    cartId,
  };

  try {
    const data = (await graphQLClient.request(cartQuery, variables)) as any;
    console.log({ getCart: data });

    return data.cart;
  } catch (error) {
    console.error(error);
  }
}
