package zigmanov.dominik.cryptocracker.service;

import org.springframework.stereotype.Service;
import zigmanov.dominik.cryptocracker.model.CipherText;
import zigmanov.dominik.cryptocracker.model.Key;
import zigmanov.dominik.cryptocracker.model.PlainText;

@Service("CaesarService")
public class CaesarService
{
    public static boolean isAlpha(Character c)
    {
        return Character.isLetter(c);
    }

    public String encryptMessage(Key theKey, PlainText thePlainText)
    {
        StringBuilder sb = new StringBuilder();

        String lowerPlainText = thePlainText.getPlainText().toLowerCase();

        for (int i = 0; i < lowerPlainText.length(); i++)
        {
            if (isAlpha(lowerPlainText.charAt(i)) == true)
            {
                sb.append((Character.toString((lowerPlainText.charAt(i) - 'a' + theKey.getCipherKey()) % 26 + 'a')));

                System.out.println(sb);
            }
            else
            {
                sb.append(lowerPlainText.charAt(i));

                System.out.println("else"+sb);
            }
        }

        System.out.println("Final text:"+sb.toString());

        return sb.toString();
    }

    public String decryptMessage(Key theKey, CipherText theCipherText)
    {
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < theCipherText.getCipherText().length(); i++)
        {
            if (isAlpha(theCipherText.getCipherText().charAt(i)) == true)
            {
                sb.append((Character.toString((theCipherText.getCipherText().charAt(i) - 'a' + 26 - theKey.getCipherKey()) % 26 + 'a')));

                System.out.println(sb);
            }
            else
            {
                sb.append(theCipherText.getCipherText().charAt(i));

                System.out.println("else"+sb);
            }
        }

        System.out.println("Converted text:"+sb.toString());

        return sb.toString();
    }
}
