import "styles/Search/Filter.scss";
import { Box, Modal } from "@mui/material";

import { useSearchDispatch, useSearchState } from "../SearchContext";
import FilterContent from "./FilterContent";
import { useFilterDispatch, useFilterState } from "./FilterContext";
import { useEffect } from "react";

function FilterModal({ open, handleClose }) {
  const { filters: searchFilters } = useSearchState();
  const { filters: currentFilters } = useFilterState();
  const searchDispatch = useSearchDispatch();
  const filterDispatch = useFilterDispatch();

  // 설정 버튼을 누르면 SearchContext 변경
  const submit = (e) => {
    e.preventDefault();
    searchDispatch({ type: "filters", filters: currentFilters });
    handleClose();
  };

  // 현재 SearchContext에 설정되어 있는 필터값 불러와서 초기화
  useEffect(() => {
    filterDispatch({ type: "init", filters: searchFilters });
  }, []);

  return (
    <>
      <Modal
        className="filter-modal-container"
        open={open}
        onClose={handleClose}
        aria-labelledby="search-modal-title"
        aria-describedby="search-modal-description"
      >
        <Box className={open ? "filter-modal" : "filter-modal close"}>
          <FilterContent />
          <button className="filter-modal__submit" onClick={submit}>
            설정
          </button>
        </Box>
      </Modal>
    </>
  );
}

export default FilterModal;
