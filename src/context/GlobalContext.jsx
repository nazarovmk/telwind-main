import { createContext, useReducer } from "react";
export const GlobalContext = createContext();

const initialState = {
  products: [],
  totalPrice: 0,
  totalAmound: 0,
};

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, payload],
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((product) => product.id != payload),
      };
  }
};

export function GlobalcontextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, initialState);
  console.log(state);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
