package zigmanov.dominik.cryptocracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import zigmanov.dominik.cryptocracker.model.CipherText;
import zigmanov.dominik.cryptocracker.model.UserInput;
import zigmanov.dominik.cryptocracker.service.CaesarService;

@RestController
public class CaesarController
{
    @Autowired
    private CaesarService theService;

    @ResponseBody
    @PostMapping("/encrypt")
    public String setEncryptedText(@RequestBody UserInput theUserInput)
    {
        CipherText cipherText = new CipherText("");

        cipherText.setCipherText(theService.encryptMessage(theUserInput));

        return cipherText.getCipherText();
    }

    @ResponseBody
    @PostMapping("/decrypt")
    public String setPlainText(@RequestBody UserInput theUserInput)
    {
        CipherText cipherText = new CipherText("");

        cipherText.setCipherText(theService.decryptMessage(theUserInput));

        return cipherText.getCipherText();
    }

}
