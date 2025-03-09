import { createContext, useEffect, useReducer } from "react";
export const GlobalContext = createContext();

const initialState = () => {
  return (
    JSON.parse(localStorage.getItem("products")) || {
      products: [],
      totalPrice: 0,
      totalAmound: 0,
    }
  );
};

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, payload],
      };
    case "INCREMENT_AMOUNT":
      return {
        ...payload,
      };
    case "DECREMENT_AMOUNT":
      return {
        ...payload,
      };
    case "CALULATE_TOTAL":
      return {
        ...state,
        ...payload,
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((product) => product.id != payload),
      };
  }
};

export function GlobalcontextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, initialState());

  const calculateTotal = () => {
    let allPrice = 0;
    let allAmount = 0;
    state.products.forEach((p) => {
      allPrice += p.amount * p.price;
      allAmount += p.amount;
    });

    dispatch({
      type: "CALULATE_TOTAL",
      payload: {
        totalPrice: allPrice,
        totalAmound: allAmount,
      },
    });
  };

  const incrementAmount = (id) => {
    const item = state.products.find((prod) => prod.id == id);
    item.amount += 1;
    dispatch({
      type: "INCREMENT_AMOUNT",
      payload: state,
    });
    calculateTotal();
  };

  const decrementAmount = (id) => {
    const item = state.products.find((prod) => prod.id == id);
    item.amount -= 1;
    dispatch({
      type: "DECREMENT_AMOUNT",
      payload: state,
    });
    calculateTotal();
  };

  useEffect(() => {
    calculateTotal();
    localStorage.setItem("products", JSON.stringify(state));
  }, [state.products]);

  return (
    <GlobalContext.Provider
      value={{ ...state, dispatch, incrementAmount, decrementAmount }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
