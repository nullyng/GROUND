package com.ground.domain.board.dto;


import com.ground.domain.board.entity.Board;
import com.ground.domain.board.entity.BoardImage;
import lombok.Getter;

import java.util.List;

@Getter
public class BoardAddRequestDto {


    private String content; // 제목
    private int boardId; // 게시글 id
    private int catgegoryId; // 카테고리 id
    private int locationId; // 지역 id
    private boolean privateYN; // 공개 여부
    private List<BoardImage> images;


}


