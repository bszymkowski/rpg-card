package com.szymkowski.rpg.user;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@ToString
@EqualsAndHashCode
public class SocialApplicationUser {
    private String network;
    private String token;

}
