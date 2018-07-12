package com.szymkowski.rpg.user;

import com.szymkowski.rpg.user.User;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class UserResource {

    @GetMapping("/user")
    public User getLoggedInUser(Authentication authentication) {
        return (User) authentication.getPrincipal();
    }
}
