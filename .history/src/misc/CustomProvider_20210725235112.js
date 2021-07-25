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
        if (Array.isArray(item)) {
          setItems([...itemsRef.current, ...item]);
        } else {
          if (itemsRef.current.find((el) => el.id === item.id)) {
            var index = itemsRef.current.findIndex((el) => el.id === item.id);
            console.log(index);
            var item_l = itemsRef.current;
            console.log(item_l[index]);
            //setItems([...itemsRef.current], {
            //  quantity: itemsRef.current,
            //});
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

export default CartProvider;
