//package com.szymkowski.rpg.security;
//
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.util.ArrayList;
//import java.util.Date;
//
//import static com.szymkowski.rpg.security.SecurityConstants.*;
//
//
////todo will be used?
//@RequiredArgsConstructor(onConstructor = @_(@Autowired))
//class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
//
//    private final AuthenticationManager authenticationManager;
//
//    @Override
//    public Authentication attemptAuthentication(HttpServletRequest req,
//                                                HttpServletResponse res) throws AuthenticationException {
//        try {
////            //todo sth wicked here
////            SocialApplicationUser socialApplicationUser = new ObjectMapper()
////                    .readValue(req.getInputStream(), SocialApplicationUser.class);
////
////            ApplicationUser creds = new ApplicationUser();
////            creds.setUsername("admin");
////            creds.setPassword("password");
////
////            return authenticationManager.authenticate(
////                    new UsernamePasswordAuthenticationToken(
////                            creds.getUsername(),
////                            creds.getPassword(),
////                            new ArrayList<>())
//            );
//        } catch (IOException e) {
//            //todo rte?
//            throw new RuntimeException(e);
//        }
//    }
//
//    @Override
//    protected void successfulAuthentication(HttpServletRequest req,
//                                            HttpServletResponse res,
//                                            FilterChain chain,
//                                            Authentication auth) throws IOException, ServletException {
//        String token = Jwts.builder()
//                .setSubject(((User) auth.getPrincipal()).getUsername())
//                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
//                .signWith(SignatureAlgorithm.HS512, SECRET)
//                .compact();
//        res.addHeader(HEADER_STRING, TOKEN_PREFIX + token);
//    }
//
//}
//
