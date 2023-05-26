import clsx from 'clsx';

export const Container = ({ className, children }: ContainerProps) => {
  return <section className={clsx('py-32', className)}>{children}</section>;
};

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
