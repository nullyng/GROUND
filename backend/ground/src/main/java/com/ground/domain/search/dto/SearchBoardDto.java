package com.ground.domain.search.dto;

import com.ground.domain.board.dto.BoardUserDto;
import com.ground.domain.search.entity.SearchBoard;
import com.ground.domain.search.entity.SearchUser;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.convert.Jsr310Converters;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SearchBoardDto {
    private String word;              // 검색어
    private List<String> gender;      // MALE, FEMALE (필터링 없으면 다)
    private List<String> age;         // twenty, thirty, forty, fifty, sixty, seventy, eighty 리스트 (필터링 없으면 다)
    private List<Integer> category;   // 카테고리 id 들 리스트 (필터링 없으면 다)
    private List<Integer> location;   // 지역 id들 리스트 (필터링 없으면 다)
    private LocalDate startDate;      // 필터링 시작일
    private LocalDate endDate;        // 필터링 마지막일 ( 없으면 오늘 날짜로 )

    public SearchBoard toEntity() {
        return SearchBoard.builder()
                .word(word)
                .build();
    }

    @Builder
    public SearchBoardDto(SearchBoard entity){
        this.word = entity.getWord();
    }

}
