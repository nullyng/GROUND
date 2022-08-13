import { useFilterState } from "./FilterContext";

import FilterTitle from "./FilterTitle";
import DateFilterItem from "./Date/DateFilterItem";
import FilterItem from "./Others/FilterItem";
import FilterSelect from "./Others/FilterSelect";

const titles = [
  { id: 0, title: "필터" },
  { id: 1, title: "기간" },
  { id: 2, title: "운동종목" },
  { id: 3, title: "성별" },
  { id: 4, title: "연령대" },
  { id: 5, title: "지역" },
];

const items = titles.filter((title) => title.id > 1);

function FilterContent() {
  const { select } = useFilterState();

  const filterItems = items.map((item) => (
    <FilterItem key={item.id} item={item} />
  ));

  return (
    <div className="filter-modal__inner">
      <FilterTitle titles={titles} />
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
