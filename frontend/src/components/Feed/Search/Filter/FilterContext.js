import { useReducer, createContext, useContext } from "react";

/* filter reducer */
const initialState = { id: 0, select: false };

const getFilters = (id, filters, action) => {
  const newFilters = [];
  for (let i = 0; i < filters.length; i++) {
    if (i === id - 1) {
      newFilters.push({ radio: action.radio, values: action.values });
    } else {
      newFilters.push(filters[i]);
    }
  }
  console.log(newFilters);
};

function reducer(state, action) {
  switch (action.type) {
    case "init": {
      return { ...state, filters: action.filters };
    }
    case "title":
      return { ...state, id: action.id };
    case "select":
      return { ...state, select: !state.select };
    case "filters": {
      return state;
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
