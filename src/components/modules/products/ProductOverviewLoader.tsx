import { Container } from 'common/layout/Container';
import { Skeleton } from 'common/layout/Skeleton';

export const ProductOverviewLoader = () => {
  return (
    <Container
      isCentered
      className="flex flex-col mt-8 lg:grid lg:gap-16 lg:grid-cols-3"
    >
      <Skeleton className="w-[341px] h-[364px] rounded-md" />
      <Skeleton className="w-[341px] h-[364px] rounded-md" />
      <Skeleton className="w-[341px] h-[364px] rounded-md" />
    </Container>
  );
};
