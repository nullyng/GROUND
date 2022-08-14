import { Grid } from "@mui/material";

import { useFilterState } from "./FilterContext";

import DateFilterItem from "./Date/DateFilterItem";
import FilterItem from "./Others/FilterItem";
import FilterSelect from "./Others/FilterSelect";

const titles = [
  { id: 0, title: "기간" },
  { id: 1, title: "운동종목" },
  { id: 2, title: "성별" },
  { id: 3, title: "연령대" },
  { id: 4, title: "지역" },
];

const items = titles.filter((title) => title.id > 0);

function FilterContent() {
  const { id, select } = useFilterState();

  const filterItems = items.map((item) => (
    <FilterItem key={item.id} item={item} />
  ));

  return (
    <div className="filter-modal__inner">
      {
        /* 필터 메인 */
        !select && (
          <>
            <Grid
              className="filter-modal__title content__title-desktop"
              container
              justifyContent="center"
            >
              필터
            </Grid>
            <DateFilterItem />
            {filterItems}
          </>
        )
      }
      {
        /* 필터 항목 선택했을 때 */
        select && (
          <>
            {id === 0 && "날짜선택"}
            {id !== 0 && <FilterSelect titles={titles} />}
          </>
        )
      }
    </div>
  );
}

export default FilterContent;
