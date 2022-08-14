import { Grid } from "@mui/material";
import DateRadio from "../../Filter/Date/DateRadio";
import EndDatePicker from "../../Filter/Date/EndDatePicker";
import StartDatePicker from "../../Filter/Date/StartDatePicker";

function SearchDatePicker({
  dateRange,
  setDateRange,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) {
  return (
    <>
      <Grid className="top__date-picker" container justifyContent="end">
        <DateRadio dateRange={dateRange} setDateRange={setDateRange} />
      </Grid>
      {dateRange === "custom" && (
        <Grid className="top__date-picker--calendar" container>
          <StartDatePicker startDate={startDate} setStartDate={setStartDate} />
          <EndDatePicker
            startDate={startDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </Grid>
      )}
    </>
  );
}

export default SearchDatePicker;
