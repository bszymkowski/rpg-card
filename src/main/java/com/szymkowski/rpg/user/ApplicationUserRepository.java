package com.szymkowski.rpg.user;

import org.springframework.data.jpa.repository.JpaRepository;

interface ApplicationUserRepository extends JpaRepository<ApplicationUser, Long> {
    ApplicationUser findByUsername(String username);
}
