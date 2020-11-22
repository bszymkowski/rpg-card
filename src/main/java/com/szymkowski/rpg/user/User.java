package com.szymkowski.rpg.user;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.net.URI;
import java.util.Locale;

@Data
@Entity
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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

}
