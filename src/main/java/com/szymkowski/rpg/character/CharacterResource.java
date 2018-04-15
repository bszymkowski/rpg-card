package com.szymkowski.rpg.character;

import com.szymkowski.rpg.character.dto.CharacterDTO;
import com.szymkowski.rpg.character.dto.HeaderDTO;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/character")
class CharacterResource {

    @RequestMapping(
            method = RequestMethod.GET
    )
    public CharacterDTO getCharacterInfo() {
        HeaderDTO header = new HeaderDTO(
                "Stefan Elefan",
                "Stefano Banano",
                "Opowieść Stefana",
                "Naturszczyk",
                "Postawny",
                "Tzimisce",
                "XIII",
                "Rolnik",
                "Ochronka");
        return new CharacterDTO(header);

    }
}
