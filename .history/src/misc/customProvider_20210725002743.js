import React, { createContext, useCallback, useRef, useState } from "react";

export const CartContext = createContext();
export const AddCartContext = createContext();
export const RemoveCartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  //const itemsRef = useRef(items);
  //itemsRef.current = items;

  return (
    <AddCartContext.Provider
      value={useCallback((item) => {
        /*if (Array.isArray(item)) {
          console.log(item);
          if (item.id === items.id) {
            item.quantity += 1;
          }

          //setItems([...itemsRef.current, ...item]);
        } else { */
        //console.log(item);
        //console.log(item.id);
        //console.log(itemsRef);
        //if (itemsRef.map((item) => item.id === itemsRef.id)) {
        //item.quantity += 1;
        //}
        //console.log(item.quantity);
        //setItems([...itemsRef.current, item]);
        setItems([...items, item]);
        console.log(items);
        //}
      }, [])}
    >
      <RemoveCartContext.Provider
        value={useCallback((item) => {
          var items = JSON.parse(localStorage.getItem("cart"));
          // updated
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
