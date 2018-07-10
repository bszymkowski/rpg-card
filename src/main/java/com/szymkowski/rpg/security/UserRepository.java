package com.szymkowski.rpg.security;

import org.springframework.data.jpa.repository.JpaRepository;

interface UserRepository extends JpaRepository<User, Long> {

    User findDistinctByEmail(String email);
}
