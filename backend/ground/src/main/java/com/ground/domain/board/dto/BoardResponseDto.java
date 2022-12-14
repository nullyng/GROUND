package com.ground.domain.board.dto;

import com.ground.domain.board.entity.*;
import com.ground.domain.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class BoardResponseDto {
    private Long id;
    private BoardUserDto user;
    private String content;
    private BoardUserDto modUser;
    private LocalDateTime regDttm;
    private LocalDateTime modDttm;
    private boolean privateYN;
    private String category;
    private Long categoryId;
    private String location;
    private Long locationId;
    private List<CommentResponseDto> comments = new ArrayList<>();
    private int commentCnt;
    private List<BoardLikeDto> boardLikes = new ArrayList<>();
    private int likeCnt;
    private List<BoardSaveDto> boardSaves = new ArrayList<>();
    private int saveCnt;
    private List<BoardImageDto> images = new ArrayList<>();

    private boolean likeCheck = false;
    private boolean saveCheck = false;

    public BoardResponseDto(Board entity, User user) {
        this.id = entity.getId();
        this.user = new BoardUserDto(entity.getUser());
        if (this.modUser != null) {
        this.modUser = new BoardUserDto(entity.getModUser());}
        this.content = entity.getContent();
        this.regDttm = entity.getRegDttm();
        this.modDttm = entity.getModDttm();
        this.privateYN = entity.isPrivateYN();
        this.category = entity.getCategory().getEvent();
        this.location = entity.getLocation().getLocation();
        this.categoryId = entity.getCategory().getId();
        this.locationId = entity.getLocation().getId();

        for (Comment comment : entity.getComments()) {
            this.comments.add(new CommentResponseDto(comment));
        }
        this.commentCnt = entity.getCommentCnt();

        for (BoardLike boardLike : entity.getBoardLikes()) {
            this.boardLikes.add(new BoardLikeDto(boardLike));
            if (boardLike.getUser().equals(user)) {
                this.likeCheck = true;
            }
        }
        this.likeCnt = entity.getLikeCnt();

        for (BoardSave boardSave : entity.getBoardSaves()) {
            this.boardSaves.add(new BoardSaveDto(boardSave));
            if (boardSave.getUser().equals(user)) {
                this.saveCheck = true;
            }
        }
        this.saveCnt = entity.getSaveCnt();

        for (BoardImage boardImage : entity.getImages()) {
            this.images.add(new BoardImageDto(boardImage));
        }
    }
}
