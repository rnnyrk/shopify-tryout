'use client';
import * as i from 'types';
import { useState } from 'react';

import { VariantSelect } from './VariantSelect';
import { Button } from 'common/interaction/Button';
import { useStoreContext } from 'services/storeContext';

export const ProductSelect = ({ product }: ProductSelectProps) => {
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0].id);
  const { addVariantToCart } = useStoreContext();

  const onAddToCart = async () => {
    await addVariantToCart([
      {
        merchandiseId: selectedVariantId,
        quantity: 1,
      },
    ]);
  };

  return (
    <div className="w-full flex items-center mt-8">
      <VariantSelect
        onChange={(variantId) => setSelectedVariantId(variantId)}
        variants={product.variants}
        selectedVariantId={selectedVariantId}
      />
      <Button
        type="button"
        onClick={onAddToCart}
        className="mt-2"
      >
        Add to cart
      </Button>
    </div>
  );
};

type ProductSelectProps = {
  product: i.ClientProduct;
};
