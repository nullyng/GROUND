import { Divider, Grid, Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";

import { useState } from "react";
import { useSearchState } from "../SearchContext";

import FilterModal from "./FilterModal";

export default function SearchBar() {
  const { standard } = useSearchState();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid className="search-bar" container>
      <Paper className="search-bar__wrapper" component="div">
        <IconButton
          sx={{ p: "10px" }}
          onClick={handleOpen}
          disabled={standard === 0 ? false : true}
        >
          {standard === 0 ? <FilterAltIcon /> : <FilterAltOffIcon />}
        </IconButton>
        <Divider
          sx={{ height: 28, m: 0.5, borderColor: "#54BAB9" }}
          orientation="vertical"
        />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="검색어 입력"
          inputProps={{ "aria-label": "search-input" }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search-submit">
          <SearchIcon />
        </IconButton>
      </Paper>
      <FilterModal open={open} handleClose={handleClose} />
    </Grid>
  );
}
