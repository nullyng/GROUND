import { Divider, Grid } from "@mui/material";

import { useState } from "react";
import { useFilterState, useFilterDispatch } from "../FilterContext";

import FilterTitle from "../FilterTitle";
import FilterRadio from "./FilterRadio";
import Checkboxes from "./Checkboxes";

function FilterSelect({ titles }) {
  const { id, filters } = useFilterState();
  const dispatch = useFilterDispatch();

  // 현재 필터에서 선택된 라디오
  const [radio, setRadio] = useState(filters[id - 1].radio);
  // 현재 필터에서 선택된 항목
  const [values, setValues] = useState(filters[id - 1].values);

  // 타이틀 뒤로가기 눌렀을 때
  const handleClickBack = () => {
    dispatch({ type: "select" });
    dispatch({ type: "filters", radio: radio, values: values });
  };

  return (
    <>
      <FilterTitle title={titles[id].title} handleClickBack={handleClickBack} />
      <Grid
        className="filter-select"
        container
        direction="column"
        justifyContent="center"
      >
        <Grid item xs={12} className="filter-select__radio">
          <FilterRadio radio={radio} setRadio={setRadio} />
        </Grid>
        <Divider />
        {radio !== "all" && (
          <Checkboxes xs={4} values={values} setValues={setValues} />
        )}
      </Grid>
    </>
  );
}

export default FilterSelect;
