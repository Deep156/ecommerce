import { useReducer, createContext, useContext } from "react";

const Context = createContext();

const initialState = {
  id: "",
  name: "",
};

const createReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_PRODUCT":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          //price: action.payload.price,
        },
      ];
    case "DELETE_PRODUCT":
      return [...state.filter((product) => product.id !== action.payload.id)];
    default:
      return state;
  }
};
// create Context & Provider

const CustomProvider = (props) => {
  const [state, dispatch] = useReducer(createReducer, initialState);

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
