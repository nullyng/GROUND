import { Box, Modal } from "@mui/material";

import { FilterProvider } from "./FilterContext";

import FilterTitle from "./components/FilterTitle";
import FilterContent from "./components/FilterContent";

const titles = [
  { id: 0, title: "필터" },
  { id: 1, title: "기간" },
  { id: 2, title: "운동종목" },
  { id: 3, title: "성별" },
  { id: 4, title: "연령대" },
  { id: 5, title: "지역" },
];

const items = titles.filter((title) => title.id > 1);

function FilterModal({ open, handleClose }) {
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
          <FilterProvider>
            <FilterTitle titles={titles} />
            <form>
              <FilterContent items={items} />
              <button className="filter-modal__submit" onClick={submit}>
                설정
              </button>
            </form>
          </FilterProvider>
        </Box>
      </Modal>
    </>
  );
}

export default FilterModal;
