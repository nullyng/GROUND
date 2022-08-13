import { Box, Divider, Grid, Modal } from "@mui/material";
import TitleBar from "components/common/TitleBar";

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
            <Grid className="content__title-desktop" textAlign="center" item>
              <h3>필터</h3>
            </Grid>
            <Grid item>운동종목</Grid>
            <Grid item>성별</Grid>
            <Grid item>연령대</Grid>
            <Grid item>지역</Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
}

export default FilterModal;
