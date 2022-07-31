package com.ground.domain.user.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ground.domain.user.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	List<User> findFirstByUsernameLikeOrderByIdDesc(String username);
	
	
}
