package com.szymkowski.rpg.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    // todo bsz optional
    User findDistinctByEmail(String email);
}
