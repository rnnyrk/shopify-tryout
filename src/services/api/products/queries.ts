import { gql } from 'graphql-request';

const PRODUCT_FRAGMENT = gql`
  fragment productFields on Product {
    id
    title
    handle
    featuredImage {
      altText
      url
    }
    variants(first: 10) {
      edges {
        node {
          id
          title
          price {
            amount
          }
          quantityAvailable
        }
      }
    }
  }
`;

export const GetProductsQuery = gql`
  ${PRODUCT_FRAGMENT}
  query getProducts($language: LanguageCode!, $query: String) @inContext(language: $language) {
    products(first: 10, query: $query) {
      edges {
        node {
          ...productFields
          productType
        }
      }
    }
  }
`;

export const GetProductTypesQuery = gql`
  query getProducts($language: LanguageCode!) @inContext(language: $language) {
    products(first: 100) {
      edges {
        node {
          productType
        }
      }
    }
  }
`;

export const GetProductDetailQuery = gql`
  ${PRODUCT_FRAGMENT}
  query getProduct($handle: String!, $language: LanguageCode!) @inContext(language: $language) {
    product(handle: $handle) {
      ...productFields
      descriptionHtml
      productMetafieldOne: metafield(namespace: "test_data", key: "snowboard_length") {
        value
        key
      }
      productMetafieldTwo: metafield(namespace: "test_data", key: "binding_mount") {
        value
        key
      }
    }
  }
`;

export const GetBestsellersQuery = gql`
  ${PRODUCT_FRAGMENT}
  query getBestsellers($language: LanguageCode!) @inContext(language: $language) {
    collection(id: "gid://shopify/Collection/445891412256") {
      products(first: 10) {
        edges {
          node {
            ...productFields
          }
        }
      }
    }
  }
`;
