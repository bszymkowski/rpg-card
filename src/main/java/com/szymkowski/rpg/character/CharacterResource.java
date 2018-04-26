package com.szymkowski.rpg.character;

import com.szymkowski.rpg.character.dto.CharacterDTO;
import com.szymkowski.rpg.character.dto.HeaderDTO;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/character")
class CharacterResource {

    @RequestMapping(
            method = RequestMethod.GET
    )
    public CharacterDTO getCharacterInfo(@RequestParam Long id) {
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
