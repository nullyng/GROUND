import "styles/Login/LoginPage.scss";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import logo from "assets/images/text_logo.png";
import { useState } from "react";

function LoginPage() {
  const [userId, setUserId] = useState("");
  const [userPW, setUserPW] = useState("");

  function submitLogin() {
    console.log(userId);
    console.log(userPW);
  }

  return (
    <Container className="login-form" maxWidth="xs" fixed>
      <Grid
        className="login-form__wrapper"
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid className="login-form__logo" item>
          <img className="logo" src={logo} alt="text_logo" width="300px" />
        </Grid>
        <TextField
          className="login-form__field"
          label="아이디"
          variant="outlined"
          size="small"
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
        <TextField
          className="login-form__field"
          label="비밀번호"
          variant="outlined"
          size="small"
          value={userPW}
          onChange={(e) => {
            setUserPW(e.target.value);
          }}
        />
        <Button
          className="login-form__button"
          variant="contained"
          onClick={submitLogin}
        >
          로그인
        </Button>
        <Button className="login-form__button" variant="contained">
          구글 로그인
        </Button>
        <Button className="login-form__button" variant="contained">
          카카오 로그인
        </Button>
        <Grid
          className="login-form__bottom"
          container
          justifyContent="space-between"
        >
          <Grid item>
            <a href="/">회원가입</a>
          </Grid>
          <Grid item>
            <a href="/">아이디 찾기 / 비밀번호 찾기</a>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoginPage;
