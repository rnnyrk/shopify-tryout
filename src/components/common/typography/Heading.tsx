import { IBM_Plex_Serif } from 'next/font/google';

import { cn } from 'services';

const plexSerif = IBM_Plex_Serif({ weight: ['400', '500', '600'], subsets: ['latin'] });

export const Heading = ({ as, className, color, children, size = '2xl' }: HeadingProps) => {
  if (as === 'h2') {
    return (
      <h2
        className={cn(`text-${size}`, plexSerif.className, className, {
          [`text-${color}`]: Boolean(color),
        })}
      >
        {children}
      </h2>
    );
  }

  return (
    <h1
      className={cn(`text-${size}`, plexSerif.className, className, {
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
  size?: 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
};
