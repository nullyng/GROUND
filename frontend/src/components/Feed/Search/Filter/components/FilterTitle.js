import { Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useFilterDispatch, useFilterState } from "../FilterContext";

function FilterTitle({ titles }) {
  const { id, select } = useFilterState();
  const dispatch = useFilterDispatch();

  const handleClick = () => {
    dispatch({ type: "title", id: 0 });
    dispatch({ type: "select" });
  };

  return (
    <Grid
      className="filter-modal__title content__title-desktop"
      textAlign="center"
      container
      justifyContent="center"
    >
      {select && (
        <button className="filter-modal__title--button" onClick={handleClick}>
          <ArrowBackIcon />
        </button>
      )}
      <Grid item xs={11} textAlign="center">
        {titles[id].title}
      </Grid>
    </Grid>
  );
}

export default FilterTitle;
