package com.ground.domain.global.entity;

import com.ground.domain.board.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.Optional;

@Repository
public class CategoryRepository  {
    private final EntityManager em;

    public CategoryRepository(EntityManager em) {
        this.em = em;
    }
    public static Category findById(Long id) {
        return em.find(Category.class, id);
    }
}
