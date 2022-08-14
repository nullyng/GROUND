import { Divider, Grid, Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";

import { useState } from "react";
import { useSearchState } from "../SearchContext";
import { FilterProvider } from "../Filter/FilterContext";

import FilterModal from "../Filter/FilterModal";

export default function SearchBar() {
  const state = useSearchState();
  const [open, setOpen] = useState(false);
  const [word, setWord] = useState("");

  const handleOpen = () => setOpen(true);

  const handleSearchClick = () => {
    const { date, category, gender, age, location } = state;
  };

  return (
    <Grid className="search-bar" container>
      <Paper className="search-bar__wrapper" component="div">
        <IconButton
          sx={{ p: "10px" }}
          onClick={handleOpen}
          disabled={state.standard === 0 ? false : true}
        >
          {state.standard === 0 ? <FilterAltIcon /> : <FilterAltOffIcon />}
        </IconButton>
        <Divider
          sx={{ height: 28, m: 0.5, borderColor: "#54BAB9" }}
          orientation="vertical"
        />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="검색어 입력"
          inputProps={{ "aria-label": "search-input" }}
          value={word}
          onChange={(e) => setWord(e.currentTarget.value)}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search-submit"
          onClick={handleSearchClick}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <FilterProvider>
        <FilterModal open={open} setOpen={setOpen} />
      </FilterProvider>
    </Grid>
  );
}
