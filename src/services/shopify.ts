import type { Product, Collection } from '@shopify/hydrogen-react/storefront-api-types';
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
          }
        }
      }
    }
  `;

  try {
    const data = (await graphQLClient.request(getAllProductsQuery)) as any;
    return data.products.edges.map((item) => ({ ...item.node }));
  } catch (error) {
    console.error(error);
    // throw new Error(error);
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
    // throw new Error(error);
  }
};
