package com.szymkowski.rpg.character.dto;

import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.io.Serializable;

@RequiredArgsConstructor
@Data
public class HeaderDTO implements Serializable {
    private final String name;
    private final String player;
    private final String saga;
    private final String nature;
    private final String demeanor;
    private final String clan;
    private final String generation;
    private final String role;
    private final String shelter;
}
