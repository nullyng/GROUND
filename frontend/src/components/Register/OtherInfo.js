import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";

import { useState } from "react";

const ages = [
  { value: "0", content: "선택 안함" },
  { value: "10", content: "10대" },
  { value: "20", content: "20대" },
  { value: "30", content: "30대" },
  { value: "40", content: "40대" },
  { value: "50", content: "50대" },
  { value: "60", content: "60대 이상" },
];

const ageList = ages.map((item, index) => (
  <MenuItem key={index} value={item.value}>
    {item.content}
  </MenuItem>
));

function OtherInfo() {
  const [age, setAge] = useState(ages[0].value);

  return (
    <>
      <Grid
        className="register-form__inner-wrapper"
        container
        justifyContent="space-between"
      >
        <TextField
          className="register-form__field"
          size="small"
          label="닉네임"
        />
        <Button className="register-form__innerBtn" variant="contained">
          중복확인
        </Button>
      </Grid>
      <Grid
        className="register-form__select-field"
        container
        justifyContent="space-between"
      >
        <FormControl sx={{ minWidth: 180 }} size="small">
          <InputLabel id="age-label">연령대</InputLabel>
          <Select labelId="age-label" label="연령대" value={age}>
            {ageList}
          </Select>
        </FormControl>
        <Divider orientation="vertical" flexItem />
        <FormControl>
          <RadioGroup row>
            <FormControlLabel value="female" control={<Radio />} label="남" />
            <FormControlLabel value="male" control={<Radio />} label="여" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Button className="register-form__button" variant="contained">
        회원가입
      </Button>
    </>
  );
}

export default OtherInfo;