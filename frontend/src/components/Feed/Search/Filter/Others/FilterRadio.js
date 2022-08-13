import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "components/common/theme.js";

const FilterRadio = () => {
  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <RadioGroup row>
          <FormControlLabel value="all" label="전체" control={<Radio />} />
          <FormControlLabel
            value="custom"
            label="직접 선택"
            control={<Radio />}
          />
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  );
};

export default FilterRadio;
