package com.szymkowski.rpg.security;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/user")
class UserResource {

    @GetMapping
    public User getLoggedInUser(Authentication authentication) {
        return (User) authentication.getPrincipal();
    }
}
