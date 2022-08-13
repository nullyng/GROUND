import { Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function DateFilterItem() {
  const startDate = "2022-08-13";
  const endDate = "2022-08-13";

  return (
    <div className="filter-modal__inner">
      <Grid
        className="filter-modal__item filter-modal__date-item"
        container
        justifyContent="center"
      >
        <Grid item xs={11}>
          기간
          <span className="date-item__range">
            {startDate} ~ {endDate}
          </span>
        </Grid>
        <ArrowForwardIosIcon className="filter-modal__item--arrow" />
      </Grid>
    </div>
  );
}

export default DateFilterItem;
