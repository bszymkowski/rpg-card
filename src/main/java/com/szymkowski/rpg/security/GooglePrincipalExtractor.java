package com.szymkowski.rpg.security;

import com.szymkowski.rpg.user.User;
import com.szymkowski.rpg.user.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.net.URI;
import java.util.Locale;
import java.util.Map;

@Component
@Slf4j
@RequiredArgsConstructor
class GooglePrincipalExtractor  {

    private static final String PICURE_URI_KEY = "picture";
    private static final String MAIL_KEY = "email";
    private static final String NAME_KEY = "given_name";
    private static final String SURNAME_KEY = "family_name";
    private static final String LOCALE_KEY = "locale";

    private final UserRepository userRepository;


    public Object extractPrincipal(Map<String, Object> map) {
        String email = (String) map.get(MAIL_KEY);
        log.info("Extracting principal from Google: {}", email);
        User user = userRepository.findDistinctByEmail(email);
        if (user == null) {
            user = new User();
            user.setEmail(email);
            user.setName((String) map.get(NAME_KEY));
            user.setPictureURI(URI.create((String) map.get(PICURE_URI_KEY)));
            user.setSurname((String) map.get(SURNAME_KEY));
            user.setLocale(Locale.forLanguageTag((String) map.get(LOCALE_KEY)));
            userRepository.save(user);
        }
        return user;
    }
}
