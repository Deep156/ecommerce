/*import React, { createContext, useCallback, useRef, useState } from "react";

export const CartContext = createContext();
export const AddCartContext = createContext();
export const RemoveCartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const itemsRef = useRef(items);
  itemsRef.current = items;

  return (
    <AddCartContext.Provider
      value={useCallback((item) => {
        if (Array.isArray(item)) {
          setItems([...itemsRef.current, ...item]);
        } else {
          if (itemsRef.current.find((el) => el.id === item.id)) {
            var index = itemsRef.current.findIndex((el) => el.id === item.id);
            console.log(index);
            var item_l = itemsRef.current;
            console.log(item_l[index]);
            setItems([...itemsRef.current], {
              quantity : quantity+1
            }
            );
          } else {
            setItems([...itemsRef.current, item]);
          }
        }
      }, [])}
    >
      <RemoveCartContext.Provider
        value={useCallback((item) => {
          var items = JSON.parse(localStorage.getItem("cart"));

          for (var i = 0; i < items.length; i++) {
            var product = items[i];

            if (product.id === item.id) {
              items.splice(i, 1);
              break;
            }
          }

          items = JSON.stringify(items); //Restoring object left into items again

          localStorage.setItem("cart", items);
        }, [])}
      >
        <CartContext.Provider value={items}>{children}</CartContext.Provider>
      </RemoveCartContext.Provider>
    </AddCartContext.Provider>
  );
};

export default CartProvider;*/

import React, { createContext, useContext, useEffect, useReducer } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "RESET":
      return [];

    case "ADD_ONE": {
      const isInCart = state.some((product) => product.id === action.id);

      return isInCart
        ? state.map((product) =>
            product.id === action.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          )
        : state.concat({ id: action.id, quantity: 1, price: action.price });
    }

    case "REMOVE_ONE": {
      const isInCart = state.some((product) => product.id === action.id);

      return isInCart
        ? state.map((product) =>
            product.id === action.id
              ? {
                  ...product,
                  quantity:
                    product.quantity > 1
                      ? product.quantity - 1
                      : product.quantity,
                }
              : product
          )
        : state;
    }

    case "REMOVE": {
      return state.filter((product) => product.id !== action.id);
    }

    case "EMPTY": {
      return [];
    }

    default:
      return state;
  }
}

const Cart = createContext();
const DispatchCart = createContext();
const KEY = "cart";

export const CartProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, [], (initialValue) => {
    const val = localStorage.getItem(KEY);
    return val ? JSON.parse(val) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(cart));
  }, [cart]);

  return (
    <DispatchCart.Provider value={dispatchCart}>
      <Cart.Provider value={cart}>{children}</Cart.Provider>
    </DispatchCart.Provider>
  );
};

export const useCartDispatch = () => useContext(DispatchCart);
export const useCart = () => useContext(Cart);
