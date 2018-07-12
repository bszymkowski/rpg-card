package com.szymkowski.rpg.user;

import com.szymkowski.rpg.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findDistinctByEmail(String email);
}
