import { Divider, Grid, Paper, InputBase, IconButton } from "@mui/material";
// import Paper from "@mui/material/Paper";
// import InputBase from "@mui/material/InputBase";
// import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export default function SearchBar() {
  return (
    <Grid className="search-bar" container>
      <Paper className="search-bar__wrapper" component="div">
        <IconButton sx={{ p: "10px" }}>
          <FilterAltIcon />
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
    </Grid>
  );
}
