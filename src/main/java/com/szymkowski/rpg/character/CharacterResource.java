package com.szymkowski.rpg.character;

import com.szymkowski.rpg.character.dto.CharacterDTO;
import com.szymkowski.rpg.character.dto.HeaderDTO;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/character")
class CharacterResource {

    @GetMapping
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
