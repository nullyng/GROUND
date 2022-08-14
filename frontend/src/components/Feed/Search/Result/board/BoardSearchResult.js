import { searchBoard } from "api/search";
import Article from "components/Feed/Article/Article";
import { useRef, useState } from "react";
import { useSearchState, useSearchDispatch } from "../../SearchContext";
import NoSearchResult from "../NoSearchResult";
import SearchSort from "./SearchSort";

const getSearchData = (filter) => {
  let searchData = [];

  if (filter.radio === "all") {
    searchData = filter.values.map((value) => value.id);
  } else {
    for (let value of filter.values) {
      if (value.checked) searchData.push(value.id);
    }
  }

  return searchData;
};

function BoardSearchResult() {
  const { word, date, category, gender, age, location, boardResult } =
    useSearchState();
  const dispatch = useSearchDispatch();

  // 게시글 검색 결과 페이징
  const [pageNumber, setPageNumber] = useState(0);
  // 로딩 성공 및 실패 정보를 담을 state
  const [isLoading, setIsLoading] = useState(false);
  // target
  const target = useRef();

  // 정렬 기준 선택했을 때
  const handleClickSort = (type) => {
    let searchData = {
      word,
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
      console.log(res.data);
      dispatch({ type: "board", result: res.data });
    });
  };

  return (
    <>
      {boardResult.length === 0 && <NoSearchResult />}
      {boardResult.length !== 0 && (
        <>
          <SearchSort handleClickSort={handleClickSort} />
          {boardResult.map((board) => (
            <Article key={board.id} articleData={board} />
          ))}
          <div ref={target} style={{ height: "100px" }} />
        </>
      )}
    </>
  );
}

export default BoardSearchResult;
