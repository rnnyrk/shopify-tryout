import { cn } from 'services';

export const Container = ({ className, children, isCentered, noPadding }: ContainerProps) => {
  return (
    <section
      className={cn(className, {
        'max-w-6xl mx-auto': isCentered,
        'py-16 px-6 lg:py-32 lg:px-0': !noPadding,
        'px-2 lg:px-0': noPadding,
      })}
    >
      {children}
    </section>
  );
};

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  isCentered?: boolean;
  noPadding?: boolean;
};
