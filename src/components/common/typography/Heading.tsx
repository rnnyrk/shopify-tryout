import clsx from 'clsx';
import { IBM_Plex_Serif } from 'next/font/google';

const plexSerif = IBM_Plex_Serif({ weight: ['400'], subsets: ['latin'] });

export const Heading = ({ as, className, color, children }: HeadingProps) => {
  if (as === 'h2') {
    return (
      <h2
        className={clsx('text-2xl', plexSerif.className, className, {
          [`text-${color}`]: Boolean(color),
        })}
      >
        {children}
      </h2>
    );
  }

  return (
    <h1
      className={clsx('text-4xl', plexSerif.className, className, {
        [`text-${color}`]: Boolean(color),
      })}
    >
      {children}
    </h1>
  );
};

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: React.ReactNode;
  color?: 'black' | 'white';
};
