package zigmanov.dominik.cryptocracker.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import zigmanov.dominik.cryptocracker.model.CipherText;
import zigmanov.dominik.cryptocracker.model.UserInput;
import zigmanov.dominik.cryptocracker.service.CaesarService;

@RestController
public class CaesarController
{
    private final CaesarService theService;

    public CaesarController(CaesarService theService)
    {
        this.theService = theService;
    }

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
