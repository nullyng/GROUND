import { Divider, Grid, Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";

import { useState } from "react";
import { useSearchState, useSearchDispatch } from "../SearchContext";
import { FilterProvider } from "../Filter/FilterContext";

import FilterModal from "../Filter/FilterModal";
import { searchBoard } from "api/search";

const getSearchData = (filter) => {
  let searchData = [];

  if (filter.radio === "all") {
    for (let value of filter.values) {
      searchData.push(value.id);
    }
  } else {
    for (let value of filter.values) {
      if (value.checked) searchData.push(value.id);
    }
  }

  return searchData;
};

export default function SearchBar() {
  const { standard, type, date, category, gender, age, location } =
    useSearchState();
  const dispatch = useSearchDispatch();
  const [open, setOpen] = useState(false);
  const [word, setWord] = useState("");

  const handleOpen = () => setOpen(true);

  // 검색 버튼 눌렀을 때
  const handleSearchClick = () => {
    let searchData = {};
    searchData.word = word;
    // 게시글 검색일 때
    if (standard === 0) {
      searchData = {
        ...searchData,
        type,
        category: getSearchData(category),
        gender: getSearchData(gender),
        age: getSearchData(age),
        location: getSearchData(location),
      };
      if (date.radio === "all") searchData.startDate = "1900-01-01";
      else searchData.startDate = date.startDate.format("YYYY-MM-DD");
      searchData.endDate = date.endDate.format("YYYY-MM-DD");
      // 검색 요청
      searchBoard(searchData, 0, (res) => {
        dispatch({ type: "board", result: res.data });
      });
    }
    // 유저 검색일 때
    else {
    }
  };

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
          value={word}
          onChange={(e) => setWord(e.currentTarget.value)}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search-submit"
          onClick={() => {
            if (word !== "") handleSearchClick();
          }}
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
