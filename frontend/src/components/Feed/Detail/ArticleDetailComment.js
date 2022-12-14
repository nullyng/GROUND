import { Grid, IconButton } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Comment from "./Comment";
import { useEffect, useState } from "react";
import { getUserState } from "api/user";
import { registerComment, updateComment } from "api/comment";
import { useParams } from "react-router-dom";
import CommentBox from "./CommentBox";

function ArticleDetailComment({ commentList }) {
  const { boardId } = useParams();
  const [userId, setUserId] = useState(0);
  const [comments, setComments] = useState(commentList);
  const [userImage, setUserImage] = useState("");

  // 댓글 등록 핸들러
  const handleCommentRegister = (comment) => {
    registerComment(boardId, comment, (res) => {
      const newComment = res.data;
      setComments([...comments, newComment]);
    });
  };

  // 댓글 수정 핸들러
  const handleCommentEdit = (commentId, comment) => {
    updateComment(commentId, comment, (res) => {
      const updatedComments = comments.map((comment) => {
        if (comment.id === commentId) {
          return res.data;
        }
        return comment;
      });
      setComments(updatedComments);
    });
  };

  useEffect(() => {
    getUserState((res) => {
      setUserImage(res.data.userImage);
      setUserId(res.data.id);
    });
  }, []);

  return (
    <Grid className="activity_comment" container>
      <IconButton>
        <ChatBubbleOutlineIcon />
      </IconButton>
      <Grid item>
        댓글 <span className="bold">{comments.length}개</span>
      </Grid>
      <CommentBox
        handleCommentRegister={handleCommentRegister}
        userImage={userImage}
      />
      {comments.map((comment, index) => (
        <Comment
          key={index}
          comment={comment}
          comments={comments}
          setComments={setComments}
          userId={userId}
          handleCommentEdit={handleCommentEdit}
        />
      ))}
    </Grid>
  );
}

export default ArticleDetailComment;
