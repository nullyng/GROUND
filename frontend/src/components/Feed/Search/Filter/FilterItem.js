import { Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function FilterItem({ title }) {
  return (
    <div className="filter-modal__inner">
      <Grid className="filter-modal__item" container justifyContent="center">
        <Grid item xs={11}>
          {title}
        </Grid>
        <ArrowForwardIosIcon className="filter-modal__item--arrow" />
      </Grid>
    </div>
  );
}

export default FilterItem;
