import { FormControlLabel, Checkbox, Grid, FormControl } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import { useState } from "react";

import theme from "components/common/theme.js";

const Checkboxes = ({ items, xs }) => {
  const [checkedItems, setCheckedItems] = useState(items);

  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <Grid className="filter-select__checkboxes" container>
          {items.map((item, index) => (
            <Grid item xs={xs} key={item.id}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => {
                      const valueCopy = [...checkedItems];
                      // update checkbox value
                      valueCopy[index].checked = e.target.checked;
                      // update local state
                      setCheckedItems(valueCopy);
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
