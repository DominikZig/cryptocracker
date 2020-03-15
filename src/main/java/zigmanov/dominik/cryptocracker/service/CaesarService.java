package zigmanov.dominik.cryptocracker.service;

import org.springframework.stereotype.Service;
import zigmanov.dominik.cryptocracker.model.UserInput;

@Service("CaesarService")
public class CaesarService
{
    private static boolean isChar(Character c)
    {
        return Character.isLetter(c);
    }

    public String encryptMessage(UserInput theUserInput)
    {
        StringBuilder encryptedText = new StringBuilder();

        String lowerPlainText = theUserInput.getInputtedText().toLowerCase();

        for (int i = 0; i < lowerPlainText.length(); i++)
        {
            if (isChar(lowerPlainText.charAt(i)))
            {
                encryptedText.append((Character.toString((lowerPlainText.charAt(i) - 'a' + theUserInput.getCipherKey()) % 26 + 'a')));
            }
            else
            {
                encryptedText.append(lowerPlainText.charAt(i));
            }
        }

        return encryptedText.toString();
    }

    public String decryptMessage(UserInput theUserInput)
    {
        StringBuilder decryptedText = new StringBuilder();

        for (int i = 0; i < theUserInput.getInputtedText().length(); i++)
        {
            if (isChar(theUserInput.getInputtedText().charAt(i)))
            {
                decryptedText.append((Character.toString((theUserInput.getInputtedText().charAt(i) - 'a' + 26 - theUserInput.getCipherKey()) % 26 + 'a')));
            }
            else
            {
                decryptedText.append(theUserInput.getInputtedText().charAt(i));
            }
        }

        return decryptedText.toString();
    }
}
