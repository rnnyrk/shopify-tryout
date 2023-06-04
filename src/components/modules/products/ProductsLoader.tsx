import { Container } from 'common/layout/Container';
import { Skeleton } from 'common/layout/Skeleton';

import { ProductsGrid } from './ProductsGrid';

export const ProductsLoader = () => {
  return (
    <Container isCentered>
      <ProductsGrid>
        <Skeleton className="w-[341px] h-[364px] rounded-md" />
        <Skeleton className="w-[341px] h-[364px] rounded-md" />
        <Skeleton className="w-[341px] h-[364px] rounded-md" />
      </ProductsGrid>
    </Container>
  );
};
