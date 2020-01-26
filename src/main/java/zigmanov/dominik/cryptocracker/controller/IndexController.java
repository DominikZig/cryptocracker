package zigmanov.dominik.cryptocracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import zigmanov.dominik.cryptocracker.model.CipherText;
import zigmanov.dominik.cryptocracker.model.Key;
import zigmanov.dominik.cryptocracker.model.PlainText;
import zigmanov.dominik.cryptocracker.service.CaesarService;

@RestController
public class IndexController
{
    @Autowired
    private CaesarService theService;

    @GetMapping("/")
    public String index()
    {
        Key testKey = new Key(3);

        PlainText testPlainText = new PlainText("abcd");

        CipherText testCipherText = new CipherText("");

        testCipherText.setCipherText(theService.encryptMessage(testKey, testPlainText));

        testPlainText.setPlainText(theService.decryptMessage(testKey, testCipherText));

        return "Initial message: "+ testPlainText.getPlainText()+
                "Encrypted message: "+testCipherText.getCipherText()+
                "Decrypted message: "+testPlainText.getPlainText();
    }
}
