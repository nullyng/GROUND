import { Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useFilterDispatch, useFilterState } from "../FilterContext";

function FilterItem({ item }) {
  const { id, select } = useFilterState();
  const dispatch = useFilterDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "title", id: item.id });
    dispatch({ type: "select" });
  };

  return (
    <Grid
      className="filter-modal__item"
      onClick={handleClick}
      container
      justifyContent="center"
    >
      <Grid item xs={11}>
        {item.title}
      </Grid>
      <ArrowForwardIosIcon className="filter-modal__item--arrow" />
    </Grid>
  );
}

export default FilterItem;
