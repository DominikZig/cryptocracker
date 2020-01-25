package zigmanov.dominik.cryptocracker.service;

import org.springframework.stereotype.Service;
import zigmanov.dominik.cryptocracker.model.CipherText;
import zigmanov.dominik.cryptocracker.model.Key;
import zigmanov.dominik.cryptocracker.model.PlainText;

@Service("CaesarService")
public class CaesarService
{
    private static boolean isAlpha(Character c)
    {
        return Character.isLetter(c);
    }

    public String encryptMessage(Key theKey, PlainText thePlainText)
    {
        StringBuilder encryptedText = new StringBuilder();

        String lowerPlainText = thePlainText.getPlainText().toLowerCase();

        for (int i = 0; i < lowerPlainText.length(); i++)
        {
            if (isAlpha(lowerPlainText.charAt(i)) == true)
            {
                encryptedText.append((Character.toString((lowerPlainText.charAt(i) - 'a' + theKey.getCipherKey()) % 26 + 'a')));
            }
            else
            {
                encryptedText.append(lowerPlainText.charAt(i));
            }
        }

        return encryptedText.toString();
    }

    public String decryptMessage(Key theKey, CipherText theCipherText)
    {
        StringBuilder decryptedText = new StringBuilder();

        for (int i = 0; i < theCipherText.getCipherText().length(); i++)
        {
            if (isAlpha(theCipherText.getCipherText().charAt(i)) == true)
            {
                decryptedText.append((Character.toString((theCipherText.getCipherText().charAt(i) - 'a' + 26 - theKey.getCipherKey()) % 26 + 'a')));
            }
            else
            {
                decryptedText.append(theCipherText.getCipherText().charAt(i));
            }
        }

        return decryptedText.toString();
    }
}
