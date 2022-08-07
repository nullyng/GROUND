package com.ground.domain.search.entity;
import java.sql.Date;
import java.time.LocalDateTime;
import javax.persistence.*;
import com.ground.domain.user.entity.User;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "t_search_board")
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
public class SearchBoard {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "user_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @Lob
    @Column(name = "word")
    private String word;

    @Column(name = "reg_dttm")
    private LocalDateTime regDttm;

    @Builder
    public SearchBoard(String word){
        this.word = word;
        this.regDttm = LocalDateTime.now();
    }
}