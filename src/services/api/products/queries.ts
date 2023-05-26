import { gql } from 'graphql-request';

export const GetProductsQuery = gql`
  query getProducts {
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
