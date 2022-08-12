import { Grid, Stack } from "@mui/material";
import userImage from "assets/images/userImage.png";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useState } from "react";
import CommentEdit from "./CommentEdit";

const formatDate = (date) => {
  // let converted = new Date();
  let converted = new Date(
    date[0],
    date[1] - 1,
    date[2],
    date[3],
    date[4],
    date[5]
  );
  let diff = new Date() - converted; // 차이(ms)

  // 차이가 1초 미만이라면
  if (diff < 1000) {
    return "방금";
  }

  let sec = Math.floor(diff / 1000); // 차이를 초로 변환

  if (sec < 60) {
    return sec + "초 전";
  }

  let min = Math.floor(diff / 60000); // 차이를 분으로 변환
  if (min < 60) {
    return min + "분 전";
  }

  let hour = Math.floor(min / 60); // 분을 시간으로 변환
  if (hour < 24) {
    return hour + "시간 전";
  }
  console.log("시간 : " + hour);

  // 날짜의 포맷을 변경
  // 일, 월, 시, 분이 숫자 하나로 구성되어있는 경우, 앞에 0을 추가해줌
  let d = converted;
  d = [
    "" + d.getFullYear(),
    "0" + (d.getMonth() + 1),
    "0" + d.getDate(),
    "0" + d.getHours(),
    "0" + d.getMinutes(),
  ].map((component) => component.slice(-2)); // 모든 컴포넌트의 마지막 숫자 2개를 가져옴

  // 컴포넌트를 조합
  return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
};

const formatDate = (date) => {
  // let converted = new Date();
  let converted = new Date(date[0], date[1] - 1, date[2], date[3], date[4], date[5]);
  let diff = new Date() - converted; // 차이(ms)

  // 차이가 1초 미만이라면
  if (diff < 1000) {
    return "방금";
  }

  let sec = Math.floor(diff / 1000); // 차이를 초로 변환

  if (sec < 60) {
    return sec + "초 전";
  }

  let min = Math.floor(diff / 60000); // 차이를 분으로 변환
  if (min < 60) {
    return min + "분 전";
  }

  let hour = Math.floor(min / 60); // 분을 시간으로 변환
  if (hour < 24) {
    return hour + "시간 전";
  }
  console.log("시간 : " + hour);

  // 날짜의 포맷을 변경
  // 일, 월, 시, 분이 숫자 하나로 구성되어있는 경우, 앞에 0을 추가해줌
  let d = converted;
  d = [
    "" + d.getFullYear(),
    "0" + (d.getMonth() + 1),
    "0" + d.getDate(),
    "0" + d.getHours(),
    "0" + d.getMinutes(),
  ].map((component) => component.slice(-2)); // 모든 컴포넌트의 마지막 숫자 2개를 가져옴

  // 컴포넌트를 조합
  return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
};

function Comment({ comment, userId, handleCommentEdit, handleCommentDelete }) {
  const { id, user, regDttm, reply } = comment;
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="comment">
      <Stack className="comment__inner">
        <Grid className="comment__info" container justifyContent="center">
          <Grid item xs={0.8}>
            <img
              className="comment__info__image"
              src={userImage}
              alt="user_image"
            />
          </Grid>
          <Grid item xs={10}>
            <Grid
              container
              className="comment__info--right"
              direction="column"
              justifyContent="center"
            >
              <Grid container justifyContent="space-between">
                <Stack direction="row">
                  <Grid className="comment__nickname" item textAlign="center">
                    {user.nickname}
                  </Grid>
                  <Grid className="comment__regDate" item textAlign="center">
                    {formatDate(regDttm)}
                  </Grid>
                </Stack>
                <Grid item>
                  {userId === user.id && (
                    <>
                      <ModeEditOutlinedIcon
                        className="comment__edit comment__button"
                        fontSize="small"
                        onClick={() => setIsEdit(true)}
                      />
                      <DeleteOutlinedIcon
                        className="comment__delete comment__button"
                        color="warning"
                        fontSize="small"
                        onClick={() => handleCommentDelete(id)}
                      />
                    </>
                  )}
                </Grid>
              </Grid>
              <Grid className="comment__content">{reply}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
      {isEdit && (
        <CommentEdit
          id={id}
          comment={reply}
          open={isEdit}
          setOpen={setIsEdit}
          handleCommentEdit={handleCommentEdit}
        />
      )}
    </div>
  );
}

export default Comment;
