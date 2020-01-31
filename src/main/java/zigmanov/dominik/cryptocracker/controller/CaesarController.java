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
        System.out.println(theUserInput.getPlainText());
        System.out.println(theUserInput.getCipherKey());

        CipherText testCipherText = new CipherText("");

        testCipherText.setCipherText(theService.encryptMessage(theUserInput));

        return testCipherText.getCipherText();
    }

//    @GetMapping("/decrypt")
//    public String getEncryptedText()
//    {
//        Key testKey = new Key(3);
//
//        UserInput testUserInput = new UserInput();
//
//        CipherText testCipherText = new CipherText("");
//
//        testCipherText.setCipherText(theService.decryptMessage(testCipherText, theUserInput));
//
//        return testCipherText.getCipherText();
//    }

}
