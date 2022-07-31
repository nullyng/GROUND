package com.ground.domain.board.repository;
import com.ground.domain.board.entity.Board;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;

@Repository
public class BoardRepository {

    private final EntityManager em;

    public BoardRepository(EntityManager em) {
        this.em = em;
    }

    public void save(Board board) {
        em.persist(board);
    }
    public Board findOne(Long id) {
        return em.find(Board.class, id);
    }
}
