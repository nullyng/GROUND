import { Grid } from "@mui/material";

import NoSearchResult from "./NoSearchResult";

function SearchResult() {
  return (
    <Grid className="search-inner__result" container direction="column">
      <NoSearchResult />
    </Grid>
  );
}

export default SearchResult;
