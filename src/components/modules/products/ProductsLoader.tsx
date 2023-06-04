import { Container } from 'common/layout/Container';
import { Skeleton } from 'common/layout/Skeleton';

import { ProductsGrid } from './ProductsGrid';

export const ProductsLoader = ({ isBestsellers = false }) => {
  return (
    <Container isCentered>
      {!isBestsellers && (
        <div className="w-full flex flex-wrap">
          <Skeleton className="w-[100px] h-12 rounded-md mr-2" />
          <Skeleton className="w-[80px] h-12 rounded-md" />
        </div>
      )}
      <ProductsGrid>
        <Skeleton className="w-[341px] h-[364px] rounded-md" />
        <Skeleton className="w-[341px] h-[364px] rounded-md" />
        <Skeleton className="w-[341px] h-[364px] rounded-md" />
      </ProductsGrid>
    </Container>
  );
};
