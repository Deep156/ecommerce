import { useReducer, createContext, useContext } from "react";

const Context = createContext();

const createReducer = (products) => {
  return (state, action) => {
    const prodList = products;

    switch (action.type) {
      case "ADD_TO_CART":
        // determine if valid product
        if (prodList.find((product) => product.id === action.payload.id)) {
          let newState1 = [...state];

          // increment cart item quantity if exists
          if (newState1.find((item) => item.product.id === action.payload.id)) {
            ++newState1.find((item) => item.product.id === action.payload.id)
              .quantity;
          } else {
            newState1.push({
              quantity: 1,
              product: prodList.find(
                (product) => product.id === action.payload.id
              ),
            });
          }
          return newState1;
        }

        // if not valid product return previous state
        return state;

      /* case "SUBTRACT_FROM_CART":
        let newState2 = [...state];

        // determine if product exists
        if (newState2.find((item) => item.product.sku === action.payload.sku)) {
          // retrieve item
          const item = state.find(
            (item) => item.product.sku === action.payload.sku
          );

          // if quantity is less than 2 remove
          if (item.quantity < 2) {
            window.console.log(`Pop ${action.payload.sku} from cart.`);
            newState2 = newState2.filter(
              (cartItem) => cartItem.product.sku !== item.product.sku
            );
          } else {
            window.console.log(`Decrement ${action.payload.sku}`);
            --newState2.find((item) => item.product.sku === action.payload.sku)
              .quantity;
          }
          return newState2;
        }

        // if not valid product return previous state
        return state;*/

      case "DELETE_FROM_CART":
        let newState3 = state.filter(
          (item) => item.product.id !== action.payload.id
        );
        return newState3;

      default:
        return state;
    }
  };
};

// create Context & Provider

const CustomProvider = (props) => {
  const [state, dispatch] = useReducer(createReducer(props.productsList), []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

const useCount = () => {
  const context = useContext(Context);
  return context;
};
export default (CustomProvider, useCount);

/*
initialState={
  id:
  price:
  count:
}*/
