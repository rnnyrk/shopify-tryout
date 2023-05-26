import clsx from 'clsx';

export const Container = ({ className, children }: ContainerProps) => {
  return <section className={clsx('py-16 px-6 lg:py-32 lg:px-0', className)}>{children}</section>;
};

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
