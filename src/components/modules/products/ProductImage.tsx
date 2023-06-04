import Image from 'next/image';

import { cn } from 'services';

export const ProductImage = ({ alt, className, src, size }: ProductImageProps) => {
  return (
    <figure
      className={cn('relative w-full h-60', className, {
        'lg:h-full': size === 'large',
      })}
    >
      <Image
        src={src || ''}
        alt={alt || ''}
        fill
        className="object-cover w-full h-full"
        unoptimized
      />
    </figure>
  );
};

type ProductImageProps = {
  alt?: string;
  className?: string;
  src?: string;
  size?: 'large';
};
