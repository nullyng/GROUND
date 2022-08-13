import { useFilterState } from "../FilterContext";
import FilterRadio from "./FilterRadio";
import { interest, gender, age, location } from "assets/data/initData";
import Checkboxes from "./Checkboxes";
import { Container } from "@mui/system";
import { Divider, Grid } from "@mui/material";

const options = [interest, gender, age, location];

function FilterSelect() {
  const { id, filters } = useFilterState();
  const filter = filters[id];

  return (
    <Grid
      className="filter-select"
      container
      direction="column"
      justifyContent="center"
    >
      <Grid item xs={12} className="filter-select__radio">
        <FilterRadio />
      </Grid>
      <Divider />
      <Checkboxes items={options[id - 1]} xs={4} />
    </Grid>
  );
}

export default FilterSelect;
