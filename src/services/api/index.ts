import { GraphQLClient } from 'graphql-request';

const ENDPOINT = process.env.NEXT_PUBLIC_SHOPIFY_URL!;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN!;

const graphQLClient = new GraphQLClient(ENDPOINT, {
  headers: {
    'X-Shopify-Storefront-Access-Token': ACCESS_TOKEN,
  },
});

export const graphQLQuery = async (
  query: string,
  variables?: Record<string, unknown>,
): Promise<any> => {
  const data = await graphQLClient.request(query, variables);
  return data;
};
