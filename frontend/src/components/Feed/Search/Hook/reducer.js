import { useReducer } from "react";

const initialState = { standard: "board" };

function reducer(state, action) {
  switch (action.type) {
    case "board":
      return { ...state, standard: "board" };
    case "user":
      return { ...state, stadnard: "user" };
    default:
      throw new Error();
  }
}

export function SearchProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return children;
}
