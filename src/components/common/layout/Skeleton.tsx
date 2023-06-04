import { cn } from 'services';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse bg-slate-200', className)}
      {...props}
    />
  );
}

export { Skeleton };
