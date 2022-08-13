import { useReducer, createContext, useContext } from "react";

/* filter reducer */
const initialState = { id: 0, select: false };

function reducer(state, action) {
  switch (action.type) {
    case "title":
      return { ...state, id: action.id };
    case "select": {
      console.log(action);
      return { ...state, select: !state.select };
    }

    default:
      throw new Error();
  }
}

/* filter context */
const FilterStateContext = createContext();
const FilterDispatchContext = createContext();

export function FilterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FilterStateContext.Provider value={state}>
      <FilterDispatchContext.Provider value={dispatch}>
        {children}
      </FilterDispatchContext.Provider>
    </FilterStateContext.Provider>
  );
}

/* context custom hook */
export function useFilterState() {
  return useContext(FilterStateContext);
}

export function useFilterDispatch() {
  return useContext(FilterDispatchContext);
}
