import { useEffect, useReducer } from "react";

const initialState = {
  data: null,
  isPending: true,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { data: action.payload, isPending: false, error: null };
    case "FETCH_ERROR":
      return { data: null, isPending: false, error: action.payload };
    case "FETCH_PENDING":
      return { ...state, isPending: true, error: null };
    default:
      return state;
  }
}

export function UseFetch(url) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_PENDING" });
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const jsonData = await res.json();
        dispatch({ type: "FETCH_DATA", payload: jsonData });
      } catch (err) {
        dispatch({ type: "FETCH_ERROR", payload: err.message });
      }
    };

    fetchData();
  }, [url]);

  return state;
}
