import clsx from 'clsx';
import Image from 'next/image';

export const ProductImage = ({ alt, src, size }: ProductImageProps) => {
  return (
    <figure
      className={clsx('relative w-full h-60', {
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
  src?: string;
  size?: 'large';
};
