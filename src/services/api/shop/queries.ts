import { gql } from 'graphql-request';

export const GetShopQuery = gql`
  query GetShopQuery {
    shop {
      name
    }
  }
`;
