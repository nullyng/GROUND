import { useReducer, createContext, useContext } from "react";

/* search reducer */
const initialState = { standard: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "standard":
      return state.standard === 0
        ? { ...state, standard: 1 }
        : { ...state, standard: 0 };
    default:
      throw new Error();
  }
}

/* search context */
const SearchStateContext = createContext();
const SearchDispatchContext = createContext();

export function SearchProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SearchStateContext.Provider value={state}>
      <SearchDispatchContext.Provider value={dispatch}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchStateContext.Provider>
  );
}

/* context custom hook */
export function useSearchState() {
  return useContext(SearchStateContext);
}

export function useSearchDispatch() {
  return useContext(SearchDispatchContext);
}
