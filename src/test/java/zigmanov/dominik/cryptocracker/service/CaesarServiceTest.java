package zigmanov.dominik.cryptocracker.service;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import zigmanov.dominik.cryptocracker.model.UserInput;

import static org.junit.jupiter.api.Assertions.assertEquals;

class CaesarServiceTest
{
    private static CaesarService theService;

    @BeforeAll
    static void setUp()
    {
        theService = new CaesarService();
    }

    @Test
    void encryptMessageTest()
    {
        UserInput theUserInput = new UserInput();

        theUserInput.setInputtedTextText("abcd");
        theUserInput.setCipherKey(1);

        assertEquals("bcde", theService.encryptMessage(theUserInput));
    }

    @Test
    void decryptMessageTest()
    {
        UserInput theUserInput = new UserInput();

        theUserInput.setInputtedTextText("bcde");
        theUserInput.setCipherKey(1);

        assertEquals("abcd", theService.decryptMessage(theUserInput));
    }
}