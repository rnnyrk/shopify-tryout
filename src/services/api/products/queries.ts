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
          inventoryQuantity
          price {
            amount
          }
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
      description
      productIngredients: metafield(namespace: "custom", key: "product_ingredients") {
        value
        key
      }
    }
  }
`;

export const GetBestsellersQuery = gql`
  ${PRODUCT_FRAGMENT}
  query getBestsellers($language: LanguageCode!) @inContext(language: $language) {
    collection(id: "gid://shopify/Collection/448009404701") {
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
