import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import GrButton from "components/common/GrButton";
import text_logo from "assets/images/text_logo.png";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useAuth } from "auth/AuthProvider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "1px solid gray",
  boxShadow: 24,
  p: 4,
};

export default function RegisterModal({ open, setOpen }) {
  const navigate = useNavigate();
  const { systemLogin } = useAuth();

  const handleClose = () => {
    setOpen(false);
    const ftoken = localStorage.getItem("ftoken");
    if (ftoken) {
      systemLogin(ftoken);
      localStorage.removeItem("ftoken");
      navigate("/welcome");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open}>
          <Box sx={style}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              textAlign="center"
              flexWrap="nowrap"
            >
              <Container className="register-modal__logo-wrapper">
                <img
                  className="register-modal__logo"
                  src={text_logo}
                  alt="text_logo"
                />
              </Container>
              <Grid className="register-modal__title" item>
                회원가입이 완료되었습니다!
              </Grid>
              <Grid item>
                <GrButton
                  className="register-modal__button"
                  variant="contained"
                  onClick={handleClose}
                >
                  확인
                </GrButton>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
