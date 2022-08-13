import { useFilterState } from "./FilterContext";

import DateFilterItem from "./Date/DateFilterItem";
import FilterItem from "./Others/FilterItem";
import FilterSelect from "./Others/FilterSelect";

function FilterContent({ items }) {
  const { select } = useFilterState();

  const filterItems = items.map((item) => (
    <FilterItem key={item.id} item={item} />
  ));

  return (
    <div className="filter-modal__inner">
      {!select && (
        <>
          <DateFilterItem />
          {filterItems}
        </>
      )}
      {select && <FilterSelect />}
    </div>
  );
}

export default FilterContent;
