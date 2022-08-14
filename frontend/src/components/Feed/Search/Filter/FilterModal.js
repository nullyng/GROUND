import "styles/Search/Filter.scss";
import { Box, Modal } from "@mui/material";

import { useSearchDispatch } from "../SearchContext";
import FilterContent from "./FilterContent";
import { useFilterDispatch, useFilterState } from "./FilterContext";

function FilterModal({ open, setOpen }) {
  const { category, gender, age, location } = useFilterState();
  const filterDispatch = useFilterDispatch();
  const searchDispatch = useSearchDispatch();

  // 모달창 밖에 클릭하면 실행
  const handleClose = () => {
    filterDispatch({ type: "select", select: false });
    setOpen(false);
  };

  // 설정 버튼을 누르면 SearchContext 변경
  const submit = (e) => {
    e.preventDefault();
    handleClose();
  };

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
