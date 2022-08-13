import { useFilterDispatch, useFilterState } from "../FilterContext";

function FilterSelect() {
  const { id, select } = useFilterState();
  const dispatch = useFilterDispatch();
  
  return <>선택한다</>;
}

export default FilterSelect;
