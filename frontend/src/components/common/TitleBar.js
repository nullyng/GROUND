import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DoneIcon from "@mui/icons-material/Done";
import { useDispatch, useSelector } from "react-redux";
import { setInterest, toggleInterestList } from "modules/interest";
import FilterModal from "components/Feed/Latest/FilterModal";
import { useState } from "react";
import { updateInterest } from "api/user";

function TitleBar(props) {
  const [open, setOpen] = useState(false);

  const interestList = useSelector((state) => state.interest.interestList);
  const dispatch = useDispatch();
  const onToggleInterestList = (id) => dispatch(toggleInterestList(id));

  const handleClickTitle = () => {
    document.querySelector(".content").scrollTo(0, 0);
  };

  const handleClickBack = () => {
    window.history.back();
  };

  const changeInterestList = () => {
    const interestArray = [];
    // interestList에서 isInterested가 true인 것들의 id만 뽑아서 새로운 배열 생성
    interestList.map((item) => {
      if (item.isInterested) {
        console.log(interestList);
        interestArray.push(item.id);
      }
    });
    console.log(interestArray);

    updateInterest(interestArray, (res) => {
      window.location.reload();
      console.log(res);
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }} display="flex" justifyContent="center">
      <AppBar id="titlebar" position="static">
        <Toolbar id="titlebar__toolbar">
          {props.isBack ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleClickBack}
            >
              <ArrowBackIcon />
            </IconButton>
          ) : (
            (props.title === "최신 글 피드" || props.title === "알림") && (
              <div style={{ width: "50.25px" }}></div>
            )
          )}
          <Typography
            className="titlebar__text"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <span onClick={() => handleClickTitle()}>{props.title}</span>
          </Typography>
          {props.title === "최신 글 피드" ? (
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="filter"
              onClick={() => setOpen(true)}
            >
              <AutoAwesomeOutlinedIcon />
            </IconButton>
          ) : props.title === "알림" ? (
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="filter"
            >
              <DeleteOutlineIcon />
            </IconButton>
          ) : (
            <div style={{ width: "50.25px" }}></div>
          )}
          {console.log(open)}
          <FilterModal
            open={open}
            setOpen={setOpen}
            interestList={interestList}
            onToggleInterestList={onToggleInterestList}
            changeInterestList={changeInterestList}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TitleBar;
