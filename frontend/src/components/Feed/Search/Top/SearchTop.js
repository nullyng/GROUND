import { Grid } from "@mui/material";
import SearchStandard from "../Filter/SearchStandard";
import SearchBar from "./SearchBar";

function SearchTop() {
  return (
    <Grid className="search-inner__top" container direction="column">
      <SearchStandard />
      <SearchBar />
    </Grid>
  );
}

export default SearchTop;
