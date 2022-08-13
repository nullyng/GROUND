import { Box, Grid, Modal } from "@mui/material";

function FilterModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="filter-modal">
        <form>
          <Grid container direction="column">
            모달이다잉
          </Grid>
        </form>
      </Box>
    </Modal>
  );
}

export default FilterModal;
