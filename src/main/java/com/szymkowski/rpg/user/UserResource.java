package com.szymkowski.rpg.user;

import com.szymkowski.rpg.security.GooglePrincipalExtractor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
class UserResource {

    @Autowired
    private final GooglePrincipalExtractor principalExtractor;

    @GetMapping("/user")
    public User getLoggedInUser(Authentication authentication) {
        return principalExtractor.getByName((DefaultOidcUser) authentication.getPrincipal());
    }
}
