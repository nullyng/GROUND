import "styles/Search/Filter.scss";
import { Box, Modal } from "@mui/material";
import { FilterProvider } from "./FilterContext";
import FilterContent from "./FilterContent";

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
            <form>
              <FilterContent />
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
