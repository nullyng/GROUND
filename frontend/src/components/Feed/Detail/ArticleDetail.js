import "styles/Feed/ArticleDetail.scss";

import { Container, Grid, Stack } from "@mui/material";
import { getBoardDetail } from "api/board";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleDetailContent from "./ArticleDetailContent";
import ArticleDetailComment from "./ArticleDetailComment";
import ArticleDetailLike from "./ArticleDetailLike";
import { deleteComment } from "api/comment";

function ArticleDetail() {
  const { boardId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [boardInfo, setBoardInfo] = useState({});

  // 게시글 상세 정보 불러오기
  useEffect(() => {
    console.log(boardId);
    getBoardDetail(boardId, (res) => {
      console.log(res.data);
      setBoardInfo(res.data);
    });
  }, [boardId]);

  // boardInfo가 업데이트 되면 게시글 내용 보여줌
  useEffect(() => {
    if (boardInfo.id) {
      setIsLoading(false);
    }
  }, [boardInfo]);

  return (
    <Container className="content article-detail">
      <Grid className="article-detail__inner" container direction="column">
        {!isLoading && (
          <>
            <ArticleDetailContent articleData={boardInfo} />
            <Stack spacing={1} className="article-detail__activity">
              <ArticleDetailLike
                nickname={boardInfo.user.nickname}
                isLiked={boardInfo.isLiked}
                likeCnt={boardInfo.likeCnt}
              />
              <ArticleDetailComment commentList={boardInfo.comments} />
            </Stack>
          </>
        )}
      </Grid>
    </Container>
  );
}

export default ArticleDetail;
