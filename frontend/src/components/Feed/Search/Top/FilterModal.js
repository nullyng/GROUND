import { Box, Grid, Modal } from "@mui/material";
import DateFilterItem from "../Filter/Date/DateFilterItem";
import FilterItem from "../Filter/FilterItem";

const items = [
  { id: 1, content: "운동종목" },
  { id: 2, content: "성별" },
  { id: 3, content: "연령대" },
  { id: 4, content: "지역" },
];

const filterItem = items.map((item) => (
  <FilterItem key={item.id} title={item.content} />
));

function FilterModal({ open, handleClose }) {
  const submit = () => {
    handleClose();
  };

  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="filter-modal">
        <Grid className="content__title-desktop" textAlign="center" item>
          <h3>필터</h3>
        </Grid>
        <form>
          <div className="filter-modal__inner">
            <DateFilterItem />
            {filterItem}
          </div>
          <button className="filter-modal__submit" onClick={submit}>
            설정
          </button>
        </form>
      </Box>
    </Modal>
  );
}

export default FilterModal;
