package com.szymkowski.rpg.security;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
@RequiredArgsConstructor(onConstructor = @_(@Autowired))
class WebSecurity extends WebSecurityConfigurerAdapter {

//    private final UserDetailsService userDetailsService;
//    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable().authorizeRequests()
                .anyRequest().authenticated()
                .and()
                .oauth2Login()
                        //todo redirect
                        .defaultSuccessUrl("http://localhost:8000/sheet/12");

    }

}

