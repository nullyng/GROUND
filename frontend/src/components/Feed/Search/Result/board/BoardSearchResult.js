import { useSearchState, useSearchDispatch } from "../../SearchContext";
import NoSearchResult from "../NoSearchResult";
import SearchSort from "./SearchSort";

function BoardSearchResult() {
  const { boardResult } = useSearchState();

  return (
    <>
      {boardResult.length === 0 && <NoSearchResult />}
      {boardResult.length !== 0 && <SearchSort />}
    </>
  );
}

export default BoardSearchResult;
