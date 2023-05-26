import * as i from 'types';
import * as React from 'react';
import type { Attribute, CartLineInput } from '@shopify/hydrogen-react/storefront-api-types';

import { isBrowser } from 'services/isBrowser';
import { getUrlParamsObject } from 'services/api/helpers';
import {
  addToCart,
  createCart,
  getCart,
  removeLines,
  updateLines,
  addDiscountCode,
} from 'services/api/cart';

export const StoreContext = React.createContext<StoreContextProps | null>(null);

export const useStoreContext = () => {
  const context = React.useContext(StoreContext);

  if (!context) {
    throw new Error(
      'Components should be rendered inside the StoreContext.StoreProvider component',
    );
  }

  return context;
};

const localStorageKey = 'shopify_cart_id';

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [cart, setCart] = React.useState<i.ClientCart>({
    checkoutUrl: '',
    lineItems: [],
    id: '',
    totalPrice: '',
    createdAt: '',
    discountCodes: [],
  });

  const [isLoading, setLoading] = React.useState(true);

  const setCartItem = (cart: i.ClientCart) => {
    if (isBrowser && cart.id) {
      localStorage.setItem(localStorageKey, cart.id.toString());
    }

    setCart(cart);
  };

  const onCartResponse = (cart: i.ClientCart | null) => {
    if (cart?.id && cart?.checkoutUrl && cart?.lineItems.length >= 0) {
      setCart(cart);
      return true;
    }

    // TODO: handle error
    return false;
  };

  React.useEffect(() => {
    setLoading(true);
    const initializeCart = async () => {
      const existingCartId = isBrowser ? localStorage.getItem(localStorageKey) : null;

      const applyVoucher = async (cartId: string) => {
        const { voucher } = getUrlParamsObject();

        if (voucher) {
          const newCart = await addDiscountCode(cartId, [voucher]);

          onCartResponse(newCart);
        }
      };

      if (existingCartId && existingCartId !== 'null') {
        try {
          const existingCart = await getCart(existingCartId);
          if (existingCart) {
            setCartItem(existingCart);
            applyVoucher(existingCart.id);
            return;
          }

          localStorage.setItem(localStorageKey, '');
        } catch (e) {
          localStorage.setItem(localStorageKey, '');
        }
      }

      const newCart = await createCart();
      if (newCart) {
        setCartItem(newCart);
        applyVoucher(newCart.id);
      } else {
        // TODO: handle error
      }
    };

    initializeCart();
    setLoading(false);
  }, []);

  const addVariantToCart: AddVariantToCart = async (lineItems, attributes) => {
    setLoading(true);

    return addToCart(cart.id, lineItems).then((cart) => {
      setLoading(false);
      return onCartResponse(cart);
    });
  };

  const removeLineItems: RemoveLineItems = async (lineItemIds): Promise<boolean> => {
    setLoading(true);

    return removeLines(cart.id, lineItemIds).then((cart) => {
      setLoading(false);
      return onCartResponse(cart);
    });
  };

  const updateLineItem: UpdateLineItem = async (lineItemId, quantity): Promise<boolean> => {
    setLoading(true);

    const lineItemsToUpdate = [
      {
        merchandiseId: lineItemId,
        quantity,
      },
    ];

    return updateLines(cart.id, lineItemsToUpdate).then((cart) => {
      setLoading(false);
      return onCartResponse(cart);
    });
  };

  const getTotalQuantityInCart: GetTotalQuantityInCart = () =>
    cart.lineItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

  return (
    <StoreContext.Provider
      value={{
        addVariantToCart,
        removeLineItems,
        updateLineItem,
        getTotalQuantityInCart,
        cart,
        isLoading,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

type AddVariantToCart = (lineItems: CartLineInput[], attributes?: Attribute[]) => Promise<boolean>;
type RemoveLineItems = (lineItemId: string[]) => Promise<boolean> | null;
type UpdateLineItem = (lineItemId: string, quantity: number) => Promise<boolean> | null;
type GetTotalQuantityInCart = () => number;

type StoreContextProps = {
  isLoading: boolean;
  cart: i.ClientCart;
  addVariantToCart: AddVariantToCart;
  removeLineItems: RemoveLineItems;
  updateLineItem: UpdateLineItem;
  getTotalQuantityInCart: GetTotalQuantityInCart;
};

type StoreProviderProps = {
  children: React.ReactNode;
};