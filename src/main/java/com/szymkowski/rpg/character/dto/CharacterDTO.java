package com.szymkowski.rpg.character.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.io.Serializable;

@RequiredArgsConstructor
@Data
public class CharacterDTO implements Serializable {
    private final HeaderDTO header;
}
