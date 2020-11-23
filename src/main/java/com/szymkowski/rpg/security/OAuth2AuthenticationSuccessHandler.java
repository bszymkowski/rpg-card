package com.szymkowski.rpg.security;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@Slf4j
@RequiredArgsConstructor
class OAuth2AuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    @Value("${oauth2.redirect_uri}")
    private String redirect;
    private final GooglePrincipalExtractor principalExtractor;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {

        DefaultOidcUser principal = (DefaultOidcUser) authentication.getPrincipal();
        principalExtractor.extractPrincipal(principal.getAttributes());

        log.info("Redirecting authenticated user to {}", redirect);
        response.sendRedirect(redirect);
    }


}
