import { Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useFilterDispatch } from "../FilterContext";

function DateFilterItem() {
  const dispatch = useFilterDispatch();

  const startDate = "2022-08-13";
  const endDate = "2022-08-13";

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "title", id: 0 });
    dispatch({ type: "select", select: "false" });
  };

  return (
    <Grid
      className="filter-modal__item filter-modal__item--date"
      container
      justifyContent="center"
      onClick={handleClick}
    >
      <Grid item xs={11}>
        기간
        <span className="date-item__range">
          {startDate} ~ {endDate}
        </span>
      </Grid>
      <ArrowForwardIosIcon className="filter-modal__item--arrow" />
    </Grid>
  );
}

export default DateFilterItem;
