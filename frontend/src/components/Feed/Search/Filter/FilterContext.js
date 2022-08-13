import { useReducer, createContext, useContext } from "react";

/* filter reducer */
const filters = [
  { startDate: new Date(), endDate: new Date() },
  {
    all: true,
    checked: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  },
  { all: true, checked: ["MALE", "FEMALE"] },
  {
    all: true,
    checked: ["teenager", "twenty", "thirty", "forty", "fifty", "sixty"],
  },
  {
    all: true,
    checked: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  },
];
const initialState = { id: 0, select: false, filters };

function reducer(state, action) {
  switch (action.type) {
    case "title":
      return { ...state, id: action.id };
    case "select":
      return { ...state, select: !state.select };
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
