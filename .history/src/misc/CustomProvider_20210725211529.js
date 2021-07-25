import React, { createContext, useCallback, useRef, useState } from "react";

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
        /*   if (Array.isArray(item)) {
          // setItems([...itemsRef.current, ...item]);
        } else {*/
        var l_item = JSON.parse(localStorage.getItem("cart"));
        if (itemsRef.current.length === 0) {
          setItems([...itemsRef.current, item]);
        } else if (i_item.find((items) => items.id === item.id)) {
          /*  itemsRef.current.map((el) =>
              el.id === item.id
                ? Object.assign(
                    {},
                    el,
                    (el.quantity += 1)
                    //(item.price *= el.quantity)
                  )
                : el
            );
            setItems([...itemsRef.current]);*/
          l_item.map((el) =>
            el.id === item.id ? Object.assign({}, el, (el.quantity += 1)) : el
          );
          l_item = JSON.stringify(l_item); //Restoring object left into items again

          localStorage.setItem("cart", l_item);
        } else {
          setItems([...itemsRef.current, item]);
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

export default CartProvider;
