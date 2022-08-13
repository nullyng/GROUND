import "styles/Search/Search.scss";
import { Grid } from "@mui/material";

import { SearchProvider } from "./SearchContext";

import SearchTitle from "./Top/SearchTitle";
import SearchTop from "./Top/SearchTop";
import SearchResult from "./Result/SearchResult";

function Search() {
  return (
    <Grid className="content">
      <SearchProvider>
        <SearchTitle />
        <Grid className="search-inner" item>
          <SearchTop />
          <SearchResult />
        </Grid>
      </SearchProvider>
    </Grid>
  );
}

export default Search;
