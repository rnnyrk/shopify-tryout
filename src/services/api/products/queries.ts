import { gql } from 'graphql-request';

export const GetProductsQuery = gql`
  query getProducts($language: LanguageCode!) @inContext(language: $language) {
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

export const GetProductDetailQuery = gql`
  query getProduct($handle: String!) {
    product(handle: $handle) {
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
            title
          }
        }
      }
    }
  }
`;
