package zigmanov.dominik.cryptocracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import zigmanov.dominik.cryptocracker.model.CipherText;
import zigmanov.dominik.cryptocracker.model.Key;
import zigmanov.dominik.cryptocracker.model.PlainText;
import zigmanov.dominik.cryptocracker.service.CaesarService;

@RestController
public class CaesarController
{
    @Autowired
    private CaesarService theService;

    @ResponseBody
    @PostMapping("/encrypt")
    public String setEncryptedText(@RequestBody PlainText testPlainText)
    {
        Key testKey = new Key(4);

        System.out.println(testPlainText.getPlainText());

        CipherText testCipherText = new CipherText("");

        testCipherText.setCipherText(theService.encryptMessage(testKey, testPlainText));

        System.out.println(testCipherText.getCipherText());

        return testCipherText.getCipherText();
    }

    @GetMapping("/decrypt")
    public String getEncryptedText()
    {
        Key testKey = new Key(3);

        PlainText testPlainText = new PlainText();

        CipherText testCipherText = new CipherText("");

        testCipherText.setCipherText(theService.encryptMessage(testKey, testPlainText));

        return testCipherText.getCipherText();
    }

}
