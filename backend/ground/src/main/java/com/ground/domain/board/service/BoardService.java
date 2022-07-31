package com.ground.domain.board.service;

import com.ground.domain.board.dto.BoardAddRequestDto;
import com.ground.domain.board.entity.Board;
import com.ground.domain.board.repository.BoardRepository;
import com.ground.domain.global.entity.Category;
import com.ground.domain.global.entity.CategoryRepository;
import com.ground.domain.global.entity.Location;
import com.ground.domain.global.entity.LocationRepository;
import com.ground.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;




@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository BoardRepository;

    // 게시글 생성
    @Transactional
    public Long addBoard(final BoardAddRequestDto params) {
        Category category = CategoryRepository.findById(params.getCatgegoryId());
        Location location = LocationRepository.findById(params.getCatgegoryId());
        // 유저 추가
        return
    }
}
