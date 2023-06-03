import clsx from 'clsx';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx('animate-pulse bg-slate-200', className)}
      {...props}
    />
  );
}

export { Skeleton };
