package com.szymkowski.rpg;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.server.ConfigurableWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@Slf4j
public class HerokuConfig {

    @Bean
    public ConfigurableWebServerFactory containerCustomizer() {
        log.info("*********");
        log.info("entering config");
        log.info("*********");
        int port = 8080;
        if (System.getenv("PORT") != null) {
            port = Integer.valueOf(System.getenv("PORT"));

        }
        return new TomcatServletWebServerFactory("", port);
    }
}
