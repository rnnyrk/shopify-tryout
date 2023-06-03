import { Skeleton } from 'common/layout/Skeleton';

export default function Loading() {
  return (
    <div className="w-full flex">
      <div className="flex flex-col p-4 lg:w-2/4 lg:p-24">
        <Skeleton className="w-full h-20" />
      </div>
      <Skeleton className="w-[50vw] h-[75vh]" />
    </div>
  );
}
