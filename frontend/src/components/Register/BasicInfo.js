import Grid from "@mui/material/Grid";
import { idDupCheck } from "api/register";
import GrButton from "components/common/GrButton";
import GrTextField from "components/common/GrTextField";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import OkMessage from "./OkMessage";

const idReg = /^[a-zA-Z0-9]{5,20}$/;

function BasicInfo({ changeBasicInfo, goToOtherInfo }) {
  // 아이디 중복 확인 됐는지
  const [isIdDupCheckd, setIsIdDupCheckd] = useState(false);
  const [isEmailDup, setIsEmailDup] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    setError,
  } = useForm({
    defaultValues: {
      id: "",
      pass: "",
      passCheck: "",
      email: "",
      cert: "",
    },
  });

  // 다음 버튼 핸들러
  const onSubmit = (data) => {
    const newBasicInfo = {
      id: data.id,
      pass: data.pass,
      email: data.email,
    };
    changeBasicInfo(newBasicInfo);
    // 컴포넌트전환
    goToOtherInfo();
  };

  // 아이디 중복 확인 버튼 핸들러
  const handleIdDupCheck = () => {
    const id = getValues("id");
    if (id.trim() === "") {
      [
        { type: "emptyId", name: "id", message: "아이디를 입력해주세요." },
      ].forEach(({ name, type, message }) => {
        setError(name, { type, message });
      });
    } else if (idReg.test(id) === false) {
      [
        {
          type: "invalidId",
          name: "id",
          message: "아이디는 영문, 숫자 5-20자입니다.",
        },
      ].forEach(({ name, type, message }) => {
        setError(name, { type, message });
      });
    } else {
      idDupCheck(
        id,
        (res) => {
          if (res.data === false) {
            setIsIdDupCheckd(false);
            [
              {
                type: "dupId",
                name: "id",
                message: "이미 사용 중인 아이디입니다.",
              },
            ].forEach(({ name, type, message }) => {
              setError(name, { type, message });
            });
          } else {
            setIsIdDupCheckd(true);
          }
        },
        (err) => {
          setIsIdDupCheckd(true);
        }
      );
    }
  };
  // 이메일 중복 확인 버튼 핸들러
  const onEmailDupCheck = () => {
    const email = getValues("email");
    setIsEmailDup(!isEmailDup);
    console.log("이메일 중복 확인: " + email);
  };
  // 이메일 전송 버튼 핸들러
  const onCertCodeSend = () => {
    const email = getValues("email");
    if (!isSubmitted) {
      setIsSubmitted(true);
    }
    console.log("인증번호 전송: " + email);
  };
  // 인증 버튼 핸들러
  const onCertCodeSubmit = () => {
    const certCode = getValues("cert");
    console.log("인증: " + certCode);
  };

  return (
    <form className="register-form__top">
      <Grid
        className="register-form__inner-wrapper"
        container
        direction="column"
      >
        <Grid container justifyContent="space-between">
          <Controller
            name="id"
            control={control}
            render={({ field }) => (
              <GrTextField
                className="register-form__field register-form__field--fullWidth"
                size="small"
                label="아이디"
                {...field}
                {...register("id", {
                  required: "아이디를 입력해주세요",
                  pattern: {
                    value: idReg,
                    message: "아이디는 영문, 숫자 5-20자입니다",
                  },
                })}
              />
            )}
          />
          <GrButton
            className="register-form__innerBtn register-form__innerBtn--bottom"
            variant="contained"
            onClick={handleIdDupCheck}
          >
            중복확인
          </GrButton>
        </Grid>
        <Grid item>
          {errors.id && <ErrorMessage>{errors.id.message}</ErrorMessage>}
          {isIdDupCheckd && (
            <OkMessage>
              <span>사용 가능한 아이디입니다. </span>
            </OkMessage>
          )}
        </Grid>
      </Grid>
      <Grid
        className="register-form__inner-wrapper"
        container
        direction="column"
      >
        <Grid container>
          <Controller
            name="pass"
            control={control}
            render={({ field }) => (
              <GrTextField
                className="register-form__password"
                size="small"
                label="비밀번호"
                type="password"
                {...field}
                {...register("pass", {
                  required: "비밀번호를 입력해주세요",
                  pattern: {
                    value: /^[a-zA-Z0-9d`~!@#$%^&*()-_=+]{8,20}$/,
                    message: "비밀번호는 영문, 특수문자 8-20자입니다",
                  },
                })}
              />
            )}
          />
          {errors.pass && <ErrorMessage>{errors.pass.message}</ErrorMessage>}
          <Controller
            name="passCheck"
            control={control}
            render={({ field }) => (
              <GrTextField
                className="register-form__password"
                size="small"
                label="비밀번호 확인"
                type="password"
                {...field}
                {...register("passCheck", {
                  required: "비밀번호를 한번 더 입력해주세요.",
                })}
              />
            )}
          />
          {errors.passCheck && (
            <ErrorMessage>{errors.passCheck.message}</ErrorMessage>
          )}
        </Grid>
      </Grid>
      <Grid
        className="register-form__inner-wrapper"
        container
        direction="column"
      >
        <Grid container justifyContent="space-between">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <GrTextField
                className="register-form__field register-form__field--fullWidth"
                size="small"
                label="이메일"
                {...field}
                {...register("email", {
                  required: "이메일을 입력해주세요",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*@[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*.[a-zA-Z]{2,3}$/,
                    message: "올바르지 않은 이메일 형식입니다.",
                  },
                })}
              />
            )}
          />
          {isEmailDup && (
            <GrButton
              className="register-form__innerBtn register-form__innerBtn--bottom"
              variant="contained"
              onClick={onEmailDupCheck}
            >
              중복확인
            </GrButton>
          )}
          {!isEmailDup && !isSubmitted && (
            <GrButton
              className="register-form__innerBtn register-form__innerBtn--bottom"
              variant="contained"
              onClick={onCertCodeSend}
            >
              전송
            </GrButton>
          )}
          {isSubmitted && (
            <GrButton
              className="register-form__innerBtn register-form__innerBtn--bottom"
              variant="contained"
              onClick={onCertCodeSend}
            >
              재전송
            </GrButton>
          )}
        </Grid>
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        {isEmailDup && (
          <ErrorMessage>
            <span>이미 존재하는 이메일입니다.</span>
          </ErrorMessage>
        )}
      </Grid>
      {isSubmitted && (
        <Grid
          className="register-form__inner-wrapper"
          container
          direction="column"
        >
          <Grid container justifyContent="space-between">
            <Controller
              name="cert"
              control={control}
              render={({ field }) => (
                <GrTextField
                  className="register-form__field"
                  size="small"
                  label="인증번호"
                  {...field}
                  {...register("cert", {
                    required: "인증번호를 입력해주세요",
                  })}
                />
              )}
            />
            <GrButton
              className="register-form__innerBtn"
              variant="contained"
              onClick={onCertCodeSubmit}
            >
              인증
            </GrButton>
          </Grid>
          {errors.cert && <ErrorMessage>{errors.cert.message}</ErrorMessage>}
        </Grid>
      )}
      <GrButton
        className="register-form__button"
        variant="contained"
        color="secondary"
        onClick={handleSubmit(onSubmit)}
      >
        다음
      </GrButton>
    </form>
  );
}

export default BasicInfo;
