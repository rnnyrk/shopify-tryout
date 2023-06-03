import { Container } from 'common/layout/Container';
import { Skeleton } from 'common/layout/Skeleton';

export default function Loading() {
  return (
    <Container isCentered>
      <Skeleton className="w-[341px] h-[364px] rounded-md bg-slate-200" />
    </Container>
  );
}
