import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { useFilterDispatch } from "../FilterContext";
import FilterTitle from "../FilterTitle";
import DateRadio from "./DateRadio";
import EndDatePicker from "./EndDatePicker";
import StartDatePicker from "./StartDatePicker";

function DateSelect() {
  const dispatch = useFilterDispatch();

  // 현재 선택된 라디오
  const [radio, setRadio] = useState("all");
  // 현재 시작 날짜, 종료 날짜
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // 타이틀 뒤로가기 눌렀을 때
  const handleClickBack = () => {
    dispatch({ type: "select", select: false });
  };

  return (
    <>
      <FilterTitle title="기간" handleClickBack={handleClickBack} />
      <Grid className="date-select" container justifyContent="center">
        <DateRadio radio={radio} setRadio={setRadio} />
        <Grid
          className="date-select__date-picker"
          container
          justifyContent="center"
        >
          <Grid xs={5}>
            <StartDatePicker
              radio={radio}
              startDate={startDate}
              setStartDate={setStartDate}
            />
          </Grid>
          <span className="date-select--range"> ~ </span>
          <Grid xs={5}>
            <EndDatePicker
              radio={radio}
              endDate={endDate}
              setEndDate={setEndDate}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default DateSelect;
