import { Grid, IconButton } from "@mui/material";
import { useState } from "react";
import MediaSlider from "./MediaSlider";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function ArticleContent(props) {
  return (
    <Grid className="article-content">
      <Grid className="article-content__text">
        <span>{props.text}</span>
        <span>더보기</span>
      </Grid>
      <Grid className="article-content__media">
        <MediaSlider />
      </Grid>
      <Grid className="article-content__location">
        <LocationOnOutlinedIcon />
        <span>{props.location}</span>
      </Grid>
    </Grid>
  );
}

export default ArticleContent;