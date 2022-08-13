import { Box, Grid, Modal } from "@mui/material";

function FilterModal({ open, handleClose }) {
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
          <div className="filter-modal__inner">hi</div>
        </form>
        <button className="filter-modal__submit">설정</button>
      </Box>
    </Modal>
  );
}

export default FilterModal;
