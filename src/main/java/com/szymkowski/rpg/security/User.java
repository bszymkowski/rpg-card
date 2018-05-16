package com.szymkowski.rpg.security;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.net.URI;
import java.util.Collection;
import java.util.Collections;
import java.util.Locale;

@Data
@Entity
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Email
    @Column
    @Basic
    private String email;

    @Column
    @Basic
    private String name;
    @Column
    @Basic
    private String surname;

    @Column
    @Basic
    private URI pictureURI;

    @Column
    @Basic
    private Locale locale;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.emptySet();
    }

    @Override
    public String getPassword() {
        throw new IllegalStateException("This should never be called!");
    }

    @Override
    public String getUsername() {
        return this.name + " " + this.surname + "(" + this.email + ")";
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
