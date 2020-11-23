package com.szymkowski.rpg.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class UserResource {

    @Autowired
    private OAuth2AuthorizedClientService authorizedClientService;

    @GetMapping("/user")
    public User getLoggedInUser(Authentication authentication) {
        return (User) authentication.getPrincipal();
    }
}
