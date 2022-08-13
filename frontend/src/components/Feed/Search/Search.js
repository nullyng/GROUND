import "styles/Search/Search.scss";

import { Grid } from "@mui/material";

import SearchTitle from "./Top/SearchTitle";
import SearchStandard from "./Filter/SearchStandard";
import { SearchProvider } from "./Hook/SearchContext";
import SearchBar from "./Top/SearchBar";

function Search() {
  return (
    <Grid className="content">
      <SearchProvider>
        <SearchTitle />
        <Grid className="search-inner" item>
          <Grid className="search-inner__top" container direction="column">
            <SearchStandard />
            <SearchBar />
          </Grid>
        </Grid>
      </SearchProvider>
    </Grid>
  );
}

export default Search;
