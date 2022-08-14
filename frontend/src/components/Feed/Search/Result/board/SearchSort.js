import { Grid } from "@mui/material";
import { types } from "assets/data/initData";
import { useSearchState, useSearchDispatch } from "../../SearchContext";

function SearchSort({ sortType, setSortType, onSubmit }) {
  const { type } = useSearchState();
  const dispatch = useSearchDispatch();

  return (
    <Grid className="search-inner__result__sort-wrapper" container>
      {types.map((item, index) => (
        <Grid
          className="search-inner__result__sort"
          key={index}
          item
          // sx={
          //   type === item.id ? { color: "black", fontWeight: "bold" } : {}
          // }
          // onClick={() => {
          //   setSortType(item.id);
          //   onSubmit(item.id);
          // }}
        >
          {item.value}
        </Grid>
      ))}
    </Grid>
  );
}

export default SearchSort;
