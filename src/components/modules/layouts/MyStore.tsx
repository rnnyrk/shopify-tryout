import { cn } from 'services';
import { getShop } from 'services/api/shop';

export const MyStore = async ({ size = 'large' }: MyStoreProps) => {
  const shop = await getShop();

  return (
    <a
      href="/"
      className={cn('uppercase tracking-widest', {
        'text-xl': size === 'large',
      })}
    >
      <strong>{shop?.name || ''}</strong>
    </a>
  );
};

type MyStoreProps = {
  size?: 'small' | 'large';
};
