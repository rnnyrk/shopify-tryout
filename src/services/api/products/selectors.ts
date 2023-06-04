import * as i from 'types';
import { Product, ProductEdge } from '@shopify/hydrogen-react/storefront-api-types';

const getPriceFromVariants = (variants: i.Variant[]): string => {
  const variantPrices = variants.map((variant) => {
    return parseFloat(variant.price.amount);
  });

  // Get lowest price from array and keep the decimals
  const lowestPrice = Math.min(...variantPrices).toFixed(2);
  return lowestPrice;
};

export const formatProductOverview = ({
  products,
}: FormatProductOverviewProps): i.ProductOverviewItem[] => {
  const formattedProducts = products.map(({ node }) => {
    const item = node;
    const variants = item.variants.edges.map((variant) => variant.node);

    return {
      id: item.id,
      title: item.title,
      handle: item.handle,
      featuredImage: item.featuredImage,
      price: getPriceFromVariants(variants),
      variants,
      // Overview specific
      productType: item?.productType as i.ProductTypes,
    };
  });

  return formattedProducts;
};

type FormatProductOverviewProps = {
  products: ProductEdge[];
};

export const formatProductDetail = ({ product }: FormatProductProps): i.ProductDetail => {
  const variants = product.variants.edges.map((variant) => variant.node);

  return {
    id: product.id,
    title: product.title,
    handle: product.handle,
    featuredImage: product.featuredImage,
    price: getPriceFromVariants(variants),
    variants,
    // Detail specific
    description: product.description,
    productIngredients: product.productIngredients,
  };
};

type FormatProductProps = {
  product: Product & i.ProductMetaFields;
};
