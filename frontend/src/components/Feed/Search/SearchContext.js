import { useReducer, createContext, useContext } from "react";
import { interest, gender, age, location } from "assets/data/initData";

/* search reducer */
const filters = [
  { radio: "all", values: interest },
  { radio: "all", values: gender },
  { radio: "all", values: age },
  { radio: "all", values: location },
];
const initialState = { standard: 0, filters };

function reducer(state, action) {
  switch (action.type) {
    case "standard":
      return state.standard === 0
        ? { ...state, standard: 1 }
        : { ...state, standard: 0 };
    case "filters":
      return { ...state, filters: action.filters };
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
