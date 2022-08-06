import logo from "assets/images/underline_logo.png";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import BasicInfo from "components/Register/BasicInfo";
import OtherInfo from "components/Register/OtherInfo";

import "styles/Register/RegisterPage.scss";

import { useState, useEffect } from "react";
import { signUp } from "api/register";

function RegisterPage() {
  const [next, setNext] = useState(false);
  const [basicInfo, setBasicInfo] = useState({});
  const [otherInfo, setOtherInfo] = useState({});

  // 다음 버튼 핸들러
  const goToOtherInfo = () => {
    if (!next) {
      setNext(!next);
    }
  };
  // state 변경 함수
  const changeBasicInfo = (newBasicInfo) => {
    console.log(newBasicInfo);
    setBasicInfo(newBasicInfo);
  };
  const changeOtherInfo = (newOtherInfo) => {
    console.log(newOtherInfo);
    setOtherInfo(newOtherInfo);
  };
  // 회원가입 요청
  const sendRequest = () => {
    let info = {};
    Object.assign(info, basicInfo, otherInfo);
    console.log(info);
    signUp(info);
  };

  useEffect(() => {
    // 새로고침, 창닫기 alert
    const preventClose = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };

    (() => {
      window.addEventListener("beforeunload", preventClose);
    })();

    return () => {
      window.removeEventListener("beforeunload", preventClose);
    };
  }, []);

  return (
    <Container maxWidth="xs">
      <Grid
        className="register-form"
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Grid
            className="register-form__logo-box"
            container
            direction="column"
          >
            <div className="register-form__logo-wrapper">
              <img
                className="register-form__logo"
                src={logo}
                alt="underline_logo"
              />
            </div>
            <div className="register-form__register">회원가입</div>
          </Grid>
        </Grid>
        {!next && (
          <BasicInfo
            changeBasicInfo={changeBasicInfo}
            goToOtherInfo={goToOtherInfo}
          />
        )}
        {next && (
          <OtherInfo
            changeOtherInfo={changeOtherInfo}
            sendRequest={sendRequest}
          />
        )}
      </Grid>
    </Container>
  );
}

export default RegisterPage;
