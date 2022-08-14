import { ThemeProvider } from "@emotion/react";
import { FormControlLabel, Checkbox, Grid, FormControl } from "@mui/material";

import theme from "components/common/theme.js";

const Checkboxes = ({ xs, values, setValues }) => {
  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <Grid className="filter-select__checkboxes" container>
          {values.map((item, index) => (
            <Grid item xs={xs} key={item.id}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => {
                      const valueCopy = [...values];
                      // update checkbox value
                      valueCopy[index].checked = e.target.checked;
                      // update local state
                      setValues(valueCopy);
                    }}
                    type="checkbox"
                  />
                }
                label={item.value}
              />
            </Grid>
          ))}
        </Grid>
      </FormControl>
    </ThemeProvider>
  );
};

export default Checkboxes;
