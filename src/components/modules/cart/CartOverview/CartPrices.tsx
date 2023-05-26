import { formatPrice } from 'services';
import { useStoreContext } from 'services/storeContext';

const CartPriceItem = ({ title, price }: { title: string; price: string }) => {
  return (
    <div className="w-full flex justify-between items-center mb-4">
      <p className="text-sm font-medium">{title}</p>
      <p className="text-sm font-medium">{price}</p>
    </div>
  );
};

export const CartPrices = () => {
  const { cart } = useStoreContext();

  return (
    <div className="w-full flex flex-wrap mt-8">
      <CartPriceItem
        title="Subtotal"
        price={formatPrice({ value: cart.subtotalAmount })}
      />
      <CartPriceItem
        title="Shipping"
        price="Estimated after checkout"
      />
      <CartPriceItem
        title="Taxes"
        price={formatPrice({ value: cart.totalTaxAmount })}
      />
      <div className="w-full flex justify-between items-center py-4 border-t-2 border-slate-100">
        <p className="text-lg font-medium">Total</p>
        <p className="text-lg font-medium">{formatPrice({ value: cart.totalAmount })}</p>
      </div>
    </div>
  );
};
