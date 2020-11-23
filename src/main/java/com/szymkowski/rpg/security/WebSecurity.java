package com.szymkowski.rpg.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
@RequiredArgsConstructor
class WebSecurity extends WebSecurityConfigurerAdapter {

    private final OAuth2AuthenticationSuccessHandler oAuth2AuthenticationSuccessHandler;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .antMatcher("/**")
                .authorizeRequests()
                .antMatchers("/", "/login**", "/error**")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and().logout().permitAll()
                .and().oauth2Login()
                .successHandler(oAuth2AuthenticationSuccessHandler);
    }

}

