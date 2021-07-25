import React, { createContext, useCallback, useRef, useState } from "react";

export const CartContext = createContext();
export const AddCartContext = createContext();
export const RemoveCartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [itemsTotal, setItemsTotal] = useState([]);
  const itemsRef = useRef(items);
  itemsRef.current = items;

  return (
    <AddCartContext.Provider
      value={useCallback((item) => {
        if (Array.isArray(item)) {
          setItems([...itemsRef.current, ...item]);
        } else {
          setItems([...itemsRef.current, item]);
        }
      }, [])}
    >
      <RemoveCartContext.Provider
        /*value={useCallback((item) => {
          const newItems = itemsRef.current.filter(
            (_item) => _item.id !== item.id
          );
          setItems(newItems);
        }, [])}*/
        value={useCallback((item) => {
          var items = JSON.parse(localStorage.getItem("cart"));
          // updated
          for (var i = 0; i < items.length; i++) {
            var product = JSON.parse(items[i]);
            console.log(items);

            if (product.id === item.id) {
              items.pop(i);
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
