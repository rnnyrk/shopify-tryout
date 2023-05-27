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
    totalAmount: '',
    totalTaxAmount: '',
    subtotalAmount: '',
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
          if (newCart) {
            onCartResponse(newCart);
          }
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

  const addVariantToCart: AddVariantToCart = async (lineItems, attributes): Promise<boolean> => {
    setLoading(true);

    return addToCart(cart.id, lineItems).then((cart) => {
      setLoading(false);

      if (cart) {
        return onCartResponse(cart);
      }

      return false;
    });
  };

  const removeLineItems: RemoveLineItems = async (lineItemIds): Promise<boolean> => {
    setLoading(true);

    return removeLines(cart.id, lineItemIds).then((cart) => {
      setLoading(false);

      if (cart) {
        return onCartResponse(cart);
      }

      return false;
    });
  };

  const updateLineItem: UpdateLineItem = async (
    lineItemId,
    merchandiseId,
    quantity,
  ): Promise<boolean> => {
    setLoading(true);

    const lineItemsToUpdate = [
      {
        id: lineItemId,
        merchandiseId,
        quantity,
      },
    ];

    return updateLines(cart.id, lineItemsToUpdate).then((cart) => {
      setLoading(false);

      if (cart) {
        return onCartResponse(cart);
      }

      return false;
    });
  };

  const getTotalQuantity: getTotalQuantity = () => {
    return cart.lineItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  };

  return (
    <StoreContext.Provider
      value={{
        addVariantToCart,
        removeLineItems,
        updateLineItem,
        getTotalQuantity,
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
type UpdateLineItem = (
  lineItemId: string,
  merchandiseId: string,
  quantity: number,
) => Promise<boolean> | null;
type getTotalQuantity = () => number;

type StoreContextProps = {
  isLoading: boolean;
  cart: i.ClientCart;
  addVariantToCart: AddVariantToCart;
  removeLineItems: RemoveLineItems;
  updateLineItem: UpdateLineItem;
  getTotalQuantity: getTotalQuantity;
};

type StoreProviderProps = {
  children: React.ReactNode;
};
